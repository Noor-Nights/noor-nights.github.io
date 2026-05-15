<p align="center">
  <img src="assets/icons/icon-192.png" width="128" alt="Noor Nights Logo">
</p>

<h1 align="center">🕋 ليالي النور — Noor Nights</h1>

**Noor Nights (ليالي النور)** is a minimalist, bilingual PWA (Progressive Web App) designed to help Muslims make the most of the first ten blessed days of Dhul Hijjah. It provides tools for spiritual tracking, community duas, real-time push reminders, and effortlessly sharing Prophetic supplications.

---

## ✨ Features

- **📱 Progressive Web App (PWA):** Installs natively on Android (1-Click) and iOS (Add to Home Screen), featuring offline caching and a clean, app-like experience.
- **🌍 Bilingual Support:** Instantly toggle between English and Arabic (`العربية`) with fully translated content and system modals.
- **🔔 Hourly Push Notifications:** Powered by **OneSignal** and **GitHub Actions**, delivering automated spiritual reminders throughout the 10 days of Dhul Hijjah — including special Arafah duas on Day 9 and Eid greetings on Day 10.
- **⏳ Live Countdown:** Precise bilingual timer counting down to the start of Dhul Hijjah (Egypt Time).
- **✅ Worship Tracker:** Track daily goals (Fajr, Quran, Fasting, Dhikr, Sadaqah). Progress saved locally per day.
- **📿 Tasbeeh Counter:** Multi-dhikr counter with SVG progress rings, lap tracking, Arabic text display, and milestone toasts. Supports Subhanallah, Alhamdulillah, Allahu Akbar, La ilaha illallah, and Astaghfirullah — each with its recommended count.
- **🌍 Community Dua Wall:** Share a dua and every visitor says Ameen for you — powered by **Supabase**. Based on the hadith: *"When you make dua for your brother, an angel says: And for you the same."*
- **🤲 Essential & Jawami' Duas:** A curated collection of powerful supplications from the Sunnah, with image sharing and clipboard copy.
- **📅 Smart Calendar Export:** Download an `.ics` file with daily reminders for all 10 days including a special golden-hour block for Arafah Day.
- **🕌 Live Prayer Times:** Fetched daily from the Aladhan API for Cairo (Egypt), with accurate EEST (GMT+3) fallback times.
- **🎨 Modern UI Theme:** Dark interface with dynamic gradients, glassmorphism, and animated stars.

---

## 🚀 Installation & Usage

### For Users
Visit the site on your mobile device:
- **Android:** Tap "📲 Install App" to trigger the native Chrome install prompt.
- **iOS:** Open in **Safari** → tap `Share` → `Add to Home Screen`.

### For Developers
Serve the root directory statically (e.g. VS Code Live Server, Python's `http.server`). No build step required.

---

## 🔔 Automated Hourly Push Notifications

The repository includes `automated_hourly_push.js` — a Node.js script run by GitHub Actions on a cron schedule.

**Schedule:** Every hour from 05:00–22:00 Cairo time (02:00–19:00 UTC) during the 10 days of Dhul Hijjah.

**Message pools:** Morning, midday, afternoon, and evening — each with contextually appropriate dhikr and dua reminders.

**Special handling:**
- **Day 9 (Arafah):** Rotates through 8 Arafah-specific duas; time-sensitive messages for fasting, golden hour, and Maghrib.
- **Day 10 (Eid al-Adha):** Single Eid greeting notification.

---

## 📁 Project Structure

```text
├── .env                        # (Ignored) Local secrets for Node.js scripts
├── .github/
│   └── workflows/
│       ├── deploy.yml          # GitHub Pages deployment with secret injection
│       └── ramadan_hourly_push.yml  # Dhul Hijjah hourly notification cron
├── OneSignalSDKWorker.js       # OneSignal Service Worker mapping
├── sw.js                       # Core PWA Service Worker
├── automated_hourly_push.js    # Hourly push notification script
├── send_test_pushes.js         # Manual push notification tester
├── index.html                  # App entry point
├── manifest.json               # PWA Manifest
├── assets/
│   ├── icons/                  # App icons
│   └── backgrounds/            # Share card backgrounds
├── src/
│   ├── css/
│   │   └── modern.css          # All UI styles
│   └── js/
│       ├── app.js              # Core app logic (i18n, tracker, tasbeeh, prayer times, duas)
│       └── duas.js             # Supplication data (English/Arabic)
└── README.md
```

---

## 🛠️ Technology Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+). Zero frameworks for instant load times.
- **PWA & Offline:** Native Service Workers and Web Manifest.
- **Push Notifications:** OneSignal Web Push SDK + GitHub Actions cron.
- **Community Duas:** Supabase (PostgreSQL REST API with Row Level Security).
- **Prayer Times:** Aladhan API.
- **Analytics:** [GoatCounter](https://www.goatcounter.com/) — privacy-friendly, cookie-free.

---

## 🤲 Tribute

This project is created to honor the memory of **Youssef Abdelkader**. We ask Allah to grant him mercy, widen his grave, and admit him to the highest levels of Paradise. Ameen.

---

*Made with ❤️ for Dhul Hijjah.*
