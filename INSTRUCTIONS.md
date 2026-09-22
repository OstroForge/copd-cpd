# COPD CPD — how to run this session

WMAS ambulance CPD deck on JRCALC G0390 COPD, NEWS2 Scale 1 vs Scale 2, and live room voting.

## Local (this laptop)

From this project folder:

```
python serve.py
```

Then open on **this laptop**:

| What | URL |
| --- | --- |
| Home | http://127.0.0.1:8765/ |
| Presenter / notes | http://127.0.0.1:8765/?view=presenter |
| Audience window (share this) | http://127.0.0.1:8765/?view=audience |
| Self-guided (no vote, no register) | http://127.0.0.1:8765/?view=self |
| Printable handout | http://127.0.0.1:8765/handout.html |

Phones must **not** use `127.0.0.1` — that address only works on the laptop. Put the phone on the **same Wi-Fi** as the laptop (not mobile data) and open the LAN address printed in the terminal, for example:

`http://192.168.1.146:8765/v`

Use **http**, not https. The QR on the slide already uses that LAN address.

If it only works **sometimes**:

1. Turn **mobile data off** on the phone (iPhone: Settings → Mobile Data off, and Wi-Fi Assist off). The phone otherwise hops to 4G and `192.168.1.x` suddenly “can’t be reached”.
2. Stay on the same Wi-Fi as the laptop — not guest Wi-Fi, not a different band/SSID, not a mix of local and `onrender.com`.
3. Type the URL with `http://` at the front, or scan the QR after a hard refresh of the deck.
4. Some work / Trust Wi-Fi blocks phone-to-laptop traffic. Use a phone hotspot (laptop and phones on that hotspot) or the hosted Render session instead.

Windows Firewall: allow Python on Private networks, or inbound TCP **8765**, if Windows asked and you clicked Cancel.

Do **not** also run `python -m http.server 8765`. Two listeners on the same port is why only one phone could vote: Windows split the connections, so every other device never reached this quiz.

If phones cannot reach this laptop, the server may still be running. In PowerShell:

```
netstat -ano | findstr :8765 | findstr LISTENING
```

You should see **one** `LISTENING` line. `TIME_WAIT` lines are leftover sockets, not extra servers — ignore those.

To stop every listener on 8765 (replace `8040` with the PID from the `LISTENING` line):

```
Stop-Process -Id 8040 -Force
```

Then from this project folder:

```
python serve.py
```

Hard-refresh presenter view and scan **this** session’s QR. Phone: same Wi-Fi, mobile data off, `http://` not `https`.

Stop the server with Ctrl+C.

## Hosted session (Render)

Use this when you are not presenting from this laptop, or when Teams needs a public vote link.

| What | URL |
| --- | --- |
| Home (choose self-guided, presenter, or handout) | https://hub-cpd.onrender.com/ |
| Presenter / notes | https://hub-cpd.onrender.com/?view=presenter |
| Audience window (share this) | https://hub-cpd.onrender.com/?view=audience |
| Phone / Teams vote page | https://hub-cpd.onrender.com/v |
| Self-guided (no vote, no register) | https://hub-cpd.onrender.com/?view=self |
| Printable handout | https://hub-cpd.onrender.com/handout.html |
| Get my certificate | https://hub-cpd.onrender.com/?view=lookup |
| Old COPD URL (forwards to Hub) | https://copd-cpd.onrender.com/ |
| GitHub copy | https://ostroforge.github.io/copd-cpd/ |
| GitHub handout | https://ostroforge.github.io/copd-cpd/handout.html |
| Source code | https://github.com/OstroForge/copd-cpd |
| Render dashboard | https://dashboard.render.com/web/srv-dalud967bikc73akh3bg |

Hub staff **do not need a Render account**. Each facilitator has their own PIN. Local or hosted presenter view asks for it. That PIN is also their name on the attendance file, so they are not asked who is delivering.

Keep the list in `presenters.txt` or `presenter-pin.txt` on this laptop (gitignored), one line per person:

`PIN  Full Name`

On Render, set `PRESENTERS` to the same list as `PIN:Full Name;PIN:Full Name`. Do not put PINs in this public file or in the room’s Teams chat. The `r=` code on a join/QR link is the **room** for that session, not a PIN.

Free Render instances sleep after a quiet spell. The first open can take about a minute.

The live hostname is **hub-cpd.onrender.com**. In the Render dashboard, add a second web service named exactly `hub-cpd` from this GitHub repo (same `python serve.py`, copy `PRESENTERS` and `ATTEND_SHARE_URL` from the existing service). Keep the current `copd-cpd` service running so https://copd-cpd.onrender.com/ can forward. Do not put PINs in this public file.

