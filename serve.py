#!/usr/bin/env python3
"""Serve the COPD CPD deck with a live room quiz.

Same questions every session. No Slido account.

    python serve.py

Room:      press S, fullscreen the Audience window on the projector.
Teams:     share that same Audience window (Share window, not the presenter screen).
           Copy the join link into chat so remote staff can vote.

Phones in the room scan the QR. If Trust Wi-Fi blocks laptop access, use a hotspot
or a public URL (cloudflared / Render) and set PUBLIC_URL to that origin.

    set PUBLIC_URL=https://your-public-host
    python serve.py
"""
from __future__ import annotations

import json
import os
import secrets
import socket
import sys
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

from qrcodegen import QrCode

ROOT = Path(__file__).resolve().parent
PORT = 8765
HOST_TOKEN = os.environ.get("HOST_TOKEN") or secrets.token_urlsafe(8)
PUBLIC_URL = (os.environ.get("PUBLIC_URL") or "").rstrip("/")
LOCK = threading.Lock()

POLL = {
    "id": None,
    "prompt": "",
    "options": [],
    "correct": None,
    "teach": "",
    "open": False,
    "revealed": False,
    "votes": {},  # voter id -> choice index
}


def lan_ips() -> list[str]:
    found: list[str] = []
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.connect(("8.8.8.8", 80))
        ip = sock.getsockname()[0]
        sock.close()
        if ip and not ip.startswith("127."):
            found.append(ip)
    except OSError:
        pass
    try:
        for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            ip = info[4][0]
            if ip and not ip.startswith("127.") and ip not in found:
                found.append(ip)
    except OSError:
        pass
    return found


def is_loopback(handler: SimpleHTTPRequestHandler) -> bool:
    host = handler.client_address[0]
    return host in ("127.0.0.1", "::1", "::ffff:127.0.0.1")


def host_is_local(host: str) -> bool:
    name = (host or "").split(":")[0].strip().lower()
    return name in ("", "localhost", "127.0.0.1", "::1")


def request_base(handler: SimpleHTTPRequestHandler) -> str:
    if PUBLIC_URL:
        return PUBLIC_URL
    host = handler.headers.get("Host") or f"127.0.0.1:{PORT}"
    if host_is_local(host):
        ips = lan_ips()
        if ips:
            return f"http://{ips[0]}:{PORT}"
        return f"http://127.0.0.1:{PORT}"
    forwarded = (handler.headers.get("X-Forwarded-Proto") or "").split(",")[0].strip()
    proto = forwarded or ("https" if host.endswith(":443") else "http")
    return f"{proto}://{host}"


def join_url(handler: SimpleHTTPRequestHandler) -> str:
    return request_base(handler) + "/v"


def requested_join(handler: SimpleHTTPRequestHandler) -> str:
    parsed = urlparse(handler.path)
    raw = (parse_qs(parsed.query).get("u") or [""])[0].strip()
    if not raw:
        return join_url(handler)
    if not (raw.startswith("http://") or raw.startswith("https://")) or len(raw) > 300:
        return join_url(handler)
    return raw


def public_poll() -> dict:
    options = POLL["options"]
    counts = [0] * len(options)
    for choice in POLL["votes"].values():
        if isinstance(choice, int) and 0 <= choice < len(counts):
            counts[choice] += 1
    out = {
        "live": True,
        "id": POLL["id"],
        "prompt": POLL["prompt"],
        "options": options,
        "open": POLL["open"],
        "revealed": POLL["revealed"],
        "counts": counts,
        "total": sum(counts),
        "correct": POLL["correct"] if POLL["revealed"] else None,
        "teach": POLL["teach"] if POLL["revealed"] else "",
    }
    return out


def qr_svg(text: str) -> bytes:
    qr = QrCode.encode_text(text, QrCode.Ecc.MEDIUM)
    n = qr.get_size()
    pad = 2
    dark = "#081510"
    light = "#f3f5f0"
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n + pad * 2} {n + pad * 2}"'
        f' shape-rendering="crispEdges">'
        f'<rect width="100%" height="100%" fill="{light}"/>'
    ]
    for y in range(n):
        for x in range(n):
            if qr.get_module(x, y):
                parts.append(
                    f'<rect x="{x + pad}" y="{y + pad}" width="1" height="1" fill="{dark}"/>'
                )
    parts.append("</svg>")
    return "".join(parts).encode("utf-8")


def read_json(handler: SimpleHTTPRequestHandler) -> dict:
    length = int(handler.headers.get("Content-Length") or 0)
    if length < 0 or length > 20000:
        return {}
    raw = handler.rfile.read(length) if length else b""
    try:
        data = json.loads(raw.decode("utf-8") or "{}")
    except (UnicodeDecodeError, json.JSONDecodeError):
        return {}
    return data if isinstance(data, dict) else {}


def send_json(handler: SimpleHTTPRequestHandler, payload: dict, status: int = 200) -> None:
    body = json.dumps(payload).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Cache-Control", "no-store")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


