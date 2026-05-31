// ═══════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════
const CONFIG = {
    TARGET_DATE: "2026-03-09T17:54:00+02:00",
    DHUL_HIJJAH_START: "2026-05-17T19:30:00+02:00", // Night of 1 Dhul Hijjah 1447 AH — Islamic day begins at Maghrib (Egypt ~19:30)
    //WT_TEST_DAY: 9, // TESTING ONLY — remove before launch (forces tracker to show this day)
    ONESIGNAL_APP_ID: "520970e9-567b-4556-8022-3093a50b765f",
    SUPABASE_URL: '__SUPABASE_URL__',
    SUPABASE_ANON_KEY: '__SUPABASE_ANON_KEY__',
};

// ═══════════════════════════════════════════════════
// INTERNATIONALIZATION (i18n) — EN / AR
// ═══════════════════════════════════════════════════
const TRANSLATIONS = {
    en: {
        appName: 'Noor Nights',
        subtitle: 'Illuminate your worship, every day',
        installBtn: '📲 Install App',
        countdownTitle: '⏳ Countdown to the Nights',
        calculating: 'Calculating...',
        untilBegin: 'Until Last Ten Nights of Ramadan begin (Egypt Time)',
        days: 'Days', hours: 'Hours', mins: 'Mins', secs: 'Secs',
        aboutTitle: '🌟 About Noor Nights',
        aboutText1: 'Noor Nights is your daily worship companion — built to help you stay spiritually consistent every day of the year. The Prophet ﷺ said: "The most beloved deeds to Allah are those done regularly, even if they are few." (Bukhari & Muslim)',
        aboutText2: 'Track your daily worship goals, receive prayer time reminders for Cairo, make dhikr with the tasbeeh counter, access comprehensive prophetic supplications (Jawami\' ad-Du\'a), and share duas with the community — every single day.',
        aboutText3: 'Please keep the developer and all those involved in your sincere prayers.',
        closeBtn: 'Close',
        okBtn: 'OK',
        aboutToggleLabel: 'About',
        navHome: 'Home', navTracker: 'Tracker', navDhikr: 'Dhikr', navDuas: 'Duas', navMore: 'Settings',
        badgeStripLabel: 'Badges', badgeStripCta: 'View all →',
        ptCardTitle: 'Prayer Times',
        ptNotifyHint: '📲 Install the app to receive prayer reminders',
        sectionLabelSettings: 'Settings',
        sectionLabelAbout: 'About',
        settingsTitle: 'Settings',
        settingsLang: 'Language', settingsLangSub: 'English / العربية',
        settingsLocation: 'Prayer Location', settingsNotif: 'Prayer Reminders',
        settingsNotifSub: 'Toggle per-prayer reminders',
        settingsManageBtn: 'Manage →',
        settingsDailyNotif: 'Daily Reminders',
        settingsDailyNotifSub: 'Prayers, azkar & more',
        settingsShare: 'Share App',
        settingsShareSub: 'Spread the reward — share with family & friends',
        settingsShareBtn: '🔗 Share',
        ptTestBtn: '🧪 Test',
        ptDetectBtn: '📍 Change',
        ptDetecting: 'Detecting…',
        ptLocationUpdated: 'Location Updated',
        ptGeoError: 'Could not detect location',
        ptGeoDenied: 'Location permission denied',
        ptReminderSetTitle: '🔔 Prayer Reminder Set',
        ptReminderSetMsg: (name) => `You'll be notified at ${name} time — keep the app open in your browser.`,
        ptReminderOffTitle: '🔕 Reminder Removed',
        ptReminderOffMsg: (name) => `Reminder for ${name} turned off.`,
        onboardingTitle: 'Daily Worship Companion',
        onboardingBody: 'The Prophet ﷺ said: "The most beloved deeds to Allah are those done regularly, even if they are few." Noor Nights helps you build that consistency — every single day.',
        onboardingF1: 'Get prayer time reminders for all 5 daily prayers',
        onboardingF2: 'Make dhikr, read duas, track your worship',
        onboardingF3: 'Share a dua — your brothers & sisters say Ameen',
        onboardingF4: 'Install the app for reliable background reminders',
        onboardingBtn: 'Begin — بسم الله →',
        modalTitle: 'Message',
        notifyBtn: '🔔 Enable',
        notifyEnabled: '✅ Notifications Enabled',
        testBtn: '🧪 Send Test Notification',
        checklistTitle: '✅ Worship Checklist',
        tasks: [
            { id: 'cb-taraweeh', icon: '🕌', text: 'Pray Taraweeh' },
            { id: 'cb-qiyam', icon: '🌌', text: 'Pray Qiyam' },
            { id: 'cb-dua', icon: '🤲', text: 'Make Dua' },
            { id: 'cb-sadaqah', icon: '🎁', text: 'Give Sadaqah' },
            { id: 'cb-quran', icon: '📖', text: 'Recite Quran' }
        ],
        progressText: (c, tot) => `${c} of ${tot} tasks completed today`,
        calendarTitle: '📅 Add to My Calendar',
        calendarDesc: 'Get daily prayer-time reminders for all 5 prayers — including dhikr prompts and du\'a suggestions (Egypt timezone).',
        calendarBtn: '📅 Download Calendar (.ics)',
        essentialTitle: '🤲 Essential Duas',
        jamawiTitle: "Prophetic Duas",
        jamawiSubtitle: "Comprehensive prayers from the Prophet (ﷺ)",
        nightStatus: (n) => `Tonight is Night ${n} of 10`,
        nightSubStatus: 'Make the most of it 🌙',
        reminderActive: '🔔 Reminders Active!',
        reminderMsg: "You'll receive a dua reminder while this tab is open.",
        notifTitle: 'Noor Nights 🌙',
        reminderNum: (n, msg) => `🌙 Reminder #${n} — ${msg}`,
        denied: 'Denied',
        deniedMsg: 'We need permission to send you reminders.',
        error: 'Error',
        errorMsg: 'Your browser does not support notifications.',
        mashaallah: "Masha'Allah! ✨",
        mashaallahMsg: "You've completed all your worship goals for tonight. May Allah accept from you!",
        showMore: (n) => `📖 Show ${n} more duas`,
        showLess: '🔼 Show less',
        earlyMessages: [
            "🤲 Pour your heart out in Dua right now.",
            "🎁 Don't forget your Sadaqah for today.",
            "✨ Focus on your Dua and Sadaqah today.",
            "📿 Say Allahu Akbar, Alhamdulillah, La ilaha illallah."
        ],
        lateMessages: [
            "🌙 Make the most of this blessed day with dhikr.",
            "🌟 Keep your tongue moist with the remembrance of Allah.",
            "✨ These are the greatest days — make every moment count."
        ],
        actShareFull: 'Share Dua',
        actShareCard: 'Share',
        actCopy: 'Copy',
        footerMemory: 'In loving memory of',
        footerName: 'YOUSSEF ABDELKADER',
        footerSadaqah: 'This app is Sadaqah Jariyah (ongoing charity) for him.',
        shareDuaBtn: 'Share Dua',
        footerCanvas: 'Noor Nights App • Sadaqah Jariyah for Youssef Abdelkader',
        blessingTitle: 'The Blessing of Sharing Duas',
        blessingDesc1: 'Sharing a dua can uplift anyone who sees it during their day—reminding them to turn back to Allah, calming their heart, or inspiring them to make their own dua.',
        blessingHadith1: '"Whoever guides someone to goodness will have a reward like the one who did it." (Sahih Muslim)',
        blessingHadith2: '"When a servant dies, his deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for him." (Sahih Muslim)',
        blessingFooter: 'Every dua you share may inspire someone else—and you share in their reward.',
        footerMadeWith: 'Made with ♥️ for every believer.',

        permNeeded: '🔔 Permission Required',
        permNeededAndroid: '👉 On Android: Tap the 🔒 in your browser address bar → Site Settings → Notifications → Allow. Then try again.',
        permNeededIOS: '👉 On iPhone: Add the app to your Home Screen first, then try enabling reminders inside the installed app.',
        permNeededDesktop: '👉 Click the 🔒 in your browser address bar → Site Settings → Notifications → Allow. Then try again.',
        subActivated: '🔔 Reminders Enabled!',
        subActivatedMsg: 'Jazakallah Khayran! 🤲 You\'ll receive daily prayer time reminders and spiritual messages.',
        downloadAppTitle: '📲 Get the Noor Nights App',
        downloadAppDesc: 'Install Noor Nights directly on your device for the best experience and reliable background notifications.',
        installAndroidBtn: '🤖 Install App (1-Click)',
        installIOSStep1: '1. Tap the Share icon at the bottom of Safari.',
        installIOSStep2: '2. Scroll down and tap',
        installIOSNote: '⚠️ Safari is required. Notifications only work after adding to Home Screen.',
        copiedTitle: '✅ Copied!',
        copiedMsg: 'Dua copied to clipboard.',
        actionReqTitle: 'Action Required',
        actionReqMsg: 'On iPhone, notifications ONLY work after you "Add to Home Screen". Please tap "Install App" to see how!',
        notSuppTitle: 'Not Supported',
        notSuppMsg: 'This browser does not support desktop notifications.',
        deniedTitle: 'Denied',
        deniedBodyMsg: 'We need permission to send you a test notification. Please check your browser settings.',
        blockedTitle: 'Blocked',
        blockedMsg: 'Notifications are blocked. Please reset your browser permissions for this site to test.',
        notifSentTitle: 'Notification Sent',
        notifSentMsg: 'Masha\'Allah! Check your device. This is the official, clean notification design with our new icon.',
        installAppTitle: 'Install App',
        installAppMsg: 'Please use your browser menu to "Install App" or "Add to Home Screen".',
        calName: 'Noor Nights',
        calDesc: 'Noor Nights — Daily Prayer & Dhikr Reminders',
        dhPrayers: { fajr: 'Fajr', dhuhr: 'Dhuhr', asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha' },
        dhCalPrayerSummary: (n, p) => `☪️ ${p} | Dhikr & Dua`,
        dhCalPrayerDesc: 'Glorify Allah after prayer: Takbeer (الله أكبر), Tahmeed (الحمد لله), Tahleel (لا إله إلا الله), Tasbeeh (سبحان الله).',
        dhCalArafaAfterFajrSummary: '🌅 Day of Arafa — After Fajr | Begin with Dhikr',
        dhCalArafaAfterFajrDesc: 'The best day of the year has begun. Repeat 100×: «لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير». Fast if not on Hajj.',
        dhCalArafaDhuhrSummary: '🕋 Day of Arafa — Dhuhr | Keep Supplicating',
        dhCalArafaDhuhrDesc: '"The best dua is the dua of the Day of Arafa." (Tirmidhi). Do not let your tongue stop remembering Allah.',
        dhCalArafaAsrSummary: '⏳ Day of Arafa — Asr | Golden Hour is Near',
        dhCalArafaAsrDesc: 'Intensify your Dua now. The most powerful window of Arafa — the final hour before Maghrib — is drawing near. Prepare your heart.',
        dhCalArafaGoldenSummary: '🌟 Day of Arafa — Final Hour | Pour Your Heart in Dua',
        dhCalArafaGoldenDesc: 'The most powerful moment of the year. Raise your hands and call upon Allah. Ask for forgiveness, your parents, family, and the Ummah. «اللهم إنك عفو تحب العفو فاعف عني».',
        dhCalArafaMaghribSummary: '🌙 Day of Arafa — Maghrib | Break Your Fast',
        dhCalArafaMaghribDesc: 'The blessed day of Arafa has ended. Break your fast and say: «اللهم لك صمت وعلى رزقك أفطرت». May Allah accept your fasting and duas.',
        dhCalArafaIshaSummary: '✨ Arafa Night — Isha | Continue in Dua',
        dhCalArafaIshaDesc: 'The blessings of Arafa extend into the night. Continue your supplication and end the day with gratitude and istighfar.',
        calEventTitle: (n, msg) => `Night ${n} - ${msg}`,
        calEventDesc: (n) => `Night ${n} of 10`,
        calSuccessTitle: '🎉 Successfully Downloaded!',
        calGoogleTitle: 'Google Calendar:',
        calGoogleStep1: 'Go to <b>Settings</b> > <b>Import & Export</b>.',
        calGoogleStep2: 'Upload <code>noor-nights.ics</code>.',
        calAppleTitle: 'Apple Calendar (Mac):',
        calAppleStep1: 'Double-click the file or drag into Calendar.',
        calAppleStep2: 'Select a destination calendar and click <b>OK</b>.',

        tasbeehTitle: 'Tasbeeh Counter',
        tasbeehGoal: 'Set Goal',
        tasbeehReset: 'Reset',
        tasbeehPhrase: 'Select Dhikr',
        tasbeehIncrement: 'Tap to count · Long-press to reset',
        tasbeehCompleted: 'Masha\'Allah! Goal Reached ✨',
        tasbeehReminder: 'Have you completed your Tasbeeh goal tonight 🌙?',
        phrases: {
            subhanallah: 'SubhanAllah',
            alhamdulillah: 'Alhamdulillah',
            allahuakbar: 'Allahu Akbar',
            laillahaillallah: 'La ilaha illallah',
            astaghfirullah: 'Astaghfirullah',
            salawat: 'Salawat on the Prophet ﷺ',
            hawqala: 'La hawla wa la quwwata illa billah'
        },
        tasbeehShare: 'Share Milestone',
        tasbeehResetSuccess: 'All counters have been reset to zero.',

        dhulHijjahTitle: '📅 Upcoming Blessed Days',
        dhulHijjahSubStatus: 'Umm al-Qura Calendar (Egypt Time)',
        qjTrackWorship: '✓ Track Worship',
        qjOpenDuas: '🤲 Open Duas',
        dhulHijjahMotivation: '✨ Every day is an opportunity to draw closer to Allah.',
        dhulHijjahChallenge: (n) => `🌟 Only ${n} day${n !== 1 ? 's' : ''} left! Begin your daily spiritual challenge.`,
        dhulHijjahBegun: '🕋 The blessed days have begun! Make every moment count. Allahu Akbar!',
        dhulHijjahProgress: (pct) => `${pct}% of the way there`,

        wtCardTitle: 'Worship Tracker',
        badgeSectionTitle: 'Worship Badges',
        badgeSectionSubtitle: 'Earn badges by completing your daily worship goals',

        vcTitle: 'Virtue of the Day',
        vcShare: '📤 Share',

        propheticDuasLabel: 'Prophetic Duas',
        dcTitle: 'Dua Companion',
        dcProgress: (n, t) => `${n} of ${t} duas made`,
        dcAddBtn: '+ Add Custom Dua',
        dcAddPlaceholder: 'Write your personal dua...',
        dcAddSave: 'Save',
        dcAddCancel: 'Cancel',
        dcAddModalTitle: 'Add Personal Dua',
        dcSharedTitle: '🌍 Community Dua Wall',
        dcSharePlaceholder: 'Write a dua — the community will say Ameen for you 🤲',
        dcShareBtn: 'Share',
        dcSharedEmpty: 'No duas shared yet. Be the first to make dua for the community.',
        dcSharedCount: (n) => `${n} duas shared`,

        dhikrSectionVirtuous: 'Most Virtuous Remembrances',
        dhikrSectionAfterPrayer: 'After Every Prayer',
        dhikrSectionMorningEvening: 'Morning & Evening',
        dhikrSectionDhulHijjah: 'Takbeer',
        dhikrSectionProtection: 'Daily Protection',
        dhikrVirtue: 'Virtue',
        dhikrTimes: 'times',

    },
    ar: {
        appName: 'ليالي النور',
        subtitle: 'أنِر عبادتك كل يوم',
        installBtn: '📲 تثبيت التطبيق',
        countdownTitle: '⏳ العد التنازلي للليالي',
        calculating: 'جارٍ الحساب...',
        untilBegin: 'حتى بدء العشر الأواخر من رمضان (توقيت مصر)',
        days: 'أيام', hours: 'ساعات', mins: 'دقائق', secs: 'ثواني',
        aboutTitle: '🌟 عن تطبيق ليالي النور',
        aboutText1: 'ليالي النور رفيقك اليومي في العبادة — صُمِّم ليساعدك على الاستمرار في العبادة كل يوم من أيام السنة. قال النبي ﷺ: "أحب الأعمال إلى الله أدومها وإن قل." (البخاري ومسلم)',
        aboutText2: 'تتبّع أهداف عبادتك اليومية، واحصل على تذكيرات أوقات الصلاة للقاهرة، وسبّح بالسبحة الرقمية، واستفد من جوامع الأدعية النبوية الشاملة، وشارك أدعيتك مع المجتمع — كل يوم.',
        aboutText3: 'نسألكم الدعاء بظهر الغيب لمن صمم ونشر هذا العمل.',
        closeBtn: 'إغلاق',
        okBtn: 'موافق',
        aboutToggleLabel: 'عن التطبيق',
        navHome: 'الرئيسية', navTracker: 'العبادة', navDhikr: 'الذكر', navDuas: 'الأدعية', navMore: 'الإعدادات',
        badgeStripLabel: 'الأوسمة', badgeStripCta: 'عرض الكل ←',
        ptCardTitle: 'أوقات الصلاة',
        ptNotifyHint: '📲 ثبّت التطبيق لاستقبال تذكيرات أوقات الصلاة',
        sectionLabelSettings: 'الإعدادات',
        sectionLabelAbout: 'عن التطبيق',
        settingsTitle: 'الإعدادات',
        settingsLang: 'اللغة', settingsLangSub: 'English / العربية',
        settingsLocation: 'موقع أوقات الصلاة', settingsNotif: 'تذكيرات الصلاة',
        settingsNotifSub: 'فعّل تذكيرات كل صلاة',
        settingsManageBtn: '← إدارة',
        settingsDailyNotif: 'التذكيرات اليومية',
        settingsDailyNotifSub: 'صلوات وأذكار وأكثر',
        settingsShare: 'شارك التطبيق',
        settingsShareSub: 'انشر الأجر — شارك مع العائلة والأصدقاء',
        settingsShareBtn: '🔗 مشاركة',
        ptTestBtn: '🧪 اختبار',
        ptDetectBtn: '📍 تغيير',
        ptDetecting: 'جارٍ التحديد…',
        ptLocationUpdated: 'تم تحديث الموقع',
        ptGeoError: 'تعذّر تحديد الموقع',
        ptGeoDenied: 'تم رفض إذن الموقع',
        ptReminderSetTitle: '🔔 تذكير الصلاة مفعّل',
        ptReminderSetMsg: (name) => `ستُنبَّه عند وقت ${name} — ابقِ التطبيق مفتوحًا في المتصفح.`,
        ptReminderOffTitle: '🔕 تم إيقاف التذكير',
        ptReminderOffMsg: (name) => `تم إيقاف تذكير صلاة ${name}.`,
        onboardingTitle: 'رفيقك اليومي في العبادة',
        onboardingBody: 'قال النبي ﷺ: «أحب الأعمال إلى الله أدومها وإن قل». ليالي النور يساعدك على بناء هذا الاستمرار — كل يوم.',
        onboardingF1: 'احصل على تذكيرات أوقات الصلوات الخمس',
        onboardingF2: 'سبّح وادعُ وتتبّع عبادتك',
        onboardingF3: 'شارك دعاءك — إخوانك يقولون آمين',
        onboardingF4: 'ثبّت التطبيق للتذكيرات في الخلفية',
        onboardingBtn: '← ابدأ — بسم الله',
        modalTitle: 'رسالة',
        notifyBtn: '🔔 تفعيل',
        notifyEnabled: '✅ تم تفعيل الإشعارات',
        testBtn: '🧪 إرسال إشعار تجريبي',
        checklistTitle: '✅ قائمة العبادات',
        tasks: [
            { id: 'cb-taraweeh', icon: '🕌', text: 'صلاة التراويح' },
            { id: 'cb-qiyam', icon: '🌌', text: 'صلاة القيام' },
            { id: 'cb-dua', icon: '🤲', text: 'الدعاء' },
            { id: 'cb-sadaqah', icon: '🎁', text: 'إخراج الصدقة' },
            { id: 'cb-quran', icon: '📖', text: 'تلاوة القرآن' }
        ],
        progressText: (c, tot) => `أُنجز ${c} من ${tot} مهام اليوم`,
        calendarTitle: '📅 أضف إلى التقويم',
        calendarDesc: 'احصل على تذكيرات وقت الصلاة لأيام ذي الحجة العشرة — مع أدعية خاصة وتذكير الساعة الذهبية ليوم عرفة (توقيت مصر).',
        calendarBtn: '📅 تحميل التقويم (.ics)',
        essentialTitle: '🤲 أدعية أساسية',
        jamawiTitle: 'جوامع الدعاء',
        jamawiSubtitle: 'أدعية جامعة من النبي ﷺ',
        nightStatus: (n) => `الليلة هي الليلة ${n} من العشر`,
        nightSubStatus: 'استثمرها 🌙',
        reminderActive: '🔔 التذكيرات مفعّلة!',
        reminderMsg: 'ستتلقى تذكيراً بالدعاء طالما هذا التبويب مفتوح.',
        notifTitle: 'ليالي النور 🌙',
        reminderNum: (n, msg) => `🌙 تذكير #${n} — ${msg}`,
        denied: 'مرفوض',
        deniedMsg: 'نحتاج إذناً لإرسال التذكيرات.',
        error: 'خطأ',
        errorMsg: 'متصفحك لا يدعم الإشعارات.',
        mashaallah: 'ما شاء الله! ✨',
        mashaallahMsg: 'أتممت جميع أهداف العبادة لهذه الليلة. تقبّل الله منك!',
        showMore: (n) => `📖 عرض ${n} دعاء إضافياً`,
        showLess: '🔼 عرض أقل',
        earlyMessages: [
            "🤲 أفرغ قلبك في الدعاء الآن.",
            "🎁 لا تنسَ صدقتك لهذا اليوم.",
            "✨ ركّز على الدعاء والصدقة اليوم.",
            "📿 قل: الله أكبر، الحمد لله، لا إله إلا الله."
        ],
        lateMessages: [
            "🌙 استثمر هذا اليوم المبارك بالذكر والدعاء.",
            "🌟 أكثر من ذكر الله في هذه الأيام الفاضلة.",
            "✨ هذه أفضل الأيام — لا تدع لحظة تمر دون عبادة."
        ],
        actShareFull: 'مشاركة الدعاء',
        actShareCard: 'مشاركة',
        actCopy: 'نسخ',
        footerMemory: 'صدقة جارية عن روح',
        footerName: 'يوسف عبد القادر',
        footerSadaqah: 'هذَا التطبيق صدقة جاريةٌ له.',
        shareDuaBtn: 'شارك الدعاء',
        footerCanvas: 'تطبيق ليالي النور • صدقة جارية عن روح يوسف عبد القادر',
        blessingTitle: 'بركة مشاركة الدعاء',
        blessingDesc1: 'مشاركة الدعاء قد تشرح صدر من يقرأه في يومه، وتذكره بالرجوع إلى الله، وتُسكن قلبه، أو تُلهمه ليدعو بدوره.',
        blessingHadith1: '"مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ" (صحيح مسلم)',
        blessingHadith2: '"إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ: إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ" (صحيح مسلم)',
        blessingFooter: 'كل دعاء تشاركه قد يُلهم غيرك — فتنال من أجرهم الجميل.',
        footerMadeWith: 'صُنع بـ ❤️ لكل مؤمن.',

        permNeeded: '🔔 إذن مطلوب',
        permNeededAndroid: '👉 على أندرويد: اضغط على 🔒 في شريط العنوان ← إعدادات الموقع ← الإشعارات ← سماح. ثم حاول مجدداً.',
        permNeededIOS: '👉 على آيفون: أضف التطبيق إلى شاشة الرئيسية أولاً، ثم فعّل التذكيرات من داخل التطبيق المثبت.',
        permNeededDesktop: '👉 انقر على 🔒 في شريط العنوان ← إعدادات الموقع ← الإشعارات ← سماح. ثم حاول مجدداً.',
        subActivated: '🔔 تم تفعيل التذكيرات!',
        subActivatedMsg: 'جزاك الله خيرًا! 🤲 ستصلك تذكيرات أوقات الصلاة اليومية ورسائل روحانية.',
        downloadAppTitle: '📲 احصل على تطبيق ليالي النور',
        downloadAppDesc: 'قم بتثبيت التطبيق على جهازك للحصول على أفضل تجربة وإشعارات خلفية موثوقة.',
        installAndroidBtn: '🤖 تثبيت التطبيق بضغطة واحدة',
        installIOSStep1: '1. اضغط على أيقونة المشاركة أسفل متصفح سفاري.',
        installIOSStep2: '2. مرر لأسفل واضغط على',
        installIOSNote: '⚠️ متصفح سفاري مطلوب. الإشعارات تعمل فقط بعد الإضافة للشاشة الرئيسية.',
        copiedTitle: '✅ تم النسخ!',
        copiedMsg: 'تم نسخ الدعاء إلى الحافظة.',
        actionReqTitle: 'إجراء مطلوب',
        actionReqMsg: 'على آيفون، الإشعارات تعمل فقط بعد الإضافة للشاشة الرئيسية. الرجاء النقر على "تثبيت التطبيق" لتعرف كيف!',
        notSuppTitle: 'غير مدعوم',
        notSuppMsg: 'هذا المتصفح لا يدعم الإشعارات المكتبية.',
        deniedTitle: 'مرفوض',
        deniedBodyMsg: 'نحتاج لإذن لإرسال إشعار تجريبي. الرجاء التحقق من إعدادات المتصفح الخاصة بك.',
        blockedTitle: 'محظور',
        blockedMsg: 'الإشعارات محظورة. يرجى إعادة تعيين أذونات المتصفح لهذا الموقع للتجربة.',
        notifSentTitle: 'تم إرسال الإشعار',
        notifSentMsg: 'ما شاء الله! تحقق من جهازك. هذا هو تصميم الإشعار الرسمي النظيف مع أيقونتنا الجديدة.',
        installAppTitle: 'تثبيت التطبيق',
        installAppMsg: 'الرجاء استخدام قائمة المتصفح لـ "تثبيت التطبيق" أو "الإضافة للشاشة الرئيسية".',
        calName: 'ليالي النور',
        calDesc: 'ليالي النور — تذكيرات الصلاة والذكر اليومية',
        dhPrayers: { fajr: 'الفجر', dhuhr: 'الظهر', asr: 'العصر', maghrib: 'المغرب', isha: 'العشاء' },
        dhCalPrayerSummary: (n, p) => `☪️ ${p} | ذكر ودعاء`,
        dhCalPrayerDesc: 'سبّح الله بعد الصلاة: التكبير (الله أكبر)، التحميد (الحمد لله)، التهليل (لا إله إلا الله)، التسبيح (سبحان الله).',
        dhCalArafaAfterFajrSummary: '🌅 يوم عرفة — بعد الفجر | ابدأ بالذكر',
        dhCalArafaAfterFajrDesc: 'بدأ أفضل أيام السنة. قل ١٠٠ مرة: «لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير». صم إن لم تكن حاجاً.',
        dhCalArafaDhuhrSummary: '🕋 يوم عرفة — الظهر | واصل الدعاء والذكر',
        dhCalArafaDhuhrDesc: '"أفضل الدعاء دعاء يوم عرفة." (الترمذي). لا تُفتر لسانك عن ذكر الله.',
        dhCalArafaAsrSummary: '⏳ يوم عرفة — العصر | اقترب وقت الذروة',
        dhCalArafaAsrDesc: 'شدّد دعاءك الآن. اقترب أعظم وقت في يوم عرفة — الساعة الأخيرة قبل المغرب. أعدّ قلبك.',
        dhCalArafaGoldenSummary: '🌟 يوم عرفة — الساعة الأخيرة | أفرغ قلبك في الدعاء',
        dhCalArafaGoldenDesc: 'أقوى لحظة في العام. ارفع يديك وادعُ الله. اسأله المغفرة لك ولوالديك وللأمة. «اللهم إنك عفو تحب العفو فاعف عني».',
        dhCalArafaMaghribSummary: '🌙 يوم عرفة — المغرب | أفطر وأنهِ يومك',
        dhCalArafaMaghribDesc: 'انتهى يوم عرفة المبارك. أفطر وقل: «اللهم لك صمت وعلى رزقك أفطرت». تقبّل الله صيامك ودعاءك.',
        dhCalArafaIshaSummary: '✨ ليلة عرفة — العشاء | واصل الدعاء والاستغفار',
        dhCalArafaIshaDesc: 'بركات يوم عرفة تمتد إلى الليل. واصل دعاءك وأكثر من الاستغفار واختم يومك بالشكر والذكر.',
        calEventTitle: (n, msg) => `الليلة ${n} - ${msg}`,
        calEventDesc: (n) => `الليلة ${n} من 10`,
        calSuccessTitle: '🎉 تم التحميل بنجاح!',
        calGoogleTitle: 'تقويم جوجل:',
        calGoogleStep1: 'اذهب إلى <b>الإعدادات</b> > <b>استيراد وتصدير</b>.',
        calGoogleStep2: 'قم برفع ملف <code>noor-nights.ics</code>.',
        calAppleTitle: 'تقويم آبل (ماك):',
        calAppleStep1: 'انقر مرتين على الملف أو اسحبه إلى التقويم.',
        calAppleStep2: 'اختر تقويم الوجهة وانقر على <b>موافق (OK)</b>.',

        tasbeehTitle: 'مسبحة الأذكار',
        tasbeehGoal: 'تحديد الهدف',
        tasbeehReset: 'إعادة ضبط',
        tasbeehPhrase: 'اختر الذكر',
        tasbeehIncrement: 'اضغط للعدّ · اضغط مطولاً للإعادة',
        tasbeehCompleted: 'ما شاء الله! تم الوصول للهدف ✨',
        tasbeehReminder: 'هل أتممت أذكارك الليلة؟ 🌙',
        phrases: {
            subhanallah: 'سبحان الله',
            alhamdulillah: 'الحمد لله',
            allahuakbar: 'الله أكبر',
            laillahaillallah: 'لا إله إلا الله',
            astaghfirullah: 'أستغفر الله',
            salawat: 'الصلاة على النبي ﷺ',
            hawqala: 'لا حول ولا قوة إلا بالله'
        },
        tasbeehShare: 'مشاركة الإنجاز',
        tasbeehResetSuccess: 'تم إعادة ضبط جميع العدادات إلى الصفر.',

        dhulHijjahTitle: '📅 الأيام المباركة القادمة',
        dhulHijjahSubStatus: 'تقويم أم القرى (توقيت مصر)',
        qjTrackWorship: '✓ تتبع العبادة',
        qjOpenDuas: '🤲 فتح الأدعية',
        dhulHijjahMotivation: '✨ كل يوم فرصة للتقرب من الله.',
        dhulHijjahChallenge: (n) => `🌟 تبقّى ${n} يوم فقط! ابدأ تحديّك الروحاني اليومي.`,
        dhulHijjahBegun: '🕋 بدأت الأيام المباركة! اغتنم كل لحظة. الله أكبر!',
        dhulHijjahProgress: (pct) => `${pct}٪ من الطريق`,

        wtCardTitle: 'متتبع العبادة',
        badgeSectionTitle: 'شارات العبادة',
        badgeSectionSubtitle: 'احصل على الشارات بإتمام أهداف عبادتك اليومية',

        vcTitle: 'فضيلة اليوم',
        vcShare: '📤 مشاركة',

        propheticDuasLabel: 'أدعية نبوية',
        dcTitle: 'رفيق الدعاء',
        dcProgress: (n, t) => `${n} من ${t} أدعية`,
        dcAddBtn: '+ إضافة دعاء شخصي',
        dcAddPlaceholder: 'اكتب دعاءك الشخصي...',
        dcAddSave: 'حفظ',
        dcAddCancel: 'إلغاء',
        dcAddModalTitle: 'إضافة دعاء شخصي',
        dcSharedTitle: '🌍 جدار الدعاء المجتمعي',
        dcSharePlaceholder: 'اكتب دعاءً — سيقول له المجتمع آمين 🤲',
        dcShareBtn: 'مشاركة',
        dcSharedEmpty: 'لا توجد أدعية مشاركة بعد. كن أول من يدعو للمجتمع.',
        dcSharedCount: (n) => `${n} دعاء مشارَك`,

        dhikrSectionVirtuous: 'أفضل الأذكار',
        dhikrSectionAfterPrayer: 'بعد كل صلاة',
        dhikrSectionMorningEvening: 'أذكار الصباح والمساء',
        dhikrSectionDhulHijjah: 'التكبير',
        dhikrSectionProtection: 'الحماية اليومية',
        dhikrVirtue: 'الفضل',
        dhikrTimes: 'مرة',

    }
};

// Auto-detect browser language on first launch (when no preference is saved)
let currentLang = (() => {
    const saved = localStorage.getItem('noor-lang');
    if (saved) return saved;
    const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return browser.startsWith('ar') ? 'ar' : 'en';
})();

// Arabic-Indic numeral formatter — converts digits when lang is Arabic
const _AR_DIGITS = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
function numFmt(n) {
    if (currentLang !== 'ar') return String(n);
    return String(n).replace(/\d/g, d => _AR_DIGITS[d]);
}

function t(key, ...args) {
    const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
    const val = (lang[key] !== undefined && lang[key] !== '') ? lang[key] : TRANSLATIONS.en[key];
    if (typeof val === 'function') return val(...args);
    return val;
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('noor-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        // If element has child elements (e.g. chevron spans), only update the text nodes
        if (el.children.length > 0) {
            // Replace first text node only
            for (const node of el.childNodes) {
                if (node.nodeType === Node.TEXT_NODE) {
                    node.textContent = t(el.getAttribute('data-i18n')) + ' ';
                    break;
                }
            }
        } else {
            el.textContent = t(el.getAttribute('data-i18n'));
        }
    });
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'العربية' : 'English';
    updateCountdown();
    loadChecklist();
    const notifyBtn = document.getElementById('notify-btn');
    if (notifyBtn) _updateNotifyBtnState(notifyBtn, notifyBtn.dataset.subscribed === 'true');

    const memBanner = document.querySelector('.memorial-text');
    if (memBanner) memBanner.textContent = lang === 'ar'
        ? 'هذا التطبيق صدقة جارية عن روح يوسف عبد القادر — رحمه الله 🤲'
        : 'This app is Sadaqah Jariyah for Youssef Abdelkader — may Allah have mercy on him 🤲';

    // Re-render Dynamic Dua content so buttons and labels update
    if (typeof renderAllDuas === 'function') {
        renderAllDuas();
    }
    updateTasbeehUI();
    if (worshipTracker) worshipTracker.renderSection();
    if (badgeSystem) { badgeSystem.renderSection(); badgeSystem.renderStrip(); }
    if (virtueCards) virtueCards.renderSection();
    if (duaCompanion) duaCompanion.renderSection();
    if (prayerWidget) prayerWidget.render();
    renderHijriDate();
    _updateSettingsCard(lang);
}

