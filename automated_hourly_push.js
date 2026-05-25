// automated_hourly_push.js
// GitHub Actions CRON job — runs every hour, year-round.
// Prayer time notifications: sent every day when Cairo prayer hour matches.
// Dhul Hijjah messages: only sent during the 10 blessed days (May 18–27, 2026).
// Special handling: Day 9 = Arafah (peak duas all day), Day 10 = Eid al-Adha greeting.

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

// ── Time Setup (Cairo = Africa/Cairo, UTC+3 in summer) ──────────────────────
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
const time    = _nowUTC.getTime(); // actual UTC ms — used for DH date range check

// Dhul Hijjah 1447: 1st = May 18, 2026 (Umm al-Qura) — 10th = May 27 (Eid)
const DH_START   = new Date('2026-05-18T00:00:00+03:00').getTime();
const DH_END     = new Date('2026-05-27T23:59:00+03:00').getTime();
const inDhulHijjah = time >= DH_START && time <= DH_END;

// ── Calculate Day Number (1–10, or 0 outside Dhul Hijjah) ───────────────────
const dayNum = inDhulHijjah
    ? Math.min(Math.floor((time - DH_START) / 86400000) + 1, 10)
    : 0;

// ── DUAS ─────────────────────────────────────────────────────────────────────

// General Dhul Hijjah duas (rotating daily)
const dhDuas = [
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
];

// Arafa-eve duas — for tonight (Day 8, after Maghrib)
const arafahEveDuas = [
    "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "اللَّهُمَّ اجْعَلْنَا مِمَّنْ أَعْتَقْتَهُمْ مِنَ النَّارِ فِي يَوْمِ عَرَفَة",
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "اللَّهُمَّ ثَبِّتْ قَلْبِي عَلَى دِينِكَ وَأَعِنِّي عَلَى طَاعَتِكَ غَداً",
];

const arafahEveMessages = [
    '⭐ غداً يوم عرفة — أعظم يوم في السنة. اكتب قائمة دعائك الليلة وهيّئ قلبك.',
    '🤲 ليلة عرفة — ادعُ الله واستغفره الآن. الله يسمعك وهو أقرب إليك من حبل الوريد.',
    '🌙 غداً صم وأكثر من الدعاء. "أفضل الدعاء دعاء يوم عرفة" — ابدأ التهيّؤ له الليلة.',
    '📿 أكثر من التكبير الليلة: الله أكبر الله أكبر لا إله إلا الله والله أكبر الله أكبر ولله الحمد',
];

// Arafah Day duas — the greatest day of the year
const arafahDuas = [
    "لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    "اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ",
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    "اللَّهُمَّ اجْعَلْنِي مِمَّنْ أَعْتَقْتَهُمْ مِنَ النَّارِ فِي هَذَا اليَوْم",
    "اللَّهُمَّ إِنِّي أَسْأَلُكَ الجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
    "لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    "اللَّهُمَّ اغْفِرْ لَنَا وَلِوَالِدَيْنَا وَلِلْمُسْلِمِينَ أَجْمَعِينَ",
];

// ── Prayer Time Notifications ─────────────────────────────────────────────────

const CAIRO_LAT = 30.0444;
const CAIRO_LNG = 31.2357;

const prayerNotifications = {
    fajr:    {
        heading: '🌅 حان وقت صلاة الفجر',
        body: 'حيّ على الصلاة، حيّ على الفلاح 🌙\nمن صلى الفجر في جماعة فكأنما قام الليل كله — لا تفوّتها.',
    },
    dhuhr:   {
        heading: '☀️ حان وقت صلاة الظهر',
        body: 'حيّ على الصلاة، حيّ على الفلاح 🕌\nاستقبل منتصف يومك بالصلاة، وأكثر من التكبير في هذه الأيام المباركة.',
    },
    asr:     {
        heading: '🌤️ حان وقت صلاة العصر',
        body: 'حيّ على الصلاة، حيّ على الفلاح 🌟\n"من فاتته صلاة العصر فكأنما وُتِر أهله وماله" — النبي ﷺ',
    },
    maghrib: {
        heading: '🌅 حان وقت صلاة المغرب',
        body: 'حيّ على الصلاة، حيّ على الفلاح 🌙\nأسرع إلى الصلاة وادعُ بعدها — ما بين الأذان والإقامة دعوة لا تُرد.',
    },
    isha:    {
        heading: '🌙 حان وقت صلاة العشاء',
        body: 'حيّ على الصلاة، حيّ على الفلاح ✨\nاختم يومك بالصلاة والاستغفار — من صلى العشاء في جماعة فكأنما قام نصف الليل.',
    },
};

