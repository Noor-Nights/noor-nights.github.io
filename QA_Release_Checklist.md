# 🚀 Noor Nights - Launch & Deployment Assets

As requested by the Software Lead, the web push infrastructure has been fortified with fallback solutions (Email, ICS), robust platform-specific A2HS (Add to Home Screen) flows, and deep analytics integration.

Below are the compiled assets, email templates, and the final QA checklist required for a smooth and robust production release.

---

## 1. 💌 Email Fallback Templates

*Because native Web Push is inherently unreliable on some platforms (like iOS without A2HS or restrictive corporate firewalls), email serves as the ultimate robust fallback. While Noor Nights is a static PWA and requires a backend (like SendGrid or AWS SES) to send emails, you can hand these templates to your backend team to trigger via an API.*

### Template 1: Welcome & Setup
**Subject:** Welcome to Noor Nights 🌙 Let's Prepare for the Last 10 Nights
**Body (HTML/Text):**
```html
Assalamu Alaikum,

Jazakallah Khayran for joining Noor Nights. We pray these final ten nights of Ramadan bring immense blessings to you and your family.

You are now subscribed to receive our nightly spiritual reminders! 
To ensure you never miss a reminder, we highly recommend adding the app directly to your phone's Home Screen:
1. Open https://noor-nights.github.io on your mobile browser.
2. Tap "Download App" to install it.
3. Enable "Push Notifications" inside the installed app.

If your push notifications ever fail, don't worry—we will send you a backup email reminder here.

May Allah accept your fasting and prayers.
- The Noor Nights Team
```

### Template 2: Nightly Reminder (Fallback)
**Subject:** 🌙 Night {n} of Ramadan - Your Reminder to Pray
**Body (HTML/Text):**
```html
Assalamu Alaikum,

It is Night {n} of the Last 10 Nights of Ramadan.

"اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي"
"O Allah, You are forgiving and generous, You love to forgive, so forgive me."

Take a moment right now to step away from your daily tasks, raise your hands, and make Dua.

Tap here to log your daily worship progress:
https://noor-nights.github.io
```

---

## 2. 🗓️ .ics Calendar Integration

The PWA already contains a fully functioning offline `.ics` Calendar Generator (see `generateICS()` and `downloadICS()` in `app.js`). This creates an offline payload without a backend.
**Why this is robust:** Even if a user's phone completely blocks Web Push and they unsubscribe from emails, injecting the events directly into their native Apple Calendar / Google Calendar guarantees local OS-level alerts at Maghrib every single day. 

---

## 3. ⚙️ Secure Token Rotation & Re-Subscription

**OneSignal Architecture:**
You do **not** need to manually build token rotation or secure storage logic in `app.js`. Doing so actually breaks standard Web Push security models.
1. **Token Storage:** The OneSignal SDK automatically provisions an internal IndexedDB instance in the user's browser. It securely stores the `PushSubscription` keys locally.
2. **Rotation:** When the browser natively rotates the endpoint URL for security reasons (common in Chrome), OneSignal automatically intercepts the `pushsubscriptionchange` event in `OneSignalSDK.sw.js` and securely uploads the new token back to your `APP_ID` dashboard.
3. **Re-Subscription:** The SDK auto-heals. If a user clears their cache, but native browser permission is still `granted`, OneSignal will seamlessly provision a new token silently in the background on the next visit.

---

## 4. 📊 Analytics Instrumentation Matrix (GoatCounter)

We have instrumented the following raw events directly into the UI state machine to measure funnel conversion:

| Event Tag | Trigger Condition | Code Location |
| :--- | :--- | :--- |
| `push_opt_in` | User clicks "Allow" on the OneSignal native prompt. | `app.js` -> `requestNotifications()` |
| `a2hs_shown` | The native OS signals it is ready to install the PWA. | `app.js` -> `beforeinstallprompt` |
| `a2hs_installed` | The user successfully installs the PWA to their OS. | `app.js` -> `appinstalled` |
| `ics_download` | The user downloads the offline calendar fallback. | `app.js` -> `downloadICS()` |
| `push_open` | The user taps a background push notification. | `sw.js` -> `notificationclick` |
| `push_sent` | Measured serverside (OneSignal Dashboard). | N/A |

---

## 5. ✅ Pre-Release QA Checklist

Before going live tomorrow, complete these final smoke tests:

### Android UI/UX 🤖
- [ ] Open Chrome. Ensure the "Get the App" card displays the "🤖 Install App (1-Click)" button.
- [ ] Tap the install button. Verify it instantly triggers the native Android Home Screen prompt.
- [ ] Confirm `a2hs_installed` pinged analytics.

### iOS Safari Experience 🍏
- [ ] Open Safari. Ignore the push button initially. Look at the "Get the App" card.
- [ ] Verify the step-by-step instructions ("Tap Share -> Add to Home Screen") are visible.
- [ ] Add the app to your Home Screen using the native Safari share sheet.
- [ ] Open the newly installed native app from your iOS home screen. 
- [ ] Tap "Enable Reminders". Verify the native Apple permission prompt successfully appears.

### Push Delivery & Fallback 📬
- [ ] Run the `node send_test_pushes.js` script.
- [ ] Ensure the device receives the payload in the background (app completely swiped away/closed).
- [ ] Tap the notification. Ensure `push_open` triggers and the app boots up properly.
- [ ] Tap "Download Calendar (.ics)". Verify the file downloads and locally opens in your Calendar app with the correct 19:00 - 05:00 UTC thresholds.