function toggleLanguage() {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
    window.dispatchEvent(new Event('languageChanged'));
    trackEvent('/lang-toggle', 'Language Toggle');
}

// ═══════════════════════════════════════════════════
// ANALYTICS EVENT TRACKING (GoatCounter)
// ═══════════════════════════════════════════════════
window.trackEvent = function (path, title) {
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path, title, event: true });
    }
}
function trackEvent(path, title) { window.trackEvent(path, title); }

let currentYoussefIdx = (() => {
    let d = new Date();
    if (d.getHours() >= 18) d.setDate(d.getDate() + 1); // Islamic day begins at Maghrib (approx 18:00)
    
    // Calculate days since epoch accurately using local time offset to avoid UTC Midnight skips
    const localEpochMs = d.getTime() - (d.getTimezoneOffset() * 60000);
    return Math.floor(localEpochMs / 86400000) % youssefDuas.length;
})();


// ═══════════════════════════════════════════════════
// DUA USE-CASE TAGS
// ═══════════════════════════════════════════════════
const DUA_TAGS = {
    laylatul:  { en: ['Forgiveness', 'Night'], ar: ['مغفرة', 'الليل'] },
    istighfar: { en: ['Forgiveness', 'Daily'], ar: ['استغفار', 'يومي'] },
    goodness:  { en: ['General', 'Dunya & Akhirah'], ar: ['عام', 'الدنيا والآخرة'] },
    parents:   { en: ['Parents', 'Family'], ar: ['الوالدان', 'الأسرة'] },
    guidance:  { en: ['Guidance', 'Taqwa'], ar: ['هداية', 'تقوى'] },
    jannah:    { en: ['Paradise', 'Protection'], ar: ['الجنة', 'حماية'] },
    deeds:     { en: ['Acceptance', 'Worship'], ar: ['قبول', 'عبادة'] },
    gratitude: { en: ['Gratitude', 'Dhikr'], ar: ['شكر', 'ذكر'] },
};

// ═══════════════════════════════════════════════════
// DUA CAROUSEL (Jawami' section)
// ═══════════════════════════════════════════════════
const WATERCOLOR_PALETTES = [
    { blob1: 'rgba(251,191,36,0.09)', blob2: 'rgba(124,58,237,0.07)', border: 'rgba(251,191,36,0.18)' },
    { blob1: 'rgba(20,184,166,0.08)', blob2: 'rgba(251,191,36,0.07)', border: 'rgba(20,184,166,0.18)' },
    { blob1: 'rgba(168,85,247,0.08)', blob2: 'rgba(20,184,166,0.07)', border: 'rgba(168,85,247,0.18)' },
    { blob1: 'rgba(245,158,11,0.08)', blob2: 'rgba(168,85,247,0.07)', border: 'rgba(245,158,11,0.18)' },
    { blob1: 'rgba(16,185,129,0.08)', blob2: 'rgba(251,191,36,0.07)', border: 'rgba(16,185,129,0.18)' },
];

function shareFullDua(prefix, idx) {
    const list = prefix === 'jaw' ? jawamiDuas : essentialDuas;
    const dua = list[idx];
    const text = dua.arabic.replace(/\n/g, '<br>') + (dua.english ? '\n\n' + dua.english : '');
    if (navigator.share) {
        navigator.share({ title: 'Noor Nights 🌙', text, url: window.location.href }).catch(() => { });
    } else {
        navigator.clipboard.writeText(text)
            .then(() => showMessage(t('copiedTitle'), t('copiedMsg')))
            .catch(() => showMessage('Dua', text));
    }
    trackEvent('/share-image-card', `Share card: ${prefix}_${list[idx].badge}`);
    trackEvent('/share-full-dua', 'Share Full Dua');
}

function renderDuaCarousel(list, containerId, prefix) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const body = container.querySelector('.card-body');
    // Clear existing content for re-rendering
    const existingCarousel = body.querySelector('.dua-carousel');
    if (existingCarousel) existingCarousel.remove();

    let currentSlide = 0;

    const carousel = document.createElement('div');
    carousel.className = 'dua-carousel';
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-label', 'Dua carousel');

    const track = document.createElement('div');
    track.className = 'dua-carousel-track';

    list.forEach((dua, idx) => {
        const pal = WATERCOLOR_PALETTES[idx % WATERCOLOR_PALETTES.length];
        const night = getCurrentNight();
        const nightHTML = night ? `<div class="night-badge-ui">${t('nightStatus', night)}</div>` : '';

        const slide = document.createElement('div');
        slide.className = 'dua-slide';
        slide.style.setProperty('--blob1', pal.blob1);
        slide.style.setProperty('--blob2', pal.blob2);
        slide.style.setProperty('--card-border', pal.border);
        slide.setAttribute('aria-label', 'Dua ' + (idx + 1));

        const englishDiv = dua.english ? `<div class="dua-english-main"></div>` : '';
        const duaTags = dua.id ? DUA_TAGS[dua.id] : null;
        const isAr = currentLang === 'ar';
        const tagHtml = duaTags
            ? `<div class="dua-tags-row">${(isAr ? duaTags.ar : duaTags.en).map(tag => `<span class="dua-tag">${tag}</span>`).join('')}</div>`
            : '';
        slide.innerHTML = `
            <div class="dua-slide-inner">
                ${nightHTML}
                <div class="dua-arabic-main"></div>
                ${englishDiv}
                ${tagHtml}
                <div class="dua-badge-row"><span class="slide-badge"></span></div>
                <div class="slide-actions">
                    <button class="slide-btn" onclick="shareImage('${prefix}', ${idx})" aria-label="Share card image">
                        <span class="slide-btn-icon">📄</span>
                        <span class="slide-btn-label">${t('actShareCard')}</span>
                    </button>
                    <button class="slide-btn" onclick="copyText('${prefix}', ${idx})" aria-label="${t('actCopy')} dua text">
                        <span class="slide-btn-icon">📋</span>
                        <span class="slide-btn-label">${t('actCopy')}</span>
                    </button>
                </div>
            </div>`;
        slide.querySelector('.dua-arabic-main').textContent = dua.arabic;
        if (dua.english) slide.querySelector('.dua-english-main').textContent = dua.english;
        slide.querySelector('.slide-badge').textContent = dua.badge;

        track.appendChild(slide);
    });

    carousel.appendChild(track);

    // Navigation bar
    const nav = document.createElement('div');
    nav.className = 'carousel-nav';
    const prevId = 'cprev-' + containerId;
    const nextId = 'cnext-' + containerId;
    const countId = 'ccount-' + containerId;
    nav.innerHTML =
        '<button class="carousel-nav-btn" id="' + prevId + '" aria-label="Previous dua">&#8249;</button>' +
        '<span class="carousel-counter" id="' + countId + '">1 / ' + list.length + '</span>' +
        '<button class="carousel-nav-btn" id="' + nextId + '" aria-label="Next dua">&#8250;</button>';
    carousel.appendChild(nav);
    body.appendChild(carousel);

    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    const countEl = document.getElementById(countId);

    function goToSlide(idx) {
        currentSlide = Math.max(0, Math.min(idx, list.length - 1));
        const isRtl = document.documentElement.dir === 'rtl';
        const sign = isRtl ? 1 : -1;
        track.style.transform = `translateX(${sign * currentSlide * 100}%)`;
        countEl.textContent = (currentSlide + 1) + ' / ' + list.length;
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === list.length - 1;


        trackEvent('/carousel-swipe', 'Carousel: dua ' + (currentSlide + 1));
    }

    // Give it a tiny delay on first render so DOM can size elements
    setTimeout(() => goToSlide(0), 50);

    window.addEventListener('languageChanged', () => goToSlide(currentSlide));

    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Touch / swipe support
    let startX = 0, startY = 0;
    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });
    track.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
            const isRtl = document.documentElement.dir === 'rtl';
            if (isRtl) {
                goToSlide(dx > 0 ? currentSlide + 1 : currentSlide - 1);
            } else {
                goToSlide(dx < 0 ? currentSlide + 1 : currentSlide - 1);
            }
        }
    }, { passive: true });
}

const JAWAMI_PREVIEW = 3; // cards visible before "Show more"

function renderDuaList(list, containerId, prefix, cardColors, collapsible) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const body = container.querySelector('.card-body');
    // Clear existing cards for re-rendering (keeping the title if it's there)
    const existingCards = body.querySelectorAll('.dua-card, .dua-toggle-btn');
    existingCards.forEach(c => c.remove());

    const colors = cardColors || ['var(--win-blue)', 'var(--win-pink)', 'var(--win-green)', 'var(--win-orange)'];

    list.forEach((dua, idx) => {
        const card = document.createElement('div');
        card.className = 'dua-card';
        // If collapsible, hide cards beyond the preview count initially
        if (collapsible && idx >= JAWAMI_PREVIEW) {
            card.classList.add('dua-card--hidden');
        }

        const night = getCurrentNight();
        const nightHTML = night ? `<div class="night-badge-ui" style="margin-bottom: 10px; opacity: 0.8;">${t('nightStatus', night)}</div>` : '';

        card.innerHTML = `
            <div class="card-header" style="background: ${colors[idx % colors.length]}"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <div class="card-body">
                ${nightHTML}
                <span class="badge" style="background: ${colors[(idx + 1) % colors.length]}"></span>
                <div class="arabic-text"></div>
                ${dua.english ? `<div class="translation"></div>` : ''}
                <div class="share-buttons">
                    <button class="btn btn-share" onclick="shareImage('${prefix}', ${idx})">📤 ${t('actShareCard')}</button>
                    <button class="btn btn-share" onclick="copyText('${prefix}', ${idx})">📋 ${t('actCopy')}</button>
                </div>
            </div>
        `;
        card.querySelector('.badge').textContent = dua.badge;
        card.querySelector('.arabic-text').textContent = dua.arabic;
        if (dua.english) card.querySelector('.translation').textContent = dua.english;
        body.appendChild(card);
    });

    // Add Show More / Show Less toggle for collapsible lists
    if (collapsible && list.length > JAWAMI_PREVIEW) {
        const remaining = list.length - JAWAMI_PREVIEW;
        let expanded = false;

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'btn btn-outline dua-toggle-btn';
        toggleBtn.id = `toggle-${containerId}`;
        toggleBtn.textContent = t('showMore', remaining);

        toggleBtn.addEventListener('click', () => {
            expanded = !expanded;
            body.querySelectorAll('.dua-card--hidden, .dua-card--visible-extra');
            if (expanded) {
                body.querySelectorAll('.dua-card--hidden').forEach(c => {
                    c.classList.remove('dua-card--hidden');
                    c.classList.add('dua-card--visible-extra');
                });
                toggleBtn.textContent = t('showLess');
            } else {
                body.querySelectorAll('.dua-card--visible-extra').forEach((c) => {
                    c.classList.remove('dua-card--visible-extra');
                    c.classList.add('dua-card--hidden');
                });
                toggleBtn.textContent = t('showMore', remaining);
                // Scroll back to section header smoothly
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        body.appendChild(toggleBtn);
    }
}

function rotateYoussefDua() {
    currentYoussefIdx = (currentYoussefIdx + 1) % youssefDuas.length;
    const ar = document.getElementById('youssef-dua-arabic');
    const en = document.getElementById('youssef-dua-english');
    if (ar && en) {
        ar.innerText = youssefDuas[currentYoussefIdx].arabic;
        en.innerText = `"${youssefDuas[currentYoussefIdx].english}"`;
    }
}

function showMessage(title, text) {
    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-desc');
    const modalEl = document.getElementById('msg-modal');
    if (titleEl && descEl && modalEl) {
        titleEl.innerText = title;
        descEl.innerText = text;
        modalEl.style.display = 'flex';
    } else {
        alert(title + ": " + text);
    }
}

function copyText(type, idx) {
    let list = type === 'ess' ? essentialDuas : jawamiDuas;
    let text = `${list[idx].badge}\n\n${list[idx].arabic}\n\n"${list[idx].english}"\n\n- From the Noor Nights App`;
    navigator.clipboard.writeText(text);
    showMessage(t('copiedTitle'), t('copiedMsg'));
}

/* Canvas Generation Logic for Sharing */
function getWrappedLines(ctx, text, maxWidth) {
    if (!text || text === '""') return [];
    const words = text.split(' ');
    let lines = [];
    let line = '';
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
            lines.push(line.trim());
            line = words[n] + ' ';
        } else {
            line = testLine;
        }
    }
    if (line.trim()) lines.push(line.trim());
    return lines;
}

function getCurrentNight() {
    const targetDate = new Date(CONFIG.TARGET_DATE).getTime();
    const distance = targetDate - getCurrentTime();
    if (distance < 0) {
        const n = Math.floor(Math.abs(distance) / 86400000) + 1;
        if (n <= 10) return n;
    }
    return null;
}

async function generateCanvasBlob(arabic, english, badge, isYoussef) {
    await document.fonts.ready;

    const W = 1080, H = 1350;
    const canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    const GOLD = '#c5a352';

    // ── Background ────────────────────────────────────────
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0,   '#060919');
    bg.addColorStop(0.5, '#0b1230');
    bg.addColorStop(1,   '#060818');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Gold radial glow at top
    const glow = ctx.createRadialGradient(W / 2, 220, 0, W / 2, 220, 520);
    glow.addColorStop(0, 'rgba(197,163,82,0.28)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H * 0.65);

    // Bottom vignette
    const vign = ctx.createRadialGradient(W / 2, H, 0, W / 2, H, 440);
    vign.addColorStop(0, 'rgba(5,3,1,0.5)');
    vign.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = vign;
    ctx.fillRect(0, H * 0.6, W, H * 0.4);

    // ── Stars ─────────────────────────────────────────────
    let rng = (arabic.charCodeAt(0) || 42) * 17239 + 42;
    const rn = () => { rng = (Math.imul(rng, 1664525) + 1013904223) >>> 0; return rng / 0xffffffff; };
    for (let i = 0; i < 80; i++) {
        const sx = rn() * W, sy = rn() * H;
        const sr = rn() > 0.85 ? 1.4 : rn() > 0.55 ? 0.85 : 0.5;
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(0.12 + rn() * 0.55).toFixed(2)})`;
        ctx.fill();
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // ── Icon ──────────────────────────────────────────────
    const iy = 175;
    ctx.beginPath(); ctx.arc(W / 2, iy, 64, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(197,163,82,0.14)'; ctx.fill();
    ctx.strokeStyle = 'rgba(197,163,82,0.45)'; ctx.lineWidth = 2; ctx.stroke();
    ctx.font = '60px serif';
    ctx.fillText('🤲', W / 2, iy + 2);

    // ── Badge / title ─────────────────────────────────────
    let topTitle = badge;
    if (isYoussef) {
        topTitle = currentLang === 'ar' ? '🤲 دعاء خاص لروح يوسف عبد القادر' : '🤲 Special Dua for Youssef Abdelkader';
    }
    ctx.font = 'bold 34px "Mulish", sans-serif';
    ctx.fillStyle = '#e8d195';
    ctx.fillText(topTitle, W / 2, 270);

    // ── Top separator ─────────────────────────────────────
    _vcSep(ctx, W / 2, 320, 320, GOLD);

    // ── Arabic text ───────────────────────────────────────
    const cleanAr = arabic.replace(/<br>/g, ' ').replace(/\n+/g, ' ');
    const tmpC = document.createElement('canvas').getContext('2d');
    let arFs = cleanAr.length > 200 ? 46 : cleanAr.length > 100 ? 52 : 58;
    tmpC.font = `bold ${arFs}px "Amiri", serif`;
    let arLines = getWrappedLines(tmpC, cleanAr, 920);
    if (arLines.length > 5) { arFs = 42; tmpC.font = `bold ${arFs}px "Amiri", serif`; arLines = getWrappedLines(tmpC, cleanAr, 920); }
    const arLH = Math.round(arFs * 1.8);

    ctx.direction = 'rtl';
    ctx.font = `bold ${arFs}px "Amiri", serif`;
    ctx.fillStyle = '#f2ece0';
    const arStartY = 380;
    arLines.forEach((line, i) => ctx.fillText(line, W / 2, arStartY + i * arLH + arLH / 2));
    ctx.direction = 'ltr';

    let curY = arStartY + arLines.length * arLH + 36;

    // ── Bottom separator ──────────────────────────────────
    _vcSep(ctx, W / 2, curY, 240, GOLD);
    curY += 46;

    // ── English translation ───────────────────────────────
    if (english) {
        const enText = `"${english}"`;
        tmpC.font = 'bold 30px "Mulish", sans-serif';
        const enLines = getWrappedLines(tmpC, enText, 900);
        ctx.font = 'bold 30px "Mulish", sans-serif';
        ctx.fillStyle = 'rgba(240,225,190,0.85)';
        enLines.forEach((line, i) => ctx.fillText(line, W / 2, curY + 20 + i * 46));
        curY += enLines.length * 46 + 30;
    }

    // ── Footer ────────────────────────────────────────────
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, H - 155); ctx.lineTo(W - 60, H - 155); ctx.stroke();

    ctx.font = 'bold 34px "Mulish", sans-serif';
    ctx.fillStyle = 'rgba(197,163,82,0.95)';
    ctx.fillText('🌙 Noor Nights', W / 2, H - 112);

    ctx.font = '22px "Mulish", sans-serif';
    ctx.fillStyle = 'rgba(220,200,155,0.75)';
    ctx.fillText('Noor Nights — Daily Worship Companion', W / 2, H - 72);

    ctx.font = 'italic 19px "Mulish", sans-serif';
    ctx.fillStyle = 'rgba(210,188,140,0.55)';
    ctx.fillText('Sadaqah Jariyah for Youssef Abdelkader', W / 2, H - 40);

    return new Promise(resolve => {
        try { canvas.toBlob(resolve, 'image/jpeg', 0.92); }
        catch (e) { resolve(null); }
    });
}


// ─────────────────────────────────────────────────────────────────────────────
// VIRTUE CARD SHARE IMAGE — bespoke dark canvas, no external image dependency
// ─────────────────────────────────────────────────────────────────────────────
function _hexRgba(hex, a) {
    const n = parseInt(hex.replace('#', ''), 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function _vcSep(ctx, cx, y, hw, color) {
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cx - hw, y); ctx.lineTo(cx - 14, y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + 14, y); ctx.lineTo(cx + hw, y); ctx.stroke();
    ctx.translate(cx, y);
    ctx.rotate(Math.PI / 4);
    ctx.fillStyle = _hexRgba(color, 0.6);
    ctx.fillRect(-4.5, -4.5, 9, 9);
    ctx.restore();
}

async function generateVCBlob(card, lang) {
    await document.fonts.ready;

    const W = 1080, H = 1350;
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H;
    const ctx = cv.getContext('2d');
    const c = card.color;

    // ── Background gradient ───────────────────────────────
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0,   '#060919');
    bg.addColorStop(0.5, '#0b1230');
    bg.addColorStop(1,   '#060818');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Accent radial glow at top — each card's own color
    const glow = ctx.createRadialGradient(W / 2, 210, 0, W / 2, 210, 540);
    glow.addColorStop(0, _hexRgba(c, 0.32));
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H * 0.65);

    // Warm subtle vignette at bottom
    const vign = ctx.createRadialGradient(W / 2, H, 0, W / 2, H, 440);
    vign.addColorStop(0, 'rgba(5,3,1,0.5)');
    vign.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = vign;
    ctx.fillRect(0, H * 0.6, W, H * 0.4);

    // ── Stars — deterministic per card.day ───────────────
    let rng = card.day * 17239 + 42;
    const rn = () => { rng = (Math.imul(rng, 1664525) + 1013904223) >>> 0; return rng / 0xffffffff; };
    for (let i = 0; i < 80; i++) {
        const sx = rn() * W, sy = rn() * H;
        const sr = rn() > 0.85 ? 1.4 : rn() > 0.55 ? 0.85 : 0.5;
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(0.12 + rn() * 0.55).toFixed(2)})`;
        ctx.fill();
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // ── Icon circle ───────────────────────────────────────
    const iy = 180;
    ctx.beginPath(); ctx.arc(W / 2, iy, 70, 0, Math.PI * 2);
    ctx.fillStyle = _hexRgba(c, 0.18); ctx.fill();
    ctx.strokeStyle = _hexRgba(c, 0.5); ctx.lineWidth = 2; ctx.stroke();
    ctx.font = '68px serif';
    ctx.fillText(card.icon, W / 2, iy + 2);

    // ── Day badge ─────────────────────────────────────────
    const dayLbl = lang === 'ar'
        ? (card.hijriDate || `بطاقة ${card.day}`)
        : (card.hijriDate || `Card ${card.day}`);
    ctx.font = 'bold 36px "Inter", sans-serif';
    ctx.fillStyle = '#e8d195';
    ctx.fillText(dayLbl, W / 2, 276);

    ctx.font = '24px "Amiri", serif';
    ctx.fillStyle = 'rgba(220,195,140,0.58)';
    ctx.fillText(card.hijriDate, W / 2, 318);

    // ── Separator ─────────────────────────────────────────
    _vcSep(ctx, W / 2, 358, 340, c);

    // ── Arabic verse ──────────────────────────────────────
    const arabicRaw = card.source.arabic.replace(/<br>/g, ' ');
    const tmpC = document.createElement('canvas').getContext('2d');
    let arFs = arabicRaw.length > 120 ? 46 : arabicRaw.length > 60 ? 52 : 60;
    tmpC.font = `bold ${arFs}px "Amiri", serif`;
    let arLines = getWrappedLines(tmpC, arabicRaw, 920);
    if (arLines.length > 4) {
        arFs = 42;
        tmpC.font = `bold ${arFs}px "Amiri", serif`;
        arLines = getWrappedLines(tmpC, arabicRaw, 920);
    }
    const arLH = Math.round(arFs * 1.78);

    ctx.direction = 'rtl';
    ctx.font = `bold ${arFs}px "Amiri", serif`;
    ctx.fillStyle = '#f2ece0';
    const arStartY = 410;
    arLines.forEach((line, i) => ctx.fillText(line, W / 2, arStartY + i * arLH + arLH / 2));
    ctx.direction = 'ltr';

    let curY = arStartY + arLines.length * arLH + 30;

    // Reference
    ctx.font = 'italic 24px "Inter", sans-serif';
    ctx.fillStyle = _hexRgba(c, 0.72);
    ctx.fillText(`— ${card.source.reference}`, W / 2, curY + 12);
    curY += 52;

    // ── Separator ─────────────────────────────────────────
    _vcSep(ctx, W / 2, curY + 14, 230, c);
    curY += 50;

    // ── English translation ───────────────────────────────
    const enText = `"${card.source.translation.en}"`;
    tmpC.font = 'bold 32px "Inter", sans-serif';
    const enLines = getWrappedLines(tmpC, enText, 900);
    ctx.font = 'bold 32px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(240,225,190,0.88)';
    enLines.forEach((line, i) => ctx.fillText(line, W / 2, curY + 24 + i * 48));
    curY += enLines.length * 48 + 44;

    // ── Virtue snippet (2 lines max) ──────────────────────
    const virtueRaw = lang === 'ar' ? card.virtue.ar : card.virtue.en;
    tmpC.font = 'italic 26px "Inter", sans-serif';
    const allVLines = getWrappedLines(tmpC, virtueRaw, lang === 'ar' ? 820 : 860);
    const vLines = allVLines.slice(0, 2);
    if (allVLines.length > 2) vLines[1] = vLines[1].replace(/\s\S+$/, '') + '…';

    const vbH = vLines.length * 38 + 10;
    ctx.fillStyle = _hexRgba(c, 0.45);

    if (lang === 'ar') {
        ctx.direction = 'rtl';
        ctx.fillRect(W - 103, curY - 4, 3, vbH);
        ctx.font = 'italic 26px "Inter", sans-serif';
        ctx.fillStyle = 'rgba(210,188,148,0.66)';
        ctx.textAlign = 'right';
        vLines.forEach((line, i) => ctx.fillText(line, W - 122, curY + 15 + i * 38));
        ctx.direction = 'ltr';
        ctx.textAlign = 'center';
    } else {
        ctx.fillRect(100, curY - 4, 3, vbH);
        ctx.font = 'italic 26px "Inter", sans-serif';
        ctx.fillStyle = 'rgba(210,188,148,0.66)';
        ctx.textAlign = 'left';
        vLines.forEach((line, i) => ctx.fillText(line, 120, curY + 15 + i * 38));
        ctx.textAlign = 'center';
    }

    // ── Footer ────────────────────────────────────────────
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(60, H - 165); ctx.lineTo(W - 60, H - 165); ctx.stroke();

    ctx.font = 'bold 36px "Inter", sans-serif';
    ctx.fillStyle = _hexRgba(c, 0.95);
    ctx.fillText('🌙 Noor Nights', W / 2, H - 122);

    ctx.font = '23px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(220,200,155,0.78)';
    ctx.fillText('Noor Nights — Daily Worship Companion', W / 2, H - 80);

    ctx.font = 'italic 20px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(210,188,140,0.58)';
    ctx.fillText('Sadaqah Jariyah for Youssef Abdelkader', W / 2, H - 46);

    return new Promise(resolve => {
        try { cv.toBlob(resolve, 'image/jpeg', 0.92); }
        catch (e) { resolve(null); }
    });
}