async function getCairoPrayerTimes() {
    const day   = _cairoParts.day;
    const month = _cairoParts.month;
    const year  = _cairoParts.year;
    try {
        const res = await fetch(
            `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${CAIRO_LAT}&longitude=${CAIRO_LNG}&method=5`
        );
        const data = await res.json();
        if (data.code === 200) {
            const t = data.data.timings;
            return {
                fajr:    t.Fajr,
                dhuhr:   t.Dhuhr,
                asr:     t.Asr,
                maghrib: t.Maghrib,
                isha:    t.Isha,
            };
        }
    } catch (e) {
        console.warn('⚠️ Could not fetch prayer times:', e.message);
    }
    return null;
}

function getPrayerAtTime(times, hour, minute) {
    for (const [key, timeStr] of Object.entries(times)) {
        const [h, m] = timeStr.split(':').map(Number);
        if (h === hour && m === minute) return key;
    }
    return null;
}

// ── MESSAGES ──────────────────────────────────────────────────────────────────

// Morning messages (05:00–11:00)
const morningMessages = [
    `📿 الله أكبر الله أكبر، لا إله إلا الله، الله أكبر الله أكبر ولله الحمد — اليوم ${dayNum} من أفضل أيام العام`,
    `🌅 استقبل يومك بالتكبير والتحميد — ما من أيام أحب إلى الله من هذه الأيام العشرة`,
    `☪️ لا تفوّت سنة الفجر اليوم — من حافظ عليها كأنما قام الليل كله`,
    `📖 خصص ولو صفحات من القرآن الكريم اليوم — الحسنات مضاعفة في هذه الأيام`,
    `🌟 صيام يوم من ذي الحجة يعدل صيام سنة كاملة — هل نويت الصيام اليوم؟`,
    `💚 الصدقة في هذه الأيام أعظم أجراً — تصدق ولو بالقليل، فكل حسنة مضاعفة`,
];

// Midday messages (11:00–15:00)
const middayMessages = [
    `🕋 أكثر من التكبير والتسبيح والاستغفار — فما من عمل أزكى عند الله في هذه الأيام`,
    `🤲 توقف لحظة وادعُ الله من قلبك — الله يسمعك وهو أقرب إليك من حبل الوريد`,
    `📿 سبّح الله 33 مرة، احمده 33 مرة، كبّره 34 مرة — لا يعجز عنها أحد`,
    `💡 اليوم ${dayNum} من ذي الحجة — استثمر ما تبقى منه قبل أن يذهب`,
    `🌿 "مَا مِنْ أَيَّامٍ الْعَمَلُ الصَّالِحُ فِيهَا أَحَبُّ إِلَى اللَّهِ مِنْ هَذِهِ الأَيَّامِ" — النبي ﷺ`,
];

// Afternoon messages (15:00–18:00)
const afternoonMessages = [
    `🌤️ اقترب وقت العصر — صلِّ في أوله واجلس للذكر والدعاء بعدها`,
    `🤲 ادعُ قبل المغرب — ساعة الإجابة قريبة، اللهم تقبّل منا`,
    `🌅 قبيل الغروب من أوقات إجابة الدعاء — لا تدع هذا الوقت يمر دون دعاء`,
    `💫 أكثر من الاستغفار — "مَنْ أَكْثَرَ مِنَ الِاسْتِغْفَارِ جَعَلَ اللَّهُ لَهُ مِنْ كُلِّ هَمٍّ فَرَجًا"`,
];

