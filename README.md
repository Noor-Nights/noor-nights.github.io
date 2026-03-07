# 🌙 Noor Nights

**Noor Nights** is a minimalist, bilingual PWA (Progressive Web App) designed to help Muslims make the most of the last ten nights of Ramadan. It provides tools for spiritual tracking, real-time background push reminders, and effortlessly sharing Prophetic supplications (Duas).

Dedicated as **Sadaqah Jariyah** (ongoing charity) in loving memory of **Youssef Abdelkader**.

---

## ✨ Features

- **📱 Progressive Web App (PWA):** Installs natively on Android (1-Click) and iOS (Add to Home Screen), featuring offline caching and a clean, app-like experience.
- **🌍 Bilingual Support:** Instantly toggle between English and Arabic (`العربية`) UIs with fully translated content and system modals.
- **🔔 Background Push Notifications:** Powered by **OneSignal**, delivering reliable background reminders during the active hours of the last ten nights, even when the app is closed.
- **⏳ Live Countdown:** Precise dual-language timer until the last 10 nights begin (Egypt Time).
- **✅ Worship Checklist:** Track your daily goals (Taraweeh, Dua, Sadaqah, Zakat, Quran). Progress is saved locally on your device.
- **📅 Smart Calendar Export:** Generate and download an `.ics` file with daily Maghrib reminders for all 10 nights.
- **🤲 Essential & Jawami' Duas:** A curated collection of powerful supplications from the Sunnah.
- **📤 Image Sharing & Copying:** Generate beautiful, shareable JPG images of Duas using the Canvas API, or natively copy formatted text to your clipboard.
- **🎨 Multiple Themes:**
    - **Modern (`index.html`):** A sleek, dark interface with dynamic gradients, glassmorphism, and animated stars.
    - **Retro (`retro.html`):** A 90s OS-inspired minimal terminal UI for a nostalgic and distraction-free experience.

---

## 🚀 Installation & Usage

Because Noor Nights is a PWA, users do not need an App Store to install it. 

### For Users
Simply visit the site on your mobile device. The app offers a dynamic **"Get the App"** card showing the correct instructions:
- **Android:** Tap the "🤖 Install App (1-Click)" button that natively triggers the Chrome installation prompt.
- **iOS (iPhone/iPad):** Open the site in **Safari**, tap the `Share` icon, and select `Add to Home Screen`. *(Note: Apple requires Safari for Web Push Notifications).*

### For Developers 
To run the app locally, you only need to serve the root directory statically (e.g., using VS Code Live Server, Python's `http.server`, or Node's `serve`).

---

## 🧪 Testing Push Notifications

The repository includes a ready-to-use Node.js script (`send_test_pushes.js`) to test the OneSignal Push Notification flow across your installed devices.

1. **Setup Environment Variables:**
   Create a `.env` file in the root directory (this file is gitignored to protect your secrets).
   ```text
   ONESIGNAL_REST_API_KEY=your_onesignal_rest_api_key_here
   ```
2. **Run the Test Script:**
   ```bash
   node send_test_pushes.js
   ```
   *The script is currently configured to send 1 notification every 30 minutes for a total of 6 hours, rotating through 5 different spiritual messages/duas.*

---

## 📁 Project Structure

```text
├── .env                 # (Ignored) OneSignal REST API Key
├── OneSignalSDKWorker.js# OneSignal Service Worker mapping
├── sw.js                # Core PWA Service Worker (caches assets, merges OneSignal)
├── send_test_pushes.js  # Node script for testing true background push
├── index.html           # Modern theme entry point
├── retro.html           # Retro theme entry point
├── manifest.json        # PWA Manifest (Icons, Colors, Display Mode)
├── assets/
│   └── icons/           # App icons (Favicons, PWA badges, Apple Touch limits)
├── src/
│   ├── css/
│   │   ├── modern.css   # Modern Theme UI styles
│   │   └── retro.css    # Retro Theme UI styles
│   └── js/
│       ├── app.js       # Core logic (Timer, Checklist, Push, PWA Install, i18n frontend)
│       └── duas.js      # Supplication data arrays (English/Arabic)
└── README.md            
```

---

## 🛠️ Technology Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+). Zero heavy frameworks (React/Vue/Angular) to guarantee instantaneous load times.
- **PWA & Offline:** Native Service Workers (`sw.js`) and Web Manifest.
- **Push Notifications:** OneSignal Web Push SDK.
- **Analytics:** [GoatCounter](https://www.goatcounter.com/) (Privacy-friendly, script-based, cookie-free analytics).

---

## 🤲 Tribute

This project is created to honor the memory of **Youssef Abdelkader**. We ask Allah to grant him mercy, widen his grave, and admit him to the highest levels of Paradise. Ameen.

---

*Made with ❤️ for Ramadan.*