function triggerDownload(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function shareImage(type, idx) {
    let dua = type === 'ess' ? essentialDuas[idx] : jawamiDuas[idx];
    const blob = await generateCanvasBlob(dua.arabic.replace(/\n/g, '<br>'), `"${dua.english}"`, dua.badge, false);
    if (!blob) return;

    // Use ASCII only filename for better cross-browser compatibility
    const filename = `dua-${dua.badge.replace(/[^\x00-\x7F]/g, "").replace(/\s/g, '-')}.jpg`;
    const file = new File([blob], filename, { type: 'image/jpeg' });

    trackEvent('/share-image-card', `Share card: ${type}_${dua.badge}`);

    if (navigator.share) {
        try {
            // Check if file sharing is supported
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: dua.badge,
                    text: `${dua.badge}\n\nShared from the Noor Nights App 🌙`,
                });
                trackEvent('/share-image-success', `Success: ${dua.badge}`);
                return;
            } else {
                // If file sharing is not supported, try sharing text as fallback to at least show the app list
                await navigator.share({
                    title: dua.badge,
                    text: `${dua.badge}\n\n${dua.arabic}\n\nShared from the Noor Nights App 🌙`,
                    url: window.location.href
                });
                // After text share, we still trigger download because the user wants the CARD image
                const url = URL.createObjectURL(blob);
                triggerDownload(url, filename);
                setTimeout(() => URL.revokeObjectURL(url), 100);
                return;
            }
        } catch (err) {
            console.warn('Share menu closed or failed:', err);
            if (err.name === 'AbortError') return; // User cancelled
        }
    }

    // Direct download as ultimate fallback for Desktop or if sharing failed
    const url = URL.createObjectURL(blob);
    triggerDownload(url, filename);
    setTimeout(() => URL.revokeObjectURL(url), 100);
}


async function shareYoussef() {
    let dua = youssefDuas[currentYoussefIdx];
    const blob = await generateCanvasBlob(dua.arabic.replace(/\n/g, '<br>'), `"${dua.english}"`, "", true);
    if (!blob) return;

    const filename = 'dua-youssef.jpg';
    const file = new File([blob], filename, { type: 'image/jpeg' });

    if (navigator.share) {
        try {
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: 'Noor Nights',
                    text: 'Please make dua for Youssef Abdelkader 🤲',
                });
                return;
            } else {
                await navigator.share({
                    title: 'Noor Nights',
                    text: `🤲 ${dua.arabic}\n\nPlease make dua for Youssef Abdelkader`,
                    url: window.location.href
                });
                const url = URL.createObjectURL(blob);
                triggerDownload(url, filename);
                setTimeout(() => URL.revokeObjectURL(url), 100);
                return;
            }
        } catch (err) {
            if (err.name === 'AbortError') return;
        }
    }

    const url = URL.createObjectURL(blob);
    triggerDownload(url, filename);
    setTimeout(() => URL.revokeObjectURL(url), 100);
}


function getChecklistTasks() { return t('tasks'); }

function getCurrentTime() {
    let now = new Date();
    // Simulate current time for testing/development if needed
    // if (now.getTime() > new Date("2025-03-20T00:00:00+02:00").getTime()) {
    //     return new Date("2025-03-05T12:00:00+02:00").getTime();
    // }
    return now.getTime();
}

const targetDate = new Date(CONFIG.TARGET_DATE).getTime();

function updateCountdown() {
    const timerStatus = document.getElementById('countdown-status');
    const timerDisplay = document.getElementById('countdown-timer');
    if (!timerStatus || !timerDisplay) return;

    const distance = targetDate - getCurrentTime();
    if (distance < 0) {
        const n = Math.floor(Math.abs(distance) / 86400000) + 1;
        timerDisplay.style.display = 'none';

        timerStatus.textContent = '';
        if (n <= 10) {
            const spanMain = document.createElement('span');
            spanMain.style.fontSize = '1.8rem';
            spanMain.textContent = t('nightStatus', n);

            const breakEl = document.createElement('br');

            const spanSub = document.createElement('span');
            spanSub.style.fontSize = '1rem';
            spanSub.style.color = 'var(--text-muted)';
            spanSub.textContent = t('nightSubStatus');

            timerStatus.appendChild(spanMain);
            timerStatus.appendChild(breakEl);
            timerStatus.appendChild(spanSub);
        } else {
            timerStatus.textContent = t('concluded');
        }
        return;
    }

    const d = document.getElementById('days');
    const h = document.getElementById('hours');
    const m = document.getElementById('minutes');
    const s = document.getElementById('seconds');

    if (d) d.innerText = numFmt(String(Math.floor(distance / 86400000)).padStart(2, '0'));
    if (h) h.innerText = numFmt(String(Math.floor((distance % 86400000) / 3600000)).padStart(2, '0'));
    if (m) m.innerText = numFmt(String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0'));
    if (s) s.innerText = numFmt(String(Math.floor((distance % 60000) / 1000)).padStart(2, '0'));

    timerStatus.innerText = t('untilBegin');
}

// ═══════════════════════════════════════════════════
// WORSHIP TRACKER
// ═══════════════════════════════════════════════════
class WorshipTracker {
    constructor() {
        this.STORAGE_KEY = 'noor_tracker_daily';
        this.data = { days: {}, streaks: { current: 0, longest: 0 } };
        this._load();
    }

    _load() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved) {
                this.data = JSON.parse(saved);
                Object.values(this.data.days || {}).forEach(d => this._migrateDay(d));
            }
        } catch (e) { console.warn('WorshipTracker: failed to parse saved data', e); }
        this._calcStreaks();
    }

    _migrateDay(d) {
        if (!d.prayers) {
            const all = !!d.allPrayers;
            d.prayers = { fajr: all, dhuhr: all, asr: all, maghrib: all, isha: all };
            delete d.allPrayers;
        }
        if (d.tahajjud === undefined) d.tahajjud = false;
    }

    _save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    }

    getTodayKey() {
        const d = new Date(getCurrentTime());
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    // Legacy getter — provides numeric-keyed Dhul Hijjah 1447 data for the badge system
    get _dhulHijjahDays() {
        try {
            const saved = localStorage.getItem('noor_tracker_dhulhijjah_1447');
            return saved ? JSON.parse(saved).days : {};
        } catch { return {}; }
    }

    _initDay(key) {
        if (!this.data.days[key]) {
            this.data.days[key] = {
                prayers: { fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
                sunnahPrayers: false, tahajjud: false,
                quranJuz: 0, charity: false, fasting: false, tasbeeh: false, adhkar: false,
                completed: false
            };
        }
    }

    updateActivity(key, field, value) {
        this._initDay(key);
        const wasComplete = !!this.data.days[key].completed;
        const prevPct = this._dayPct(key);
        if (field.startsWith('prayer_')) {
            const prayerName = field.slice(7);
            if (!this.data.days[key].prayers) this.data.days[key].prayers = {};
            this.data.days[key].prayers[prayerName] = value;
        } else {
            this.data.days[key][field] = value;
        }
        this._checkCompletion(key);
        const nowComplete = !!this.data.days[key].completed;
        const newPct = this._dayPct(key);
        this._calcStreaks();
        this._save();
        if (!wasComplete && nowComplete) {
            this._showDayCompletePopup();
        } else if (!nowComplete) {
            this._checkMilestone(prevPct, newPct);
        }
        if (badgeSystem) badgeSystem.update();
    }

    _dayPct(key) {
        const d = this.data.days[key];
        if (!d) return 0;
        const p = d.prayers || {};
        const tasks = [p.fajr, p.dhuhr, p.asr, p.maghrib, p.isha, d.quranJuz > 0, d.charity, d.fasting, d.tasbeeh, d.adhkar];
        const done = tasks.filter(Boolean).length;
        return Math.round((done / tasks.length) * 100);
    }

    _checkMilestone(prev, next) {
        const lang = localStorage.getItem('noor-lang') || 'en';
        const isAr = lang === 'ar';
        if (prev < 50 && next >= 50) {
            this._showMilestoneToast(
                isAr ? '💪 نصف الطريق!' : '💪 Halfway there!',
                isAr ? 'أتممت نصف مهام اليوم — واصل!' : 'Half your daily tasks done — keep going!'
            );
        } else if (prev < 80 && next >= 80) {
            this._showMilestoneToast(
                isAr ? '⭐ قاب قوسين أو أدنى!' : '⭐ Almost there!',
                isAr ? 'تبقّى خطوة واحدة — أكمل يومك' : 'One task away from completing your day!'
            );
        }
    }

    _showMilestoneToast(title, msg) {
        document.querySelectorAll('.wt-milestone-toast').forEach(t => t.remove());
        const toast = document.createElement('div');
        toast.className = 'wt-milestone-toast';
        toast.innerHTML = `<strong>${title}</strong><span>${msg}</span>`;
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('wt-milestone-toast-in'));
        setTimeout(() => {
            toast.classList.remove('wt-milestone-toast-in');
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    _showDayCompletePopup() {
        _queueCelebration(() => this._doShowDayCompletePopup());
    }

    _doShowDayCompletePopup() {
        const lang = localStorage.getItem('noor-lang') || 'en';
        const isAr = lang === 'ar';
        const title = isAr ? '✅ يوم مكتمل!' : '✅ Day Complete!';
        const sub   = isAr
            ? 'أتممت مهام اليوم — جزاك الله خيراً!'
            : 'You completed all of today\'s goals — JazakAllah Khayran!';
        const dua   = isAr
            ? '«اللهم تقبّل منا إنك أنت السميع العليم»'
            : '"O Allah, accept from us. You are the All-Hearing, the All-Knowing."';

        document.getElementById('celebration-popup')?.remove();
        const popup = document.createElement('div');
        popup.id = 'celebration-popup';
        popup.className = 'celeb-popup';
        const reflectPrompt = isAr
            ? 'اكتب دعاءً من قلبك لهذا اليوم — إخوانك سيقولون آمين 🤲'
            : 'Write a dua from your heart for today — your brothers & sisters will say Ameen 🤲';
        const reflectPlaceholder = isAr ? 'اللهم...' : 'O Allah...';
        const reflectBtn = isAr ? 'شارك دعاءك ←' : 'Share your dua →';
        const skipBtn = isAr ? 'تخطّ' : 'Skip';

        popup.innerHTML = `
            <div class="celeb-backdrop"></div>
            <div class="celeb-box celeb-day" dir="${isAr ? 'rtl' : 'ltr'}">
                <button class="celeb-close" onclick="this.closest('#celebration-popup').remove()">&times;</button>
                <div class="celeb-glow celeb-glow-green"></div>
                <div class="celeb-emoji-big">🌟</div>
                <h2 class="celeb-title">${title}</h2>
                <p class="celeb-sub">${sub}</p>
                <p class="celeb-dua">${dua}</p>
                <div class="celeb-reflect">
                    <p class="celeb-reflect-prompt">${reflectPrompt}</p>
                    <textarea class="celeb-reflect-input" id="celeb-reflect-input" maxlength="200"
                        placeholder="${reflectPlaceholder}" dir="${isAr ? 'rtl' : 'ltr'}"></textarea>
                    <div class="celeb-reflect-actions">
                        <button class="btn celeb-reflect-submit" onclick="_submitReflectionDua(this)">${reflectBtn}</button>
                        <button class="celeb-reflect-skip" onclick="this.closest('#celebration-popup').remove()">${skipBtn}</button>
                    </div>
                </div>
            </div>`;
        document.body.appendChild(popup);

        // Don't auto-dismiss — user should consciously close or submit
        popup.querySelector('.celeb-backdrop').addEventListener('click', () => {
            popup.classList.add('celeb-out');
            setTimeout(() => popup.remove(), 400);
        });
    }

    _checkCompletion(key) {
        const d = this.data.days[key];
        if (!d) return;
        const p = d.prayers || {};
        d.completed = p.fajr && p.dhuhr && p.asr && p.maghrib && p.isha &&
                      d.quranJuz > 0 && d.charity && d.tasbeeh && d.adhkar;
    }

    _calcStreaks() {
        const today = this.getTodayKey();
        const keys = Object.keys(this.data.days).filter(k => k <= today).sort();
        let cur = 0, longest = this.data.streaks?.longest || 0, temp = 0;

        // Current streak: walk back from today; a missing day or incomplete day breaks it
        for (let i = 0; ; i++) {
            const k = this._offsetDay(today, -i);
            const d = this.data.days[k];
            if (!d || !d.completed) break;
            cur++;
        }

        // Longest streak: walk forward through sorted keys; calendar gaps break the run
        for (let i = 0; i < keys.length; i++) {
            if (i > 0) {
                const gap = Math.round((new Date(keys[i]) - new Date(keys[i - 1])) / 86400000);
                if (gap > 1) temp = 0;
            }
            if (this.data.days[keys[i]].completed) { temp++; longest = Math.max(longest, temp); }
            else temp = 0;
        }
        this.data.streaks = { current: cur, longest };
    }

    _offsetDay(dateStr, delta) {
        const d = new Date(dateStr);
        d.setDate(d.getDate() + delta);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    _streakEmoji(n) {
        if (n >= 10) return '🔥✨🏆';
        if (n >= 7)  return '🔥✨';
        if (n >= 5)  return '🔥🔥🔥';
        if (n >= 3)  return '🔥🔥';
        if (n >= 1)  return '🔥';
        return '';
    }

    _streakMsg(n, lang) {
        const msgs = {
            en: { 10: 'Perfect streak! 🎉🏆', 7: "You're unstoppable! 🔥✨", 5: 'Amazing consistency! 🔥🔥', 3: 'Keep it up! 🔥', 1: 'Good start! Keep going!' },
            ar: { 10: 'استمرارية مثالية! 🎉🏆', 7: 'لا يمكن إيقافك! 🔥✨', 5: 'استمرارية رائعة! 🔥🔥', 3: 'استمر! 🔥', 1: 'بداية جيدة! استمر!' }
        };
        const m = msgs[lang] || msgs.en;
        if (n >= 10) return m[10];
        if (n >= 7)  return m[7];
        if (n >= 5)  return m[5];
        if (n >= 3)  return m[3];
        if (n >= 1)  return m[1];
        return '';
    }

    _toAr(n) {
        return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }

    renderSection() {
        const container = document.getElementById('worship-tracker-container');
        if (!container) return;
        const lang = localStorage.getItem('noor-lang') || 'en';
        const key = this.getTodayKey();
        const { current: cur } = this.data.streaks;
        const times = (typeof prayerWidget !== 'undefined' && prayerWidget?._times) ? prayerWidget._times : null;
        const currentPrayer = (times && typeof prayerAPI !== 'undefined') ? prayerAPI.getCurrentPrayer(times) : null;
        container.innerHTML = this._renderEntry(key, lang, cur, times, currentPrayer);
        this._attachListeners(lang);
    }

    _renderStreak(cur, longest, lang) {
        const isAr = lang === 'ar';
        const emoji = this._streakEmoji(cur) || '🕌';
        const msg = this._streakMsg(cur, lang);
        return `
        <div class="wt-streak">
            <div class="wt-streak-main">
                <span class="wt-streak-emoji">${emoji}</span>
                <div class="wt-streak-nums">
                    <span class="wt-streak-count">${isAr ? this._toAr(cur) : cur}</span>
                    <span class="wt-streak-label">${isAr ? 'يوم متواصل' : 'day streak'}</span>
                </div>
            </div>
            ${cur > 0 ? `<div class="wt-streak-msg">${msg}</div>` : `<div class="wt-streak-msg" style="color:var(--text-muted);font-weight:400">${isAr ? 'أكمل جميع المهام للبدء' : 'Complete all tasks to start your streak'}</div>`}
            ${longest > 0 ? `<div class="wt-streak-best">🏆 ${isAr ? 'الأفضل:' : 'Best:'} ${isAr ? this._toAr(longest) : longest}</div>` : ''}
        </div>`;
    }

    _renderEntry(key, lang, streak, times, currentPrayer) {
        const d = this.data.days[key] || {};
        const isAr = lang === 'ar';
        const cur = streak || 0;

        const p = d.prayers || {};
        const PRAYERS = [
            { key: 'fajr',    en: 'Fajr',    ar: 'الفجر'  },
            { key: 'dhuhr',   en: 'Dhuhr',   ar: 'الظهر'  },
            { key: 'asr',     en: 'Asr',     ar: 'العصر'  },
            { key: 'maghrib', en: 'Maghrib', ar: 'المغرب' },
            { key: 'isha',    en: 'Isha',    ar: 'العشاء' },
        ];
        const PRAYER_ORDER = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
        const currentIdx = currentPrayer ? PRAYER_ORDER.indexOf(currentPrayer) : -1;

        const prayersDone = PRAYERS.filter(pr => !!p[pr.key]).length;
        const checkSvg = '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#c5a352"/><path d="M6 10l3 3 5-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

        // Format time string "HH:MM" to "12:34 AM/PM"
        const fmtTime = (t) => {
            if (!t) return '';
            const [h, m] = t.split(':').map(Number);
            const ampm = h >= 12 ? 'PM' : 'AM';
            const h12 = h % 12 || 12;
            return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
        };

        const prayerRows = PRAYERS.map((pr, idx) => {
            const done = !!p[pr.key];
            const isCurrent = !done && currentIdx !== -1 && idx === currentIdx;
            const isFuture  = !done && currentIdx !== -1 && idx > currentIdx;
            const timeStr   = times ? fmtTime(times[pr.key]) : '';
            const timeLabel = isCurrent && timeStr ? `${timeStr} · ${isAr ? 'الآن' : 'now'}` : timeStr;

            let stateClass = '';
            let circleHtml = '';
            if (done) {
                stateClass = 'wt-pr-prayed';
                circleHtml = `<div class="wt-pr-circle wt-pr-circle-prayed" aria-label="${isAr ? 'صُليت' : 'Prayed'}">
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8l3.5 3.5 6.5-7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>`;
            } else if (isFuture) {
                stateClass = 'wt-pr-future';
                circleHtml = `<div class="wt-pr-circle wt-pr-circle-future" aria-label="${isAr ? 'مقفل' : 'Not yet'}">
                    <svg viewBox="0 0 16 16" fill="none" width="11" height="11"><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </div>`;
            } else {
                stateClass = isCurrent ? 'wt-pr-current' : '';
                circleHtml = `<div class="wt-pr-circle wt-pr-circle-empty" aria-label="${isAr ? 'لم تُصَلَّ' : 'Not prayed'}"></div>`;
            }

            return `
            <label class="wt-pr-row ${stateClass}" data-wt-field="prayer_${pr.key}" data-wt-day="${key}">
                <input type="checkbox" class="wt-prayer-cb" data-prayer="${pr.key}" data-wt-day="${key}" ${done ? 'checked' : ''} style="display:none">
                <div class="wt-pr-info">
                    <span class="wt-pr-name ${isCurrent ? 'wt-pr-name-current' : ''}">${isAr ? pr.ar : pr.en}</span>
                    ${timeLabel ? `<span class="wt-pr-time ${isCurrent ? 'wt-pr-time-current' : ''}">${timeLabel}</span>` : ''}
                </div>
                ${circleHtml}
            </label>`;
        }).join('');

        const salahLabel = isAr ? 'صلوات اليوم' : "Today's prayers";
        const salahSubtitle = isAr ? 'اضغط لتسجيل الصلاة' : 'Tap to mark as prayed';
        const prayerPts = prayersDone * 3;

        const tasks = [
            { field: 'fasting',  checked: !!d.fasting,  pts: 15, en: 'Fasting today',             ar: 'الصيام اليوم' },
            { field: 'adhkar',   checked: !!d.adhkar,   pts: 10, en: 'Morning & evening adhkar',  ar: 'أذكار الصباح والمساء' },
            { field: 'tasbeeh',  checked: !!d.tasbeeh,  pts: 5,  en: '100 Tasbeeh',               ar: '١٠٠ تسبيحة' },
            { field: 'charity',  checked: !!d.charity,  pts: 10, en: 'Sadaqah today',             ar: 'الصدقة اليوم' },
        ];

        const quranPts = (d.quranJuz || 0) * 15;
        const quz = d.quranJuz || 0;

        const taskRows = tasks.map(task => `
            <label class="wt-task-row${task.checked ? ' wt-task-done' : ''}" data-wt-field="${task.field}" data-wt-day="${key}">
                <input type="checkbox" data-wt-field="${task.field}" data-wt-day="${key}" ${task.checked ? 'checked' : ''} style="display:none">
                <span class="wt-task-circle">${task.checked ? checkSvg : ''}</span>
                <span class="wt-task-name">${isAr ? task.ar : task.en}</span>
                <span class="wt-task-pts">+${task.pts}</span>
            </label>`).join('');

        const quranRow = `
            <div class="wt-task-row wt-task-quran${quz > 0 ? ' wt-task-done' : ''}">
                <span class="wt-task-circle">${quz > 0 ? checkSvg : ''}</span>
                <div class="wt-task-quran-inner">
                    <span class="wt-task-name">${isAr ? 'تلاوة القرآن' : 'Quran recitation'}</span>
                    <div class="wt-quran-ctrl">
                        <input type="range" min="0" max="30" step="1" value="${quz}"
                            data-wt-field="quranJuz" data-wt-day="${key}" class="wt-slider">
                        <span class="wt-quran-val" id="wt-quran-val">${isAr ? this._toAr(quz) : quz} ${isAr ? 'جزء' : 'Juz'}</span>
                    </div>
                </div>
                <span class="wt-task-pts">${quz > 0 ? `+${quranPts}` : '+15/juz'}</span>
            </div>`;

        const optionalLabel = isAr ? 'اختياري' : 'OPTIONAL';
        const optionalTasks = [
            { field: 'sunnahPrayers', checked: !!d.sunnahPrayers, pts: 5, en: 'Sunnah prayers', ar: 'صلاة السنن' },
            { field: 'tahajjud',      checked: !!d.tahajjud,      pts: 5, en: 'Tahajjud',       ar: 'صلاة التهجد' },
        ];
        const optionalRows = optionalTasks.map(task => `
            <label class="wt-task-row wt-task-optional${task.checked ? ' wt-task-done' : ''}" data-wt-field="${task.field}" data-wt-day="${key}">
                <input type="checkbox" data-wt-field="${task.field}" data-wt-day="${key}" ${task.checked ? 'checked' : ''} style="display:none">
                <span class="wt-task-circle">${task.checked ? checkSvg : ''}</span>
                <span class="wt-task-name">${isAr ? task.ar : task.en}</span>
                <span class="wt-task-pts">+${task.pts}</span>
            </label>`).join('');

        const pts = prayerPts + (d.quranJuz > 0 ? d.quranJuz * 15 : 0) +
                    (d.fasting ? 15 : 0) + (d.tasbeeh ? 5 : 0) + (d.adhkar ? 10 : 0) +
                    (d.charity ? 10 : 0) + (d.sunnahPrayers ? 5 : 0) + (d.tahajjud ? 5 : 0);

        const headerLabel = isAr ? 'أهداف اليوم' : "TODAY'S GOALS";

        return `
    <div class="wt-entry-card">
        <div class="wt-salah-section">
            <div class="wt-salah-header">
                <span class="wt-salah-title">${salahLabel}</span>
                <span class="wt-salah-subtitle">${salahSubtitle}</span>
            </div>
            <div class="wt-prayer-list">
                ${prayerRows}
            </div>
        </div>
        ${this._renderWeeklyView(lang, cur)}
        <div class="wt-goals-header">
            <span class="wt-goals-label">${headerLabel}</span>
        </div>
        <div class="wt-task-list">
            ${taskRows}
            ${quranRow}
        </div>
        <div class="wt-optional-section">
            <div class="wt-optional-label">${optionalLabel}</div>
            <div class="wt-task-list">
                ${optionalRows}
            </div>
        </div>
        ${pts > 0 ? `<div class="wt-pts-total">${isAr ? `${numFmt(pts)} نقطة اليوم` : `${pts} pts today`}</div>` : ''}
    </div>`;
    }

    _renderWeeklyView(lang, currentStreak) {
        const isAr = lang === 'ar';
        const DAY_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const DAY_AR = ['أحد', 'اثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت'];

        const today = new Date(getCurrentTime());
        const todayKey = this.getTodayKey();

        const cols = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(today.getDate() - i);
            const dayKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
            const dayData = this.data.days[dayKey];
            const isFuture = dayKey > todayKey;
            const isToday  = dayKey === todayKey;
            const dayLabel = isAr ? DAY_AR[d.getDay()] : DAY_EN[d.getDay()];

            let count = 0;
            let barClass = 'wt-wb-empty';
            let barText = '--';

            if (!isFuture && dayData) {
                const p = dayData.prayers || {};
                count = ['fajr','dhuhr','asr','maghrib','isha'].filter(k => !!p[k]).length;
                barText = `${count}/5`;
                if (count === 5)          barClass = 'wt-wb-full';
                else if (count >= 3)      barClass = 'wt-wb-partial';
                else if (count > 0)       barClass = 'wt-wb-low';
                else                      barClass = 'wt-wb-zero';
            } else if (!isFuture) {
                barText = '0/5';
                barClass = 'wt-wb-zero';
            }

            const todayMark = isToday ? ' wt-wb-today' : '';
            cols.push(`
            <div class="wt-week-col">
                <p class="wt-week-day${isToday ? ' wt-week-day-today' : ''}">${dayLabel}</p>
                <div class="wt-week-bar ${barClass}${todayMark}">
                    <span>${isFuture ? '--' : barText}</span>
                </div>
            </div>`);
        }

        const streakLabel = currentStreak > 0
            ? `🔥 ${isAr ? `${numFmt(currentStreak)} يوم` : `${currentStreak} day streak`}`
            : (isAr ? 'هذا الأسبوع' : 'This week');

        return `
        <div class="wt-week">
            <div class="wt-week-header">
                <span class="wt-week-title">${isAr ? 'هذا الأسبوع' : 'This week'}</span>
                <span class="wt-week-streak">${streakLabel}</span>
            </div>
            <div class="wt-week-cols">${cols.join('')}</div>
        </div>`;
    }

    _attachListeners(lang) {
        const isAr = lang === 'ar';
        document.querySelectorAll('[data-wt-field][type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', (e) => {
                this.updateActivity(e.target.dataset.wtDay, e.target.dataset.wtField, e.target.checked);
                this.renderSection();
            });
        });
        document.querySelectorAll('.wt-prayer-cb').forEach(cb => {
            cb.addEventListener('change', (e) => {
                this.updateActivity(e.target.dataset.wtDay, `prayer_${e.target.dataset.prayer}`, e.target.checked);
                this.renderSection();
            });
        });
        document.querySelectorAll('.wt-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const v = +e.target.value;
                const el = document.getElementById('wt-quran-val');
                if (el) el.textContent = `${isAr ? this._toAr(v) : v} ${isAr ? 'جزء' : 'Juz'}`;
            });
            slider.addEventListener('change', (e) => {
                this.updateActivity(e.target.dataset.wtDay, 'quranJuz', +e.target.value);
                this.renderSection();
            });
        });
    }
}

