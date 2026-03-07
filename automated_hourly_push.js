// automated_hourly_push.js
// This script is designed to be run by a GitHub Actions CRON job every hour.
// It checks if it's currently the last 10 nights of Ramadan, inside the 19:00 - 05:00 window.
// If so, it automatically dispatches the correct Dua and Reminder via OneSignal to all registered users.

const fs = require('fs');
const path = require('path');

const APP_ID = '520970e9-567b-4556-8022-3093a50b765f';

// Fallback to local .env file if it exists (for local testing)
const envPath = path.resolve(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8').split('\n');
    envConfig.forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) process.env[parts[0].trim()] = parts.slice(1).join('=').trim();
    });
}

const REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY;

if (!REST_API_KEY) {
    console.error('❌ ONESIGNAL_REST_API_KEY is not set globally. Skipping.');
    process.exit(1); // Exit with error
}

// Ensure timezone is Egypt for calculation (UTC+2)
const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" }));
const hours = now.getHours();
const time = now.getTime();

// Start of the Last 10 Nights (Maghrib on March 9th in Egypt)
const startNight = new Date("2026-03-09T17:54:00+02:00").getTime();
// End of Ramadan
const endNight = new Date("2026-03-20T05:00:00+02:00").getTime();

// 1. Are we within the 10 Days?
if (time < startNight || time > endNight) {
    console.log('🌙 Automatically skipping: It is not currently the last 10 nights of Ramadan.');
    process.exit(0);
}

// 2. Are we inside the Active Hours? (19:00 to 05:00)
// If hours > 5 and hours < 19, we are in the daytime.
if (hours > 5 && hours < 19) {
    console.log(`☀️ Automatically skipping: It is currently ${hours}:00 daytime in Egypt. No reminders are sent during the day.`);
    process.exit(0);
}

// 3. Calculate Night Number
const distance = time - startNight;
const nightNum = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;

// 4. Calculate Hour Index (19:00 is hour 0, 00:00 is hour 5)
let hrIdx = hours >= 19 ? hours - 19 : hours + 5;

// Data: Essential Duas
const essentialDuas = [
    { arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي" },
    { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ" },
    { arabic: "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَعَافِنّي وَارْزُقْنِي" },
    { arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ" },
    { arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ، إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ" }
];

// Data: Jawami Duas
const jawamiDuas = [
    { arabic: "اللَّهُمَّ اغْفِرْ لِي ، وَارْحَمْنِي وَاهْدِنِي ، وَعَافِنِي وَارْزُقْنِي" },
    { arabic: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا ، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا" },
    { arabic: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي" },
    { arabic: "اللَّهُمَّ رَبِّ هَبْ لِيْ مِنَ الصَّالِحِينَ" },
    { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ" },
    { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الهُدَى ، وَالتُّقَى ، وَالعَفَافَ وَالغِنَى" },
    { arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنَ عِبَادَتِكَ" }
];

// Data: Messages
const earlyMessages = [
    "🤲 أفرغ قلبك في الدعاء الآن.",
    "🎁 لا تنسَ صدقتك لهذه الليلة.",
    "✨ ركّز على الدعاء والصدقة الليلة."
];
const lateMessages = [
    "🌙 وقت القيام والصلاة.",
    "🌟 ادعُ وأنت في صلاة القيام.",
    "✨ وازن ليلتك بين القيام والدعاء."
];

const duaList = essentialDuas.concat(jawamiDuas);
const dua = duaList[hrIdx % duaList.length];

const actionMsg = hrIdx < 4 ?
    earlyMessages[hrIdx % earlyMessages.length] :
    lateMessages[(hrIdx - 4) % lateMessages.length];

const body = {
    app_id: APP_ID,
    included_segments: ['All'],
    headings: { en: `🌙 تذكير الليلة ${nightNum > 0 ? nightNum : 1} من 10` },
    contents: { en: `${actionMsg}\n\n"${dua.arabic}"` },
    url: 'https://noor-nights.github.io',
    chrome_web_icon: 'https://noor-nights.github.io/assets/icons/icon-192.png',
    firefox_icon: 'https://noor-nights.github.io/assets/icons/icon-192.png',
};

async function sendHourlyPush() {
    console.log(`\n🚀 Firing automated hourly push for Night ${nightNum}, Hour ${hours}:00...`);

    try {
        const res = await fetch('https://onesignal.com/api/v1/notifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Key ${REST_API_KEY}`
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        if (data.id) {
            console.log(`✅ Push successfully delivered to all users! Notification ID: ${data.id}`);
        } else {
            console.error(`❌ Push delivery failed:`, JSON.stringify(data));
        }
    } catch (err) {
        console.error('❌ Network error while sending push:', err.message);
    }
}

sendHourlyPush();
