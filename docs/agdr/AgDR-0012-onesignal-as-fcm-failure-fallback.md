# AgDR-0012 — OneSignal as FCM-failure fallback instead of unconditional dual-send

> In the context of the per-minute push-reminders cron job, facing a dual-send
> pattern where every FCM call is unconditionally followed by an identical
> OneSignal call (causing users reachable by both channels to receive the same
> notification twice), I decided to call OneSignal only from the catch path
> after FCM exhausts its retries, to achieve a true fallback model that
> eliminates the duplicate for dual-channel subscribers, accepting that
> OneSignal-only subscribers continue to be served.

## Context

`automated_hourly_push.js` currently sends every notification over two channels
unconditionally via `Promise.allSettled`:

```js
const results = await Promise.allSettled([
    sendPushWithRetry(heading, body, id),   // FCM (primary)
    sendOneSignalPush(heading, body, id),   // OneSignal (secondary)
]);
```

The dual-send was introduced in PR #88 (AgDR-0008) as a migration bridge: FCM
HTTP v1 replaced the deprecated Legacy API, and OneSignal was retained to cover
subscribers who had not yet received an FCM token (legacy push tokens from
OneSignal's older SDK). At the time, treating both as primary senders was
acceptable because the subscriber populations were distinct.

Since then the subscriber base has fully migrated. Users reachable by FCM are
also reachable by OneSignal (both channels share the same browser endpoint on
many devices), so the unconditional dual-send produces duplicate notifications
for the majority of subscribers.

The `collapse_id` / `tag` field (merged in PR #92) prevents the OS from
stacking duplicate banners when both arrive within seconds, but both channels
still fire independently — consuming FCM quota, OneSignal API rate, and
generating two tracking events per delivery.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **OneSignal only on FCM failure (chosen)** | Eliminates duplicate for dual-channel subscribers; OneSignal still covers legacy-only subscribers; low code change | OneSignal-only subscribers receive a delay if FCM attempt + retries must exhaust first (~4.5 s worst case); slightly more complex control flow |
| Keep unconditional dual-send (status quo) | Simplest code; maximum delivery probability | Duplicate notification for dual-channel subscribers on every invocation |
| Remove OneSignal entirely | Simplest final state; no dual-send issue | Breaks legacy-token subscribers who have no FCM token yet; premature until subscriber audit confirms no OneSignal-only users remain |
| Feature-flag per subscriber | Precise — dual-send only for subscribers known to need it | Requires subscriber-level metadata store; significant complexity; overkill when the fallback model covers the use case |
| Parallel with dedup on device only (collapse_id) | No code change beyond PR #92 | Duplicate still fires; quota still consumed; tracking events doubled |

## Decision

Chosen: **OneSignal only on FCM failure.**

Both prayer and dhikr send sites are restructured from `Promise.allSettled` to
a try/catch:

```js
try {
    await sendPushWithRetry(heading, body, id);
} catch (fcmErr) {
    console.warn(`⚠️  FCM failed after retries — falling back to OneSignal: ${fcmErr.message}`);
    await sendOneSignalPush(heading, body, id)
        .catch(osErr => console.error(`❌ OneSignal fallback error: ${osErr.message}`));
}
```

Rationale:
- FCM is the primary channel. If it succeeds (the common case), OneSignal is
  never called — no duplicate, no extra quota.
- If FCM fails after retries (~4.5 s worst case), OneSignal fires as fallback.
  The ~4.5 s delay is acceptable: the cron fires every minute, so a missed
  prayer window already implies a >60 s delay.
- Legacy-token subscribers (OneSignal-only) would receive nothing if FCM
  succeeds. This is the accepted trade-off: they are expected to be a small
  residual population that shrinks over time. Removing OneSignal entirely can
  be done in a future ticket once a subscriber audit confirms the population
  is zero.

## Consequences

- The `Promise.allSettled` concurrency model from PR #96 is replaced with
  sequential try/catch at both send sites. This increases per-invocation
  latency by `t_onesignal` on the FCM-failure path (uncommon), and eliminates
  it entirely on the success path.
- OneSignal is now a fallback, not a co-primary. Log messages updated to
  reflect this (fallback label vs independent error label).
- If OneSignal-only subscribers are confirmed to exist, this change will
  increase their miss rate. A subscriber audit is recommended as a follow-up.
- No new infrastructure, secrets, or dependencies required.

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/97
- Issue: https://github.com/Noor-Nights/noor-nights.github.io/issues/95
- Related AgDR: AgDR-0008 (original OneSignal dual-send decision)
- Related AgDR: AgDR-0011 (sendPushWithRetry and Promise.allSettled)