// Evening messages (18:00–22:00)
const eveningMessages = [
    `🌙 أمسيت في اليوم ${dayNum} من ذي الحجة — احمد الله على نعمة إدراك هذه الأيام`,
    `🤲 ادعُ الله بعد المغرب — من أكثر من الصلاة على النبي ﷺ كفاه الله همومه`,
    `📿 أكثر من التكبير في المساء: الله أكبر كبيراً والحمد لله كثيراً`,
    `🌟 تأمل ما أنجزت اليوم وجدّد نيتك لغد أفضل — هذه الأيام لا تعود`,
    `🙌 اختم يومك بالاستغفار — "مَنْ قَالَ: أَسْتَغْفِرُ اللَّهَ العَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الحَيَّ القَيُّومَ وَأَتُوبُ إِلَيْهِ — غُفِرَ لَهُ"`,
];

// ── FCM HTTP v1 Send ──────────────────────────────────────────────────────────
const { GoogleAuth } = require('google-auth-library');

let _fcmAccessToken = null;

async function getAccessToken() {
    if (!_fcmAccessToken) {
        const auth = new GoogleAuth({
            credentials: SERVICE_ACCOUNT,
            scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
        });
        const client = await auth.getClient();
        const { token } = await client.getAccessToken();
        _fcmAccessToken = token;
    }
    return _fcmAccessToken;
}

