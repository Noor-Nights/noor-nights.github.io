# AgDR-0011 — FCM retry wrapper and parallel FCM + OneSignal send via Promise.allSettled

> In the context of the per-minute push-reminders cron job, facing transient
> FCM HTTP 500/503 errors that silently dropped prayer notifications and a
> sequential send pattern that suppressed OneSignal whenever FCM threw, I
> decided to (a) wrap the FCM call in a `sendPushWithRetry` function with
> exponential backoff and (b) run both channels concurrently with
> `Promise.allSettled`, to achieve resilient delivery with independent
> channel failure reporting, accepting a small increase in code complexity.

## Context

`automated_hourly_push.js` sends each notification over two channels:

1. **FCM HTTP v1** — primary; reaches subscribers who accepted the browser
   push prompt and received a valid FCM token.
2. **OneSignal REST API** — secondary legacy channel; reaches subscribers
   who were onboarded before the FCM migration.

### Problems with the prior pattern

```js
// Before (sequential, fail-fast)
try {
    await sendPush(heading, body, id);
} catch (err) {
    console.error('error:', err.message);
}
await sendOneSignalPush(heading, body, id).catch(…);
```

- A transient FCM error (HTTP 503) threw, the prayer notification was lost,
  and no retry was attempted.
- Because the two sends were not concurrent, the total per-invocation latency
  was `t_fcm + t_onesignal` instead of `max(t_fcm, t_onesignal)`.
- FCM and OneSignal failures were logged inconsistently; one used `console.error`,
  the other a `.catch` inline — making structured log aggregation harder.

## Options Considered

### A. Retry

| Option | Pros | Cons |
|--------|------|------|
| **Retry wrapper with backoff (chosen)** | Handles transient errors transparently; backoff avoids thundering-herd on FCM outage | Small added latency on failure path (1.5 s + 3 s max); adds a helper function |
| No retry (status quo) | Simplest code | Silent notification loss on transient FCM errors |
| Retry at call site | No new function | Code duplication across prayer and dhikr send sites |
| Circuit breaker | Prevents cascade on sustained outage | Far more complex; overkill for a single endpoint |
| Dead-letter queue | Guaranteed delivery for all failures | Requires new infrastructure (SQS, Supabase table, etc.); not justified for best-effort push |

### B. Concurrency model for dual-channel send

| Option | Pros | Cons |
|--------|------|------|
| **`Promise.allSettled` (chosen)** | Both channels always run; failures reported independently; clear intent | Slightly more verbose result handling |
| `Promise.all` (fail-fast) | Shorter code | A FCM throw cancels the OneSignal send — defeats the "both channels" intent |
| Fire-and-forget (`.catch` inline) | Even shorter | Swallows errors silently; cannot distinguish success from failure in logs |
| Sequential with try/catch | Readable | `t_fcm + t_onesignal` latency; FCM catch block must manually call OneSignal |

## Decision

**A — Chosen: retry wrapper with exponential backoff.**
`sendPushWithRetry(heading, body, id, retries = 2)` calls `sendPush` up to
`Math.max(1, retries)` times, waits `1500 * attempt` ms between failures, and
re-throws on the final attempt.  `retries = 2` gives one retry; the caller can
pass `0` to disable retrying (loop guard ensures at least one attempt always
executes).

**B — Chosen: `Promise.allSettled`.**
Both prayer and dhikr send sites now run FCM and OneSignal concurrently.
`results[0].status === 'rejected'` is logged as a `console.error`; OneSignal
failure is `console.warn` to reflect its secondary status. Neither channel's
failure suppresses the other.

## Consequences

- `sendPushWithRetry` is a thin wrapper; `sendPush` is unchanged and still
  callable directly (e.g. from tests or ad-hoc scripts).
- Maximum per-invocation wall-clock time on double FCM failure: `1.5 s + 3 s =
  4.5 s` before re-throw. GHA step timeout is 6 hours; this is negligible.
- `Promise.allSettled` result arrays are positional: index 0 = FCM, index 1 =
  OneSignal. Callers must not reorder the argument array without updating the
  log lines.
- No new infrastructure, secrets, or dependencies required.

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/96
- Issue: https://github.com/Noor-Nights/noor-nights.github.io/issues/94