## Accounts

| Service | Account | Email |
| --- | --- | --- |
| GitHub | **OstroForge** | ostroforge@outlook.com |
| Render | workspace **My Workspace** (same GitHub account) | ostroforge@outlook.com |
| OneDrive | Personal (attendance CSVs) | jon.ski1382@gmail.com |

GitHub sign-in: https://github.com/login  
Render sign-in: https://dashboard.render.com/login  
OneDrive: https://onedrive.live.com/

Certificates folder (open while signed in as jon.ski1382@gmail.com):  
https://onedrive.live.com/my?id=%2Fpersonal%2F4a2042dbbcf48071%2FDocuments%2FCursor%20Projects%2FCPD%2FCOPD%2Fcertificates&viewid=6c1bdb91-03c5-436a-8302-197408acb301

## On the day

1. Wake the live site (or start `python serve.py`).
2. On your laptop, open **presenter** view (local `http://127.0.0.1:8765/?view=presenter` or https://hub-cpd.onrender.com/?view=presenter) — type **your** Hub PIN when asked. Start session uses your name from that PIN.
3. Share the **Audience** window to the projector and/or Teams (Share window, not the presenter screen).
4. Room: scan **this session’s** QR (it includes a room code). Teams: copy the join link from the presenter sidebar into chat — do not reuse another facilitator’s QR.
5. Space, a mouse click on the slide, a wireless clicker (Page Down / next), or **Next** on a question goes to the results slide. Download **results CSV** from the presenter sidebar or the bottom bar before the service sleeps.
6. Last slide collects **certificate names**, **ESR numbers** and **work emails**. Leave it up. Phones only see that form on that slide. ESR and email are stored in the attendance CSV only — they are not printed on the certificate. Names are saved automatically. Staff can reprint a certificate later from **Get my certificate** on the home page (`/?view=lookup`) with the same name and ESR.

Two people can deliver the same CPD at the same time. Each opens presenter view on the **same live site** (usually Render). The site gives each facilitator a different room code, a different attendance file, and quiz answers from their own phones only. Phones must scan the QR on **that** screen.

If you present from this laptop instead, phones vote on this `serve.py` process — a second laptop running its own `serve.py` is a second session. Do not mix a laptop presenter with the hosted Render QR unless everyone is actually presenting on Render.

Automatic copies (same names, no extra click):

- `certificates.csv` in this project folder (synced with OneDrive)
- `COPD-CPD-certificate-names.csv` in this folder, and also in **Documents** and **OneDrive** if those folders exist
- The serve.py terminal prints each name as it arrives

You can still download **certificate names** from the presenter sidebar. On Render the files are lost when the service sleeps, so also set a `CERT_WEBHOOK` environment variable if you want each name POSTed as JSON to an inbox you control.

**OneDrive attendance folder:** account **jon.ski1382@gmail.com**. Files land in `Documents/Cursor Projects/CPD/COPD/certificates`. Open that folder in a browser (signed in as that account):

https://onedrive.live.com/my?id=%2Fpersonal%2F4a2042dbbcf48071%2FDocuments%2FCursor%20Projects%2FCPD%2FCOPD%2Fcertificates&viewid=6c1bdb91-03c5-436a-8302-197408acb301

On this laptop, `attend-folder.txt` (gitignored) can list both folders. Put a `# LIVE` block and a `# DEV` block, each with the OneDrive **share** link (and optional local path). `python serve.py` uses **DEV**. Render ignores this file and uses `ATTEND_SHARE_URL` for the **LIVE** folder. Click **Start session** in presenter view — names write as `COPD-CPD-attendance-YYYY-MM-DD-HHMM-Presenter-ROOM.csv`, with columns `submitted_at`, `name`, `esr`, `email`. Do not commit that share link.

## Handout and self-guided

For staff who missed the room, or for a Teams share with no phones:

1. **Handout** — two A4 pages. Open `handout.html` and use Print / save PDF.
2. **Self-guided deck** — add `?view=self` to the deck URL. Same slides, no QR, no live vote, no certificate register. Check questions reveal on click or Space. **Printable handout** is on the bottom bar.

A PowerPoint export is a poorer copy of this deck (NEWS2 chart and kit photos sit in HTML). Use the self-guided URL if you need a version with voting removed.

## Updating the live site

Commit your changes, then:

```
git push origin HEAD
```

Render rebuilds from `main`. Hard-refresh the live URL after the deploy finishes.