let worshipTracker;

// ═══════════════════════════════════════════════════
// CELEBRATION POPUP QUEUE
// ═══════════════════════════════════════════════════
const _celebQueue = [];
let _celebShowing = false;

function _queueCelebration(showFn) {
    _celebQueue.push(showFn);
    if (!_celebShowing) _drainCelebQueue();
}

function _drainCelebQueue() {
    if (_celebQueue.length === 0) { _celebShowing = false; return; }
    _celebShowing = true;
    const next = _celebQueue.shift();
    next();
    // Auto-drain after 5s if user doesn't close manually
    setTimeout(() => {
        document.getElementById('celebration-popup')?.remove();
        _drainCelebQueue();
    }, 5000);
}

// ═══════════════════════════════════════════════════
// BADGE SYSTEM
// ═══════════════════════════════════════════════════
class BadgeSystem {
    constructor() {
        this.STORAGE_KEY = 'noor_badges_dhulhijjah_1447';
        // 10 days of Dhul Hijjah 1447: May 18–27, 2026
        this.DH_DAYS = Array.from({ length: 10 }, (_, i) => {
            const d = new Date('2026-05-18T00:00:00+02:00');
            d.setUTCDate(d.getUTCDate() + i);
            return d.toISOString().split('T')[0];
        });
        this.DEFS = {
            earlyBird: {
                id: 'earlyBird',
                name: { en: 'Early Bird', ar: 'الطائر المبكر' },
                emoji: '🌅',
                description: { en: 'Complete Sunnah prayers 3 consecutive days', ar: 'صلّ السنن ٣ أيام متتالية' },
                criteria: 'consecutive', field: 'sunnahPrayers', target: 3
            },
            generousHeart: {
                id: 'generousHeart',
                name: { en: 'Generous Heart', ar: 'القلب الكريم' },
                emoji: '💚',
                description: { en: 'Give charity 5 times', ar: 'تصدّق ٥ مرات' },
                criteria: 'total', field: 'charity', target: 5
            },
            scholar: {
                id: 'scholar',
                name: { en: 'Scholar', ar: 'العالم' },
                emoji: '📖',
                description: { en: 'Read Quran for 7 days', ar: 'اقرأ القرآن ٧ أيام' },
                criteria: 'total', field: 'quranJuz', target: 7
            }
        };
        this.state = this._load();
    }

    _load() {
        const saved = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
        const state = {};
        Object.keys(this.DEFS).forEach(id => {
            state[id] = { unlocked: false, unlockedDate: null, ...saved[id] };
        });
        return state;
    }