def send_bytes(handler: SimpleHTTPRequestHandler, body: bytes, content_type: str, status: int = 200) -> None:
    handler.send_response(status)
    handler.send_header("Content-Type", content_type)
    handler.send_header("Cache-Control", "no-store")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


def authorised_host(handler: SimpleHTTPRequestHandler) -> bool:
    token = handler.headers.get("X-Host-Token") or ""
    return token == HOST_TOKEN


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, fmt: str, *args) -> None:
        path = urlparse(self.path).path
        if path.startswith("/api/"):
            return
        super().log_message(fmt, *args)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        path = parsed.path
        if path in ("/v", "/vote", "/v/"):
            self.send_response(302)
            self.send_header("Location", "/?view=vote")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            return
        if path == "/healthz":
            send_json(self, {"ok": True})
            return
        if path == "/api/join":
            join = join_url(self)
            payload = {"live": True, "join": join, "ips": lan_ips(), "port": PORT}
            if is_loopback(self):
                payload["hostToken"] = HOST_TOKEN
            send_json(self, payload)
            return
        if path == "/api/poll":
            with LOCK:
                send_json(self, public_poll())
            return
        if path == "/qr.svg":
            send_bytes(self, qr_svg(requested_join(self)), "image/svg+xml; charset=utf-8")
            return
        super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        path = parsed.path
        data = read_json(self)
        if path == "/api/vote":
            voter = str(data.get("voter") or "").strip()[:80]
            try:
                choice = int(data.get("choice"))
            except (TypeError, ValueError):
                send_json(self, {"ok": False, "error": "bad vote"}, 400)
                return
            if not voter:
                send_json(self, {"ok": False, "error": "missing voter"}, 400)
                return
            with LOCK:
                if not POLL["open"] or POLL["revealed"]:
                    send_json(self, {"ok": False, "error": "closed", "poll": public_poll()})
                    return
                if choice < 0 or choice >= len(POLL["options"]):
                    send_json(self, {"ok": False, "error": "bad choice"}, 400)
                    return
                POLL["votes"][voter] = choice
                send_json(self, {"ok": True, "poll": public_poll()})
            return
        if path == "/api/host":
            if not authorised_host(self):
                send_json(self, {"ok": False, "error": "forbidden"}, 403)
                return
            action = str(data.get("action") or "")
            with LOCK:
                if action == "start":
                    options = data.get("options") if isinstance(data.get("options"), list) else []
                    options = [str(x) for x in options][:8]
                    new_id = str(data.get("id") or "")[:40]
                    if new_id != POLL["id"] or not POLL["open"]:
                        POLL["votes"] = {}
                    POLL["id"] = new_id or "poll"
                    POLL["prompt"] = str(data.get("prompt") or "")[:400]
                    POLL["options"] = options
                    correct = data.get("correct")
                    POLL["correct"] = int(correct) if isinstance(correct, int) else None
                    POLL["teach"] = str(data.get("teach") or "")[:800]
                    POLL["open"] = True
                    POLL["revealed"] = False
                elif action == "reveal":
                    POLL["revealed"] = True
                    POLL["open"] = False
                elif action == "idle":
                    POLL["open"] = False
                    POLL["id"] = None
                    POLL["prompt"] = ""
                    POLL["options"] = []
                    POLL["correct"] = None
                    POLL["teach"] = ""
                    POLL["revealed"] = False
                    POLL["votes"] = {}
                send_json(self, {"ok": True, "poll": public_poll()})
            return
        send_json(self, {"ok": False, "error": "not found"}, 404)


def main() -> None:
    global PORT
    if os.environ.get("PORT"):
        PORT = int(os.environ["PORT"])
    elif len(sys.argv) > 1:
        PORT = int(sys.argv[1])
    server = ThreadingHTTPServer(("0.0.0.0", PORT), partial(Handler, directory=str(ROOT)))
    ips = lan_ips()
    print()
    print("COPD CPD deck + live quiz", flush=True)
    print("  Presenter:  http://127.0.0.1:{}/?view=presenter".format(PORT), flush=True)
    if ips:
        print("  Room phones: http://{}:{}/v".format(ips[0], PORT), flush=True)
    if PUBLIC_URL:
        print("  Teams join:  {}/v".format(PUBLIC_URL), flush=True)
        print("  Presenter on that host: {}/?view=presenter&host={}".format(PUBLIC_URL, HOST_TOKEN), flush=True)
    else:
        print("  Teams: share the Audience window. For remote voting, set PUBLIC_URL", flush=True)
        print("         to a public origin (cloudflared / Render) and restart.", flush=True)
        print("  Host token (if you open the deck via a LAN/public address): {}".format(HOST_TOKEN), flush=True)
    print()
    print("Ctrl+C to stop.", flush=True)
    print()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
        server.server_close()


if __name__ == "__main__":
    main()
