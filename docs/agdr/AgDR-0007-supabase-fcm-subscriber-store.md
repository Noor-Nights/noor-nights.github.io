# AgDR-0007 — Supabase as FCM Subscriber Store

> In the context of needing to track FCM notification subscriber count, facing the choice of where to persist FCM tokens after topic subscription, I decided to reuse the existing Supabase project over adding a new data store, to achieve visibility into subscriber count with zero new infrastructure cost, accepting that the anon key is used as a server-side write credential from the CF Worker.

## Context

FCM topics expose no subscriber count API. After fixing the subscription flow (#42–#49), we had working notifications but no visibility into how many users were subscribed. The CF Worker already handles topic subscription; storing the token there is the natural extension.

The project already uses Supabase for `community_duas` — the project is provisioned, the anon key is available as a GitHub Actions secret, and the REST API pattern is established in `app.js`.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Supabase (chosen)** | Already provisioned, free tier, REST API, dashboard UI for count queries | Anon key used server-side; CF Worker needs two new secrets |
| Cloudflare KV | Co-located with the Worker, no extra secrets | No SQL queries, no country breakdown, separate billing |
| Cloudflare D1 | SQL, co-located | Additional CF product to maintain, no existing schema |
| Cloudflare Durable Objects | Atomic counter, no DB | Overkill for a simple count, different programming model |
| Firebase Realtime Database | Same Google account as FCM | Another service to provision, not already in use |

## Decision

Chosen: **Supabase**, because it is already provisioned and in active use for `community_duas`. Adding a table costs nothing and reuses the existing credentials pattern. The anon key is used from the CF Worker with RLS policies scoped to INSERT + SELECT only (`WITH CHECK (true)` / `USING (true)`); the table contains no sensitive user data (FCM tokens are non-secret identifiers).

The `subscribed_at` field is written explicitly in the upsert body (not relying on the column default) so that re-subscription updates the timestamp — this is the intended behaviour for tracking "last seen active" per device.

## Consequences

- Subscriber count is always visible in Supabase Table Editor → `fcm_subscribers`
- CF Worker requires two new secrets: `SUPABASE_URL`, `SUPABASE_ANON_KEY`
- Supabase write failure is non-fatal — subscription still returns 200 to the browser
- Country breakdown (from `cf-ipcountry`) is stored for free as a bonus analytics dimension
- If the anon key is ever rotated, the CF Worker secret must be updated alongside the GitHub Actions secret

## Artifacts

- PR #51: feat(#50): track FCM subscriber count in Supabase
- Issue #50