    _save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    }

    _readDays() {
        // Use legacy Dhul Hijjah 1447 data (numeric keys 1–10) for badge evaluation
        if (typeof worshipTracker !== 'undefined' && worshipTracker) {
            return worshipTracker._dhulHijjahDays;
        }
        return {};
    }

    _computeProgress(def, days) {
        const indices = Object.keys(days).map(Number).sort((a, b) => a - b);
        const check = (d) => {
            if (!d) return false;
            const v = d[def.field];
            return def.field === 'quranJuz' ? v > 0 : !!v;
        };
        if (def.criteria === 'total') {
            return indices.filter(i => check(days[i])).length;
        }
        // consecutive
        let max = 0, cur = 0;
        indices.forEach(i => {
            if (check(days[i])) { cur++; max = Math.max(max, cur); }
            else { cur = 0; }
        });
        return max;
    }

    update() {
        const days = this._readDays();
        Object.values(this.DEFS).forEach(def => {
            if (this.state[def.id].unlocked) return;
            if (this._computeProgress(def, days) >= def.target) {
                this.state[def.id].unlocked = true;
                this.state[def.id].unlockedDate = new Date().toISOString();
                this._showToast(def);
                // Show floating toast notification
                const badgeName = currentLang === 'ar' ? def.name.ar : def.name.en;
                const toastEl = document.createElement('div');
                toastEl.className = 'badge-toast';
                toastEl.textContent = currentLang === 'ar'
                    ? `🏅 شارة جديدة: ${badgeName}!`
                    : `🏅 New badge: ${badgeName}!`;
                document.body.appendChild(toastEl);
                requestAnimationFrame(() => toastEl.classList.add('badge-toast-show'));
                setTimeout(() => { toastEl.classList.remove('badge-toast-show'); setTimeout(() => toastEl.remove(), 300); }, 4000);
            }
        });
        this._save();
        this.renderSection();
    }

    _showToast(def) {
        _queueCelebration(() => this._doShowToast(def));
    }

    _doShowToast(def) {
        const lang = localStorage.getItem('noor-lang') || 'en';
        const isAr = lang === 'ar';
        const title  = isAr ? '🎉 شارة جديدة!' : '🎉 Badge Unlocked!';
        const name   = isAr ? def.name.ar : def.name.en;
        const desc   = isAr ? def.description.ar : def.description.en;
        const sub    = isAr ? `مبروك! حصلت على شارة "${name}"` : `Congratulations! You earned "${name}"`;

        document.getElementById('celebration-popup')?.remove();
        const popup = document.createElement('div');
        popup.id = 'celebration-popup';
        popup.className = 'celeb-popup';
        popup.innerHTML = `
            <div class="celeb-backdrop"></div>
            <div class="celeb-box celeb-badge" dir="${isAr ? 'rtl' : 'ltr'}">
                <button class="celeb-close" onclick="this.closest('#celebration-popup').remove()">&times;</button>
                <div class="celeb-glow"></div>
                <div class="celeb-emoji-big">${def.emoji}</div>
                <h2 class="celeb-title">${title}</h2>
                <p class="celeb-sub">${sub}</p>
                <p class="celeb-desc">${desc}</p>
                <div class="celeb-progress-hint">${isAr ? 'استمر وافتح المزيد من الشارات!' : 'Keep going to unlock more badges!'}</div>
            </div>`;
        document.body.appendChild(popup);

        // Animate badge card and sparkles
        setTimeout(() => {
            const el = document.getElementById(`badge-${def.id}`);
            if (el) { el.classList.add('badge-unlock-anim'); this._sparkles(el); }
        }, 150);

        // Auto-dismiss after 6 s
        setTimeout(() => {
            popup.classList.add('celeb-out');
            setTimeout(() => popup.remove(), 400);
        }, 6000);

        popup.querySelector('.celeb-backdrop').addEventListener('click', () => {
            popup.classList.add('celeb-out');
            setTimeout(() => popup.remove(), 400);
        });
    }

    _sparkles(el) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        for (let i = 0; i < 12; i++) {
            const s = document.createElement('div');
            s.className = 'badge-sparkle';
            const rad = ((360 / 12) * i) * Math.PI / 180;
            s.style.left = cx + 'px';
            s.style.top = cy + 'px';
            s.style.setProperty('--dx', Math.round(Math.cos(rad) * 64) + 'px');
            s.style.setProperty('--dy', Math.round(Math.sin(rad) * 64) + 'px');
            document.body.appendChild(s);
            setTimeout(() => s.remove(), 900);
        }
    }

    renderStrip() {
        const stripContainer = document.getElementById('badge-strip');
        if (stripContainer) stripContainer.style.display = getDhulHijjahDay() < 1 ? 'none' : '';
        const strip = document.getElementById('badge-strip-icons');
        if (!strip) return;
        const defs = Object.values(this.DEFS);
        const earnedDefs = defs.filter(def => this.state[def.id]?.unlocked);
        const totalDefs = defs.length;
        const earnedCount = earnedDefs.length;
        const lang = localStorage.getItem('noor-lang') || 'en';
        const isAr = lang === 'ar';
        // Show simplified count text instead of dot icons
        const countText = isAr
            ? `${numFmt(earnedCount)} / ${numFmt(totalDefs)} شارة`
            : `${earnedCount} / ${totalDefs} earned`;
        strip.innerHTML = `<span class="bs-count-text">${countText}</span>`;
        // Active badge display
        const activeBadgeEl = document.getElementById('badge-strip-active');
        if (activeBadgeEl) {
            const nextLocked = defs.find(def => !this.state[def.id]?.unlocked);
            if (nextLocked) {
                const name = nextLocked.name[isAr ? 'ar' : 'en'];
                activeBadgeEl.innerHTML = `<span class="bs-active-badge">${nextLocked.emoji} ${name}</span>`;
            } else {
                activeBadgeEl.innerHTML = `<span class="bs-active-badge">${isAr ? '✨ جميع الشارات' : '✨ All badges earned'}</span>`;
            }
        }
    }

    renderSection() {
        const container = document.getElementById('badge-grid');
        if (!container) return;
        const lang = localStorage.getItem('noor-lang') || 'en';
        const isAr = lang === 'ar';
        const days = this._readDays();
        const allDefs = Object.values(this.DEFS);
        const earned = allDefs.filter(def => this.state[def.id].unlocked);
        const locked = allDefs.filter(def => !this.state[def.id].unlocked);
        const showingAll = container.dataset.showAll === 'true';

        const renderCard = (def) => {
            const s = this.state[def.id];
            const progress = this._computeProgress(def, days);
            const capped = Math.min(progress, def.target);
            const pct = Math.round((capped / def.target) * 100);
            const isLocked = !s.unlocked;
            const dateStr = s.unlockedDate
                ? new Date(s.unlockedDate).toLocaleDateString(isAr ? 'ar-EG' : 'en-US')
                : '';
            return `
                <div id="badge-${def.id}" class="badge-card ${isLocked ? 'badge-locked' : 'badge-unlocked'}" data-badge="${def.id}">
                    <div class="badge-icon-wrap">
                        <span class="badge-emoji">${def.emoji}</span>
                        ${isLocked ? '<span class="badge-lock">🔒</span>' : '<span class="badge-check">✅</span>'}
                    </div>
                    <h3 class="badge-name">${def.name[lang]}</h3>
                    <p class="badge-desc">${def.description[lang]}</p>
                    <div class="badge-prog-wrap">
                        <div class="badge-prog-bar"><div class="badge-prog-fill" style="width:${pct}%"></div></div>
                        <span class="badge-prog-txt">${capped}/${def.target}</span>
                    </div>
                    ${!isLocked ? `<div class="badge-date">${isAr ? 'حصلت عليها في' : 'Unlocked'} ${dateStr}</div>` : ''}
                </div>`;
        };

        let html = '';
        if (earned.length === 0) {
            // Nothing earned yet — show all with a nudge
            html = allDefs.map(renderCard).join('');
            html += `<p class="badge-none-yet">${isAr ? 'أكمل يومك الأول لتحصل على أول شارة 🌟' : 'Complete your first day to earn your first badge 🌟'}</p>`;
        } else {
            html = earned.map(renderCard).join('');
            if (locked.length > 0) {
                if (showingAll) {
                    html += locked.map(renderCard).join('');
                    html += `<button class="badge-see-toggle" onclick="badgeSystem._toggleShowAll()">${isAr ? '▲ إخفاء الشارات المقفلة' : '▲ Hide locked badges'}</button>`;
                } else {
                    html += `<button class="badge-see-toggle" onclick="badgeSystem._toggleShowAll()">${isAr ? `← عرض كل ${locked.length} شارة` : `See all ${locked.length} →`}</button>`;
                }
            }
        }

        container.innerHTML = html;
        container.querySelectorAll('.badge-card').forEach(card => {
            card.addEventListener('click', () => this._showModal(card.dataset.badge));
        });
    }

    _toggleShowAll() {
        const container = document.getElementById('badge-grid');
        if (!container) return;
        container.dataset.showAll = container.dataset.showAll === 'true' ? 'false' : 'true';
        this.renderSection();
    }

    _showModal(badgeId) {
        const lang = localStorage.getItem('noor-lang') || 'en';
        const def = this.DEFS[badgeId];
        const s = this.state[badgeId];
        const days = this._readDays();
        const capped = Math.min(this._computeProgress(def, days), def.target);
        const remaining = def.target - capped;
        const pct = Math.round((capped / def.target) * 100);
        document.getElementById('badge-modal')?.remove();
        const modal = document.createElement('div');
        modal.id = 'badge-modal';
        modal.className = 'badge-modal';
        modal.innerHTML = `
            <div class="badge-modal-overlay"></div>
            <div class="badge-modal-box" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
                <button class="badge-modal-close">&times;</button>
                <div class="badge-modal-emoji">${def.emoji}</div>
                <h2>${def.name[lang]}</h2>
                <p class="badge-modal-desc">${def.description[lang]}</p>
                <div class="badge-modal-prog">
                    <div class="badge-prog-bar"><div class="badge-prog-fill" style="width:${pct}%"></div></div>
                    <span class="badge-prog-txt">${capped} / ${def.target}</span>
                </div>
                ${s.unlocked
                    ? `<p class="badge-modal-status badge-status-unlocked">✅ ${lang === 'ar' ? 'مفتوحة' : 'Unlocked'} · ${new Date(s.unlockedDate).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US')}</p>`
                    : `<p class="badge-modal-status badge-status-locked">🔒 ${remaining} ${lang === 'ar' ? (remaining === 1 ? 'يوم متبقٍ' : 'أيام متبقية') : (remaining === 1 ? 'day remaining' : 'days remaining')}</p>`
                }
            </div>`;
        document.body.appendChild(modal);
        modal.querySelector('.badge-modal-overlay').addEventListener('click', () => modal.remove());
        modal.querySelector('.badge-modal-close').addEventListener('click', () => modal.remove());
    }
}

let badgeSystem;

// ═══════════════════════════════════════════════════
// VIRTUE CARDS — 10 pillars of year-round daily worship
// ═══════════════════════════════════════════════════
const VC_DATA = [
    {
        day: 1, hijriDate: 'Salah — Prayer', icon: '🕌', color: '#4f46e5',
        source: {
            type: 'verse',
            arabic: 'إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي',
            transliteration: 'Innanī anā Allāhu lā ilāha illā anā fa-ʿbudnī wa-aqimi ṣ-ṣalāta li-dhikrī',
            translation: {
                en: 'Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.',
                ar: 'إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي'
            },
            reference: 'Quran 20:14'
        },
        virtue: {
            en: 'Prayer is the pillar of the religion. The Prophet ﷺ said: "The first deed for which a servant of Allah will be held accountable on the Day of Resurrection is prayer." (Abu Dawud, Tirmidhi)',
            ar: 'الصلاة عمود الدين. قال النبي ﷺ: «أول ما يُحاسَب به العبد يوم القيامة الصلاة». (أبو داود والترمذي)'
        },
        lesson: {
            en: [
                { title: '🕌 Pray on time, every time', content: 'Establish all five prayers at their correct times. The Prophet ﷺ said the most beloved deed to Allah is prayer performed on time (Bukhari). Pray the Sunnah prayers before and after the obligatory ones to fill any gaps.\n\nIf you miss a prayer, make it up as soon as you remember. There is no expiry on a missed prayer — make it up and resolve never to miss again.' },
                { title: '✅ Action: Guard your next prayer', content: 'Set a reminder for the next prayer right now. When the time comes, stop what you are doing, make wudu with care, and pray with full presence. Whisper to yourself before you begin: "This prayer may be my last — let it be my best."' }
            ],
            ar: [
                { title: '🕌 صلِّ في وقتها كل مرة', content: 'حافظ على الصلوات الخمس في أوقاتها. قال النبي ﷺ: «أحب الأعمال إلى الله الصلاة على وقتها». (البخاري). صلِّ السنن القبلية والبعدية لتعويض أي نقص.\n\nإن فاتتك صلاة فاقضها فور تذكّرها — لا تنتهي مهلة القضاء، واعزم على عدم التفريط مستقبلاً.' },
                { title: '✅ اعمل: احرص على صلاتك القادمة', content: 'اضبط تذكيراً للصلاة القادمة الآن. وحين يحين وقتها أوقف ما بيدك، توضأ بتأنٍّ، وصلِّ بحضور قلب. قل لنفسك قبل أن تكبّر: «ربما تكون هذه صلاتي الأخيرة — فلتكن أفضل صلاة».' }
            ]
        }
    },
    {
        day: 2, hijriDate: 'Quran — Recitation', icon: '📖', color: '#0ea5e9',
        source: {
            type: 'hadith',
            arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
            transliteration: 'Khayrukum man taʿallama l-Qurʾāna wa ʿallamah',
            translation: {
                en: 'The best of you are those who learn the Quran and teach it.',
                ar: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ'
            },
            reference: 'Sahih Bukhari 5027'
        },
        virtue: {
            en: 'The Quran is light, healing, and guidance. The Prophet ﷺ said: "Whoever reads a letter of the Quran, for him is one good deed, and a good deed is multiplied ten times." (Tirmidhi)',
            ar: 'القرآن نور وشفاء وهدى. قال النبي ﷺ: «من قرأ حرفاً من كتاب الله فله به حسنة، والحسنة بعشر أمثالها». (الترمذي)'
        },
        lesson: {
            en: [
                { title: '📖 Read daily — even a little', content: 'Commit to reading at least a few verses or one page every day. Consistency is more valuable than quantity. The Prophet ﷺ said: "The most beloved deeds to Allah are those done regularly, even if they are few." (Bukhari, Muslim)\n\nKeep a copy of the Quran accessible — on your phone, your bedside, your desk. The easier it is to reach, the more likely you are to read.' },
                { title: '✅ Action: Open the Quran now', content: "Open the Quran to wherever you last left off, or begin with Surah Al-Mulk (67). Read slowly, reflect on the meaning, and let your heart absorb what Allah is saying to you." }
            ],
            ar: [
                { title: '📖 اقرأ يومياً ولو قليلاً', content: 'التزم بقراءة ولو آيات أو صفحة كل يوم. الاستمرار أثمن من الكثرة. قال النبي ﷺ: «أحب الأعمال إلى الله أدومها وإن قل». (البخاري ومسلم)\n\nاحتفظ بنسخة من القرآن في متناول يدك. كلما كان في المتناول كان الإقبال عليه أيسر.' },
                { title: '✅ اعمل: افتح القرآن الآن', content: 'افتح القرآن من حيث توقفت، أو ابدأ بسورة الملك (67). اقرأ بتأنٍّ وتدبّر المعنى، ودع قلبك يستوعب ما يخاطبك به الله.' }
            ]
        }
    },
    {
        day: 3, hijriDate: 'Dhikr — Remembrance', icon: '📿', color: '#059669',
        source: {
            type: 'verse',
            arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
            transliteration: 'Alā bi-dhikri Llāhi taṭmaʾinnu l-qulūb',
            translation: {
                en: 'Verily, in the remembrance of Allah do hearts find rest.',
                ar: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ'
            },
            reference: 'Quran 13:28'
        },
        virtue: {
            en: 'Dhikr is the easiest deed with the greatest reward. The Prophet ﷺ said SubhanAllah, Alhamdulillah, La ilaha illallah, Allahu Akbar are more beloved to him than all that the sun rises upon. (Muslim)',
            ar: 'الذكر أيسر عبادة وأعظم أجراً. قال النبي ﷺ عن «سبحان الله، الحمد لله، لا إله إلا الله، الله أكبر»: «لَهُنَّ أَحَبُّ إِلَيَّ مِمَّا طَلَعَتْ عَلَيْهِ الشَّمْسُ». (مسلم)'
        },
        lesson: {
            en: [
                { title: '📿 Make dhikr a habit', content: 'Say SubhanAllah 33 times, Alhamdulillah 33 times, Allahu Akbar 34 times after every prayer — this takes under two minutes. The Prophet ﷺ said whoever does it will have all sins forgiven even if they are like the foam of the sea. (Muslim)\n\nAlso recite the morning and evening adhkar — these are your spiritual armour for the day and night.' },
                { title: '✅ Action: Say the tasbih now', content: 'Before you move on — say SubhanAllah 33 times, Alhamdulillah 33 times, and Allahu Akbar 34 times. It takes 90 seconds. Open the Tasbeeh tab in this app to count.' }
            ],
            ar: [
                { title: '📿 اجعل الذكر عادةً', content: 'قل سبحان الله 33 مرة والحمد لله 33 مرة والله أكبر 34 مرة بعد كل صلاة — لا تستغرق دقيقتين. قال النبي ﷺ إن من يفعلها تُغفر له ذنوبه ولو كانت كزبد البحر. (مسلم)\n\nكذلك احرص على أذكار الصباح والمساء — فهي درعك الروحي لنهارك وليلك.' },
                { title: '✅ اعمل: قل التسبيح الآن', content: 'قبل أن تنتقل — قل سبحان الله 33 مرة والحمد لله 33 مرة والله أكبر 34 مرة. لا تستغرق 90 ثانية. افتح تبويب السبحة في هذا التطبيق للعدّ.' }
            ]
        }
    },
    {
        day: 4, hijriDate: 'Sadaqah — Charity', icon: '💚', color: '#7c3aed',
        source: {
            type: 'verse',
            arabic: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ',
            transliteration: 'Mathalu lladhīna yunfiqūna amwālahum fī sabīli Llāhi ka-mathali ḥabbatin anbatat sabʿa sanābil',
            translation: {
                en: 'The example of those who spend their wealth in the way of Allah is like a grain which grows seven spikes; in each spike is a hundred grains.',
                ar: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ'
            },
            reference: 'Quran 2:261'
        },
        virtue: {
            en: 'The Prophet ﷺ said: "Charity extinguishes sin as water extinguishes fire." (Tirmidhi). Every day two angels descend — one prays for the one who spends and the other curses the one who withholds. (Bukhari, Muslim)',
            ar: 'قال النبي ﷺ: «الصدقة تطفئ الخطيئة كما يطفئ الماء النار». (الترمذي). وقال ﷺ: «ما من يوم يصبح العباد فيه إلا ملكان ينزلان: اللهم أعطِ منفقاً خَلَفاً، واللهم أعطِ ممسكاً تلفاً». (البخاري ومسلم)'
        },
        lesson: {
            en: [
                { title: '💚 Give something every day', content: 'The Prophet ﷺ said charity does not decrease wealth (Muslim). Even a small amount given daily adds up — and the habit of generosity is more precious than the amount.\n\nSadaqah is not only money: a smile is charity, removing harm from the path is charity, a kind word is charity. (Bukhari)' },
                { title: '✅ Action: Give sadaqah today', content: 'Give something to someone who needs it today — whether money, food, your time, your expertise, or a kind message. Anything given sincerely for the sake of Allah counts.' }
            ],
            ar: [
                { title: '💚 أعطِ شيئاً كل يوم', content: 'قال النبي ﷺ: «ما نقصت صدقة من مال». (مسلم). حتى المبلغ الصغير المُعطى يومياً يتراكم — وعادة الكرم أثمن من المقدار.\n\nالصدقة ليست المال وحده: الابتسامة صدقة، وإماطة الأذى عن الطريق صدقة، والكلمة الطيبة صدقة. (البخاري)' },
                { title: '✅ اعمل: تصدّق اليوم', content: 'أعطِ شيئاً لمن يحتاجه اليوم — سواء أكان مالاً أم طعاماً أم وقتك أم خبرتك أم كلمة طيبة. كل ما أُعطي ابتغاءَ وجه الله يُحتسب.' }
            ]
        }
    },
    {
        day: 5, hijriDate: 'Sawm — Fasting', icon: '🌙', color: '#d97706',
        source: {
            type: 'hadith',
            arabic: 'الصِّيَامُ لِي وَأَنَا أَجْزِي بِهِ',
            transliteration: 'Aṣ-ṣiyāmu lī wa anā ajzī bih',
            translation: {
                en: 'Fasting is for Me, and I shall reward it Myself.',
                ar: 'الصِّيَامُ لِي وَأَنَا أَجْزِي بِهِ'
            },
            reference: 'Hadith Qudsi — Bukhari 1904, Muslim 1151'
        },
        virtue: {
            en: 'The Prophet ﷺ fasted every Monday and Thursday and said: "Deeds are presented on Monday and Thursday and I love that my deeds be presented while I am fasting." (Tirmidhi)',
            ar: 'كان النبي ﷺ يصوم الاثنين والخميس ويقول: «إن الأعمال تُعرض كل اثنين وخميس فأحب أن يُعرض عملي وأنا صائم». (الترمذي)'
        },
        lesson: {
            en: [
                { title: '🌙 Fast on Mondays and Thursdays', content: 'The Sunnah fasts of Monday and Thursday are among the most consistent habits of the Prophet ﷺ. They purify the soul, discipline the body, and cause deeds to be presented to Allah while you are in a state of worship.\n\nIf full fasting is difficult, begin with just one day a week. Consistency is the key.' },
                { title: '✅ Action: Intend to fast next Monday', content: 'Make the intention now to fast next Monday or Thursday. Mark it in your calendar. Prepare by eating a light suhoor and making sincere intention the night before.' }
            ],
            ar: [
                { title: '🌙 صُم الاثنين والخميس', content: 'صيام الاثنين والخميس من أثبت عادات النبي ﷺ. يُزكّي النفس ويُروّض البدن ويجعل الأعمال تُعرض على الله وأنت في حالة عبادة.\n\nإن عسُر عليك الصيام يومين فابدأ بيوم واحد في الأسبوع — الاستمرار هو المفتاح.' },
                { title: '✅ اعمل: انوِ الصيام الاثنين القادم', content: 'انوِ الآن أن تصوم الاثنين القادم أو الخميس. سجّله في مفكرتك. استعدّ بتناول سحور خفيف وبيّت النية ليلةً.' }
            ]
        }
    },
    {
        day: 6, hijriDate: "Du'a — Supplication", icon: '🤲', color: '#0891b2',
        source: {
            type: 'verse',
            arabic: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ',
            transliteration: 'Wa qāla rabbukumu dʿūnī astajib lakum',
            translation: {
                en: 'And your Lord said: Call upon Me; I will respond to you.',
                ar: 'وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ'
            },
            reference: 'Quran 40:60'
        },
        virtue: {
            en: "The Prophet ﷺ said: 'Du'a is the essence of worship.' (Tirmidhi). There is no plea too small and no request too large — Allah loves to hear His servant asking.",
            ar: 'قال النبي ﷺ: «الدعاء هو العبادة». (الترمذي). لا طلبَ أصغر من أن يُسمع ولا أكبر من أن يُستجاب — الله يحب أن يسمع عبده يسأله.'
        },
        lesson: {
            en: [
                { title: '🤲 Ask Allah — for everything', content: "The best times for du'a: the last third of the night, between the adhan and iqamah, during sujood, after the obligatory prayers, and on Fridays (especially the last hour before Maghrib).\n\nDo not limit your du'a to big matters. Ask Allah for everything — your daily bread, your health, your family, your community and the whole Ummah." },
                { title: "✅ Action: Make a personal du'a now", content: "Open the Du'as tab in this app, choose one dua, read it slowly, then add your own personal supplication in your own words. Allah understands every language and every unspoken longing of the heart." }
            ],
            ar: [
                { title: '🤲 اسأل الله — في كل شيء', content: 'أفضل أوقات الدعاء: الثلث الأخير من الليل، وبين الأذان والإقامة، وفي السجود، وعقب الصلوات المفروضة، ويوم الجمعة (خاصة آخر ساعة قبل المغرب).\n\nلا تقتصر دعواتك على الأمور الكبيرة. اسأل الله كل شيء — رزقك وصحتك وأسرتك وأمتك.' },
                { title: '✅ اعمل: ادعُ الله الآن', content: 'افتح تبويب الأدعية في هذا التطبيق، اختر دعاءً واقرأه بتأنٍّ، ثم أضف دعاءك الخاص بكلماتك. الله يفهم كل لغة وكل شوق في القلب.' }
            ]
        }
    },
    {
        day: 7, hijriDate: 'Shukr — Gratitude', icon: '💛', color: '#be185d',
        source: {
            type: 'verse',
            arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
            transliteration: 'La-in shakartum la-azīdannakum',
            translation: {
                en: 'If you are grateful, I will surely increase you.',
                ar: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ'
            },
            reference: 'Quran 14:7'
        },
        virtue: {
            en: 'The Prophet ﷺ would stand in night prayer until his feet were swollen. When asked why, he said: "Should I not be a grateful servant?" (Bukhari, Muslim). Gratitude is not a feeling to wait for — it is a practice to cultivate.',
            ar: 'كان النبي ﷺ يقوم من الليل حتى تتورم قدماه. فلما قيل له لماذا؟ قال: «أفلا أكون عبداً شكوراً؟» (البخاري ومسلم). الشكر ليس شعوراً ننتظره — بل هو ممارسة نُنمّيها.'
        },
        lesson: {
            en: [
                { title: '💛 Count your blessings — literally', content: 'Begin each morning by naming three specific blessings. Not "health" in the abstract, but "I can see, hear, and breathe without pain today." The Prophet ﷺ taught us to say Alhamdulillah for everything — at the start of the day, after eating, after drinking, after waking.\n\nThe more you notice, the more Allah increases you.' },
                { title: '✅ Action: Say Alhamdulillah 100 times today', content: 'Set a simple intention: say Alhamdulillah mindfully throughout today — not as a reflex, but as a conscious acknowledgement of a specific blessing each time. If you reach 100 by the end of the day, that is 100 moments of genuine connection with your Creator.' }
            ],
            ar: [
                { title: '💛 عدِّد نعم الله عليك — حرفياً', content: 'ابدأ كل صباح بذكر ثلاث نعم بعينها. ليس «الصحة» بشكل مجرد، بل «أستطيع اليوم أن أرى وأسمع وأتنفس دون ألم». علّمنا النبي ﷺ أن نقول الحمد لله على كل شيء.\n\nكلما لاحظتَ أكثر، زادك الله أكثر.' },
                { title: '✅ اعمل: قل الحمد لله 100 مرة اليوم', content: 'ضع نية بسيطة: قل الحمد لله بوعي طوال اليوم — ليس عادةً لا شعورية، بل اعترافاً واعياً بنعمة بعينها في كل مرة.' }
            ]
        }
    },
    {
        day: 8, hijriDate: 'Tawbah — Repentance', icon: '🔄', color: '#ea580c',
        source: {
            type: 'verse',
            arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا',
            transliteration: 'Yā ayyuhā lladhīna āmanū tūbū ilā Llāhi tawbatan naṣūḥā',
            translation: {
                en: 'O you who believe, repent to Allah with sincere repentance.',
                ar: 'يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا'
            },
            reference: 'Quran 66:8'
        },
        virtue: {
            en: 'The Prophet ﷺ said: "Every son of Adam sins, and the best of those who sin are those who repent." (Tirmidhi). He also said: "Allah spreads out His hand at night to accept the repentance of those who sin by day." (Muslim). The door of tawbah is always open.',
            ar: 'قال النبي ﷺ: «كل ابن آدم خطّاء، وخير الخطّائين التوابون». (الترمذي). وقال ﷺ: «يبسط الله يده بالليل ليتوب مسيء النهار». (مسلم). باب التوبة مفتوح دائماً.'
        },
        lesson: {
            en: [
                { title: '🔄 Repent sincerely and often', content: 'Sincere repentance has three conditions: leaving the sin, regretting it, and resolving not to return to it. If the sin involved another person, a fourth condition is added: making amends.\n\nThe Prophet ﷺ said he sought forgiveness more than 70 times a day (Bukhari). Istighfar is not a sign of weakness — it is the mark of a heart that knows its Lord.' },
                { title: '✅ Action: Seek forgiveness now', content: 'Say slowly, with your heart present:\n«أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه»\nAstaghfiru Llāha l-ʿaẓīm alladhī lā ilāha illā huwa l-ḥayyu l-qayyūmu wa atūbu ilaih.\nThe Prophet ﷺ said whoever says this will be forgiven, even if they fled from the battlefield.' }
            ],
            ar: [
                { title: '🔄 تُب إلى الله توبةً صادقةً وأكثر منها', content: 'للتوبة الصادقة ثلاثة شروط: الإقلاع عن الذنب، والندم عليه، والعزم على عدم العودة إليه. فإن كان الذنب متعلقاً بحق الغير، زِيد شرط رابع: ردّ الحقوق.\n\nقال النبي ﷺ إنه يستغفر الله أكثر من سبعين مرة في اليوم. (البخاري). الاستغفار دليل قلب يعرف ربه.' },
                { title: '✅ اعمل: استغفر الآن', content: 'قل بتأنٍّ وبحضور قلب:\n«أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه».\nقال النبي ﷺ إن من قالها غُفر له ولو كان فرّ من الزحف.' }
            ]
        }
    },
    {
        day: 9, hijriDate: 'Ilm — Knowledge', icon: '📚', color: '#b45309',
        source: {
            type: 'verse',
            arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
            transliteration: 'Iqraʾ bi-smi rabbika lladhī khalaq',
            translation: {
                en: 'Read! In the name of your Lord who created.',
                ar: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ'
            },
            reference: 'Quran 96:1 — the first verse revealed'
        },
        virtue: {
            en: 'The Prophet ﷺ said: "Seeking knowledge is an obligation upon every Muslim." (Ibn Majah). Allah raises the ranks of those who believe and those who have been given knowledge. (Quran 58:11)',
            ar: 'قال النبي ﷺ: «طلب العلم فريضة على كل مسلم». (ابن ماجه). ويرفع الله الذين آمنوا والذين أوتوا العلم درجات. (القرآن 58:11)'
        },
        lesson: {
            en: [
                { title: '📚 Learn something about your religion daily', content: 'You do not need to enrol in a course to be a student of knowledge. Read one hadith from Riyadh al-Salihin. Listen to a short lecture. Learn one name of Allah and its meaning. Read a tafsir explanation of one verse.\n\nThe Prophet ﷺ said: "When Allah wishes good for someone, He gives them understanding of the religion." (Bukhari, Muslim).' },
                { title: '✅ Action: Learn one thing today', content: 'Open a reliable Islamic resource — a hadith collection, a tafsir website, or a short lecture from a trusted scholar. Spend 10 minutes. Write down one thing you learned. Share it with someone — and gain the reward of teaching too.' }
            ],
            ar: [
                { title: '📚 تعلّم شيئاً عن دينك كل يوم', content: 'لا تحتاج إلى دورة لتكون طالب علم. اقرأ حديثاً من رياض الصالحين. استمع إلى محاضرة قصيرة. تعلّم اسماً من أسماء الله ومعناه. اقرأ تفسير آية واحدة.\n\nقال النبي ﷺ: «من يرد الله به خيراً يُفقّهه في الدين». (البخاري ومسلم).' },
                { title: '✅ اعمل: تعلّم شيئاً واحداً اليوم', content: 'افتح مصدراً إسلامياً موثوقاً. أمضِ 10 دقائق. اكتب ما تعلّمته. شاركه أحداً — واكسب أجر التعليم أيضاً.' }
            ]
        }
    },
    {
        day: 10, hijriDate: 'Silat al-Rahim — Family Ties', icon: '🤝', color: '#15803d',
        source: {
            type: 'hadith',
            arabic: 'مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ',
            transliteration: "Man aḥabba an yubsaṭa lahu fī rizqihi wa yunsa'a lahu fī atharih, falyaṣil raḥimah",
            translation: {
                en: 'Whoever wishes to have his provision expanded and his lifespan extended, let him maintain ties of kinship.',
                ar: 'مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ'
            },
            reference: 'Sahih Bukhari 2067, Muslim 2557'
        },
        virtue: {
            en: 'The Prophet ﷺ said: "The one who maintains ties of kinship is not the one who reciprocates — rather, the one who maintains ties is the one who, when his relatives cut him off, reconnects." (Bukhari)',
            ar: 'قال النبي ﷺ: «ليس الواصل بالمكافئ، ولكن الواصل الذي إذا قُطعت رحمه وصلها». (البخاري)'
        },
        lesson: {
            en: [
                { title: '🤝 Reach out to family and community', content: "When did you last call your parents, your siblings, your aunts and uncles? The Prophet ﷺ said the greatest sin after shirk is to cut ties of kinship. (Abu Dawud)\n\nMaintaining ties does not require perfection in the relationship — it requires effort. A call, a message, a visit, remembering them in your du'a — all of these count." },
                { title: '✅ Action: Contact one family member today', content: "Think of a family member you have not spoken to recently. Call them, or send a warm message. Say their name in your du'a tonight. One small act of silah plants seeds of blessing that grow beyond what you can see." }
            ],
            ar: [
                { title: '🤝 تواصل مع أسرتك ومجتمعك', content: 'متى آخر مرة اتصلتَ بوالديك أو إخوتك أو أعمامك؟ قال النبي ﷺ إن أكبر الكبائر بعد الشرك قطيعة الرحم. (أبو داود)\n\nالوصل لا يشترط كمال العلاقة — بل يشترط المحاولة. مكالمة، رسالة، زيارة، ذكرهم في الدعاء.' },
                { title: '✅ اعمل: تواصل مع أحد أقاربك اليوم', content: 'فكّر في قريب لم تتحدث إليه منذ فترة. اتصل به أو أرسل له رسالة دافئة. اذكره في دعائك الليلة. كل عمل صغير من الصلة يزرع بذور بركة لا تستطيع أن ترى نهايتها.' }
            ]
        }
    }
];

class VirtueCards {
    constructor() {
        this.idx = 0;
        this._touchStartX = 0;
        this._initialised = false;
    }

    _toArabicNum(n) {
        return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    }

    _hijriAr(hijriDate) {
        return this._toArabicNum(hijriDate)
            .replace('Dhul Hijjah', 'ذو الحجة')
            .replace('Yawm al-Tarwiyah', 'يوم التروية')
            .replace('Yawm Arafah', 'يوم عرفة')
            .replace('Eid al-Adha', 'عيد الأضحى');
    }

    _currentDay() {
        if (CONFIG.WT_TEST_DAY) return CONFIG.WT_TEST_DAY;
        const now = getCurrentTime();
        const start = new Date(CONFIG.DHUL_HIJJAH_START).getTime();
        const diff = Math.floor((now - start) / 86400000);
        if (diff < 0) return 0;
        if (diff >= 12) return -1;  // after Ayyam al-Tashreeq (days 11–12): hide section
        if (diff >= 10) return 10;  // days 11–12: Eid al-Adha card remains visible
        return diff + 1;
    }

    renderSection() {
        const container = document.getElementById('virtue-cards-container');
        if (!container) return;
        const lang = localStorage.getItem('noor-lang') || 'en';
        const today = this._currentDay();

        // Post-Tashreeq: hide the entire section (heading + cards)
        if (today < 0) {
            const section = container.closest('.vc-section-card') || container;
            section.style.display = 'none';
            return;
        }

        // On first render, jump to today's card
        if (!this._initialised) {
            this._initialised = true;
            if (today > 0) this.idx = Math.min(today - 1, 9);
        }

        container.innerHTML = this._renderCard(this.idx, lang, today);
        this._attachListeners(lang, today);
    }

    _renderCard(idx, lang, today) {
        const card = VC_DATA[idx];
        const isLocked = card.day > today;
        const isRtl = lang === 'ar';
        const prevLabel = '‹';
        const nextLabel = '›';

        const dotsHtml = VC_DATA.map((c, i) => {
            let cls = 'vc-dot';
            if (i === idx) cls += ' vc-dot-active';
            if (c.day > today) cls += ' vc-dot-locked';
            return `<span class="${cls}" data-vc-dot="${i}" title="Day ${c.day}"></span>`;
        }).join('');

        let cardBody;
        if (isLocked) {
            cardBody = `
                <div class="vc-card vc-card-locked">
                    <div class="vc-lock-content">
                        <div class="vc-lock-icon">🔒</div>
                        <div class="vc-lock-title">${isRtl ? `اليوم ${this._toArabicNum(card.day)}` : `Day ${card.day}`}</div>
                        <div class="vc-lock-sub">${isRtl ? this._hijriAr(card.hijriDate) : card.hijriDate}</div>
                        <div class="vc-lock-msg">${isRtl ? `يُفتح في ${card.gregorianDate}` : `Unlocks on ${card.gregorianDate}`}</div>
                    </div>
                </div>`;
        } else {
            const src = card.source;
            const typeLabel = src.type === 'verse'
                ? (isRtl ? '📖 آية كريمة' : '📖 Quranic Verse')
                : (isRtl ? '📜 حديث شريف' : '📜 Hadith');
            const virtueLabel = isRtl ? '💎 الفضيلة' : '💎 Virtue';
            const lessonObj = card.lesson[lang] || card.lesson.en;
            const lessonContent = lessonObj.content.split('\n').map(line => {
                line = line.trim();
                if (!line) return '';
                if (line.startsWith('•')) return `<li>${line.slice(1).trim()}</li>`;
                return `<p>${line}</p>`;
            }).join('');

            cardBody = `
                <div class="vc-card" style="--vc-color:${card.color}">
                    <div class="vc-card-head">
                        <span class="vc-card-icon">${card.icon}</span>
                        <div class="vc-card-meta">
                            <div class="vc-day-label">${isRtl ? `اليوم ${this._toArabicNum(card.day)}` : `Day ${card.day}`}</div>
                            <div class="vc-hijri">${isRtl ? this._hijriAr(card.hijriDate) : card.hijriDate}</div>
                        </div>
                    </div>
                    <div class="vc-scripture">
                        <div class="vc-type-label">${typeLabel}</div>
                        <div class="vc-arabic" dir="rtl">${src.arabic}</div>
                        ${src.transliteration ? `<div class="vc-translit">${src.transliteration}</div>` : ''}
                        <div class="vc-translation">${src.translation[lang] || src.translation.en}</div>
                        <div class="vc-ref">${src.reference}</div>
                    </div>
                    <div class="vc-virtue">
                        <div class="vc-virtue-label">${virtueLabel}</div>
                        <p class="vc-virtue-text">${card.virtue[lang] || card.virtue.en}</p>
                    </div>
                    <div class="vc-lesson">
                        <div class="vc-lesson-title">${lessonObj.title}</div>
                        <div class="vc-lesson-body">${lessonContent}</div>
                    </div>
                    <div class="vc-share-row">
                        <button class="btn vc-share-btn" data-vc-share="${idx}">${t('vcShare')}</button>
                    </div>
                </div>`;
        }

        return `
            <div class="vc-wrap" dir="${isRtl ? 'rtl' : 'ltr'}">
                <div class="vc-nav-row">
                    <button class="vc-nav-btn" id="vc-prev" ${idx === 0 ? 'disabled' : ''}>${prevLabel}</button>
                    <div class="vc-dots">${dotsHtml}</div>
                    <button class="vc-nav-btn" id="vc-next" ${idx === 9 ? 'disabled' : ''}>${nextLabel}</button>
                </div>
                <div class="vc-viewport" id="vc-viewport">
                    ${cardBody}
                </div>
            </div>`;
    }

    _goTo(idx, lang, today) {
        if (VC_DATA[idx].day > today) {
            this._toast(lang === 'ar'
                ? `🔒 اليوم ${VC_DATA[idx].day} يُفتح في ${VC_DATA[idx].gregorianDate}`
                : `🔒 Day ${VC_DATA[idx].day} unlocks on ${VC_DATA[idx].gregorianDate}`);
            return;
        }
        this.idx = idx;
        this.renderSection();
    }

    _toast(msg) {
        document.querySelectorAll('.vc-toast').forEach(t => t.remove());
        const toast = document.createElement('div');
        toast.className = 'vc-toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('vc-toast-show'));
        setTimeout(() => {
            toast.classList.remove('vc-toast-show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    _attachListeners(lang, today) {
        document.getElementById('vc-prev')?.addEventListener('click', () => {
            if (this.idx > 0) this._goTo(this.idx - 1, lang, today);
        });
        document.getElementById('vc-next')?.addEventListener('click', () => {
            if (this.idx < 9) this._goTo(this.idx + 1, lang, today);
        });
        document.querySelectorAll('[data-vc-dot]').forEach(dot => {
            dot.addEventListener('click', () => this._goTo(parseInt(dot.dataset.vcDot), lang, today));
        });
        document.querySelector('[data-vc-share]')?.addEventListener('click', () => {
            this._shareCard(this.idx, lang);
        });
        const viewport = document.getElementById('vc-viewport');
        if (viewport) {
            viewport.addEventListener('touchstart', e => {
                this._touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            viewport.addEventListener('touchend', e => {
                const dx = e.changedTouches[0].screenX - this._touchStartX;
                if (Math.abs(dx) > 50) {
                    const goNext = lang === 'ar' ? dx > 0 : dx < 0;
                    if (goNext && this.idx < 9) this._goTo(this.idx + 1, lang, today);
                    else if (!goNext && this.idx > 0) this._goTo(this.idx - 1, lang, today);
                }
            }, { passive: true });
        }
    }

    async _shareCard(idx, lang) {
        const card = VC_DATA[idx];
        const src = card.source;
        const badge = lang === 'ar'
            ? `${card.icon} ${this._hijriAr(card.hijriDate)}`
            : `${card.icon} ${card.hijriDate}`;

        const btn = document.querySelector('[data-vc-share]');
        if (btn) { btn.disabled = true; btn.textContent = '⏳'; }

        // Generate the share image (bespoke dark card, no external image needed)
        let blob = null;
        try {
            blob = await generateVCBlob(card, lang);
        } catch (err) {
            console.error('VC share — canvas error:', err);
        }

        if (btn) { btn.disabled = false; btn.textContent = t('vcShare'); }

        const shareText = `${badge}\n\n${src.arabic}\n\n${src.translation.en}\n\n🌙 Noor Nights`;
        trackEvent('/share-virtue-card', `Day ${card.day}`);

        // 1) Native file share — Android Chrome, iOS 15+
        if (blob && navigator.share) {
            try {
                const file = new File([blob], `noor-nights-day${card.day}.jpg`, { type: 'image/jpeg' });
                if (navigator.canShare?.({ files: [file] })) {
                    await navigator.share({ files: [file], title: badge });
                    return;
                }
            } catch (err) {
                if (err.name === 'AbortError') return;
                console.warn('VC share — file share failed:', err.name);
            }
        }

        // 2) Text + URL share — iOS Safari, any browser with Web Share API
        if (navigator.share) {
            try {
                await navigator.share({ title: badge, text: shareText, url: window.location.href });
                return;
            } catch (err) {
                if (err.name === 'AbortError') return;
                console.warn('VC share — text share failed:', err.name);
            }
        }

        // 3) Download fallback — desktop, unsupported browsers
        if (blob) {
            const url = URL.createObjectURL(blob);
            triggerDownload(url, `noor-nights-day${card.day}.jpg`);
            setTimeout(() => URL.revokeObjectURL(url), 5000);
            this._toast(lang === 'ar' ? '📥 تم حفظ الصورة' : '📥 Image saved!');
        } else {
            this._toast(lang === 'ar' ? 'تعذّر إنشاء الصورة' : 'Could not generate image');
        }
    }
}

let virtueCards;

// ═══════════════════════════════════════════════════
// DUA COMPANION
// ═══════════════════════════════════════════════════

const DC_CATEGORIES = [
    { id: 'arafah',      icon: '⛰️',  en: 'Day of Arafah', ar: 'يوم عرفة'   },
    { id: 'takbeer',     icon: '🔊',  en: 'Takbeer',        ar: 'التكبير'    },
    { id: 'forgiveness', icon: '🤲',  en: 'Forgiveness',    ar: 'المغفرة'    },
    { id: 'family',      icon: '👨‍👩‍👧', en: 'Family',         ar: 'العائلة'    },
    { id: 'eid',         icon: '🌙',  en: 'Eid',            ar: 'العيد'      },
    { id: 'ummah',       icon: '🌍',  en: 'Ummah',          ar: 'الأمة'      },
];

const DC_CAT_DESCRIPTIONS = {
    arafah:      { en: 'The best dua is the dua of Arafah. These supplications are powerful at any time of year.', ar: 'أفضل الدعاء دعاء يوم عرفة. هذه الأدعية قوية في أي وقت من السنة.' },
    takbeer:     { en: 'Glorify Allah abundantly — the Takbeer is among the greatest deeds at all times.', ar: 'أكثر من التكبير — التكبير من أفضل الأعمال في كل وقت.' },
    forgiveness: { en: 'Seek forgiveness sincerely. Allah loves to forgive — ask Him every day.', ar: 'استغفر الله بصدق. الله يحب أن يغفر — اسأله كل يوم.' },
    family:      { en: 'Pray for your family and loved ones. The dua of a person for their family is answered.', ar: 'ادعُ لعائلتك وأحبائك. دعاء الشخص لأهله مستجاب.' },
    eid:         { en: 'Celebrate Eid with gratitude and dua. Ask Allah to accept your worship this season.', ar: 'احتفل بالعيد بشكر ودعاء. سل الله أن يتقبل عبادتك في هذا الموسم.' },
    ummah:       { en: 'Remember the whole Ummah in your duas. The Prophet ﷺ said the dua for your brother is answered.', ar: 'اذكر الأمة كلها في دعائك. قال النبي ﷺ: دعاؤك لأخيك مستجاب.' },
};

const DC_DUAS = {
    arafah: [
        { id:'ar1', ar:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', tr:'There is no god but Allah, alone without partner. His is the dominion, His is all praise, and He has power over all things.', ref:'Tirmidhi — best dua on Arafah' },
        { id:'ar2', ar:'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', tr:'O Allah, You are Pardoning and Generous. You love to pardon, so pardon me.', ref:'Ibn Majah — recommended on Arafah' },
        { id:'ar3', ar:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', tr:'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.', ref:'Quran 2:201 — most frequent dua of the Prophet ﷺ' },
        { id:'ar4', ar:'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ وَأَوَّلَهُ وَآخِرَهُ وَعَلَانِيَتَهُ وَسِرَّهُ', tr:'O Allah, forgive all my sins — small and great, first and last, open and secret.', ref:'Muslim' },
        { id:'ar5', ar:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ', tr:'O Allah, I ask You for Paradise and I seek refuge in You from the Fire.', ref:'Abu Dawud' },
        { id:'ar6', ar:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى', tr:'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.', ref:'Muslim' },
    ],
    takbeer: [
        { id:'tk1', ar:'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ', tr:'Allah is the Greatest, Allah is the Greatest. There is no god but Allah. Allah is the Greatest, Allah is the Greatest, and all praise belongs to Allah.', ref:'Bukhari (muʿallaq)' },
        { id:'tk2', ar:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ', tr:'Glory be to Allah and His is the praise. Glory be to Allah the Magnificent.', ref:'Bukhari & Muslim — two words light on the tongue, heavy in the scales' },
        { id:'tk3', ar:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', tr:'None has the right to be worshipped except Allah alone, with no partner. To Him belongs dominion and praise, and He is over all things capable.', ref:'Tirmidhi' },
        { id:'tk4', ar:'سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ', tr:'Glory be to Allah. Praise be to Allah. There is no god but Allah. Allah is the Greatest.', ref:'Muslim — most beloved words to Allah' },
        { id:'tk5', ar:'اللَّهُمَّ لَكَ الْحَمْدُ كَالَّذِي نَقُولُ وَخَيْرًا مِمَّا نَقُولُ', tr:'O Allah, all praise is for You as we say and better than what we say.', ref:'Ibn Majah' },
    ],
    forgiveness: [
        { id:'f1', ar:'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ', tr:'My Lord, forgive me, my parents, and the believers on the Day of Reckoning.', ref:'Quran 14:41' },
        { id:'f2', ar:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', tr:'O Allah, You are Forgiving and love forgiveness, so forgive me.', ref:'Ibn Majah' },
        { id:'f3', ar:'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ', tr:'Our Lord, we have wronged ourselves. If You do not forgive us and have mercy on us, we shall be among the losers.', ref:'Quran 7:23' },
        { id:'f4', ar:'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ وَأَوَّلَهُ وَآخِرَهُ وَعَلَانِيَتَهُ وَسِرَّهُ', tr:'O Allah, forgive me all my sins — the small and the great, the first and the last, the open and the secret.', ref:'Muslim' },
        { id:'f5', ar:'سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ', tr:'Glory be to You! Indeed, I have been of the wrongdoers.', ref:'Quran 21:87' },
    ],
    family: [
        { id:'fam1', ar:'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا', tr:'My Lord, forgive me and my parents, and have mercy on them as they raised me when I was small.', ref:'Quran 17:24' },
        { id:'fam2', ar:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا', tr:'Our Lord, grant us from our spouses and offspring comfort to our eyes and make us a leader for the righteous.', ref:'Quran 25:74' },
        { id:'fam3', ar:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ', tr:'My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents.', ref:'Quran 27:19' },
        { id:'fam4', ar:'اللَّهُمَّ بَارِكْ لَنَا فِي أَهْلِنَا وَأَوْلَادِنَا', tr:'O Allah, bless us in our family and our children.', ref:'Du\'a' },
        { id:'fam5', ar:'اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي', tr:'O Allah, set right my religion which is the safeguard of my affairs, and set right my world where my livelihood is.', ref:'Muslim' },
    ],
    eid: [
        { id:'e1', ar:'اللَّهُمَّ تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ', tr:'O Allah, accept from us. Indeed, You are the All-Hearing, the All-Knowing.', ref:'Quran 2:127 — said at Eid and after worship' },
        { id:'e2', ar:'تَقَبَّلَ اللَّهُ مِنَّا وَمِنكُمْ', tr:'May Allah accept from us and from you.', ref:'Ibn Hajar — greeting of the Companions on Eid' },
        { id:'e3', ar:'اللَّهُمَّ اجْعَلْنَا مِمَّنْ تَقَبَّلْتَ عَمَلَهُ وَأَطَلْتَ عُمُرَهُ عَلَى طَاعَتِكَ', tr:'O Allah, make us among those whose deeds You accepted and whose lives You prolonged in obedience to You.', ref:'Du\'a' },
        { id:'e4', ar:'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ', tr:'Our Lord, accept from us. Indeed, You are the Accepting of repentance, the Merciful.', ref:'Quran 2:128' },
        { id:'e5', ar:'اللَّهُمَّ بَلِّغْنَا رَمَضَانَ وَذَا الْحِجَّةَ وَأَعِنَّا عَلَى الصِّيَامِ وَالْقِيَامِ', tr:'O Allah, let us reach Ramadan and Dhul Hijjah, and help us in fasting and night prayer.', ref:'Du\'a' },
    ],
    ummah: [
        { id:'u1', ar:'اللَّهُمَّ انْصُرِ الْمُسْلِمِينَ وَأَعِزَّ الإِسْلَامَ', tr:'O Allah, grant victory to the Muslims and give honour to Islam.', ref:'Du\'a' },
        { id:'u2', ar:'اللَّهُمَّ ارْحَمْ أُمَّةَ مُحَمَّدٍ', tr:'O Allah, have mercy upon the Ummah of Muhammad.', ref:'Du\'a' },
        { id:'u3', ar:'اللَّهُمَّ اكْشِفْ عَنَّا الْبَلَاءَ', tr:'O Allah, remove afflictions from us.', ref:'Du\'a' },
        { id:'u4', ar:'اللَّهُمَّ أَصْلِحْ أَحْوَالَ الْمُسْلِمِينَ فِي كُلِّ مَكَانٍ', tr:'O Allah, reform the affairs of the Muslims in every place.', ref:'Du\'a' },
        { id:'u5', ar:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً', tr:'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy.', ref:'Quran 3:8' },
    ],
};

function _escape(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
}

class DuaCompanion {
    constructor() {
        const saved = JSON.parse(localStorage.getItem('noor_duas_1447') || '{}');
        this.checked = new Set(saved.checked || []);
        this.shared = saved.shared || [];
        this.community = [];        // from Supabase (or null = not configured)
        this.cat = 'arafah';
        this._pollInterval = null;
        this._fetchCommunity();     // async — fires and updates feed when ready
    }

    _isSupabaseConfigured() {
        return CONFIG.SUPABASE_URL && CONFIG.SUPABASE_URL.length > 10
            && CONFIG.SUPABASE_ANON_KEY && CONFIG.SUPABASE_ANON_KEY.length > 10;
    }

    async _fetchCommunity() {
        if (!this._isSupabaseConfigured()) { this.community = null; return; }
        try {
            const res = await fetch(
                `${CONFIG.SUPABASE_URL}/rest/v1/community_duas?select=text,created_at,ameen_count&order=created_at.desc&limit=40`,
                { headers: { 'apikey': CONFIG.SUPABASE_ANON_KEY, 'Authorization': `Bearer ${CONFIG.SUPABASE_ANON_KEY}` } }
            );
            if (res.ok) {
                this.community = await res.json();
                this._updateFeedEl();
            }
        } catch { /* leave community as-is */ }
    }

    async _submitCommunity(text) {
        if (!this._isSupabaseConfigured()) {
            this.shared.push({ text, ts: Date.now() });
            this._save();
            return true;
        }
        try {
            const res = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/community_duas`, {
                method: 'POST',
                headers: {
                    'apikey': CONFIG.SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${CONFIG.SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({ text })
            });
            if (res.ok) { await this._fetchCommunity(); return true; }
            return false;
        } catch { return false; }
    }

    _startPoll() {
        if (this._pollInterval) return;
        this._pollInterval = setInterval(() => this._fetchCommunity(), 60000);
    }

    _save() {
        localStorage.setItem('noor_duas_1447', JSON.stringify({
            checked: [...this.checked],
            shared: this.shared,
        }));
    }

    _allDuas(cat) { return DC_DUAS[cat] || []; }

    _totalCount() {
        return Object.keys(DC_DUAS).reduce((s, k) => s + DC_DUAS[k].length, 0);
    }

    renderSection() {
        const el = document.getElementById('dc-container');
        if (!el) return;
        const lang = currentLang;
        const isAr = lang === 'ar';
        const dir = isAr ? 'rtl' : 'ltr';

        const total = this._totalCount();
        const done = this.checked.size;
        const pct = total > 0 ? Math.round(done / total * 100) : 0;

        const tabs = DC_CATEGORIES.map(c => `
            <button class="dc-tab${c.id === this.cat ? ' dc-tab-active' : ''}" data-dc-cat="${c.id}">
                <span>${c.icon}</span> <span>${isAr ? c.ar : c.en}</span>
            </button>`).join('');

        const duas = this._allDuas(this.cat);
        const items = duas.length ? duas.map(d => {
            const chk = this.checked.has(d.id);
            return `
            <label class="dc-item${chk ? ' dc-item-done' : ''}" data-dc-id="${d.id}">
                <input type="checkbox" class="dc-chk" data-dc-id="${d.id}"${chk ? ' checked' : ''}>
                <div class="dc-item-body">
                    <div class="dc-item-ar" dir="rtl">${d.ar}</div>
                    <div class="dc-item-tr">${d.tr}</div>
                    ${d.ref ? `<div class="dc-item-ref">${d.ref}</div>` : ''}
                </div>
            </label>`;
        }).join('') : `<p class="dc-empty">${isAr ? 'لا توجد أدعية' : 'No duas yet'}</p>`;

        const configured = this._isSupabaseConfigured();
        const feedHtml = this._buildFeedHtml(isAr, configured);
        const countLabel = configured
            ? (this.community?.length > 0 ? (isAr ? `${numFmt(this.community.length)} دعاء` : `${this.community.length} duas`) : '')
            : (this.shared.length > 0 ? t('dcSharedCount', this.shared.length) : '');

        el.innerHTML = `
        <div class="dc-wrap" dir="${dir}">
            <div class="dc-progress-row">
                <div class="dc-progress-bar"><div class="dc-progress-fill" style="width:${pct}%"></div></div>
                <span class="dc-progress-label">${t('dcProgress', done, total)}</span>
            </div>
            <div class="dc-tabs">${tabs}</div>
            ${DC_CAT_DESCRIPTIONS[this.cat] ? `<p class="dc-cat-desc">${isAr ? DC_CAT_DESCRIPTIONS[this.cat].ar : DC_CAT_DESCRIPTIONS[this.cat].en}</p>` : ''}
            <div class="dc-list">${items}</div>
            <div class="dc-shared-section">
                <div class="dc-shared-header">
                    <span class="dc-shared-title">${t('dcSharedTitle')}</span>
                    <span class="dc-shared-count">${countLabel}</span>
                </div>
                <div class="dc-wall-intro">
                    ${isAr
                        ? `<span class="dc-wall-intro-icon">🤲</span><span>اكتب دعاءً وشاركه مع إخوانك — كل من يقرأه سيقول <b>آمين</b>، وما دعوت به لغيرك دعا لك به ملَك بمثله.</span>`
                        : `<span class="dc-wall-intro-icon">🤲</span><span>Share a dua — every brother & sister who reads it will say <b>Ameen</b>. The Prophet ﷺ said: "When you make dua for your brother, an angel says: And for you the same."</span>`
                    }
                </div>
                ${!configured ? `<div class="dc-community-notice">${isAr ? '💡 الجدار محلي حالياً. لمشاركة الأدعية مع جميع المستخدمين، قم بإعداد Supabase في CONFIG.' : '💡 Wall is local for now. To share with all users, configure Supabase in CONFIG.'}</div>` : ''}
                <div class="dc-shared-feed" id="dc-shared-feed">${feedHtml}</div>
                <div class="dc-share-form">
                    <input class="dc-share-input" id="dc-share-input" maxlength="200"
                        placeholder="${t('dcSharePlaceholder')}"
                        dir="${isAr ? 'rtl' : 'ltr'}">
                    <button class="btn dc-share-submit" id="dc-share-submit">${t('dcShareBtn')}</button>
                </div>
            </div>
        </div>`;

        this._listen(lang);
        this._startPoll();
    }

    _ameenKey() { return 'noor_ameen_1447'; }
    _loadAmeens() {
        try { return JSON.parse(localStorage.getItem(this._ameenKey()) || '{}'); } catch { return {}; }
    }
    _saveAmeens(data) { localStorage.setItem(this._ameenKey(), JSON.stringify(data)); }

    _ameenId(text, ts) {
        // Simple stable ID from first 20 chars + timestamp
        return (text || '').slice(0, 20).replace(/\s+/g, '_') + '_' + (ts || 0);
    }

    tapAmeen(id, btnEl) {
        const data = this._loadAmeens();
        if (data[id]) return; // already said Ameen
        data[id] = Date.now();
        this._saveAmeens(data);
        if (btnEl) {
            btnEl.classList.add('dc-ameen-done');
            const countEl = btnEl.querySelector('.dc-ameen-count');
            const prev = parseInt(countEl ? countEl.textContent || '0' : '0', 10);
            if (countEl) countEl.textContent = String(prev + 1);
        }
        // Increment ameen_count in Supabase atomically via RPC
        if (this._isSupabaseConfigured()) {
            const entry = this.community && this.community.find(s => {
                return this._ameenId(s.text, new Date(s.created_at).getTime()) === id;
            });
            if (entry) {
                entry.ameen_count = (entry.ameen_count || 0) + 1; // optimistic local update
                fetch(`${CONFIG.SUPABASE_URL}/rest/v1/rpc/increment_ameen`, {
                    method: 'POST',
                    headers: {
                        'apikey': CONFIG.SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${CONFIG.SUPABASE_ANON_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ dua_text: entry.text, dua_ts: entry.created_at })
                }).catch(() => {});
            }
        }
    }

    _buildFeedHtml(isAr, configured) {
        const ameens = this._loadAmeens();
        const ameenLabel = isAr ? 'آمين' : 'Ameen';

        if (configured) {
            if (!this.community || this.community.length === 0) {
                return `<p class="dc-empty dc-loading-msg">${isAr ? 'جارٍ التحميل…' : 'Loading community duas…'}</p>`;
            }
            return this.community.map(s => {
                const aid = this._ameenId(s.text, new Date(s.created_at).getTime());
                const said = !!ameens[aid];
                const cnt = s.ameen_count || 0;
                return `
                <div class="dc-shared-item">
                    <span class="dc-shared-text">${_escape(s.text)}</span>
                    <div class="dc-shared-footer">
                        <span class="dc-shared-meta">
                            <span class="dc-shared-anon">${isAr ? 'مجهول' : 'Anonymous'}</span>
                            <span class="dc-shared-time">${this._timeAgo(new Date(s.created_at).getTime(), isAr)}</span>
                        </span>
                        <button class="dc-ameen-btn${said ? ' dc-ameen-done' : ''}" data-ameen-id="${_escape(aid)}">
                            🤲 ${ameenLabel} <span class="dc-ameen-count">${cnt > 0 ? cnt : ''}</span>
                        </button>
                    </div>
                </div>`;
            }).join('');
        }
        // localStorage fallback
        if (!this.shared.length) return `<p class="dc-empty">${t('dcSharedEmpty')}</p>`;
        return [...this.shared].reverse().slice(0, 20).map(s => {
            const aid = this._ameenId(s.text, s.ts);
            const said = !!ameens[aid];
            const cnt = parseInt(localStorage.getItem('noor_ameen_cnt_' + aid) || '0', 10);
            return `
            <div class="dc-shared-item">
                <span class="dc-shared-text">${_escape(s.text)}</span>
                <div class="dc-shared-footer">
                    <span class="dc-shared-meta">
                        <span class="dc-shared-anon">${isAr ? 'مجهول' : 'Anonymous'}</span>
                        <span class="dc-shared-time">${this._timeAgo(s.ts, isAr)}</span>
                    </span>
                    <button class="dc-ameen-btn${said ? ' dc-ameen-done' : ''}" data-ameen-id="${_escape(aid)}">
                        🤲 ${ameenLabel} <span class="dc-ameen-count">${cnt > 0 ? cnt : ''}</span>
                    </button>
                </div>
            </div>`;
        }).join('');
    }

    _updateFeedEl() {
        const feed = document.getElementById('dc-shared-feed');
        if (!feed) return;
        const isAr = currentLang === 'ar';
        feed.innerHTML = this._buildFeedHtml(isAr, this._isSupabaseConfigured());
        const countEl = document.querySelector('.dc-shared-count');
        if (countEl && this.community?.length > 0) {
            countEl.textContent = isAr ? `${numFmt(this.community.length)} دعاء` : `${this.community.length} duas`;
        }
    }

    _listen(lang) {
        const isAr = lang === 'ar';

        document.querySelectorAll('[data-dc-cat]').forEach(btn => {
            btn.addEventListener('click', () => {
                this.cat = btn.dataset.dcCat;
                this.renderSection();
            });
        });

        document.querySelectorAll('.dc-chk').forEach(chk => {
            chk.addEventListener('change', () => {
                const id = chk.dataset.dcId;
                if (chk.checked) this.checked.add(id); else this.checked.delete(id);
                this._save();
                const item = chk.closest('.dc-item');
                if (item) item.classList.toggle('dc-item-done', chk.checked);
                const total = this._totalCount();
                const done = this.checked.size;
                const pct = total > 0 ? Math.round(done / total * 100) : 0;
                const fill = document.querySelector('.dc-progress-fill');
                if (fill) fill.style.width = pct + '%';
                const lbl = document.querySelector('.dc-progress-label');
                if (lbl) lbl.textContent = t('dcProgress', done, total);
            });
        });

        document.getElementById('dc-share-submit')?.addEventListener('click', async () => {
            const inp = document.getElementById('dc-share-input');
            const raw = (inp?.value || '').trim();
            if (!raw) return;
            if (raw.length < 5) {
                this._toast(isAr ? 'الدعاء قصير جداً (٥ أحرف على الأقل)' : 'Dua is too short (min 5 characters)');
                return;
            }
            if (raw.length > 200 || /https?:\/\//i.test(raw)) {
                this._toast(isAr ? 'المحتوى غير مقبول' : 'Content not allowed');
                return;
            }
            const lastSubmit = parseInt(localStorage.getItem('noor_dua_last_submit') || '0');
            const cooldownMs = 10 * 1000;
            const elapsed = Date.now() - lastSubmit;
            if (elapsed < cooldownMs) {
                const remaining = Math.ceil((cooldownMs - elapsed) / 1000);
                this._toast(isAr ? `انتظر ${remaining} ثانية قبل المشاركة مجدداً` : `Please wait ${remaining} sec before sharing again`);
                return;
            }
            const btn = document.getElementById('dc-share-submit');
            if (btn) { btn.disabled = true; btn.textContent = isAr ? '…' : '…'; }
            const ok = await this._submitCommunity(raw);
            if (ok) {
                if (inp) inp.value = '';
                localStorage.setItem('noor_dua_last_submit', Date.now().toString());
                this._toast(isAr ? '🤲 تمت المشاركة بنجاح' : '🤲 Shared with the community!');
            } else {
                this._toast(isAr ? '❌ فشلت المشاركة، حاول مجدداً' : '❌ Failed to share, try again');
            }
            if (btn) { btn.disabled = false; btn.textContent = t('dcShareBtn'); }
            if (!this._isSupabaseConfigured()) this.renderSection();
        });
    }

    _timeAgo(ts, isAr) {
        const s = Math.floor((Date.now() - ts) / 1000);
        if (s < 60) return isAr ? 'الآن' : 'just now';
        const m = Math.floor(s / 60);
        if (m < 60) return isAr ? `منذ ${numFmt(m)} د` : `${m}m ago`;
        const h = Math.floor(m / 60);
        if (h < 24) return isAr ? `منذ ${numFmt(h)} س` : `${h}h ago`;
        const d = Math.floor(h / 24);
        return isAr ? `منذ ${numFmt(d)} يوم` : `${d}d ago`;
    }

    _toast(msg) {
        document.querySelectorAll('.dc-toast').forEach(t => t.remove());
        const el = document.createElement('div');
        el.className = 'dc-toast';
        el.textContent = msg;
        document.body.appendChild(el);
        requestAnimationFrame(() => el.classList.add('dc-toast-show'));
        setTimeout(() => { el.classList.remove('dc-toast-show'); setTimeout(() => el.remove(), 300); }, 3000);
    }
}

