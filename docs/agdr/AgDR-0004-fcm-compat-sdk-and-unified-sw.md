# AgDR-0004 — Firebase FCM: Compat SDK, Unified Service Worker, and Topic-Based Broadcast

> In the context of migrating push notifications from OneSignal to Firebase Cloud Messaging, facing three architectural sub-decisions (SDK flavour, service worker structure, and fan-out strategy), I decided to use the Firebase compat (v8-style) SDK inside a single unified `sw.js`, broadcasting via FCM topics, accepting the constraint that the compat SDK is a larger import than the modular v9+ SDK.

## Context

The migration replaces OneSignal with Firebase Cloud Messaging for all web push notifications. Three independent decisions had to be made before implementation:

1. **Which Firebase SDK flavour** to use in the service worker (`importScripts` environment, no bundler)
2. **Whether to unify** PWA caching and Firebase Messaging into one `sw.js` or keep separate workers
3. **How to fan out** a single push notification to all opted-in users

## Options Considered

### Decision 1 — SDK flavour in service worker

| Option | Pros | Cons |
|--------|------|------|
| Firebase compat SDK v8 (`firebase-app-compat.js`) | Works with `importScripts` in SW; documented by Firebase for SW use; familiar `firebase.messaging()` API | Larger bundle (~80 KB per script); must load two CDN scripts |
| Firebase modular SDK v9+ (ES modules) | Smaller tree-shaken bundle | ES module `import` is blocked in service workers until `type: module` is supported universally; not supported by all target browsers (e.g. older Android WebView) |

### Decision 2 — Service worker structure

| Option | Pros | Cons |
|--------|------|------|
| Unified `sw.js` (Firebase Messaging + PWA cache) | One worker registration; simpler scope management; only one `sw.js` for the browser to install | Single file grows; Firebase init runs on every SW activation |
| Separate workers (one for FCM, one for caching) | Separation of concerns | Two registrations; scoping conflicts; `clients.claim()` needs coordination; more complex |

### Decision 3 — Fan-out strategy

| Option | Pros | Cons |
|--------|------|------|
| FCM topics (`daily-reminders`) | No per-user token database; broadcast with one API call; Cloudflare Worker subscribes token via IID API | Topic subscriptions are best-effort; unsubscribe-on-revoke requires explicit call |
| Direct token targeting | Reliable per-user delivery | Requires a token store (database or KV); tokens rotate; significantly more infrastructure |
| OneSignal segments (status quo) | Already working | Requires OneSignal account and server key; legacy API disabled on new Firebase projects |

## Decision

1. **Compat SDK** — service workers cannot use ES module `import` reliably across all target browsers (Android WebView, older Chrome), and Firebase's own documentation recommends the compat SDK for `importScripts` environments.
2. **Unified `sw.js`** — one registration is simpler. The codebase has no build step (GitHub Pages static site), so splitting into two workers adds scoping complexity with no tooling to manage it.
3. **FCM topics** — the notification audience is all opted-in users; a per-user token database would be overkill for a single broadcast use case. The Cloudflare Worker calls the Firebase IID API to subscribe tokens to `daily-reminders` at opt-in time.

## Consequences

- Service worker script is larger (two Firebase CDN imports + caching logic) but loads once and is cached
- Topic subscriptions persist across token rotations within a browser session; unsubscribe-on-revoke is not automatic (known limitation, acceptable for prayer reminders)
- Firebase config (`apiKey`, `appId`, etc.) is embedded in client code — these are public client-side identifiers; Firebase security is enforced through Security Rules and App Check, not by hiding the config
- A future migration to modular SDK v9+ is possible if `type: module` service worker support becomes universal; no structural changes needed, only file-level refactor

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/35
- Migration plan: `projects/noor-nights/fcm-migration-plan.md`
