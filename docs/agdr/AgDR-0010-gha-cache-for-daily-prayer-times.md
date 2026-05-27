# AgDR-0010 — GitHub Actions cache for daily prayer-time data

> In the context of the per-minute push-reminders cron job, facing ~1,260 live
> HTTP fetches per day to aladhan.com for data that is static within a calendar
> day, I decided to use a date-keyed GitHub Actions cache to store the pre-baked
> prayer-time JSON file, to achieve ≤ 1 external API call per calendar day,
> accepting that the cache is ephemeral and bound to the GHA runner pool.

## Context

`automated_hourly_push.js` calls `getCairoPrayerTimes()` on every invocation to
fetch today's prayer times from `https://api.aladhan.com`. The cron schedule
(`* 0-20 * * *`) runs the job every minute across 21 UTC hours per day —
approximately 1,260 calls/day for data that does not change within a single
Cairo calendar date.

The project already pre-fetches these times at deploy time via
`scripts/bake-prayer-times.js`, which writes `src/js/cairo-times.js` for the
browser bundle. The JSON equivalent is not available to the push job, however,
because the Pages deploy artifact is not committed back to the repo.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **GitHub Actions `actions/cache` (chosen)** | Zero new infrastructure; key expires automatically when Cairo date changes; cache hit rate ~98% (one miss per day); no secrets required | Ephemeral — cache purged after 7 days of inactivity or on repo cache eviction; not shared across repos |
| **Cloudflare KV** | Already used in the project (subscribe worker); survives across any runner; shared globally | Requires KV binding + secret in the push workflow; adds CF API call on cache miss; extra maintenance surface |
| **Supabase table** | Already used for subscriber tracking; queryable; durable | Network round-trip on every invocation to check staleness; schema migration required; overkill for a 5-field daily record |
| **Commit `cairo-times.json` to the repo** | Always available in checkout; no cache machinery | Requires a separate daily automation to keep the file current; creates noisy commits; stale between deploys |
| **Fetch live on every run (status quo)** | Simplest code | ~1,260 external API calls/day; rate-limit risk; latency on every invocation |

## Decision

Chosen: **GitHub Actions `actions/cache`**, keyed on the Cairo calendar date
(`cairo-times-YYYY-MM-DD`).

Rationale:
- Requires no new infrastructure or secrets beyond what the workflow already has.
- The cache key is the Cairo date, so the entry is automatically invalidated at
  midnight Cairo time when a new key is generated — no manual TTL management.
- On a cache hit (every run after the first of each day) the bake step is
  skipped entirely; aladhan.com is never called.
- On a cache miss (first run of a new Cairo calendar day) `bake-prayer-times.js`
  runs once, fetches two months of prayer data, writes `src/js/cairo-times.json`,
  and the cache is populated for the remaining ~1,259 runs that day.
- The `automated_hourly_push.js` fallback to a live fetch ensures correctness
  even if the cache is evicted mid-day (GHA cache eviction is rare but possible).

## Consequences

- `ramadan_hourly_push.yml` requires `permissions: actions: write` to save the
  cache (previously `permissions: {}`). This is the minimum required scope.
- `src/js/cairo-times.json` is generated at CI time and must be in `.gitignore`.
- The bake script gains a `fs.writeFileSync` side effect for the JSON path in
  addition to its existing stdout output for the JS bundle.
- The live fallback in `getCairoPrayerTimes()` is retained as a safety net; it
  also fixes a pre-existing bug where the raw aladhan.com timing strings included
  a timezone annotation (`"04:50 (EET)"`) that was not being stripped.

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/TBD
- Issue: https://github.com/Noor-Nights/noor-nights.github.io/issues/91
