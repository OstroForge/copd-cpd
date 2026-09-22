# Hub CPD — how to run a session

WMAS ambulance CPD decks (COPD, Heart Failure, and later packages) with live room voting.

Each topic has its own folder:

| Topic | Folder |
| --- | --- |
| COPD | `copd/` — `slides.js`, `handout.html`, `assets/` |
| Heart Failure | `hf/` — `slides.js`, `handout.html`, `assets/` |

The hub (`index.html`, `serve.py`) stays at the top. Attendance CSVs stay under `certificates/<course>/dev` or `live`. To add a later package, copy that folder pattern.

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
| Printable COPD handout | http://127.0.0.1:8765/copd/handout.html |
| Printable Heart Failure handout | http://127.0.0.1:8765/hf/handout.html |

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
| Printable COPD handout | https://hub-cpd.onrender.com/copd/handout.html |
| Printable Heart Failure handout | https://hub-cpd.onrender.com/hf/handout.html |
| Get my certificate | https://hub-cpd.onrender.com/?view=lookup |
| Old COPD URL (forwards to Hub) | https://copd-cpd.onrender.com/ |
| GitHub copy | https://ostroforge.github.io/copd-cpd/ |
| GitHub COPD handout | https://ostroforge.github.io/copd-cpd/copd/handout.html |
| Source code | https://github.com/OstroForge/copd-cpd |
| Render dashboard (live Hub) | https://dashboard.render.com/web/srv-dalud967bikc73akh3bg |

Hub staff **do not need a Render account**. Each facilitator has their own PIN. Local or hosted presenter view asks for it. That PIN is also their name on the attendance file, so they are not asked who is delivering.

Keep the list in `presenters.txt` or `presenter-pin.txt` on this laptop (gitignored), one line per person:

`PIN  Full Name`

On Render, set `PRESENTERS` to the same list as `PIN:Full Name;PIN:Full Name`. Do not put PINs in this public file or in the room’s Teams chat. The `r=` code on a join/QR link is the **room** for that session, not a PIN.

Free Render instances sleep after a quiet spell. The first open can take about a minute.

## Test site (this branch, not live)

Use this to try Heart Failure and the new folder layout **without merging to `main`**. Live `https://hub-cpd.onrender.com/` stays on `main`.

Create it once in the Render dashboard (signed in as ostroforge@outlook.com):

1. [New Web Service](https://dashboard.render.com/select-repo?type=web)
2. Repository: **OstroForge/copd-cpd**
3. Name: **hub-cpd-test**
4. Branch: **heart-failure-cpd** (not `main`)
5. Region: Frankfurt
6. Runtime: Python 3
7. Build command: `pip install -r requirements.txt`
8. Start command: `python serve.py`
9. Health check path: `/healthz`
10. Instance type: Free

Environment variables (Environment tab). Copy **PRESENTERS** from the live `hub-cpd` service — do not paste PINs into chat or this file. Then add:

| Key | Value |
| --- | --- |
| `PYTHON_VERSION` | `3.12.0` |
| `PUBLIC_URL` | `https://hub-cpd-test.onrender.com` |
| `ATTEND_ENV` | `dev` |
| `ATTEND_SHARE_URL` | the **DEV** OneDrive share from `attend-folder.txt` (the `#DEV` block), not the LIVE one |

Create Web Service. First build takes a few minutes. After that:

| What | URL |
| --- | --- |
| Test home | https://hub-cpd-test.onrender.com/ |
| Test presenter | https://hub-cpd-test.onrender.com/?course=hf&view=presenter |
| Test COPD | https://hub-cpd-test.onrender.com/?course=copd&view=self |

Later commits on `heart-failure-cpd` update this test site only. Merging to `main` is what updates the live Hub.

Keep the current `copd-cpd` service running so https://copd-cpd.onrender.com/ can forward.

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

**OneDrive attendance folder:** account **jon.ski1382@gmail.com**. Layout is course, then env:

```
certificates/
  copd/dev
  copd/live
  heart failure/dev
  heart failure/live
```

The OneDrive **share link** must be the parent `certificates` folder — not `certificates/dev` and not `certificates/COPD/dev`. The site then creates `copd/dev`, `copd/live`, `heart failure/dev` and `heart failure/live` inside that folder.

| Course | Path |
| --- | --- |
| COPD | `certificates/copd/dev` or `certificates/copd/live` |
| Heart Failure | `certificates/heart failure/dev` or `certificates/heart failure/live` |

On this laptop, `attend-folder.txt` (gitignored) keeps a `# LIVE` block and a `# DEV` block. Each block should use a share of that **parent** `certificates` folder, and the local path `...\COPD\certificates`. `python serve.py` uses **DEV**, so new files land in `certificates/<course>/dev`.

**Test site (`hub-cpd-test`) only:** set `ATTEND_SHARE_URL` to the parent `certificates` share, and keep `ATTEND_ENV=dev`. Do **not** change `ATTEND_SHARE_URL` on live `hub-cpd` (`main`) until this branch is merged.

**Live `hub-cpd`:** leave its current LIVE share as it is. It still writes COPD registers into that live folder. After merge, point live at the same parent `certificates` share and set `ATTEND_ENV=live` so new files go to `certificates/copd/live`. Copy any old live CSVs into `copd/live` at that point.

Old files in `certificates/dev`, `certificates/COPD/dev`, or `certificates/COPD/dev/heart failure` are still found for certificate lookup.

To add a later package, give it a `folder` name in `COURSES` in `serve.py`. The `dev` and `live` folders are created on first **Start session**.

## Handout and self-guided

For staff who missed the room, or for a Teams share with no phones:

1. **Handout** — two A4 pages. Open `copd/handout.html` or `hf/handout.html` and use Print / save PDF.
2. **Self-guided deck** — add `?view=self` to the deck URL. Same slides, no QR, no live vote, no certificate register. Check questions reveal on click or Space. **Printable handout** is on the bottom bar.

A PowerPoint export is a poorer copy of this deck (NEWS2 chart and kit photos sit in HTML). Use the self-guided URL if you need a version with voting removed.

## Updating the live site

Commit your changes, then:

```
git push origin HEAD
```

Render rebuilds from `main`. Hard-refresh the live URL after the deploy finishes.