let duaCompanion;

// ═══════════════════════════════════════════════════
// PRAYER TIMES (TASK 09)
// ═══════════════════════════════════════════════════
const _PT_CACHE_KEY = 'noor_pt_cache_v2';
const _PT_LOC_KEY   = 'noor_pt_location';
const _PR_KEY       = 'noor_pr_prefs';
const _PT_PRAYERS_LIST = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
const _PT_FALLBACK = { fajr: '04:18', dhuhr: '12:52', asr: '16:28', maghrib: '19:45', isha: '21:14' };
function _getBakedFallback(dateStr) {
    if (typeof CAIRO_BAKED_TIMES !== 'undefined' && CAIRO_BAKED_TIMES[dateStr]) return CAIRO_BAKED_TIMES[dateStr];
    return _PT_FALLBACK;
}
class PrayerTimesAPI {
    constructor() {
        this._cache = this._loadCache();
    }

    _loadCache() {
        try { return JSON.parse(localStorage.getItem(_PT_CACHE_KEY) || '{}'); } catch { return {}; }
    }

    _saveCache() {
        try { localStorage.setItem(_PT_CACHE_KEY, JSON.stringify(this._cache)); } catch {}
    }

    getSavedLocation() {
        try { return JSON.parse(localStorage.getItem(_PT_LOC_KEY)); } catch { return null; }
    }

    saveLocation(lat, lng, name) {
        try { localStorage.setItem(_PT_LOC_KEY, JSON.stringify({ lat, lng, name })); } catch {}
    }

