<p align="center">
  <img src="assets/icons/icon-512.svg" width="128" alt="Noor Nights Logo">
</p>

<h1 align="center">✦ 🌙 ✦ ليالي النور — Noor Nights</h1>

**Noor Nights (ليالي النور)** is a minimalist, bilingual PWA (Progressive Web App) designed to help Muslims make the most of the first ten blessed days of Dhul Hijjah. It provides tools for spiritual tracking, community duas, real-time push reminders, and effortlessly sharing Prophetic supplications.

---

## ✨ Features

- **📱 Progressive Web App (PWA):** Installs natively on Android (1-Click) and iOS (Add to Home Screen), featuring offline caching and a clean, app-like experience.
- **🌍 Bilingual Support:** Instantly toggle between English and Arabic (`العربية`) with fully translated content and RTL layout support.
- **🔔 Hourly Push Notifications:** Powered by **OneSignal** and **GitHub Actions**, delivering automated spiritual reminders throughout the 10 days of Dhul Hijjah — including special Arafah duas on Day 9 and Eid greetings on Day 10.
- **⏳ Live Countdown:** Precise bilingual timer counting down to Dhul Hijjah with an inline Daily Focus banner highlighting what to prioritize each day.
- **✅ Worship Tracker:** Track daily goals (Fajr, Quran, Fasting, Dhikr, Sadaqah) with per-day progress saved locally. Includes milestone celebrations and an end-of-day reflection prompt.
- **📿 Tasbeeh Counter:** Multi-dhikr counter with SVG progress rings, lap tracking, haptic feedback, Arabic text display, and milestone toasts. Covers Subhanallah, Alhamdulillah, Allahu Akbar, La ilaha illallah, and Astaghfirullah — each with its recommended count and color-coded section.
- **🌍 Community Dua Wall:** Share a dua and every visitor says Ameen for you — powered by **Supabase**. Based on the hadith: *"When you make dua for your brother, an angel says: And for you the same."*
- **🤲 Prophetic & Jawami' Duas:** A curated library of powerful supplications from the Sunnah with use-case tags, image sharing, and clipboard copy.
- **🌹 In Loving Memory — Youssef Abdelkader:** A personal collection of duas dedicated to Youssef Abdelkader, covering forgiveness, mercy, Paradise, and comfort for his family.
- **🏅 Badge System:** Earn badges for streaks, dhikr milestones, fasting, and more. Earned badges are highlighted; locked ones are hidden by default.
- **📊 Today at a Glance:** A persistent bar showing current streak, dhikr count, fasting status, and prayer count — always visible across all tabs.
- **🕌 Live Prayer Times:** Fetched daily from the Aladhan API based on the user's detected location, with automatic city name resolution and per-prayer notification toggles.
- **📅 Smart Calendar Export:** Download an `.ics` file with daily reminders for all 10 days including a special golden-hour block for Arafah Day.
- **🎨 Modern UI Theme:** Dark interface with gold and emerald-teal accents, glassmorphism cards, and a floating crescent header.
- **💬 Re-engagement & Welcome Banners:** Personalized welcome-back message if you missed a day, and a Day 1 welcome banner for new users.

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
│       ├── app.js              # Core app logic (i18n, tracker, tasbeeh, prayer times, duas, badges)
│       └── duas.js             # Supplication data (English/Arabic) including Youssef memorial duas
└── README.md
```

---

## 🛠️ Technology Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+). Zero frameworks for instant load times.
- **PWA & Offline:** Native Service Workers and Web Manifest.
- **Push Notifications:** OneSignal Web Push SDK + GitHub Actions cron.
- **Community Duas:** Supabase (PostgreSQL REST API with Row Level Security).
- **Prayer Times:** Aladhan API with Nominatim reverse geocoding for city names.
- **Analytics:** [GoatCounter](https://www.goatcounter.com/) — privacy-friendly, cookie-free.

---

## 🤲 Tribute

This project is created to honor the memory of **Youssef Abdelkader**. We ask Allah to grant him mercy, widen his grave, and admit him to the highest levels of Paradise. Ameen.

---

*Made with ❤️ for Dhul Hijjah.*
