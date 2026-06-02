# AgDR-0018 — Daily Verse: API choice and delivery architecture

> In the context of adding a live daily verse to Noor Nights, facing the choice of how to source and deliver the verse reliably on a static PWA, I decided to use AlQuran Cloud API baked into a static JSON file via GitHub Actions cron, accepting a ~5-minute deployment lag between the 6 PM cron run and the verse appearing on-site.

## Context

The existing daily verse cycles through a hardcoded `_HOME_VERSES` array (~10 entries) using `date % length`. The task requires a live verse from a real Qur'an API, refreshing at 18:00 Cairo daily, with retry and caching. The app is a static PWA on GitHub Pages with no server-side runtime — only GitHub Actions for scheduled tasks.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Client-side fetch on page load** | No CI changes; instant after deploy | API CORS dependency per user; rate limit risk; unreliable offline; harder 6 PM timing |
| **GitHub Actions bake → static JSON** | Deterministic; single API call per day; consistent across all users; matches existing bake-prayer-times.js pattern | ~5 min deploy lag; API failure skips the day (kept previous verse) |
| **External KV store (Cloudflare KV, Supabase)** | True real-time updates | New infra dependency; complexity; cost |

## Decision

Chosen: **GitHub Actions bake → static `src/js/daily-verse.json`**, because:
- Matches existing architecture (same pattern as `bake-prayer-times.js`)
- One API call per day (no per-user rate limit exposure)
- Deterministic: all users see the same verse simultaneously after deploy
- Offline works: the cached JSON is the fallback
- The deploy lag (~5 min) is acceptable for a daily spiritual feature

AlQuran Cloud (`api.alquran.cloud`) chosen as API because:
- Free, no API key required, CORS-enabled
- Returns Arabic text (`quran-simple` edition) + English (`en.sahih` — Sahih International)
- 6236 ayahs total; verse index = `(dayOfYear % 6236) + 1` gives a deterministic, non-repeating rotation

## Consequences

- A GitHub Actions API failure keeps the previous day's verse (graceful degradation)
- SW uses network-first for `daily-verse.json` so clients get the post-deploy version on their next page load without waiting for a SW version bump
- Client falls back to `_HOME_VERSES` hardcoded array if the JSON is unavailable (offline first visit)
- `ar_meaning` (tafsir commentary) is not available from the API; field is omitted from live verses (only present in the hardcoded fallback entries)

## Artifacts

- Closes #157