    async upgradeLocationName() {
        const loc = this.getSavedLocation();
        if (!loc) return;
        // Only upgrade if name still looks like raw coordinates (e.g. "30.24, 31.35")
        if (!/^-?\d+\.\d+,\s*-?\d+\.\d+$/.test((loc.name || '').trim())) return;
        try {
            const controller = new AbortController();
            const tid = setTimeout(() => controller.abort(), 5000);
            const r = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${loc.lat}&lon=${loc.lng}&format=json&accept-language=en`, { signal: controller.signal });
            clearTimeout(tid);
            const j = await r.json();
            const a = j.address || {};
            const city = a.city || a.town || a.village || a.municipality || a.county || a.state_district || a.state;
            const country = a.country;
            if (city) {
                const name = country ? `${city}, ${country}` : city;
                this.saveLocation(loc.lat, loc.lng, name);
                if (prayerWidget) prayerWidget.render();
                _updateSettingsCard();
            }
        } catch {}
    }

    async detectLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) { reject(Object.assign(new Error('no_geo'), { code: 0 })); return; }
            navigator.geolocation.getCurrentPosition(async pos => {
                const { latitude: lat, longitude: lng } = pos.coords;
                let name = `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
                try {
                    const r = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`);
                    const j = await r.json();
                    const a = j.address || {};
                    const city = a.city || a.town || a.village || a.municipality || a.county || a.state_district || a.state;
                    const country = a.country;
                    if (city && country) name = `${city}, ${country}`;
                    else if (city) name = city;
                } catch {}
                this.saveLocation(lat, lng, name);
                // Invalidate cached month so fresh times are fetched for new location
                const d = new Date(getCurrentTime());
                const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
                delete this._cache[key];
                this._saveCache();
                resolve({ lat, lng, name });
            }, err => reject(err), { timeout: 10000 });
        });
    }

    _todayStr() {
        const d = new Date(getCurrentTime());
        return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    }

    async _fetchMonth(year, month) {
        const key = `${year}-${String(month).padStart(2,'0')}`;
        const cached = this._cache[key];
        if (cached && Date.now() - cached.ts < 86400000) return cached.times;
        try {
            const loc = this.getSavedLocation();
            const lat = loc ? loc.lat : 30.0444;
            const lng = loc ? loc.lng : 31.2357;
            const url = `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${lat}&longitude=${lng}&method=5`;
            const controller = new AbortController();
            const tid = setTimeout(() => controller.abort(), 8000);
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(tid);
            if (!res.ok) throw new Error('api_err');
            const json = await res.json();
            if (json.code !== 200) throw new Error('api_err');
            const times = {};
            json.data.forEach(day => {
                const [d, m, y] = day.date.gregorian.date.split('-');
                const dk = `${y}-${m}-${d}`;
                times[dk] = {
                    fajr:    day.timings.Fajr.split(' ')[0],
                    dhuhr:   day.timings.Dhuhr.split(' ')[0],
                    asr:     day.timings.Asr.split(' ')[0],
                    maghrib: day.timings.Maghrib.split(' ')[0],
                    isha:    day.timings.Isha.split(' ')[0],
                };
            });
            this._cache[key] = { ts: Date.now(), times };
            this._saveCache();
            return times;
        } catch { return null; }
    }

    async getTimesForDate(dateStr) {
        const [y, m] = dateStr.split('-').map(Number);
        const times = await this._fetchMonth(y, m);
        return (times && times[dateStr]) || _getBakedFallback(dateStr);
    }

    getCachedTimesForDate(dateStr) {
        const [y, m] = dateStr.split('-').map(Number);
        const key = `${y}-${String(m).padStart(2,'0')}`;
        const cached = this._cache[key];
        if (cached && cached.times && cached.times[dateStr]) return cached.times[dateStr];
        return null;
    }

    getCurrentPrayer(times) {
        const now = new Date(getCurrentTime());
        const cur = now.getHours() * 60 + now.getMinutes();
        let current = 'fajr';
        for (const p of _PT_PRAYERS_LIST) {
            const [h, m] = times[p].split(':').map(Number);
            if (cur >= h * 60 + m) current = p;
        }
        return current;
    }

    getNextPrayer(times) {
        const now = new Date(getCurrentTime());
        const cur = now.getHours() * 60 + now.getMinutes();
        for (const p of _PT_PRAYERS_LIST) {
            const [h, m] = times[p].split(':').map(Number);
            const pm = h * 60 + m;
            if (cur < pm) return { name: p, mins: pm - cur };
        }
        const [fh, fm] = times.fajr.split(':').map(Number);
        return { name: 'fajr', mins: (1440 - cur) + fh * 60 + fm };
    }
}

class PrayerTimesWidget {
    constructor(api) {
        this._api = api;
        this._times = null;
        this._interval = null;
        this._locTimeout = null;
    }

    async init() {
        this._locTimeout = setTimeout(() => { this._api.upgradeLocationName(); }, 2000);
        // Render immediately with cached or fallback times so user never sees perpetual "Loading…"
        const today = this._api._todayStr();
        const instant = this._api.getCachedTimesForDate(today);
        this._times = instant || _getBakedFallback(today);
        this.render();
        if (!this._interval) {
            this._interval = setInterval(() => this._tick(), 60000);
        }
        // Fetch fresh data in the background and re-render if different
        const fresh = await this._api.getTimesForDate(today);
        if (fresh && fresh !== this._times) {
            this._times = fresh;
            this.render();
        }
    }

    render() {
        const el = document.getElementById('pt-container');
        if (!el) return;
        if (!this._times) { el.innerHTML = `<p class="pt-loading">${currentLang === 'ar' ? 'جارٍ التحميل…' : 'Loading…'}</p>`; return; }

        const isAr = currentLang === 'ar';
        const dir = isAr ? 'rtl' : 'ltr';
        const names = t('dhPrayers');
        const current = this._api.getCurrentPrayer(this._times);
        const next = this._api.getNextPrayer(this._times);
        const nextH = Math.floor(next.mins / 60);
        const nextM = next.mins % 60;
        const nextText = isAr
            ? `الصلاة القادمة: ${names[next.name]} — ${nextH > 0 ? `${numFmt(nextH)}س ${numFmt(nextM)}د` : `${numFmt(nextM)} دقيقة`}`
            : `Next: ${names[next.name]} — ${nextH > 0 ? `${nextH}h ${nextM}m` : `${nextM}m`}`;

        const savedLoc = this._api.getSavedLocation();
        const rawLocName = savedLoc ? savedLoc.name : (isAr ? 'القاهرة، مصر' : 'Cairo, Egypt');
        const _coordPattern = /^-?\d+(\.\d+)?,\s*-?\d+(\.\d+)?$/;
        const locName = _coordPattern.test(rawLocName) ? (isAr ? 'جارٍ تحديد المدينة…' : 'Detecting city…') : rawLocName;

        const rows = _PT_PRAYERS_LIST.map(p => {
            const bellOn = prayerReminders && prayerReminders.isEnabled(p);
            return `
            <div class="pt-row${p === current ? ' pt-row-current' : ''}">
                <span class="pt-name">${names[p]}</span>
                <span class="pt-time">${numFmt(this._times[p])}</span>
                <button class="pt-bell${bellOn ? ' pt-bell-on' : ''}" data-prayer="${p}" onclick="togglePrayerReminder('${p}')" title="Toggle reminder">🔔</button>
            </div>`;
        }).join('');

        const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
        const reminderHint = !isStandalone
            ? `<div class="pt-reminder-hint" onclick="switchTab('more')">
                 <span>⚠️</span>
                 <span>${isAr ? 'التذكيرات تعمل فقط عند فتح التطبيق — <u>ثبّت التطبيق</u> للتذكيرات في الخلفية' : 'Reminders only work while the app is open — <u>Install the app</u> for background alerts'}</span>
               </div>`
            : '';

        el.innerHTML = `
        <div class="pt-wrap" dir="${dir}">
            <div class="pt-location-row">
                <span class="pt-location">📍 ${_escape(locName)}</span>
                <button id="pt-detect-btn" class="pt-detect-btn" onclick="detectPrayerLocation()">${t('ptDetectBtn')}</button>
            </div>
            <div class="pt-list">${rows}</div>
            <div class="pt-next" id="pt-next">${nextText}</div>
            ${reminderHint}
        </div>`;
    }

    _tick() {
        if (!this._times) return;
        const isAr = currentLang === 'ar';
        const names = t('dhPrayers');
        const current = this._api.getCurrentPrayer(this._times);
        const next = this._api.getNextPrayer(this._times);
        const nextH = Math.floor(next.mins / 60);
        const nextM = next.mins % 60;

        document.querySelectorAll('.pt-row').forEach((row, i) => {
            row.classList.toggle('pt-row-current', _PT_PRAYERS_LIST[i] === current);
        });
        const nextEl = document.getElementById('pt-next');
        if (nextEl) nextEl.textContent = isAr
            ? `الصلاة القادمة: ${names[next.name]} — ${nextH > 0 ? `${numFmt(nextH)}س ${numFmt(nextM)}د` : `${numFmt(nextM)} دقيقة`}`
            : `Next: ${names[next.name]} — ${nextH > 0 ? `${nextH}h ${nextM}m` : `${nextM}m`}`;
    }
}

let prayerAPI;
let prayerWidget;
let prayerReminders;

// ═══════════════════════════════════════════════════
// PRAYER REMINDERS
// ═══════════════════════════════════════════════════
class PrayerReminders {
    constructor(api) {
        this._api = api;
        this._timers = {};
        this._prefs = this._load();
    }

    _load() {
        try { return JSON.parse(localStorage.getItem(_PR_KEY) || '{}'); } catch { return {}; }
    }

    _save() {
        try { localStorage.setItem(_PR_KEY, JSON.stringify(this._prefs)); } catch {}
    }

    isEnabled(prayer) { return !!this._prefs[prayer]; }

    enable(prayer, times) {
        if (this._prefs[prayer]) return;
        this._prefs[prayer] = true;
        this._save();
        // If times aren't available yet, preference is saved and timer will be scheduled by scheduleAll() once times load.
        if (times) { this._times = times; this._schedule(prayer, times); }
        const names = t('dhPrayers');
        showMessage(t('ptReminderSetTitle'), t('ptReminderSetMsg', names[prayer]));
        document.querySelectorAll(`.pt-bell[data-prayer="${prayer}"]`).forEach(btn => btn.classList.add('pt-bell-on'));
    }

    disable(prayer) {
        if (!this._prefs[prayer]) return;
        this._prefs[prayer] = false;
        this._save();
        if (this._timers[prayer]) { clearTimeout(this._timers[prayer]); delete this._timers[prayer]; }
        const names = t('dhPrayers');
        showMessage(t('ptReminderOffTitle'), t('ptReminderOffMsg', names[prayer]));
        document.querySelectorAll(`.pt-bell[data-prayer="${prayer}"]`).forEach(btn => btn.classList.remove('pt-bell-on'));
    }

    toggle(prayer, times) {
        const wasOn = !!this._prefs[prayer];
        this._prefs[prayer] = !wasOn;
        this._save();

        const names = t('dhPrayers');
        if (this._prefs[prayer]) {
            if (times) { this._times = times; this._schedule(prayer, times); }
            showMessage(t('ptReminderSetTitle'), t('ptReminderSetMsg', names[prayer]));
        } else {
            if (this._timers[prayer]) { clearTimeout(this._timers[prayer]); delete this._timers[prayer]; }
            showMessage(t('ptReminderOffTitle'), t('ptReminderOffMsg', names[prayer]));
        }

        // Update bell UI without full re-render
        document.querySelectorAll(`.pt-bell[data-prayer="${prayer}"]`).forEach(btn => {
            btn.classList.toggle('pt-bell-on', !!this._prefs[prayer]);
        });
    }

    scheduleAll(times) {
        this._times = times;
        this.cancelAll();
        for (const p of _PT_PRAYERS_LIST) {
            if (this._prefs[p]) this._schedule(p, times);
        }
    }

    cancelAll() {
        Object.values(this._timers).forEach(id => clearTimeout(id));
        this._timers = {};
    }

    _schedule(prayer, times) {
        if (this._timers[prayer]) clearTimeout(this._timers[prayer]);
        const [h, m] = times[prayer].split(':').map(Number);
        const now = new Date(getCurrentTime());
        const target = new Date(now);
        target.setHours(h, m, 0, 0);
        if (target.getTime() <= now.getTime()) target.setDate(target.getDate() + 1);
        const ms = target.getTime() - now.getTime();
        this._timers[prayer] = setTimeout(() => this._fire(prayer), ms);
    }

    _fire(prayer) {
        delete this._timers[prayer];
        if (!('Notification' in window) || Notification.permission !== 'granted') return;
        const names = t('dhPrayers');
        const isAr = currentLang === 'ar';
        const title = `🕌 ${names[prayer]}`;
        const body = isAr
            ? `حان وقت صلاة ${names[prayer]} — حيّ على الصلاة`
            : `It's time for ${names[prayer]} — Hayya 'ala-s-Salah`;
        const _base = window.location.origin;
        const options = {
            body, icon: `${_base}/assets/icons/icon-512.png`, badge: `${_base}/assets/icons/icon-96-mono.png`,
            tag: `noor-prayer-${prayer}`, silent: false, renotify: true, vibrate: [300, 100, 300, 100, 300],
            requireInteraction: true,
        };
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(reg => reg.showNotification(title, options)).catch(() => new Notification(title, options));
        } else {
            new Notification(title, options);
        }
        if (this._times) this._schedule(prayer, this._times);
    }
}

function _ensureNotificationPermission(callback) {
    if (!('Notification' in window)) { showMessage(t('notSuppTitle'), t('notSuppMsg')); return; }
    if (Notification.permission === 'granted') { callback(); return; }
    if (Notification.permission === 'denied') { showMessage(t('blockedTitle'), t('blockedMsg')); return; }
    Notification.requestPermission().then(p => {
        if (p === 'granted') callback();
        else showMessage(t('permNeeded'), t('permNeededAndroid'));
    });
}

function togglePrayerReminder(prayer) {
    if (!prayerReminders) return;
    _ensureNotificationPermission(() => {
        prayerReminders.toggle(prayer, prayerWidget && prayerWidget._times);
    });
}

async function detectPrayerLocation() {
    const btn = document.getElementById('pt-detect-btn');
    if (btn) { btn.disabled = true; btn.textContent = t('ptDetecting'); }
    try {
        const loc = await prayerAPI.detectLocation();
        await prayerWidget.init();
        if (prayerReminders && prayerWidget._times) prayerReminders.scheduleAll(prayerWidget._times);
        showMessage(t('ptLocationUpdated'), loc.name);
    } catch (e) {
        const msg = e.code === 1 ? t('ptGeoDenied') : t('ptGeoError');
        showMessage(currentLang === 'ar' ? 'خطأ' : 'Error', msg);
    } finally {
        const btn2 = document.getElementById('pt-detect-btn');
        if (btn2) { btn2.disabled = false; btn2.textContent = t('ptDetectBtn'); }
    }
}

function testPrayerReminder() {
    _ensureNotificationPermission(() => {
        const names = t('dhPrayers');
        const prayer = 'maghrib';
        const isAr = currentLang === 'ar';
        const title = `🕌 ${names[prayer]}`;
        const body = isAr
            ? `حان وقت صلاة ${names[prayer]} — حيّ على الصلاة`
            : `It's time for ${names[prayer]} — Hayya 'ala-s-Salah`;
        const _base = window.location.origin;
        const options = {
            body, icon: `${_base}/assets/icons/icon-512.png`, badge: `${_base}/assets/icons/icon-96-mono.png`,
            tag: 'noor-prayer-test', silent: false, renotify: true, vibrate: [300, 100, 300, 100, 300],
            requireInteraction: true,
        };

        const _showNotif = () => {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(reg => reg.showNotification(title, options)).catch(() => new Notification(title, options));
            } else {
                new Notification(title, options);
            }
        };

        // Show countdown in modal so user is ready to see the system notification
        const modal = document.getElementById('msg-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        if (modal && modalTitle && modalDesc) {
            modal.style.display = 'flex';
            modalTitle.textContent = isAr ? '🔔 جارٍ الإرسال… 3' : '🔔 Sending in 3…';
            modalDesc.textContent = isAr
                ? 'ستظهر التذكيرة في الزاوية العلوية من شاشتك'
                : 'Watch the top-right corner of your screen';
            let count = 3;
            const tick = setInterval(() => {
                count--;
                if (count > 0) {
                    modalTitle.textContent = isAr ? `🔔 جارٍ الإرسال… ${count}` : `🔔 Sending in ${count}…`;
                } else {
                    clearInterval(tick);
                    modal.style.display = 'none';
                    _showNotif();
                }
            }, 1000);
        } else {
            _showNotif();
        }

        trackEvent('/test-prayer-reminder', 'Test Prayer Reminder');
    });
}

// ═══════════════════════════════════════════════════
// ARAFA DAY GOLDEN MODE
// ═══════════════════════════════════════════════════
function getDhulHijjahDay() {
    if (CONFIG.WT_TEST_DAY) return CONFIG.WT_TEST_DAY;
    const now = getCurrentTime();
    const start = new Date(CONFIG.DHUL_HIJJAH_START).getTime();
    const diff = Math.floor((now - start) / 86400000);
    if (diff < 0) return 0;
    if (diff >= 10) return 10;
    return diff + 1;
}

// ── Daily Focus Card ──────────────────────────────────
const DAILY_FOCUS = [
    { day: 1,  en: { theme: 'Intention',    focus: 'Set a sincere niyyah for the next ten days. Every deed begins in the heart.',  ayah: '"Actions are but by intentions." — Bukhari' }, ar: { theme: 'النية',      focus: 'جدّد نيّتك لأيام العشر. كل عمل يبدأ من القلب.',                          ayah: '«إنما الأعمال بالنيات» — البخاري' } },
    { day: 2,  en: { theme: 'Gratitude',    focus: 'Count blessings, not burdens. Say Alhamdulillah for three things right now.',  ayah: '"If you are grateful, I will surely give you more." — Quran 14:7' }, ar: { theme: 'الشكر',      focus: 'عدّ نعم الله عليك. قل الحمد لله على ثلاثة أشياء الآن.',                 ayah: '«لَئِن شَكَرۡتُمۡ لَأَزِيدَنَّكُمۡ» — إبراهيم: ٧' } },
    { day: 3,  en: { theme: 'Quran',        focus: 'Open the Quran today. Even one page read with reflection moves mountains.',     ayah: '"Recite and ascend — and recite slowly." — Tirmidhi' }, ar: { theme: 'القرآن',     focus: 'افتح المصحف اليوم. ولو صفحة واحدة بتأمل تُحدث فرقاً.',                 ayah: '«اقرأ وارتق» — الترمذي' } },
    { day: 4,  en: { theme: 'Charity',      focus: 'Give something today — money, a smile, a kind word. Charity never decreases wealth.', ayah: '"Allah will deprive usury of all blessing, but He will give increase for deeds of charity." — Quran 2:276' }, ar: { theme: 'الصدقة',    focus: 'أعطِ شيئاً اليوم — مالاً أو ابتسامة أو كلمة طيبة.',                      ayah: '«وَيُرۡبِي ٱلصَّدَقَـٰتِ» — البقرة: ٢٧٦' } },
    { day: 5,  en: { theme: 'Prayer',       focus: 'Pray all five prayers on time. Each is a conversation with Allah — don\'t miss it.', ayah: '"The first thing you will be asked about on the Day of Judgement is the prayer." — Abu Dawud' }, ar: { theme: 'الصلاة',     focus: 'صلِّ الصلوات الخمس في وقتها. كل صلاة لقاء مع الله.',                    ayah: '«أول ما يُحاسَب عليه العبد الصلاة» — أبو داود' } },
    { day: 6,  en: { theme: 'Dhikr',        focus: 'Keep your tongue moist with remembrance. Say SubhanAllah 100 times — it takes 5 minutes.', ayah: '"The best of speech is SubhanAllah, Alhamdulillah, La ilaha illAllah, Allahu Akbar." — Muslim' }, ar: { theme: 'الذكر',      focus: 'رطّب لسانك بذكر الله. قل سبحان الله ١٠٠ مرة — لا تأخذ إلا ٥ دقائق.',    ayah: '«أفضل الكلام سبحان الله والحمد لله…» — مسلم' } },
    { day: 7,  en: { theme: 'Family',       focus: 'Reconnect with family today. A phone call, a kind word, or a shared meal.',       ayah: '"The best of you is the one who is best to his family." — Tirmidhi' }, ar: { theme: 'الأسرة',     focus: 'تواصل مع عائلتك اليوم. مكالمة، كلمة طيبة، أو طعام مشترك.',             ayah: '«خيركم خيركم لأهله» — الترمذي' } },
    { day: 8,  en: { theme: 'Yawm al-Tarwiyah', focus: 'The pilgrims depart for Mina today. Join them in spirit with extra dhikr and takbeer.', ayah: '"Remember Allah during the appointed days." — Quran 2:203' }, ar: { theme: 'يوم التروية', focus: 'الحجاج يتوجهون إلى منى اليوم. شاركهم روحياً بالذكر والتكبير.',          ayah: '«وَٱذۡكُرُواْ ٱللَّهَ فِيٓ أَيَّامٖ مَّعۡدُودَـٰتٖ» — البقرة: ٢٠٣' } },
    { day: 9,  en: { theme: 'Day of Arafah', focus: 'Fast today if not a pilgrim. The Prophet ﷺ said it expiates sins of two years.', ayah: '"There is no day on which Allah frees more servants from the Fire than Arafah." — Muslim' }, ar: { theme: 'يوم عرفة',   focus: 'صم اليوم إن لم تكن حاجاً. النبي ﷺ قال: يكفّر سنتين.',                   ayah: '«ما من يوم أكثر من أن يعتق الله فيه عبداً من النار من يوم عرفة» — مسلم' } },
    { day: 10, en: { theme: 'Sacrifice',    focus: 'Eid al-Adha — the day of Udhiyah. Reflect on the sacrifice of Ibrahim ﷺ and give generously.', ayah: '"It is not their meat nor their blood that reaches Allah — it is your piety." — Quran 22:37' }, ar: { theme: 'الأضحية',    focus: 'عيد الأضحى — يوم الأضحية. تأمّل في تضحية إبراهيم ﷺ وأعطِ بسخاء.',      ayah: '«لَن يَنَالَ ٱللَّهَ لُحُومُهَا… وَلَـٰكِن يَنَالُهُ ٱلتَّقۡوَىٰ» — الحج: ٣٧' } },
];

// ── Collapsible Dhikr Sections ────────────────────────
const _DHIKR_SECTIONS_KEY = 'noor-dhikr-sections';
function _dhikrSectionState() {
    try { return JSON.parse(localStorage.getItem(_DHIKR_SECTIONS_KEY) || '{}'); } catch { return {}; }
}
function toggleDhikrSection(btn, id) {
    const body = document.getElementById(id);
    if (!body) return;
    const state = _dhikrSectionState();
    const isOpen = !body.classList.contains('dhs-collapsed');
    body.classList.toggle('dhs-collapsed', isOpen);
    btn.classList.toggle('dhs-header-closed', isOpen);
    state[id] = !isOpen;
    localStorage.setItem(_DHIKR_SECTIONS_KEY, JSON.stringify(state));
}
function initDhikrSections() {
    const state = _dhikrSectionState();
    ['dhs-takbeer','dhs-virtuous','dhs-morning','dhs-protection'].forEach(id => {
        const body = document.getElementById(id);
        const btn = body && body.previousElementSibling;
        if (!body || !btn) return;
        // Default: all open. Only collapse if explicitly saved as false.
        if (state[id] === false) {
            body.classList.add('dhs-collapsed');
            btn.classList.add('dhs-header-closed');
        }
    });
}

function _updateSettingsCard(lang) {
    const isAr = (lang || currentLang) === 'ar';
    const btn = document.getElementById('settings-lang-btn');
    if (btn) btn.textContent = isAr ? 'AR → EN' : 'EN → AR';
    const locEl = document.getElementById('settings-location-name');
    if (locEl) {
        const saved = prayerAPI ? prayerAPI.getSavedLocation() : null;
        locEl.textContent = saved && saved.name ? saved.name : (isAr ? 'لم يتم تحديده' : 'Not set');
    }
    _updateSettingsPrayerToggles();
}

function toggleSettingsPrayerPanel() {
    const panel = document.getElementById('settings-prayer-toggles');
    const btn = document.getElementById('settings-notif-btn');
    if (!panel) return;
    const open = panel.style.display === 'none' || panel.style.display === '';
    panel.style.display = open ? 'block' : 'none';
    if (btn) btn.textContent = open ? (currentLang === 'ar' ? '▲ إغلاق' : '▲ Close') : t('settingsManageBtn');
    if (open) _updateSettingsPrayerToggles();
}

function togglePrayerReminderFromSettings(prayer) {
    if (!prayerReminders) return;
    const isOn = prayerReminders.isEnabled(prayer);
    if (isOn) {
        prayerReminders.disable(prayer);
        _updateSettingsPrayerToggles();
        if (prayerWidget) prayerWidget.render();
    } else {
        _ensureNotificationPermission(() => {
            prayerReminders.enable(prayer, prayerWidget ? prayerWidget._times : null);
            _updateSettingsPrayerToggles();
            if (prayerWidget) prayerWidget.render();
        });
    }
}

function _updateSettingsPrayerToggles() {
    const panel = document.getElementById('settings-prayer-toggles');
    if (!panel || panel.style.display === 'none') return;
    const names = t('dhPrayers');
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    panel.innerHTML = prayers.map(p => {
        const on = prayerReminders ? prayerReminders.isEnabled(p) : false;
        return `<div class="spt-row">
            <span class="spt-name">${names[p]}</span>
            <button class="spt-btn${on ? ' spt-btn-on' : ''}" onclick="togglePrayerReminderFromSettings('${p}')">${on ? '🔔' : '🔕'}</button>
        </div>`;
    }).join('');
}



async function _submitReflectionDua(btn) {
    const input = document.getElementById('celeb-reflect-input');
    const text = (input ? input.value : '').trim();
    const popup = document.getElementById('celebration-popup');
    const lang = localStorage.getItem('noor-lang') || 'en';
    const isAr = lang === 'ar';
    if (!text) {
        if (popup) { popup.classList.add('celeb-out'); setTimeout(() => popup.remove(), 400); }
        return;
    }
    if (btn) { btn.disabled = true; btn.textContent = '…'; }
    if (duaCompanion) {
        await duaCompanion._submitCommunity(text);
    }
    if (popup) { popup.classList.add('celeb-out'); setTimeout(() => popup.remove(), 400); }
    // Brief confirmation toast
    const toast = document.createElement('div');
    toast.className = 'wt-milestone-toast';
    toast.innerHTML = `<div style="font-size:1.4rem">🤲</div><div><strong>${isAr ? 'تمت المشاركة' : 'Dua shared!'}</strong><div style="font-size:.85rem;opacity:.8">${isAr ? 'سيقول إخوانك آمين' : 'Your brothers & sisters will say Ameen'}</div></div>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('wt-milestone-toast-in'));
    setTimeout(() => { toast.classList.remove('wt-milestone-toast-in'); setTimeout(() => toast.remove(), 400); }, 3500);
}
function loadChecklist() {
    let d = new Date(getCurrentTime());
    if (d.getHours() >= 18) d.setDate(d.getDate() + 1);
    const key = `ramadan_checklist_${d.toISOString().split('T')[0]}`;
    const data = JSON.parse(localStorage.getItem(key) || '{}');

    const cont = document.getElementById('checklist-container');
    if (!cont) return;

    cont.innerHTML = '';
    let completed = 0;

    getChecklistTasks().forEach(task => {
        const label = document.createElement('label');
        label.className = 'checklist-item';
        const checked = !!data[task.id];
        if (checked) completed++;

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = task.id;
        input.checked = checked;

        const labelSpan = document.createElement('span');
        labelSpan.className = 'checklist-label';
        labelSpan.textContent = `${task.icon} ${task.text}`;

        label.appendChild(input);
        label.appendChild(document.createTextNode(' '));
        label.appendChild(labelSpan);

        cont.appendChild(label);
        input.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            data[task.id] = isChecked;
            localStorage.setItem(key, JSON.stringify(data));
            trackEvent(`/checklist/${task.id}`, `Task ${isChecked ? 'Checked' : 'Unchecked'}: ${task.text}`);
            updateProgress(document.querySelectorAll('#checklist-container input:checked').length, getChecklistTasks().length);
        });
    });
    updateProgress(completed, getChecklistTasks().length);
}

function updateProgress(c, tot) {
    const bar = document.getElementById('checklist-progress');
    const text = document.getElementById('checklist-text');
    if (bar) bar.style.width = `${(c / tot) * 100}%`;
    if (text) text.innerText = t('progressText', c, tot);

    // Trigger success magic only when completing the LAST item
    // (We check if it was already completed to avoid duplicate magic)
    if (c === tot && c > 0 && !window.hasCelebrated) {
        window.hasCelebrated = true;
        trackEvent('/checklist-completed', 'Checklist All Tasks Completed');
        triggerConfetti();
        showMessage(t('mashaallah'), t('mashaallahMsg'));
    } else if (c < tot) {
        window.hasCelebrated = false;
    }
    // Recompute badge progress whenever checklist changes
    if (badgeSystem) badgeSystem.update();
}

