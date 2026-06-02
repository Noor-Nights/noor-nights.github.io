// automated_hourly_push.js
// GitHub Actions CRON — runs every minute, year-round.
// Prayer time notifications: sent at each Cairo prayer (Fajr–Isha), ±5 min window, once per day.
// Hourly dhikr: one message per hour at minute 0–2, 05:00–22:00 Cairo.

const fs   = require('fs');
const path = require('path');

// ── Environment guards ────────────────────────────────────────────────────────
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
if (!PROJECT_ID) {
    console.log('⚠️ FIREBASE_PROJECT_ID is not set. Skipping.');
    process.exit(0);
}

const SERVICE_ACCOUNT_JSON = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
if (!SERVICE_ACCOUNT_JSON) {
    console.log('⚠️ FIREBASE_SERVICE_ACCOUNT_JSON is not set. Skipping.');
    process.exit(0);
}
let SERVICE_ACCOUNT;
try {
    SERVICE_ACCOUNT = JSON.parse(SERVICE_ACCOUNT_JSON);
} catch (e) {
    console.error('❌ FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON:', e.message);
    process.exit(1);
}

// ── Time Setup (Cairo = Africa/Cairo, UTC+2 winter / UTC+3 summer) ───────────
const _nowUTC = new Date();
const _cairoParts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Cairo',
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', hour12: false,
    }).formatToParts(_nowUTC)
    .filter(p => p.type !== 'literal')
    .map(p => [p.type, parseInt(p.value, 10)])
);
// hour12:false can return 24 at midnight — normalise to 0
const hours   = _cairoParts.hour === 24 ? 0 : _cairoParts.hour;
const minutes = _cairoParts.minute;
const { year, month, day } = _cairoParts;
const dateKey = `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

// ── Prayer Window & Dedup ─────────────────────────────────────────────────────
// GH Actions cron has 3–15 min scheduler jitter; ±5 min catches the prayer
// even on busy runners. The .prayer-sent/ markers (cached per day via the
// workflow) prevent duplicate sends within the wider window.
const PRAYER_WINDOW_MIN = 5;
const PRAYER_SENT_DIR   = path.resolve(__dirname, '.prayer-sent');

function prayerAlreadySent(prayer) {
    try { return fs.existsSync(path.join(PRAYER_SENT_DIR, `${prayer}-${dateKey}.sent`)); }
    catch { return false; }
}
function markPrayerSent(prayer) {
    try {
        fs.mkdirSync(PRAYER_SENT_DIR, { recursive: true });
        fs.writeFileSync(path.join(PRAYER_SENT_DIR, `${prayer}-${dateKey}.sent`), '');
    } catch (e) { console.warn(`⚠️  Could not write prayer-sent marker: ${e.message}`); }
}

// ── Prayer Time Notifications ─────────────────────────────────────────────────
const CAIRO_LAT = 30.0444;
const CAIRO_LNG = 31.2357;

const prayerNotifications = {
    fajr:    {
        heading: '🌅 حان وقت صلاة الفجر',
        body: 'حيّ على الصلاة، حيّ على الفلاح 🌙\nمن صلى الفجر في جماعة فكأنما قام الليل كله — لا تفوّتها.\n(القاهرة)',
    },
    dhuhr:   {
        heading: '☀️ حان وقت صلاة الظهر',
        body: 'حيّ على الصلاة، حيّ على الفلاح 🕌\nاستقبل منتصف يومك بالصلاة والذكر.\n(القاهرة)',
    },
    asr:     {
        heading: '🌤️ حان وقت صلاة العصر',
        body: 'حيّ على الصلاة، حيّ على الفلاح 🌟\n"من فاتته صلاة العصر فكأنما وُتِر أهله وماله" — النبي ﷺ\n(القاهرة)',
    },
    maghrib: {
        heading: '🌅 حان وقت صلاة المغرب',
        body: 'حيّ على الصلاة، حيّ على الفلاح 🌙\nأسرع إلى الصلاة وادعُ بعدها — ما بين الأذان والإقامة دعوة لا تُرد.\n(القاهرة)',
    },
    isha:    {
        heading: '🌙 حان وقت صلاة العشاء',
        body: 'حيّ على الصلاة، حيّ على الفلاح ✨\nاختم يومك بالصلاة والاستغفار — من صلى العشاء في جماعة فكأنما قام نصف الليل.\n(القاهرة)',
    },
};

// Baked prayer times are written at deploy time by scripts/bake-prayer-times.js
// to src/js/cairo-times.json. Falls back to a live aladhan.com fetch on cache miss.
async function getCairoPrayerTimes() {
    // 1. Try baked file
    try {
        const jsonPath = path.resolve(__dirname, 'src/js/cairo-times.json');
        const baked = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        if (baked[dateKey]) {
            console.log(`📅 Prayer times loaded from baked file for ${dateKey}`);
            return baked[dateKey];
        }
        console.warn(`⚠️ Baked prayer times do not cover ${dateKey} — falling back to live fetch`);
    } catch (e) {
        console.warn(`⚠️ Could not read baked prayer times (${e.message}) — falling back to live fetch`);
    }

    // 2. Live fetch fallback
    try {
        const res = await fetch(
            `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${CAIRO_LAT}&longitude=${CAIRO_LNG}&method=5`
        );
        const data = await res.json();
        if (data.code === 200) {
            const t = data.data.timings;
            return {
                fajr:    t.Fajr.split(' ')[0],
                dhuhr:   t.Dhuhr.split(' ')[0],
                asr:     t.Asr.split(' ')[0],
                maghrib: t.Maghrib.split(' ')[0],
                isha:    t.Isha.split(' ')[0],
            };
        }
    } catch (e) {
        console.warn('⚠️ Live prayer time fetch also failed:', e.message);
    }
    return null;
}

function getPrayerAtTime(times, hour, minute) {
    const nowMinutes = hour * 60 + minute;
    for (const [key, timeStr] of Object.entries(times)) {
        const [h, m] = timeStr.split(':').map(Number);
        if (Math.abs(nowMinutes - (h * 60 + m)) <= PRAYER_WINDOW_MIN) return key;
    }
    return null;
}

// ── Dhikr Content ─────────────────────────────────────────────────────────────
const duas = [
    "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَعَافِنِي وَارْزُقْنِي",
    "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا",
    "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    "اللَّهُمَّ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ الهُدَى وَالتُّقَى وَالعَفَافَ وَالغِنَى",
    "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
    "اللَّهُمَّ مُصَرِّفَ القُلُوبِ صَرِّفْ قَلْبِي عَلَى طَاعَتِكَ",
    "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الهَمِّ وَالحَزَنِ وَالعَجْزِ وَالكَسَلِ",
    "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    "اللَّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الحِسَابُ",
    "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ",
    "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ",
    "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    "اللَّهُمَّ اجْعَلْنِي مِمَّنْ يَسْتَمِعُ الْقَوْلَ فَيَتَّبِعُ أَحْسَنَهُ",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ وَعَزَائِمَ مَغْفِرَتِكَ",
];

// Morning messages (05:00–11:00)
const morningMessages = [
    '🌅 صباحك نور — قل أذكار الصباح وابدأ يومك بذكر الله',
    '📿 لا تفوّت سنة الفجر — من حافظ عليها كأنما قام الليل كله',
    '📖 خصص ولو صفحات من القرآن الكريم — القرآن نور في قلبك ويومك',
    '🤲 اللهم أعني على ذكرك وشكرك وحسن عبادتك',
    '💚 الصدقة تطفئ الخطيئة — تصدق ولو بالقليل',
    '☀️ استقبل يومك بالتكبير والتحميد: الله أكبر، الحمد لله، سبحان الله',
];

// Midday messages (11:00–15:00)
const middayMessages = [
    '🕋 أكثر من التسبيح والتحميد والتكبير — لا يعجز عنها أحد',
    '🤲 توقف لحظة وادعُ الله من قلبك — الله يسمعك وهو أقرب إليك من حبل الوريد',
    '📿 سبّح الله 33 مرة، احمده 33 مرة، كبّره 34 مرة',
    '🌿 "من أكثر من الاستغفار جعل الله له من كل هم فرجاً" — النبي ﷺ',
    '💡 لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير',
];

// Afternoon messages (15:00–18:00)
const afternoonMessages = [
    '🌤️ اقترب وقت العصر — صلِّ في أوله واجلس للذكر والدعاء بعدها',
    '🤲 ادعُ قبل المغرب — ساعة الإجابة قريبة',
    '🌅 قبيل الغروب من أوقات إجابة الدعاء — لا تدع هذا الوقت يمر دون دعاء',
    '💫 أكثر من الاستغفار — "من أكثر من الاستغفار جعل الله له من كل هم فرجاً"',
];

// Evening messages (18:00–22:00)
const eveningMessages = [
    '🌙 قل أذكار المساء الآن — هي حصنك لليلتك كلها',
    '🤲 أكثر من الصلاة على النبي ﷺ — من صلى عليه مرة صلى الله عليه عشراً',
    '📿 اختم يومك بالاستغفار — "من قال: أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه — غُفر له"',
    '🌟 تأمل يومك وجدّد نيتك لغد أفضل — الله يقبل التوبة ويعفو عن السيئات',
    '🙌 سبحان الله وبحمده، سبحان الله العظيم — كلمتان خفيفتان على اللسان، ثقيلتان في الميزان',
];

// ── FCM HTTP v1 Send ──────────────────────────────────────────────────────────
const { GoogleAuth } = require('google-auth-library');

const TOKEN_CACHE_PATH    = '/tmp/noor-nights-fcm-token.json';
const TOKEN_TTL_BUFFER_S  = 60; // refresh if < 60 s remaining

async function getAccessToken() {
    try {
        const cached = JSON.parse(fs.readFileSync(TOKEN_CACHE_PATH, 'utf8'));
        if (cached.token && cached.expiresAt - Date.now() > TOKEN_TTL_BUFFER_S * 1000) {
            return cached.token;
        }
    } catch (_) { /* cache miss or corrupt — fall through */ }

    const auth = new GoogleAuth({
        credentials: SERVICE_ACCOUNT,
        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });
    const client = await auth.getClient();
    const { token, res } = await client.getAccessToken();
    const expiresAt = res?.data?.expiry_date ?? (Date.now() + 3600 * 1000);
    try {
        fs.writeFileSync(TOKEN_CACHE_PATH, JSON.stringify({ token, expiresAt }));
    } catch (e) {
        console.warn(`⚠️  Could not write token cache: ${e.message}`);
    }
    return token;
}

async function sendPushWithRetry(heading, body_text, collapseId, retries = 2) {
    const maxAttempts = Math.max(1, retries);
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await sendPush(heading, body_text, collapseId);
        } catch (err) {
            if (attempt === maxAttempts) throw err;
            const delay = 1500 * attempt;
            console.warn(`↩️  FCM send failed (attempt ${attempt}/${maxAttempts}), retrying in ${delay}ms — ${err.message}`);
            await new Promise(r => setTimeout(r, delay));
        }
    }
}

async function sendPush(heading, body_text, collapseId) {
    const accessToken = await getAccessToken();
    const payload = {
        message: {
            topic: 'daily-reminders',
            notification: { title: heading, body: body_text },
            webpush: {
                notification: {
                    icon:    'https://noor-nights.github.io/assets/icons/icon-512.png',
                    badge:   'https://noor-nights.github.io/assets/icons/icon-96-mono.png',
                    tag:     collapseId,
                    silent:  false,
                    vibrate: [200, 100, 200],
                },
                fcm_options: { link: 'https://noor-nights.github.io' },
            },
        },
    };

    const res = await fetch(
        `https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`,
        {
            method:  'POST',
            headers: {
                'Content-Type':  'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(payload),
        }
    );
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`FCM HTTP ${res.status}: ${text}`);
    }
    const data = await res.json();
    if (data.name) {
        console.log(`✅ Delivered! Message: ${data.name}`);
    } else {
        console.error('❌ Delivery failed:', JSON.stringify(data));
    }
}


const isManual = process.env.MANUAL_DISPATCH === 'true';

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
    console.log(`\n🚀 Running — ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')} Cairo${isManual ? ' | MANUAL DISPATCH' : ''}`);

    // Manual dispatch: send a random dua immediately and exit
    if (isManual) {
        const dua = duas[Math.floor(Math.random() * duas.length)];
        console.log('📣 Manual dispatch — sending random dua');
        try {
            await sendPush('🤲 تذكير روحاني', `"${dua}"`, `manual-${_nowUTC.toISOString().slice(0,16)}`);
        } catch (err) {
            console.error('❌ Manual push error:', err.message);
        }
        return;
    }

    // ── Prayer time check — always runs, year-round ───────────────────────────
    const prayerTimes   = await getCairoPrayerTimes();
    const matchedPrayer = prayerTimes ? getPrayerAtTime(prayerTimes, hours, minutes) : null;

    if (matchedPrayer && prayerNotifications[matchedPrayer]) {
        if (prayerAlreadySent(matchedPrayer)) {
            console.log(`⏭️  ${matchedPrayer} already sent today — skipping duplicate`);
        } else {
            const { heading, body } = prayerNotifications[matchedPrayer];
            const prayerCollapseId  = `prayer-${matchedPrayer}-${dateKey}`;
            console.log(`🕌 Prayer time matched: ${matchedPrayer} — sending prayer notification`);
            try {
                await sendPushWithRetry(heading, body, prayerCollapseId);
                markPrayerSent(matchedPrayer);
            } catch (fcmErr) {
                console.error(`❌ Prayer FCM failed after retries: ${fcmErr.message}`);
            }
        }
    }

    // ── Hourly dhikr — once per hour (minute 0–2), 05:00–22:00 Cairo ─────────
    if (hours < 5 || hours > 22) {
        console.log('🌙 Outside active hours — skipping dhikr.');
        return;
    }
    if (minutes > 2) {
        console.log(`⏭️  Minute ${minutes} — outside dhikr window (0–2), skipping.`);
        return;
    }

    let msgPool;
    if      (hours < 11) msgPool = morningMessages;
    else if (hours < 15) msgPool = middayMessages;
    else if (hours < 18) msgPool = afternoonMessages;
    else                 msgPool = eveningMessages;

    const msg       = msgPool[hours % msgPool.length];
    const dua       = duas[hours % duas.length];
    const heading   = '📿 تذكير يومي';
    const body_text = `${msg}\n\n"${dua}"`;

    console.log('📣 Sending hourly dhikr message...');
    const collapseId = `dhikr-${dateKey}-hour${hours}`;
    try {
        await sendPushWithRetry(heading, body_text, collapseId);
    } catch (fcmErr) {
        console.error(`❌ Dhikr FCM failed after retries: ${fcmErr.message}`);
    }
}

main();
