# AgDR-0002 — Deploy-time Cairo Prayer Times Baking + Auto SW Cache Stamping

> In the context of a static PWA with no build step, facing users seeing "Loading…" when aladhan.com is slow and the SW serving stale JS after fixes, I decided to bake prayer times from aladhan.com at GitHub Actions deploy time and stamp the SW cache name with the git SHA, to achieve accurate offline fallback times and guaranteed cache invalidation on every deploy, accepting that baked times are Cairo-only and become stale if no deploy runs for 2+ months.

## Context

- The app fetches prayer times from `api.aladhan.com` at runtime. When the API is slow or unreachable, users see "Loading…" indefinitely (fixed in PR #19/#20 with a timeout + fallback render).
- The hardcoded `_PT_FALLBACK` is a single generic row — inaccurate for most days.
- SW cache versioning was manual (`noor-nights-v23`, `v24`…) — forgotten after PR #20, causing users to receive stale JS until their second visit.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Bake at deploy time (chosen)** | Accurate per-day Cairo times; works offline; auto-updates on every deploy; no runtime dependency for fallback | Times are Cairo-only; stale after 2+ months without a deploy |
| Keep single-row `_PT_FALLBACK` | Zero complexity | Inaccurate for most days; requires manual updates |
| Fetch at runtime only | Always current for any location | Stuck on Loading if API fails; what we already had |
| Pre-generate a full year of times | Very long shelf life | ~365 rows × 5 prayers = large constant; stale calendar year |

For SW cache stamping:

| Option | Pros | Cons |
|--------|------|------|
| **Git SHA in cache name (chosen)** | Zero manual work; unique per commit; already running in CI | Cache changes even for non-JS deploys (acceptable) |
| Manual version bump | Explicit control | Forgotten repeatedly; caused the PR #23/#24 incident |
| URL fingerprinting (`app.js?v=sha`) | Industry standard; most precise | Requires updating all `<script src>` and SW ASSETS refs at deploy time — more sed magic |

## Decision

**Bake at deploy** via `scripts/bake-prayer-times.js` (current + next month, Cairo, method=5), overwriting the placeholder `src/js/cairo-times.js` in the GitHub Actions job before Pages upload. SW cache name stamped with `git rev-parse --short HEAD` in the same job.

URL fingerprinting is the more precise long-term solution for cache busting but requires touching more files (`<script src>`, SW ASSETS list) and offers no additional benefit for this app's release cadence. Git SHA in cache name is simpler and sufficient.

## Consequences

- Users with Cairo as their default (or no location set) always see accurate day-specific times offline.
- No more manual cache version bumps — the stamp step in `deploy.yml` handles it.
- If no deploy runs for 2+ months, baked times roll into the wrong month and the runtime API becomes the only source of accurate data (same as before this change — no regression).
- A failed bake step (aladhan.com unreachable during CI) blocks the deploy. This is intentional: a deploy that can't bake times should not silently ship a stale placeholder.

## Artifacts

- `scripts/bake-prayer-times.js`
- `src/js/cairo-times.js` (placeholder in repo, overwritten at deploy)
- `.github/workflows/deploy.yml` (bake step + stamp step)
- `src/js/app.js` (`_getBakedFallback()`)
- PR #26