function triggerConfetti() {
    const colors = ['#fbbf24', '#14b8a6', '#4c1d95', '#fef3c7', '#ffffff'];
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const conf = document.createElement('div');
            conf.className = 'confetti-p';
            conf.style.position = 'fixed';
            conf.style.zIndex = '10000';
            conf.style.width = '12px';
            conf.style.height = '12px';
            conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            conf.style.left = Math.random() * 100 + 'vw';
            conf.style.top = '-20px';
            conf.style.borderRadius = i % 2 === 0 ? '50%' : '2px';
            conf.style.pointerEvents = 'none';
            document.body.appendChild(conf);

            const animation = conf.animate([
                { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
                { transform: `translate3d(${(Math.random() - 0.5) * 300}px, 105vh, 0) rotate(${Math.random() * 1000}deg)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 2000,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            });
            animation.onfinish = () => conf.remove();
        }, Math.random() * 1500);
    }
}

function _updateNotifyBtnState(btn, subscribed) {
    if (!btn) return;
    if (subscribed) {
        // Shows a clear state indicating it's ENABLED
        btn.innerHTML = `<span style="color:var(--emerald-teal); font-weight:bold;">${t('notifyEnabled')}</span>`;
        btn.dataset.subscribed = 'true';
        btn.style.borderColor = 'var(--emerald-teal)';
        btn.style.background = 'rgba(52, 211, 153, 0.1)';
        btn.style.opacity = '1';
    } else {
        btn.innerText = t('notifyBtn');
        btn.dataset.subscribed = 'false';
        btn.style.opacity = '';
        btn.style.borderColor = '';
        btn.style.background = '';
    }
    btn.disabled = false;
}


function shareApp() {
    const isAr = currentLang === 'ar';
    const shareData = {
        title: isAr ? 'ليالي النور — رفيقك في العبادة اليومية' : 'Noor Nights — Daily Worship Companion',
        text: isAr
            ? 'حافظ على عباداتك كل يوم — تذكيرات الصلاة والذكر والأدعية في مكان واحد'
            : 'Stay consistent in your worship every day — prayer reminders, dhikr, and duas all in one place',
        url: window.location.origin + window.location.pathname,
    };
    if (navigator.share) {
        navigator.share(shareData).catch(() => {});
    } else {
        const text = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showMessage(isAr ? '✅ تم النسخ!' : '✅ Copied!', isAr ? 'تم نسخ رابط التطبيق' : 'App link copied to clipboard');
            });
        } else {
            showMessage(isAr ? '🔗 رابط التطبيق' : '🔗 App Link', shareData.url);
        }
    }
}

function requestNotifications() {
    trackEvent('/enable-reminders', 'Enable Reminders Click');
    const btn = document.getElementById('notify-btn');
    if (!btn || btn.disabled) return;
    if (btn.dataset.subscribed === 'true') {
        trackEvent('/push-already-subscribed', 'Push Already Subscribed');
        return;
    }

    btn.disabled = true;
    btn.style.opacity = '0.5';

    (async () => {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
            trackEvent('/push-permission-denied', 'Push Permission Denied');
            _updateNotifyBtnState(btn, false);
            showMessage(t('permNeeded'), t('permNeededAndroid'));
            return;
        }
        trackEvent('/push-permission-granted', 'Push Permission Granted');
        try {
            const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
            if (!window._fcmMessaging) {
                // Public project identifiers — not secrets. Firebase security
                // is enforced via Security Rules, not by hiding this config.
                const FIREBASE_CONFIG = {
                    apiKey: "AIzaSyAzOmE1zT85Kgvf4hsxJDqdswoDaqLK3PQ",
                    authDomain: "noor-nights.firebaseapp.com",
                    projectId: "noor-nights",
                    storageBucket: "noor-nights.firebasestorage.app",
                    messagingSenderId: "724399486488",
                    appId: "1:724399486488:web:2120cfaa4c5b6209ccf56d",
                };
                // Guard against double-init (second click, or refresh before _fcmMessaging restored)
                if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
                window._fcmMessaging = firebase.messaging();
            }
            // Compat SDK: call getToken() on the messaging instance, not as a static method
            let token;
            try {
                token = await window._fcmMessaging.getToken({
                    vapidKey: "BEZypIdF2p3SmgSKncCUtAs07vuacU0LeDm7U0wDwUWkFOTMD2olc5CrhJ2NXycCMS5lFzZqtDTMNvqcYuMiWDE",
                    serviceWorkerRegistration: reg,
                });
                trackEvent('/push-token-obtained', 'FCM Token Obtained');
            } catch (tokenErr) {
                trackEvent('/push-token-error', 'FCM Token Error');
                throw tokenErr;
            }
            const subRes = await fetch("https://noor-nights-subscribe.eman-mahmoudxd.workers.dev", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });
            if (!subRes.ok) {
                trackEvent(`/push-subscribe-error-${subRes.status}`, `CF Worker Error ${subRes.status}`);
                throw new Error(`CF Worker ${subRes.status}`);
            }
            localStorage.setItem('noor-push-opted-in', '1');
            _updateNotifyBtnState(btn, true);
            trackEvent('/push-opt-in', 'push_opt_in_triggered');
            showMessage(t('subActivated'), t('subActivatedMsg'));
            _sendSuccessNotification();
        } catch (err) {
            console.warn('[FCM] Subscription failed:', err);
            trackEvent('/push-subscribe-failed', 'Push Subscribe Failed');
            _updateNotifyBtnState(btn, false);
            showMessage(t('permNeeded'), t('permNeededAndroid'));
        }
    })();
}

function _sendSuccessNotification() {
    if (!("Notification" in window) || Notification.permission !== "granted") return;

    const title = t('subActivated');
    const body = t('subActivatedMsg');
    const base = window.location.origin;
    const options = {
        body,
        // Absolute URLs required — Android OS resolves these outside the page context
        // and silently drops the notification if the URL is relative or broken
        icon: `${base}/assets/icons/icon-512.png`,
        badge: `${base}/assets/icons/icon-96-mono.png`,
        // Unique tag per subscribe so Android treats it as a fresh notification
        // (same tag + renotify=true gets suppressed as a silent update on many devices)
        tag: `noor-nights-welcome-${Date.now()}`,
        silent: false,
        vibrate: [200, 100, 200],
        data: { url: window.location.href }
    };

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then(reg => reg.showNotification(title, options))
            .catch(() => new Notification(title, options));
    } else {
        new Notification(title, options);
    }
}

function _fallbackNativeNotification(btn) {
    if (!('Notification' in window)) {
        if (btn) { btn.disabled = false; btn.style.opacity = ''; }
        showMessage(t('notSuppTitle'), t('notSuppMsg'));
        return;
    }
    Notification.requestPermission().then((p) => {
        if (p === 'granted') {
            localStorage.setItem('noor-push-opted-in', '1');
            _updateNotifyBtnState(btn, true);
            showMessage(t('subActivated'), t('subActivatedMsg'));
            _sendSuccessNotification();
        } else {
            if (btn) { btn.disabled = false; btn.style.opacity = ''; }
            showMessage(t('permNeeded'), t('permNeededAndroid'));
        }
    });
}

function testNotification() {
    trackEvent('/test-notification', 'Test Notification');
    // Special check for iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

    if (isIOS && !isStandalone) {
        showMessage(t('actionReqTitle'), t('actionReqMsg'));
        return;
    }

    if (!("Notification" in window)) {
        showMessage(t('notSuppTitle'), t('notSuppMsg'));
        return;
    }

    if (Notification.permission === "granted") {
        sendActualTest();
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(p => {
            if (p === 'granted') {
                sendActualTest();
            } else {
                showMessage(t('deniedTitle'), t('deniedBodyMsg'));
            }
        });
    } else {
        showMessage(t('blockedTitle'), t('blockedMsg'));
    }
}

function sendActualTest() {
    const dua = essentialDuas[0];
    const msg = t('earlyMessages')[0];

    // Exact App Branding: Just the App Name
    const title = `Noor Nights`;
    const options = {
        body: `🤲 ${msg}\n\n"${dua.arabic.replace(/\n/g, '<br>')}"`,
        icon: `${window.location.origin}/assets/icons/icon-512.png`,
        badge: `${window.location.origin}/assets/icons/icon-96-mono.png`,
        tag: 'noor-nights-remind',
        renotify: true,
        vibrate: [200, 100, 200],
        silent: false,
        data: {
            url: window.location.href
        }
    };

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => reg.showNotification(title, options)).catch(() => new Notification(title, options));
    } else {
        new Notification(title, options);
    }

    showMessage(t('notifSentTitle'), t('notifSentMsg'));
}


function generateICS() {
    let lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Noor Nights//EN",
        "CALSCALE:GREGORIAN",
        `X-WR-CALNAME:${t('calName')}`,
        `X-WR-CALDESC:${t('calDesc')}`
    ];

    // Use the global essential and cleaned jawami lists
    const lqDua = essentialDuas[0];
    const rotationDuas = essentialDuas.concat(jawamiDuas);

    const nights = [
        { n: 1, date: "20260309" }, { n: 2, date: "20260310" },
        { n: 3, date: "20260311" }, { n: 4, date: "20260312" },
        { n: 5, date: "20260313" }, { n: 6, date: "20260314" },
        { n: 7, date: "20260315" }, { n: 8, date: "20260316" },
        { n: 9, date: "20260317" }, { n: 10, date: "20260318" }
    ];

    nights.forEach(night => {
        for (let i = 0; i < 11; i++) {
            let hour = 19 + i;
            let eventDate = night.date;

            if (hour >= 24) {
                hour -= 24;
                let dayNum = parseInt(eventDate.substring(6, 8), 10);
                eventDate = eventDate.substring(0, 6) + String(dayNum + 1).padStart(2, '0');
            }

            const sStart = `${eventDate}T${String(hour).padStart(2, '0')}0000`;
            const sEnd = `${eventDate}T${String(hour).padStart(2, '0')}0500`; // Back to 5 mins

            let dua;
            if (i === 3 || i === 9) { // Lock Laylatul Qadr Dua to 22:00 and 04:00
                dua = lqDua;
            } else {
                // Different rotation per night: (i + night.n)
                dua = rotationDuas[(i + night.n) % rotationDuas.length];
            }

            const actionMsg = i < 4 ?
                t('earlyMessages')[i % t('earlyMessages').length] :
                t('lateMessages')[(i - 4) % t('lateMessages').length];
            const desc = t('calEventDesc', night.n);

            lines.push("BEGIN:VEVENT");
            lines.push(`UID:noornights-2026-${night.n}-${i}@eman`);
            lines.push(`DTSTART:${sStart}`);
            lines.push(`DTEND:${sEnd}`);
            // Summary: Night X - Action | Dua Arabic (Forced LTR)
            const summaryTitle = t('calEventTitle', night.n, actionMsg);
            lines.push(`SUMMARY:\u200e${summaryTitle} | ${dua.arabic.replace(/\n/g, '<br>')}`);
            lines.push(`DESCRIPTION:${desc}`);
            lines.push("END:VEVENT");
        }
    });

    // ── Dhul Hijjah 1447 — May 18–27, 2026 (Egypt / Cairo UTC+2) ──
    // Prayer times (approximate, late May Cairo):
    //   Fajr 04:15 | Dhuhr 12:12 | Asr 15:47 | Maghrib 19:30 | Isha 21:05
    const dhDays = [
        { n: 1,  date: "20260518" }, { n: 2,  date: "20260519" },
        { n: 3,  date: "20260520" }, { n: 4,  date: "20260521" },
        { n: 5,  date: "20260522" }, { n: 6,  date: "20260523" },
        { n: 7,  date: "20260524" }, { n: 8,  date: "20260525" },
        { n: 9,  date: "20260526" }, // Arafa
        { n: 10, date: "20260527" }  // Eid al-Adha
    ];

    const dhPrayers = t('dhPrayers');
    const addEvent = (uid, date, start, end, summary, desc) => {
        lines.push("BEGIN:VEVENT");
        lines.push(`UID:${uid}`);
        lines.push(`DTSTART:${date}T${start}`);
        lines.push(`DTEND:${date}T${end}`);
        lines.push(`SUMMARY:${summary}`);
        lines.push(`DESCRIPTION:${desc}`);
        lines.push("END:VEVENT");
    };

    dhDays.forEach(day => {
        const d = day.date;
        const n = day.n;

        if (n === 9) {
            // ── Arafa Day — special prayer-by-prayer schedule ──

            // After Fajr block (04:20 → 06:30) — extended dhikr session
            addEvent(`noornights-arafa-fajr@eman`, d, "042000", "063000",
                t('dhCalArafaAfterFajrSummary'), t('dhCalArafaAfterFajrDesc'));

            // Dhuhr (12:12 → 12:22)
            addEvent(`noornights-arafa-dhuhr@eman`, d, "121200", "122200",
                t('dhCalArafaDhuhrSummary'), t('dhCalArafaDhuhrDesc'));

            // Asr (15:47 → 15:57) — alerting that golden hour is near
            addEvent(`noornights-arafa-asr@eman`, d, "154700", "155700",
                t('dhCalArafaAsrSummary'), t('dhCalArafaAsrDesc'));

            // Golden hour block (18:00 → 19:30) — peak dua time before Maghrib
            addEvent(`noornights-arafa-golden@eman`, d, "180000", "193000",
                t('dhCalArafaGoldenSummary'), t('dhCalArafaGoldenDesc'));

            // Maghrib (19:30 → 19:45) — break fast
            addEvent(`noornights-arafa-maghrib@eman`, d, "193000", "194500",
                t('dhCalArafaMaghribSummary'), t('dhCalArafaMaghribDesc'));

            // Isha (21:05 → 21:20)
            addEvent(`noornights-arafa-isha@eman`, d, "210500", "212000",
                t('dhCalArafaIshaSummary'), t('dhCalArafaIshaDesc'));

        } else {
            // ── Regular Dhul Hijjah days — 5 prayer reminders each ──
            addEvent(`noornights-dh-${n}-fajr@eman`, d, "041500", "042000",
                t('dhCalPrayerSummary', n, dhPrayers.fajr), t('dhCalPrayerDesc'));

            addEvent(`noornights-dh-${n}-dhuhr@eman`, d, "121200", "121700",
                t('dhCalPrayerSummary', n, dhPrayers.dhuhr), t('dhCalPrayerDesc'));

            addEvent(`noornights-dh-${n}-asr@eman`, d, "154700", "155200",
                t('dhCalPrayerSummary', n, dhPrayers.asr), t('dhCalPrayerDesc'));

            addEvent(`noornights-dh-${n}-maghrib@eman`, d, "193000", "194000",
                t('dhCalPrayerSummary', n, dhPrayers.maghrib), t('dhCalPrayerDesc'));

            addEvent(`noornights-dh-${n}-isha@eman`, d, "210500", "211000",
                t('dhCalPrayerSummary', n, dhPrayers.isha), t('dhCalPrayerDesc'));
        }
    });

    lines.push("END:VCALENDAR");
    return lines.join('\r\n');
}

function downloadICS() {
    trackEvent('/ics-download', 'ics_download');
    try {
        const content = generateICS();
        const url = URL.createObjectURL(new Blob([content], { type: 'text/calendar;charset=utf-8' }));
        const a = document.createElement('a'); a.href = url; a.download = 'noor-nights.ics';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        const success = document.getElementById('calendar-success');
        if (success) success.style.display = 'block';
    } catch (err) { alert("Download failed."); }
}

let currentChecklistKey = "";
function checkDayChange() {
    let d = new Date(getCurrentTime());
    if (d.getHours() >= 18) d.setDate(d.getDate() + 1);
    const key = `ramadan_checklist_${d.toISOString().split('T')[0]}`;
    if (key !== currentChecklistKey) {
        currentChecklistKey = key;
        loadChecklist();
    }
}

// ═══════════════════════════════════════════════════
// TASBEEH COUNTER LOGIC
// ═══════════════════════════════════════════════════
const TASBEEH_DHIKR = {
    subhanallah:      { ar: 'سُبْحَانَ اللَّهِ',                              rec: 33  },
    alhamdulillah:    { ar: 'الْحَمْدُ لِلَّهِ',                              rec: 33  },
    allahuakbar:      { ar: 'اللَّهُ أَكْبَرُ',                               rec: 33  },
    laillahaillallah: { ar: 'لَا إِلَٰهَ إِلَّا اللَّهُ',                    rec: 100 },
    astaghfirullah:   { ar: 'أَسْتَغْفِرُ اللَّهَ',                           rec: 100 },
    salawat:          { ar: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ',               rec: 100 },
    hawqala:          { ar: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',     rec: 100 }
};
let tasbeehActiveKey = 'subhanallah';
let tasbeehData = {
    goal: 100,
    counts: {
        subhanallah: 0,
        alhamdulillah: 0,
        allahuakbar: 0,
        laillahaillallah: 0,
        astaghfirullah: 0,
        salawat: 0,
        hawqala: 0
    }
};

function saveTasbeeh() {
    localStorage.setItem('noor_tasbeeh', JSON.stringify(tasbeehData));
}

function loadTasbeeh() {
    const saved = localStorage.getItem('noor_tasbeeh');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Migrate v1: single count field
        if (typeof parsed.count === 'number') {
            tasbeehData.counts.allahuakbar = parsed.count;
            tasbeehData.goal = parsed.goal;
        } else {
            // Merge saved counts into current schema — unknown keys are ignored
            const mergedCounts = {};
            Object.keys(tasbeehData.counts).forEach(k => {
                mergedCounts[k] = (parsed.counts && parsed.counts[k]) ? parsed.counts[k] : 0;
            });
            tasbeehData = { goal: parsed.goal || tasbeehData.goal, counts: mergedCounts };
        }
    }
    const goalSelect = document.getElementById('tasbeeh-goal-select');
    if (goalSelect) goalSelect.value = tasbeehData.goal;
    updateTasbeehUI();
}

const TASBEEH_COLORS = [
    'var(--amber-glow)',   // 0-99
    'var(--emerald-teal)',  // 100-199
    'var(--royal-purple)',  // 200-299
    '#38bdf8',              // 300-399 (Sky Blue)
    '#f472b6',              // 400-499 (Pink)
    '#a855f7'               // 500+
];

let _tbExpandedView = false;

function updateTasbeehUI() {
    const grid = document.getElementById('tasbeeh-grid');
    if (!grid) return;
    const isAr = currentLang === 'ar';
    const phrases = t('phrases');
    const total = Object.values(tasbeehData.counts).reduce((a, b) => a + b, 0);

    const totalRow = document.getElementById('tasbeeh-total');
    if (totalRow) {
        let resetHint = '';
        if (tasbeehData.lastReset) {
            const resetDate = new Date(tasbeehData.lastReset);
            const dateStr = resetDate.toLocaleDateString(isAr ? 'ar-EG' : 'en-US', { month: 'short', day: 'numeric' });
            resetHint = ` <span class="tb-reset-hint">${isAr ? `(آخر إعادة: ${dateStr})` : `(reset ${dateStr})`}</span>`;
        }
        totalRow.innerHTML = (isAr
            ? `المجموع: ${numFmt(total)} ذكر`
            : `Total today: ${total} dhikr`) + resetHint;
    }

    // Toggle button
    let toggleBtn = document.getElementById('tb-view-toggle');
    if (!toggleBtn) {
        toggleBtn = document.createElement('button');
        toggleBtn.id = 'tb-view-toggle';
        toggleBtn.className = 'tb-view-toggle';
        toggleBtn.onclick = () => { _tbExpandedView = !_tbExpandedView; updateTasbeehUI(); };
        grid.parentElement.insertBefore(toggleBtn, grid);
    }
    toggleBtn.textContent = _tbExpandedView
        ? (isAr ? '◾ عرض مضغوط' : '◾ Compact view')
        : (isAr ? '◯ عرض الحلقات' : '◯ Ring view');

    grid.innerHTML = '';
    grid.className = _tbExpandedView ? 'tasbeeh-grid tasbeeh-grid-rings' : 'tasbeeh-grid tasbeeh-grid-list';

    Object.keys(tasbeehData.counts).forEach(key => {
        const count = tasbeehData.counts[key];
        const phraseLabel = phrases[key];
        const dhikr = TASBEEH_DHIKR[key];
        const isActive = key === tasbeehActiveKey;
        const rec = dhikr.rec;
        const laps = Math.floor(count / rec);
        const pct = Math.min(((count % rec) / rec) * 100, 100);
        const colorIdx = Math.min(laps, TASBEEH_COLORS.length - 1);
        const strokeColor = TASBEEH_COLORS[colorIdx];

        const wrap = document.createElement('div');

        if (_tbExpandedView) {
            // Original ring view
            const radius = 50;
            const circumference = radius * 2 * Math.PI;
            const progressInRec = count % rec;
            const progressFactor = (progressInRec === 0 && count > 0) ? 1 : progressInRec / rec;
            const offset = circumference - (progressFactor * circumference);
            const lapDots = laps > 0
                ? Array.from({ length: Math.min(laps, 7) }, (_, i) =>
                    `<span class="tb-lap-dot" style="background:${TASBEEH_COLORS[Math.min(i, TASBEEH_COLORS.length - 1)]}"></span>`
                  ).join('') + (laps > 7 ? `<span class="tb-lap-more">+${laps - 7}</span>` : '')
                : '';
            wrap.className = `tasbeeh-display${isActive ? ' tasbeeh-is-active' : ''}`;
            wrap.dataset.tbKey = key;
            wrap.innerHTML = `
                <div class="tb-ar-text" dir="rtl">${dhikr.ar}</div>
                <div class="tb-ring-wrap">
                    <svg class="progress-ring" width="116" height="116">
                        <circle class="progress-ring__circle-bg" stroke="rgba(255,255,255,0.07)" stroke-width="8" fill="transparent" r="${radius}" cx="58" cy="58"/>
                        <circle class="progress-ring__circle" stroke="${strokeColor}" stroke-width="8" stroke-linecap="round" fill="transparent" r="${radius}" cx="58" cy="58"
                            style="stroke-dasharray:${circumference} ${circumference}; stroke-dashoffset:${offset}; transition:stroke-dashoffset 0.25s,stroke 0.4s;"/>
                    </svg>
                    <div class="tb-ring-inner">
                        <div class="tb-count" style="color:${strokeColor}">${numFmt(count)}</div>
                        <div class="tb-rec">/ ${numFmt(rec)}</div>
                    </div>
                </div>
                <div class="tb-label">${phraseLabel}</div>
                <div class="tb-laps">${lapDots}</div>`;
        } else {
            // Compact list row
            wrap.className = `tb-row${isActive ? ' tb-row-active' : ''}`;
            wrap.dataset.tbKey = key;
            wrap.innerHTML = `
                <div class="tb-row-arabic" dir="rtl">${dhikr.ar}</div>
                <div class="tb-row-bar-wrap">
                    <div class="tb-row-bar"><div class="tb-row-bar-fill" style="width:${pct}%;background:${strokeColor}"></div></div>
                    ${laps > 0 ? `<span class="tb-row-laps" style="color:${strokeColor}">×${laps}</span>` : ''}
                </div>
                <div class="tb-row-count" style="color:${strokeColor}">${numFmt(count)}<span class="tb-row-rec">/${numFmt(rec)}</span></div>`;
        }

        wrap.addEventListener('click', () => incrementTasbeeh(key));
        grid.appendChild(wrap);
    });
}

function incrementTasbeeh(key) {
    if (!Object.prototype.hasOwnProperty.call(tasbeehData.counts, key)) return;
    tasbeehActiveKey = key;
    tasbeehData.counts[key]++;
    const cur = tasbeehData.counts[key];
    const rec = TASBEEH_DHIKR[key]?.rec || 100;

    // Per-tap haptic
    if (navigator.vibrate) navigator.vibrate(12);

    if (cur % rec === 0) {
        if (navigator.vibrate) navigator.vibrate([60, 30, 60]);
        const isAr = currentLang === 'ar';
        const phrases = t('phrases');
        const msg = isAr
            ? `ما شاء الله! ${numFmt(cur)} — ${TASBEEH_DHIKR[key].ar} ✨`
            : `Masha'Allah! ${cur} — ${phrases[key]} ✨`;
        _tasbeehToast(msg);
    }
    saveTasbeeh();
    updateTasbeehUI();
    trackEvent('/tasbeeh-increment', `Counted ${key}`);
}

function _tasbeehToast(msg) {
    document.querySelectorAll('.tb-toast').forEach(t => t.remove());
    const el = document.createElement('div');
    el.className = 'tb-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('tb-toast-show'));
    setTimeout(() => { el.classList.remove('tb-toast-show'); setTimeout(() => el.remove(), 300); }, 3500);
}

function resetTasbeeh() {
    Object.keys(tasbeehData.counts).forEach(key => {
        tasbeehData.counts[key] = 0;
    });
    tasbeehData.lastReset = Date.now();
    saveTasbeeh();
    updateTasbeehUI();
    trackEvent('/tasbeeh-reset', 'Tasbeeh reset all');
    showMessage(t('tasbeehTitle'), t('tasbeehResetSuccess'));
}

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !['SELECT','BUTTON','INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
        const container = document.getElementById('tasbeeh-container');
        if (container && container.getBoundingClientRect().top < window.innerHeight && container.getBoundingClientRect().bottom > 0) {
            e.preventDefault();
            incrementTasbeeh(tasbeehActiveKey);
        }
    }
});

function renderHijriDate() {
    const el = document.getElementById('hijri-date');
    if (!el) return;
    const isAr = currentLang === 'ar';
    el.dir = isAr ? 'rtl' : 'ltr';

    // Use formatToParts with numeric month so we can reconstruct the display
    // string with our own month names and an explicit "AH"/"هـ" suffix.
    // This prevents mobile Safari/WebKit from injecting "BC" — which happens
    // when the browser formats the Hijri year (1447) as a historical Gregorian
    // year and appends an era string via the `year: 'numeric'` option.
    try {
        const parts = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {
            day: 'numeric', month: 'numeric', year: 'numeric',
        }).formatToParts(new Date());

        let hy = 0, hm = 0, hd = 0;
        for (const p of parts) {
            if (p.type === 'year')  hy = +p.value;
            if (p.type === 'month') hm = +p.value;
            if (p.type === 'day')   hd = +p.value;
        }
        // Sanity-check: Hijri year for 2020–2050 is 1441–1472
        if (hy < 1400 || hy > 1600 || hm < 1 || hm > 12 || hd < 1 || hd > 30) {
            throw new Error('unexpected values: ' + hy + '/' + hm + '/' + hd);
        }

        const monthsEn = ['','Muharram','Safar',"Rabi' al-Awwal","Rabi' al-Thani",
                          "Jumada al-Awwal","Jumada al-Thani",'Rajab',"Sha'ban",
                          'Ramadan','Shawwal',"Dhu al-Qi'dah",'Dhu al-Hijjah'];
        const monthsAr = ['','محرم','صفر','ربيع الأول','ربيع الثاني',
                          'جمادى الأولى','جمادى الآخرة','رجب','شعبان',
                          'رمضان','شوال','ذو القعدة','ذو الحجة'];
        const toAr = n => String(n).replace(/\d/g, c => '٠١٢٣٤٥٦٧٨٩'[c]);

        el.textContent = isAr
            ? `${toAr(hd)} ${monthsAr[hm]} ${toAr(hy)} هـ`
            : `${hd} ${monthsEn[hm]} ${hy} AH`;
    } catch (e) {
        console.warn('renderHijriDate failed:', e.message, '— hiding element');
        el.style.display = 'none';
    }
}

// ── Onboarding (GH-137) — 3-screen first-run overlay ──────────────────────
const OB_KEY = 'noor-onboarded';

function showOnboarding() {
    if (localStorage.getItem(OB_KEY)) return;
    const modal = document.getElementById('onboarding-modal');
    if (!modal) return;
    // Highlight the auto-detected language as the primary button
    const primaryBtn   = modal.querySelector(`[data-lang="${currentLang}"]`);
    const secondaryBtn = modal.querySelector(`[data-lang="${currentLang === 'ar' ? 'en' : 'ar'}"]`);
    if (primaryBtn)   { primaryBtn.classList.add('ob-lang-primary');   primaryBtn.classList.remove('ob-lang-secondary'); }
    if (secondaryBtn) { secondaryBtn.classList.add('ob-lang-secondary'); secondaryBtn.classList.remove('ob-lang-primary'); }
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('ob-visible');
    modal.querySelector('.ob-lang-btn')?.focus();
}

function obSelectLang(lang) {
    applyLanguage(lang);
    localStorage.setItem(OB_KEY, '1');
    const modal = document.getElementById('onboarding-modal');
    if (!modal) return;
    modal.classList.add('ob-exit');
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => modal.remove(), 380);
}
// ───────────────────────────────────────────────────────────────────────────

// Global Initialization — two phases for faster LCP:
//   Phase 1 (rAF): language + DH countdown — lets skeleton text paint first
//   Phase 2 (setTimeout 0): everything else, yielded after first paint
document.addEventListener('DOMContentLoaded', () => {

    // Phase 1: apply language immediately, then update countdown after first frame
    applyLanguage(currentLang);
    renderHijriDate();
    requestAnimationFrame(() => {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });

    // Phase 2: defer all non-critical init until after first paint
    setTimeout(() => {
        loadTasbeeh();
        worshipTracker = new WorshipTracker();
        worshipTracker.renderSection();
        badgeSystem = new BadgeSystem();
        badgeSystem.renderSection();
        badgeSystem.renderStrip();
        virtueCards = new VirtueCards();
        virtueCards.renderSection();
        duaCompanion = new DuaCompanion();
        duaCompanion.renderSection();
        // Single document-level delegation for Ameen buttons — survives re-renders
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-ameen-id]');
            if (!btn || !duaCompanion) return;
            duaCompanion.tapAmeen(btn.dataset.ameenId, btn);
        });
        prayerAPI = new PrayerTimesAPI();
        prayerReminders = new PrayerReminders(prayerAPI);
        prayerWidget = new PrayerTimesWidget(prayerAPI);
        prayerWidget.init().then(() => {
            if (prayerWidget._times) prayerReminders.scheduleAll(prayerWidget._times);
        });
        _updateSettingsCard();
        initDhikrSections();
        checkDayChange();
        setInterval(checkDayChange, 60000);
        rotateYoussefDua();

        // Dhikr card collapse on tap
        document.addEventListener('click', function(e) {
            const card = e.target.closest('.dhikr-card');
            if (!card) return;
            if (e.target.closest('button')) return;
            card.classList.toggle('dhikr-card-collapsed');
        });

        // Register Firebase service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch((err) => {
                console.warn('[SW] Registration failed:', err);
            });

            // Reload when a new SW version activates so stale JS is never kept running
            navigator.serviceWorker.addEventListener('message', (e) => {
                if (e.data && e.data.type === 'SW_UPDATED') window.location.reload();
            });
        }

        // Restore button state from localStorage
        const _notifyBtn = document.getElementById('notify-btn');
        if (_notifyBtn && localStorage.getItem('noor-push-opted-in') === '1') {
            _updateNotifyBtnState(_notifyBtn, true);
        }

        // Dynamic Install App Card
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;
        if (!isStandalone) {
            const installCard = document.getElementById('app-install-card');
            const iosSection = document.getElementById('ios-install-section');
            if (installCard) {
                installCard.style.display = 'block';
                trackEvent('/a2hs-shown', 'a2hs_shown_ios_fallback');
            }
            if (isIOS && iosSection) {
                iosSection.style.display = 'block';
            }
        }

        // Dismiss launch splash once app is ready; show onboarding for first-time users
        const splash = document.getElementById('launch-splash');
        if (splash) {
            setTimeout(() => {
                splash.classList.add('ls-hidden');
                setTimeout(showOnboarding, 300);
            }, 400);
        }
    }, 0);
});

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // We are on a supported browser (e.g. Chrome/Android), show the 1-click install button
    const installCard = document.getElementById('app-install-card');
    const androidSection = document.getElementById('android-install-section');
    if (installCard) {
        installCard.style.display = 'block';
        trackEvent('/a2hs-shown', 'a2hs_shown_android');
    }
    if (androidSection) androidSection.style.display = 'block';
});

window.addEventListener('appinstalled', () => {
    document.getElementById('app-install-card').style.display = 'none';
    trackEvent('/a2hs-installed', 'a2hs_installed_success');
});

function handleInstallClick() {
    if (deferredPrompt) {
        trackEvent('/a2hs-prompt-clicked', 'PWA Install Clicked');
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                document.getElementById('app-install-card').style.display = 'none';
                trackEvent('/a2hs-installed', 'a2hs_installed_success');
            }
            deferredPrompt = null;
        });
    } else {
        showMessage(t('installAppTitle'), t('installAppMsg'));
    }
}

// ═══════════════════════════════════════════════════
// NOTIFICATION PREFERENCES (User Controls)
// ═══════════════════════════════════════════════════
window.savePushPreferences = function () {
    showMessage('Preferences Saved', 'Your notification settings have been updated.');
    trackEvent('/push-preferences-saved', 'user_controls_updated');
};

window.triggerEmailFallback = function () {
    trackEvent('/fallback-email-sent', 'fallback_email_sent');
    window.location.href = "mailto:?subject=Noor Nights - Ramadan Reminders&body=Sign up to receive spiritual reminders via email during the last 10 nights.";
};
