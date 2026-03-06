# 🌙 Noor Nights

**Noor Nights** is a minimalist, themeable web application designed to help Muslims make the most of the last ten nights of Ramadan. It provides tools for spiritual tracking, daily reminders, and sharing Prophetic supplications (Duas).

Dedicated as **Sadaqah Jariyah** (ongoing charity) in loving memory of **Youssef Abdelkader**.

---

## ✨ Features

- **⏳ Live Countdown:** Precise timer until the last 10 nights begin (Egypt Time).
- **✅ Worship Checklist:** Track your daily goals (Taraweeh, Dua, Sadaqah, Zakat, Quran). Progress is saved locally in your browser.
- **📅 Smart Calendar Export:** Generate and download an `.ics` file with hourly reminders during the peak hours of those nights (7 PM - 5 AM).
- **🤲 Essential & Jawami' Duas:** A curated collection of powerful supplications from the Sunnah.
- **📤 Image Sharing:** Generate beautiful, shareable JPG images of Duas directly from your browser.
- **🔔 Hourly Notifications:** Enable browser-based reminders for each hour of the sacred nights.
- **🎨 Multiple Themes:**
    - **Modern:** A sleek, dark interface with animated stars.
    - **Classic:** A vintage, elegant aesthetic with Lora and Playfair typography.
    - **Retro:** 90s OS-inspired UI for a nostalgic and focused experience.

---

## 🚀 Getting Started

Simply open `index.html` in any modern web browser to begin.

### Themes:
- **Default (Modern):** [`index.html`](index.html)
- **Classic:** [`classic.html`](classic.html)
- **Retro:** [`retro.html`](retro.html)

---

## 📁 Project Structure

```text
├── assets/
│   ├── backgrounds/    # Future placeholder for custom backgrounds
│   └── icons/          # Future placeholder for custom icons
├── src/
│   ├── css/
│   │   ├── classic.css
│   │   ├── modern.css
│   │   └── retro.css
│   └── js/
│       ├── app.js       # Core logic (Timer, Checklist, Notifications, Sharing)
│       └── duas.js      # Supplication data arrays
├── index.html           # Modern theme entry point
├── classic.html         # Classic theme entry point
├── retro.html           # Retro theme entry point
└── README.md            # You are here
```

---

## 🛠️ Technology Stack

- **HTML5 & CSS3:** Vanilla implementations with custom themes.
- **JavaScript:** ES6+, leveraging local storage for data persistence.
- **Canvas API:** Used for on-the-fly generation of shareable Dua cards.
- **Notification API:** For real-time hourly reminders.

---

## 🌐 Deployment to GitHub Pages

This project is built to be a static site, making it perfectly suited for GitHub Pages.

1. Create a new repository on GitHub.
2. Push the files:
   ```bash
   git init
   git add .
   git commit -m "Initialize Noor Nights"
   git remote add origin https://github.com/yourusername/reponame.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** in your GitHub repo and select the `main` branch to deploy.

---

## 🤲 Tribute

This project is created to honor the memory of **Youssef Abdelkader**. We ask Allah to grant him mercy, widen his grave, and admit him to the highest levels of Paradise. Ameen.

---

*Made with love and devotion.*