async function sendPush(heading, body_text, collapseId) {
    const accessToken = await getAccessToken();
    const payload = {
        message: {
            topic: 'daily-reminders',
            notification: {
                title: heading,
                body: body_text,
            },
            webpush: {
                notification: {
                    icon: 'https://noor-nights.github.io/assets/icons/icon-512.png',
                    badge: 'https://noor-nights.github.io/assets/icons/icon-96-mono.png',
                    tag: collapseId,
                    silent: false,
                    vibrate: [200, 100, 200],
                },
                fcm_options: { link: 'https://noor-nights.github.io' },
            },
        },
    };

    const res = await fetch(
        `https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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

async function sendOneSignalPush(heading, body_text) {
    const appId = process.env.ONESIGNAL_APP_ID;
    const apiKey = process.env.ONESIGNAL_REST_API_KEY;
    if (!appId || !apiKey) {
        console.warn('⚠️  OneSignal env vars not set — skipping OneSignal send');
        return;
    }
    const res = await fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${apiKey}`,
        },
        body: JSON.stringify({
            app_id: appId,
            included_segments: ['All'],
            headings: { en: heading },
            contents: { en: body_text },
        }),
    });
    if (!res.ok) {
        const text = await res.text();
        console.warn(`⚠️  OneSignal HTTP ${res.status}: ${text}`);
        return;
    }
    const data = await res.json();
    console.log(`✅ OneSignal delivered — recipients: ${data.recipients ?? '?'}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
    console.log(`\n🚀 Running — ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')} Cairo | ${inDhulHijjah ? `Day ${dayNum} of Dhul Hijjah` : 'Regular day'}`);

    // ── Prayer time check — always runs, year-round ───────────────────────────
    const prayerTimes = await getCairoPrayerTimes();
    const matchedPrayer = prayerTimes ? getPrayerAtTime(prayerTimes, hours, minutes) : null;

    if (matchedPrayer && prayerNotifications[matchedPrayer]) {
        const { heading, body } = prayerNotifications[matchedPrayer];
        console.log(`🕌 Prayer time matched: ${matchedPrayer} — sending prayer notification`);
        try {
            await sendPush(heading, body, `prayer-${matchedPrayer}-${_nowUTC.toISOString().slice(0,10)}`);
        } catch (err) {
            console.error('❌ Prayer notification error:', err.message);
        }
        await sendOneSignalPush(heading, body).catch((err) => console.warn('⚠️  OneSignal prayer error:', err.message));
    }

    // ── Dhul Hijjah dhikr messages — only during the 10 days ─────────────────
    if (!inDhulHijjah) {
        console.log('📅 Outside Dhul Hijjah — prayer check done, skipping dhikr message.');
        return;
    }

    // ── Dhikr fires once per hour (at minute 0) ──────────────────────────────
    if (minutes !== 0) {
        console.log(`⏱ Minute ${minutes} — prayer check done, skipping dhikr message.`);
        return;
    }

    // ── Active hours guard (05:00–22:00 for regular days; Day 9 stops at Maghrib ~20:00) ──
    // Day 9 after Maghrib: Arafa window has closed — no more reminders.
    // hours >= 20 is used as proxy for "after Maghrib" (Cairo Maghrib ≈ 19:30 in late May UTC+3).
    if (dayNum === 9 && hours >= 20) {
        console.log(`🌙 Arafa Day ended after Maghrib — no more hourly reminders.`);
        return;
    }
    if (hours < 5 || hours > 22) {
        console.log(`🌙 Outside active hours — prayer check done, skipping general message.`);
        return;
    }

    // ── Regular hourly notification ────────────────────────────────────────────
    let heading, body_text;

    if (dayNum === 10) {
        // ── EID AL-ADHA ──────────────────────────────────────────────────────────
        heading   = '🎉 عيد الأضحى المبارك! تقبّل الله منا ومنكم';
        body_text = 'عيد مبارك! 🕋 صلِّ صلاة العيد، وقدّم الأضحية إن استطعت، وأسعد من حولك. تقبّل الله منا ومنكم صالح الأعمال. كل عام وأنتم بخير 🤍';

    } else if (dayNum === 9) {
        // ── ARAFAH DAY (05:00–19:59 Cairo, stops at Maghrib) ────────────────────
        const dua = arafahDuas[hours % arafahDuas.length];
        let arafahMsg;
        if (hours < 10) {
            arafahMsg = '🌅 يوم عرفة بدأ — صم اليوم وأكثر من الدعاء. اللهم أعتق رقابنا من النار.';
        } else if (hours < 15) {
            arafahMsg = '🕋 أفضل الدعاء دعاء يوم عرفة — لا تفتر لسانك عن ذكر الله واللهج بالدعاء.';
        } else if (hours < 18) {
            arafahMsg = '⏳ الساعة الذهبية تقترب — الساعة الأخيرة قبل الغروب أعظم أوقات الدعاء. هيّئ قلبك وارفع يديك.';
        } else {
            // 18:00–19:59: Peak golden hour — Maghrib is imminent, this is the most answered window
            arafahMsg = '🌟 الآن — أعظم دقائق يوم عرفة. ارفع يديك وادعُ الله قبل المغرب. اللهم إنك عفو كريم تحب العفو فاعف عنا.';
        }
        heading   = `⭐ يوم عرفة — أعظم يوم في السنة`;
        body_text = `${arafahMsg}\n\n"${dua}"`;

    } else if (dayNum === 8 && hours >= 20) {
        // ── ARAFA EVE (tonight, Day 8 after Maghrib ~19:30) ─────────────────────
        const eveMsg = arafahEveMessages[hours % arafahEveMessages.length];
        const eveDua = arafahEveDuas[hours % arafahEveDuas.length];
        heading   = '🌙 ليلة عرفة — غداً أعظم يوم';
        body_text = `${eveMsg}\n\n"${eveDua}"`;

    } else {
        // ── REGULAR DAYS 1–8 ─────────────────────────────────────────────────────
        let msgPool;
        if      (hours < 11) msgPool = morningMessages;
        else if (hours < 15) msgPool = middayMessages;
        else if (hours < 18) msgPool = afternoonMessages;
        else                 msgPool = eveningMessages;

        const msg = msgPool[(dayNum + hours) % msgPool.length];
        const dua = dhDuas[(dayNum + hours) % dhDuas.length];

        heading   = `🕋 اليوم ${dayNum} من ذي الحجة`;
        body_text = `${msg}\n\n"${dua}"`;
    }

    console.log(`📣 Sending hourly message...`);
    if (dayNum === 9) console.log(`⭐ ARAFAH DAY — ${hours >= 18 ? 'peak golden-hour message' : 'using Arafa duas'}`);
    if (dayNum === 8 && hours >= 20) console.log('🌙 ARAFA EVE — sending arafa-eve warmup');
    if (dayNum === 10) console.log('🎉 EID — sending Eid greeting');

    try {
        await sendPush(heading, body_text, `dh-day${dayNum}-hour${hours}`);
    } catch (err) {
        console.error('❌ Hourly notification error:', err.message);
    }
    await sendOneSignalPush(heading, body_text).catch((err) => console.warn('⚠️  OneSignal dhikr error:', err.message));
}

main();
