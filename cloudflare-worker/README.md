# Noor Nights — Cloudflare Worker

**URL:** `https://noor-nights-subscribe.eman-mahmoudxd.workers.dev`

Subscribes FCM device tokens to the `daily-reminders` topic so the GitHub Actions cron can broadcast prayer reminders and dhikr messages to all opted-in users with a single API call.

## How it works

1. Web app calls `POST /` with `{ token: "<FCM registration token>" }`
2. Worker signs a JWT from the service account and exchanges it for a Google OAuth2 Bearer token
3. Worker calls the Firebase IID API to subscribe the token to the `daily-reminders` topic
4. Returns `200 subscribed` on success

## Required CF Worker secret

Set this in the Cloudflare dashboard → Worker → Settings → Variables → **Secrets** (not plain-text):

| Secret | Value |
|--------|-------|
| `FIREBASE_SERVICE_ACCOUNT_JSON` | Full contents of the Firebase service account JSON key |

> **Note:** The old `FIREBASE_SERVER_KEY` secret can be removed — this Worker uses OAuth2 Bearer tokens (service account), not the deprecated Firebase Legacy server key.

## Deploying updates

1. Edit `cloudflare-worker/subscribe.js` in this repo
2. Copy the contents into the Cloudflare Worker editor (dashboard → Workers & Pages → `noor-nights-subscribe` → Edit code)
3. Save and deploy

A `wrangler.toml` + CI deployment pipeline can be added later if the Worker logic grows.

## CORS

The `Access-Control-Allow-Origin` header is pinned to `https://noor-nights.github.io`. Requests from any other origin receive an empty `Allow-Origin` header and will be blocked by the browser.
