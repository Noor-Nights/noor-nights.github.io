// automated_hourly_push.js
// GitHub Actions CRON job — runs every hour, year-round.
// Prayer time notifications: sent every day when Cairo prayer hour matches.
// Dhul Hijjah messages: only sent during the 10 blessed days (May 18–27, 2026).
// Special handling: Day 9 = Arafah (peak duas all day), Day 10 = Eid al-Adha greeting.

const fs = require('fs');
const path = require('path');

const APP_ID = process.env.ONESIGNAL_APP_ID;
if (!APP_ID) {
    console.error('❌ ONESIGNAL_APP_ID is not set. Skipping.');
    process.exit(1);
}

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
    console.error('❌ ONESIGNAL_REST_API_KEY is not set. Skipping.');
    process.exit(1);
}

// ── Time Setup (Cairo = Africa/Cairo, GMT+3 in summer) ──────────────────────
const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo' }));
const hours = now.getHours();
const time  = now.getTime();

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
    const day   = now.getDate();
    const month = now.getMonth() + 1;
    const year  = now.getFullYear();
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

function getPrayerAtHour(times, hour) {
    for (const [key, timeStr] of Object.entries(times)) {
        const [h] = timeStr.split(':').map(Number);
        if (h === hour) return key;
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

// ── OneSignal Send ─────────────────────────────────────────────────────────────
async function sendPush(heading, body_text, collapseId) {
    const payload = {
        app_id: APP_ID,
        included_segments: ['All'],
        headings:  { en: heading,    ar: heading },
        contents:  { en: body_text,  ar: body_text },
        url: 'https://noor-nights.github.io',
        chrome_web_icon:  'https://noor-nights.github.io/assets/icons/icon-512.png',
        chrome_web_badge: 'https://noor-nights.github.io/assets/icons/icon-96-mono.png',
        firefox_icon:     'https://noor-nights.github.io/assets/icons/icon-512.png',
        large_icon:       'https://noor-nights.github.io/assets/icons/icon-512.png',
        collapse_id: collapseId,
    };

    const res = await fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Key ${REST_API_KEY}`
        },
        body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.id) {
        console.log(`✅ Delivered! Notification ID: ${data.id}`);
    } else {
        console.error('❌ Delivery failed:', JSON.stringify(data));
    }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
    console.log(`\n🚀 Running — ${hours}:00 Cairo | ${inDhulHijjah ? `Day ${dayNum} of Dhul Hijjah` : 'Regular day'}`);

    // ── Prayer time check — always runs, year-round ───────────────────────────
    const prayerTimes = await getCairoPrayerTimes();
    const matchedPrayer = prayerTimes ? getPrayerAtHour(prayerTimes, hours) : null;

    if (matchedPrayer && prayerNotifications[matchedPrayer]) {
        const { heading, body } = prayerNotifications[matchedPrayer];
        console.log(`🕌 Prayer time matched: ${matchedPrayer} — sending prayer notification`);
        try {
            await sendPush(heading, body, `prayer-${matchedPrayer}-${now.toISOString().slice(0,10)}`);
        } catch (err) {
            console.error('❌ Prayer notification error:', err.message);
        }
    }

    // ── Dhul Hijjah dhikr messages — only during the 10 days ─────────────────
    if (!inDhulHijjah) {
        console.log('📅 Outside Dhul Hijjah — prayer check done, skipping dhikr message.');
        return;
    }

    // ── Active hours guard for general dhikr messages (05:00–22:00 only) ────────
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
        // ── ARAFAH DAY ───────────────────────────────────────────────────────────
        const dua = arafahDuas[hours % arafahDuas.length];
        let arafahMsg;
        if (hours < 10) {
            arafahMsg = '🌅 يوم عرفة بدأ — صم اليوم وأكثر من الدعاء. اللهم أعتق رقابنا من النار.';
        } else if (hours < 15) {
            arafahMsg = '🕋 أفضل الدعاء دعاء يوم عرفة — لا تفتر لسانك عن ذكر الله واللهج بالدعاء.';
        } else if (hours < 18) {
            arafahMsg = '⏳ الساعة الذهبية تقترب — الساعة الأخيرة قبل الغروب أعظم أوقات الدعاء. هيّئ قلبك وارفع يديك.';
        } else {
            arafahMsg = '🌙 انتهى يوم عرفة المبارك — الله أعتق فيه عباداً من النار أكثر من أي يوم. تقبّل الله منا.';
        }
        heading   = `⭐ يوم عرفة — أعظم يوم في السنة`;
        body_text = `${arafahMsg}\n\n"${dua}"`;

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
    if (dayNum === 9) console.log('⭐ ARAFAH DAY — using special duas');
    if (dayNum === 10) console.log('🎉 EID — sending Eid greeting');

    try {
        await sendPush(heading, body_text, `dh-day${dayNum}-hour${hours}`);
    } catch (err) {
        console.error('❌ Hourly notification error:', err.message);
    }
}

main();
