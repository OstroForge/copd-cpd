# COPD CPD — how to run this session

WMAS ambulance CPD deck on JRCALC G0390 COPD, NEWS2 Scale 1 vs Scale 2, and live room voting.

## Local (this laptop)

From this project folder:

```
python serve.py
```

Then open:

| What | URL |
| --- | --- |
| Deck | http://127.0.0.1:8765/ |
| Presenter / notes | http://127.0.0.1:8765/?view=presenter |
| Audience window (share this) | http://127.0.0.1:8765/?view=audience |
| Phone vote page | http://127.0.0.1:8765/v |

The terminal also prints a LAN address for phones on the same Wi-Fi. If Trust Wi-Fi blocks that, use a hotspot or the hosted session below.

Stop the server with Ctrl+C.

## Hosted session (Render)

Use this when you are not presenting from this laptop, or when Teams needs a public vote link.

| What | URL |
| --- | --- |
| Live session (voting works here) | https://copd-cpd.onrender.com/ |
| Presenter / notes | https://copd-cpd.onrender.com/?view=presenter&host=YOUR_HOST_TOKEN |
| Audience window (share this) | https://copd-cpd.onrender.com/?view=audience |
| Phone / Teams vote page | https://copd-cpd.onrender.com/v |
| Slides only (no live vote) | https://ostroforge.github.io/copd-cpd/ |
| Source code | https://github.com/OstroForge/copd-cpd |
| Render dashboard | https://dashboard.render.com/web/srv-dalud967bikc73akh3bg |

The presenter `host=` token is the Render environment variable `HOST_TOKEN`. It is not stored in this file. Copy it from the Render dashboard, or from the gitignored `host-token.txt` on this laptop if you keep one.

Free Render instances sleep after a quiet spell. The first open can take about a minute.

## Accounts

| Service | Account | Email |
| --- | --- | --- |
| GitHub | **OstroForge** | ostroforge@outlook.com |
| Render | workspace **My Workspace** (same GitHub account) | ostroforge@outlook.com |

GitHub sign-in: https://github.com/login  
Render sign-in: https://dashboard.render.com/login

## On the day

1. Wake the live site (or start `python serve.py`).
2. On your laptop, open **presenter** view (press **S**, or use the presenter URL).
3. Share the **Audience** window to the projector and/or Teams (Share window, not the presenter screen).
4. Room: scan the QR. Teams: copy the join link into chat.
5. Space / Next on a question goes to the results slide. Download **results CSV** from the presenter sidebar or the bottom bar before the service sleeps.

Live scores sit in the server’s memory only. They last for this session until you move to the next question, or until Render restarts or sleeps.

## Updating the live site

Commit your changes, then:

```
git push origin HEAD
```

Render rebuilds from `main`. Hard-refresh the live URL after the deploy finishes.
