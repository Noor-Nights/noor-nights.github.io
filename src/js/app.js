// ═══════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════
const CONFIG = {
    TARGET_DATE: "2026-03-09T17:54:00+02:00",
    DHUL_HIJJAH_START: "2026-05-18T00:00:00+02:00", // 1 Dhul Hijjah 1447 AH (Umm al-Qura)
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
        subtitle: 'Illuminate your worship in the ten blessed days',
        installBtn: '📲 Install App',
        countdownTitle: '⏳ Countdown to the Nights',
        calculating: 'Calculating...',
        untilBegin: 'Until Last Ten Nights of Ramadan begin (Egypt Time)',
        days: 'Days', hours: 'Hours', mins: 'Mins', secs: 'Secs',
        aboutTitle: '🌟 About Noor Nights',
        aboutText1: 'The first ten days of Dhul Hijjah are among the most blessed days of the year. Allah swore by them in the Quran, and the Prophet ﷺ said: "There are no days on which righteous deeds are more beloved to Allah than these ten days." (Bukhari)',
        aboutText2: 'This app helps you track your daily worship goals, fast and make du\'a on Arafah Day, access comprehensive prophetic supplications (Jawami\' ad-Du\'a), and stay spiritually engaged throughout these ten precious days.',
        aboutText3: 'Please keep the developer and all those involved in your sincere prayers.',
        closeBtn: 'Close',
        okBtn: 'OK',
        aboutToggleLabel: 'About',
        navHome: 'Home', navTracker: 'Tracker', navDhikr: 'Dhikr', navDuas: 'Duas', navMore: 'Settings',
        badgeStripLabel: 'Badges', badgeStripCta: 'View all →',
        ptNotifyHint: '📲 Install the app to receive prayer reminders',
        sectionLabelSettings: 'Settings',
        sectionLabelAbout: 'About',
        settingsTitle: 'Settings',
        settingsLang: 'Language', settingsLangSub: 'English / العربية',
        settingsLocation: 'Prayer Location', settingsNotif: 'Prayer Reminders',
        settingsNotifSub: 'Toggle per-prayer reminders',
        settingsManageBtn: 'Manage →',
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
        ptReminderSetMsg: (name) => `You'll be notified when it's time for ${name}.`,
        ptReminderOffTitle: '🔕 Reminder Removed',
        ptReminderOffMsg: (name) => `Reminder for ${name} turned off.`,
        onboardingTitle: 'The 10 Greatest Days',
        onboardingBody: 'The Prophet ﷺ said: "There are no days on which righteous deeds are more beloved to Allah than these ten days." These are those days. Let\'s make every one count.',
        onboardingF1: 'Open the app each day for your Daily Focus',
        onboardingF2: 'Make dhikr, read duas, track your worship',
        onboardingF3: 'Share a dua — your brothers & sisters say Ameen',
        onboardingF4: 'Install the app for prayer time reminders',
        onboardingBtn: 'Begin — بسم الله →',
        modalTitle: 'Message',
        notifyBtn: '🔔 Enable Daily Night Number Reminders',
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
        calendarDesc: 'Get prayer-time reminders for all 10 Days of Dhul Hijjah — including special duas and a full golden-hour block for Arafa Day (Egypt timezone).',
        calendarBtn: '📅 Download Calendar (.ics)',
        essentialTitle: '🤲 Essential Duas',
        jamawiTitle: "Prophetic Duas",
        jamawiSubtitle: "Comprehensive prayers from the Prophet (ﷺ)",
        nightStatus: (n) => `Tonight is Night ${n} of 10`,
        nightSubStatus: 'Make the most of it 🌙',
        reminderActive: '🔔 Reminders Active!',
        reminderMsg: "You'll receive a dua reminder while this tab is open during the 10 blessed days of Dhul Hijjah.",
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
        footerCanvas: 'Noor Nights App • Sadaqah Jariyah for Youssef Abdelkader',
        blessingTitle: 'The Blessing of Sharing Duas',
        blessingDesc1: 'Sharing a dua can uplift anyone who sees it during their day—reminding them to turn back to Allah, calming their heart, or inspiring them to make their own dua.',
        blessingHadith1: '"Whoever guides someone to goodness will have a reward like the one who did it." (Sahih Muslim)',
        blessingHadith2: '"When a servant dies, his deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for him." (Sahih Muslim)',
        blessingFooter: 'Every dua you share may inspire someone else—and you share in their reward.',
        footerMadeWith: 'Made with ♥️ for Dhul Hijjah.',

        permNeeded: '🔔 Permission Required',
        permNeededAndroid: '👉 On Android: Tap the 🔒 in your browser address bar → Site Settings → Notifications → Allow. Then try again.',
        permNeededIOS: '👉 On iPhone: Add the app to your Home Screen first, then try enabling reminders inside the installed app.',
        permNeededDesktop: '👉 Click the 🔒 in your browser address bar → Site Settings → Notifications → Allow. Then try again.',
        subActivated: '🌙 جزاك الله خيرًا على الاشتراك!',
        subActivatedMsg: 'سنذكّرك في العشر الأواخر المباركة من رمضان. 🤲 Jazakallah Khayran! We’ll remind you in the Last 10 Nights. 🤲',
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
        calDesc: 'Noor Nights — 10 Days of Dhul Hijjah 1447',
        dhPrayers: { fajr: 'Fajr', dhuhr: 'Dhuhr', asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha' },
        dhCalPrayerSummary: (n, p) => `☪️ Day ${n} of Dhul Hijjah — ${p} | Dhikr & Dua`,
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

        dhulHijjahTitle: '🕋 Countdown to Dhul Hijjah',
        dhulHijjahSubStatus: 'Umm al-Qura Calendar • 1 Dhul Hijjah 1447 AH',
        qjTrackWorship: '✓ Track Worship',
        qjOpenDuas: '🤲 Open Duas',
        dhulHijjahMotivation: '✨ Prepare your heart for Dhul-Hijjah — the most blessed days of the year.',
        dhulHijjahChallenge: (n) => `🌟 Only ${n} day${n !== 1 ? 's' : ''} left! Begin your daily spiritual challenge.`,
        dhulHijjahBegun: '🕋 Dhul-Hijjah has begun! Seize these blessed 10 days. Allahu Akbar!',
        dhulHijjahProgress: (pct) => `${pct}% of the way there`,

        arafahBannerTitle: 'Yawm Arafah — The Greatest Day',
        arafahBannerSub: 'Fast today, make dua, and seek forgiveness. Allah frees more servants from the Fire on this day than any other.',

        wtCardTitle: 'Worship Tracker',
        badgeSectionTitle: 'Dhul Hijjah Badges',
        badgeSectionSubtitle: 'Earn badges by completing worship goals during the 10 blessed days',

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
        dhikrSectionDhulHijjah: 'Dhul Hijjah Takbeer',
        dhikrSectionProtection: 'Daily Protection',
        dhikrVirtue: 'Virtue',
        dhikrTimes: 'times',

    },
    ar: {
        appName: 'ليالي النور',
        subtitle: 'أنِر عبادتك في الأيام العشرة المباركة',
        installBtn: '📲 تثبيت التطبيق',
        countdownTitle: '⏳ العد التنازلي للليالي',
        calculating: 'جارٍ الحساب...',
        untilBegin: 'حتى بدء العشر الأواخر من رمضان (توقيت مصر)',
        days: 'أيام', hours: 'ساعات', mins: 'دقائق', secs: 'ثواني',
        aboutTitle: '🌟 عن تطبيق ليالي النور',
        aboutText1: 'أيام العشر من ذي الحجة من أفضل أيام العام. أقسم الله بها في القرآن الكريم، وقال النبي ﷺ: "ما من أيام العمل الصالح فيها أحبّ إلى الله من هذه الأيام" (البخاري).',
        aboutText2: 'يساعدك هذا التطبيق على تتبع عباداتك اليومية، والصيام والدعاء في يوم عرفة، والاستفادة من جوامع الأدعية النبوية الشاملة، والبقاء متصلًا بالعبادة طوال هذه الأيام العشرة الثمينة.',
        aboutText3: 'نسألكم الدعاء بظهر الغيب لمن صمم ونشر هذا العمل.',
        closeBtn: 'إغلاق',
        okBtn: 'موافق',
        aboutToggleLabel: 'عن التطبيق',
        navHome: 'الرئيسية', navTracker: 'العبادة', navDhikr: 'الذكر', navDuas: 'الأدعية', navMore: 'الإعدادات',
        badgeStripLabel: 'الأوسمة', badgeStripCta: 'عرض الكل ←',
        ptNotifyHint: '📲 ثبّت التطبيق لاستقبال تذكيرات أوقات الصلاة',
        sectionLabelSettings: 'الإعدادات',
        sectionLabelAbout: 'عن التطبيق',
        settingsTitle: 'الإعدادات',
        settingsLang: 'اللغة', settingsLangSub: 'English / العربية',
        settingsLocation: 'موقع أوقات الصلاة', settingsNotif: 'تذكيرات الصلاة',
        settingsNotifSub: 'فعّل تذكيرات كل صلاة',
        settingsManageBtn: '← إدارة',
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
        ptReminderSetMsg: (name) => `ستُنبَّه عند حلول وقت صلاة ${name}.`,
        ptReminderOffTitle: '🔕 تم إيقاف التذكير',
        ptReminderOffMsg: (name) => `تم إيقاف تذكير صلاة ${name}.`,
        onboardingTitle: 'أفضل عشرة أيام',
        onboardingBody: 'قال النبي ﷺ: «ما من أيام العمل الصالح فيها أحب إلى الله من هذه الأيام العشرة». هذه هي تلك الأيام — فلنجعل كل يوم يستحق.',
        onboardingF1: 'افتح التطبيق يومياً لتحصل على تركيزك اليومي',
        onboardingF2: 'سبّح وادعُ وتتبّع عبادتك',
        onboardingF3: 'شارك دعاءك — إخوانك يقولون آمين',
        onboardingF4: 'ثبّت التطبيق لتذكيرات أوقات الصلاة',
        onboardingBtn: '← ابدأ — بسم الله',
        modalTitle: 'رسالة',
        notifyBtn: '🔔 تفعيل تذكيرات الليالي',
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
        reminderMsg: 'ستتلقى تذكيراً بالدعاء طالما هذا التبويب مفتوح خلال الأيام العشرة المباركة من ذي الحجة.',
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
        footerCanvas: 'تطبيق ليالي النور • صدقة جارية عن روح يوسف عبد القادر',
        blessingTitle: 'بركة مشاركة الدعاء',
        blessingDesc1: 'مشاركة الدعاء قد تشرح صدر من يقرأه في يومه، وتذكره بالرجوع إلى الله، وتُسكن قلبه، أو تُلهمه ليدعو بدوره.',
        blessingHadith1: '"مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ" (صحيح مسلم)',
        blessingHadith2: '"إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ: إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ" (صحيح مسلم)',
        blessingFooter: 'كل دعاء تشاركه قد يُلهم غيرك — فتنال من أجرهم الجميل.',
        footerMadeWith: 'صُنع بـ ❤️ لذي الحجة.',

        permNeeded: '🔔 إذن مطلوب',
        permNeededAndroid: '👉 على أندرويد: اضغط على 🔒 في شريط العنوان ← إعدادات الموقع ← الإشعارات ← سماح. ثم حاول مجدداً.',
        permNeededIOS: '👉 على آيفون: أضف التطبيق إلى شاشة الرئيسية أولاً، ثم فعّل التذكيرات من داخل التطبيق المثبت.',
        permNeededDesktop: '👉 انقر على 🔒 في شريط العنوان ← إعدادات الموقع ← الإشعارات ← سماح. ثم حاول مجدداً.',
        subActivated: '🌙 جزاك الله خيرًا على الاشتراك!',
        subActivatedMsg: 'سنذكّرك في العشر الأواخر المباركة من رمضان. 🤲 Jazakallah Khayran! We’ll remind you in the Last 10 Nights. 🤲',
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
        calDesc: 'ليالي النور — عشر ذي الحجة 1447',
        dhPrayers: { fajr: 'الفجر', dhuhr: 'الظهر', asr: 'العصر', maghrib: 'المغرب', isha: 'العشاء' },
        dhCalPrayerSummary: (n, p) => `☪️ اليوم ${n} من ذي الحجة — ${p} | ذكر ودعاء`,
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

        dhulHijjahTitle: '🕋 العد التنازلي لذي الحجة',
        dhulHijjahSubStatus: 'تقويم أم القرى • 1 ذو الحجة 1447 هـ',
        qjTrackWorship: '✓ تتبع العبادة',
        qjOpenDuas: '🤲 فتح الأدعية',
        dhulHijjahMotivation: '✨ هيّئ قلبك لذي الحجة — أفضل أيام العام.',
        dhulHijjahChallenge: (n) => `🌟 تبقّى ${n} يوم فقط! ابدأ تحديّك الروحاني اليومي.`,
        dhulHijjahBegun: '🕋 بدأت أيام ذي الحجة المباركة! اغتنم هذه العشر. الله أكبر!',
        dhulHijjahProgress: (pct) => `${pct}٪ من الطريق`,

        arafahBannerTitle: 'يوم عرفة — أعظم يوم',
        arafahBannerSub: 'صم اليوم، وأكثر من الدعاء، واطلب المغفرة. لا يوم يُعتق الله فيه من النار أكثر من يوم عرفة.',

        wtCardTitle: 'متتبع العبادة',
        badgeSectionTitle: 'شارات ذي الحجة',
        badgeSectionSubtitle: 'احصل على الشارات بإتمام أهداف العبادة في الأيام العشرة المباركة',

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
        dhikrSectionDhulHijjah: 'تكبيرات ذي الحجة',
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
    if (notifyBtn && notifyBtn.dataset.enabled === 'true') {
        notifyBtn.textContent = t('notifyEnabled');
    } else if (notifyBtn) {
        notifyBtn.textContent = t('notifyBtn');
    }

    const memBanner = document.querySelector('.memorial-text');
    if (memBanner) memBanner.textContent = lang === 'ar'
        ? 'هذا التطبيق صدقة جارية عن روح يوسف عبد القادر — رحمه الله 🤲'
        : 'This app is Sadaqah Jariyah for Youssef Abdelkader — may Allah have mercy on him 🤲';

    // Re-render Dynamic Dua content so buttons and labels update
    if (typeof renderAllDuas === 'function') {
        renderAllDuas();
    }
    updateTasbeehUI();
    updateDhulHijjahCountdown();
    if (worshipTracker) worshipTracker.renderSection();
    if (badgeSystem) { badgeSystem.renderSection(); badgeSystem.renderStrip(); }
    if (virtueCards) virtueCards.renderSection();
    if (duaCompanion) duaCompanion.renderSection();
    if (prayerWidget) prayerWidget.render();
    if (fastingTracker) fastingTracker.init();
    renderDailyFocusCard();
    renderTodayGlance();
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
    ctx.fillText('10 Blessed Days of Dhul Hijjah 1447', W / 2, H - 72);

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
        ? `اليوم ${card.day} من ذي الحجة`
        : `Day ${card.day} of Dhul Hijjah`;
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
    ctx.fillText('10 Blessed Days of Dhul Hijjah 1447', W / 2, H - 80);

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
        this.STORAGE_KEY = 'noor_tracker_dhulhijjah_1447';
        this.DH_START = new Date(CONFIG.DHUL_HIJJAH_START).getTime();
        this.data = { days: {}, streaks: { current: 0, longest: 0 } };
        this._load();
    }

    _load() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) this.data = JSON.parse(saved);
        this._calcStreaks();
    }

    _save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    }

    getCurrentDay() {
        if (CONFIG.WT_TEST_DAY) return CONFIG.WT_TEST_DAY;
        const diff = getCurrentTime() - this.DH_START;
        if (diff < 0) return 0;
        return Math.min(Math.floor(diff / 86400000) + 1, 10);
    }

    _initDay(n) {
        if (!this.data.days[n]) {
            this.data.days[n] = { sunnahPrayers: false, quranJuz: 0, charity: false, fasting: false, tasbeeh: false, adhkar: false, allPrayers: false, completed: false };
        }
    }

    updateActivity(n, field, value) {
        this._initDay(n);
        const wasComplete = !!this.data.days[n].completed;
        const prevPct = this._dayPct(n);
        this.data.days[n][field] = value;
        this._checkCompletion(n);
        const nowComplete = !!this.data.days[n].completed;
        const newPct = this._dayPct(n);
        this._calcStreaks();
        this._save();
        if (!wasComplete && nowComplete) {
            this._showDayCompletePopup(n);
        } else if (!nowComplete) {
            this._checkMilestone(prevPct, newPct);
        }
        if (badgeSystem) badgeSystem.update();
    }

    _dayPct(n) {
        const d = this.data.days[n];
        if (!d) return 0;
        const tasks = [d.sunnahPrayers, d.quranJuz > 0, d.charity, d.fasting, d.tasbeeh, d.adhkar, d.allPrayers];
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

    _showDayCompletePopup(n) {
        _queueCelebration(() => this._doShowDayCompletePopup(n));
    }

    _doShowDayCompletePopup(n) {
        const lang = localStorage.getItem('noor-lang') || 'en';
        const isAr = lang === 'ar';
        const title = isAr ? '✅ يوم مكتمل!' : '✅ Day Complete!';
        const sub   = isAr
            ? `أتممت اليوم ${this._toAr(n)} من ذي الحجة — جزاك الله خيراً!`
            : `You completed Day ${n} of Dhul Hijjah — JazakAllah Khayran!`;
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

    _checkCompletion(n) {
        const d = this.data.days[n];
        d.completed = d.sunnahPrayers && d.quranJuz > 0 && d.charity && d.fasting && d.tasbeeh && d.adhkar && d.allPrayers;
    }

    _calcStreaks() {
        const nums = Object.keys(this.data.days).map(Number).sort((a, b) => a - b);
        let cur = 0, longest = this.data.streaks.longest || 0, temp = 0;
        for (let i = nums.length - 1; i >= 0; i--) {
            if (this.data.days[nums[i]].completed) cur++;
            else break;
        }
        nums.forEach(n => {
            if (this.data.days[n].completed) { temp++; longest = Math.max(longest, temp); }
            else temp = 0;
        });
        this.data.streaks = { current: cur, longest };
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

    _gregorianDate(n) {
        return new Date(this.DH_START + (n - 1) * 86400000)
            .toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    _overallPct() {
        let done = 0;
        Object.values(this.data.days).forEach(d => {
            if (d.sunnahPrayers) done++;
            if (d.quranJuz > 0) done++;
            if (d.charity) done++;
            if (d.fasting) done++;
            if (d.tasbeeh) done++;
            if (d.adhkar) done++;
            if (d.allPrayers) done++;
        });
        return Math.round((done / 70) * 100);
    }

    _breakdown() {
        const b = { sunnah: 0, quranDays: 0, quranJuz: 0, charity: 0, fasting: 0, tasbeeh: 0, adhkar: 0, allPrayers: 0 };
        Object.values(this.data.days).forEach(d => {
            if (d.sunnahPrayers) b.sunnah++;
            if (d.quranJuz > 0) { b.quranDays++; b.quranJuz += d.quranJuz; }
            if (d.charity) b.charity++;
            if (d.fasting) b.fasting++;
            if (d.tasbeeh) b.tasbeeh++;
            if (d.adhkar) b.adhkar++;
            if (d.allPrayers) b.allPrayers++;
        });
        return b;
    }

    renderSection() {
        const container = document.getElementById('worship-tracker-container');
        if (!container) return;
        const lang = localStorage.getItem('noor-lang') || 'en';
        const today = this.getCurrentDay();
        const { current: cur } = this.data.streaks;

        container.innerHTML =
            (today >= 1 && today <= 10 ? this._renderEntry(today, lang, cur) : this._renderOffState(today, lang)) +
            this._renderCalendar(today, lang) +
            this._renderSummary(lang);

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

    _renderOffState(_today, lang) {
        const isAr = lang === 'ar';
        // Check real diff to detect post-10-days (getCurrentDay caps at 10)
        const realDiff = CONFIG.WT_TEST_DAY ? null : Math.floor((getCurrentTime() - this.DH_START) / 86400000);
        const isAfter = CONFIG.WT_TEST_DAY ? false : (realDiff !== null && realDiff >= 10);
        if (!isAfter) {
            return `<div class="wt-empty-state">
                <div class="wt-empty-icon">🌙</div>
                <div class="wt-empty-title">${isAr ? 'العشر الأوائل لم تبدأ بعد' : 'The blessed ten days haven\'t started yet'}</div>
                <div class="wt-empty-sub">${isAr ? 'سيبدأ المتتبع عند بداية ذي الحجة' : 'Your tracker will be ready on the first day of Dhul Hijjah'}</div>
            </div>`;
        }
        // Post-10-days: rich summary
        const days = this.data.days;
        const completedDays = Object.values(days).filter(d => d.completed).length;
        const { longest: bestStreak } = this.data.streaks;
        const totalPts = Object.values(days).reduce((sum, d) => {
            return sum + (d.sunnahPrayers ? 10 : 0) + (d.quranJuz > 0 ? d.quranJuz * 15 : 0) +
                   (d.fasting ? 15 : 0) + (d.tasbeeh ? 5 : 0) +
                   (d.adhkar ? 10 : 0) + (d.charity ? 10 : 0) + (d.allPrayers ? 15 : 0);
        }, 0);
        const taskCounts = { sunnahPrayers: 0, quranJuz: 0, fasting: 0, tasbeeh: 0, adhkar: 0, charity: 0, allPrayers: 0 };
        Object.values(days).forEach(d => {
            if (d.sunnahPrayers) taskCounts.sunnahPrayers++;
            if (d.quranJuz > 0) taskCounts.quranJuz++;
            if (d.fasting) taskCounts.fasting++;
            if (d.tasbeeh) taskCounts.tasbeeh++;
            if (d.adhkar) taskCounts.adhkar++;
            if (d.charity) taskCounts.charity++;
            if (d.allPrayers) taskCounts.allPrayers++;
        });

        const pct = Math.round((completedDays / 10) * 100);
        const grade = pct >= 90 ? (isAr ? 'ممتاز' : 'Excellent') :
                      pct >= 70 ? (isAr ? 'جيد جداً' : 'Great') :
                      pct >= 50 ? (isAr ? 'جيد' : 'Good') :
                                  (isAr ? 'واصل المحاولة' : 'Keep Going');
        const gradeEmoji = pct >= 90 ? '🌟' : pct >= 70 ? '⭐' : pct >= 50 ? '💪' : '🤲';

        const statRows = [
            { icon: '🕌', en: 'Fajr on time', ar: 'فجر في وقته', val: taskCounts.sunnahPrayers },
            { icon: '🙏', en: 'All 5 prayers', ar: 'الصلوات الخمس', val: taskCounts.allPrayers },
            { icon: '🌙', en: 'Fasting days', ar: 'أيام الصيام', val: taskCounts.fasting },
            { icon: '📖', en: 'Quran days', ar: 'أيام القرآن', val: taskCounts.quranJuz },
            { icon: '📿', en: 'Tasbeeh days', ar: 'أيام التسبيح', val: taskCounts.tasbeeh },
            { icon: '🤲', en: 'Adhkar days', ar: 'أيام الأذكار', val: taskCounts.adhkar },
            { icon: '💝', en: 'Charity days', ar: 'أيام الصدقة', val: taskCounts.charity },
        ].map(s => `
            <div class="wt-sum-stat">
                <span class="wt-sum-stat-icon">${s.icon}</span>
                <span class="wt-sum-stat-name">${isAr ? s.ar : s.en}</span>
                <span class="wt-sum-stat-val">${isAr ? this._toAr(s.val) : s.val}/10</span>
            </div>`).join('');

        return `
        <div class="wt-summary-card" dir="${isAr ? 'rtl' : 'ltr'}">
            <div class="wt-sum-title">${isAr ? '🏁 ملخص أيام ذي الحجة' : '🏁 Dhul Hijjah Summary'}</div>
            <div class="wt-sum-grade">${gradeEmoji} ${grade}</div>
            <div class="wt-sum-hero">
                <div class="wt-sum-hero-num">${isAr ? this._toAr(completedDays) : completedDays}<span>/10</span></div>
                <div class="wt-sum-hero-label">${isAr ? 'أيام مكتملة' : 'days complete'}</div>
            </div>
            <div class="wt-sum-bar-wrap">
                <div class="wt-sum-bar"><div class="wt-sum-bar-fill" style="width:${pct}%"></div></div>
                <span class="wt-sum-bar-pct">${isAr ? this._toAr(pct) : pct}%</span>
            </div>
            <div class="wt-sum-meta">
                <div class="wt-sum-meta-item">🔥 ${isAr ? `${this._toAr(bestStreak || 0)} أفضل سلسلة` : `Best streak: ${bestStreak || 0}`}</div>
                <div class="wt-sum-meta-item">✨ ${isAr ? `${this._toAr(totalPts)} نقطة` : `${totalPts} pts earned`}</div>
            </div>
            <div class="wt-sum-stats">${statRows}</div>
            <div class="wt-sum-dua">${isAr ? '«اللهم تقبّل منا إنك أنت السميع العليم»' : '"O Allah, accept from us. You are the All-Hearing, the All-Knowing."'}</div>
        </div>`;
    }

    _renderEntry(today, lang, streak) {
        const d = this.data.days[today] || {};
        const isAr = lang === 'ar';
        const isArafah = today === 9;
        const cur = streak || 0;
        const streakHtml = cur > 0
            ? `<span class="wt-goals-streak">🔥 ${isAr ? `${numFmt(cur)} متواصل` : `${cur}-day streak`}</span>`
            : '';

        // Calculate today's points
        const pts = (d.sunnahPrayers ? 10 : 0) + (d.quranJuz > 0 ? d.quranJuz * 15 : 0) +
                    (d.fasting ? (isArafah ? 20 : 15) : 0) + (d.tasbeeh ? 5 : 0) +
                    (d.adhkar ? 10 : 0) + (d.charity ? 10 : 0) + (d.allPrayers ? 15 : 0);

        const tasks = [
            { field: 'sunnahPrayers', checked: !!d.sunnahPrayers, pts: 10,
              en: 'Fajr prayer on time', ar: 'صلاة الفجر في وقتها' },
            { field: 'fasting', checked: !!d.fasting, pts: isArafah ? 20 : 15,
              en: isArafah ? 'Arafah fast' : 'Fasting today', ar: isArafah ? 'صيام يوم عرفة' : 'الصيام اليوم' },
            { field: 'allPrayers', checked: !!d.allPrayers, pts: 15,
              en: 'All 5 prayers on time', ar: 'الصلوات الخمس في أوقاتها' },
            { field: 'adhkar', checked: !!d.adhkar, pts: 10,
              en: 'Morning & evening adhkar', ar: 'أذكار الصباح والمساء' },
            { field: 'tasbeeh', checked: !!d.tasbeeh, pts: 5,
              en: '100 Tasbeeh', ar: '١٠٠ تسبيحة' },
            { field: 'charity', checked: !!d.charity, pts: 10,
              en: 'Sadaqah today', ar: 'الصدقة اليوم' },
        ];

        const quranPts = (d.quranJuz || 0) * 15;
        const quz = d.quranJuz || 0;

        const taskRows = tasks.map(task => `
            <label class="wt-task-row${task.checked ? ' wt-task-done' : ''}" data-wt-field="${task.field}" data-wt-day="${today}">
                <input type="checkbox" data-wt-field="${task.field}" data-wt-day="${today}" ${task.checked ? 'checked' : ''} style="display:none">
                <span class="wt-task-circle">${task.checked ? '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#c5a352"/><path d="M6 10l3 3 5-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}</span>
                <span class="wt-task-name">${isAr ? task.ar : task.en}</span>
                <span class="wt-task-pts">+${task.pts}</span>
            </label>`).join('');

        const quranRow = `
            <div class="wt-task-row wt-task-quran${quz > 0 ? ' wt-task-done' : ''}">
                <span class="wt-task-circle">${quz > 0 ? '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#c5a352"/><path d="M6 10l3 3 5-6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}</span>
                <div class="wt-task-quran-inner">
                    <span class="wt-task-name">${isAr ? 'تلاوة القرآن' : 'Quran recitation'}</span>
                    <div class="wt-quran-ctrl">
                        <input type="range" min="0" max="30" step="1" value="${quz}"
                            data-wt-field="quranJuz" data-wt-day="${today}" class="wt-slider">
                        <span class="wt-quran-val" id="wt-quran-val">${isAr ? this._toAr(quz) : quz} ${isAr ? 'جزء' : 'Juz'}</span>
                    </div>
                </div>
                <span class="wt-task-pts">${quz > 0 ? `+${quranPts}` : '+15/juz'}</span>
            </div>`;

        const headerLabel = isAr ? 'أهداف اليوم' : "TODAY'S GOALS";

        return `
    <div class="wt-entry-card">
        <div class="wt-goals-header">
            <span class="wt-goals-label">${headerLabel}</span>
            ${streakHtml}
        </div>
        <div class="wt-task-list">
            ${taskRows}
            ${quranRow}
        </div>
        ${pts > 0 ? `<div class="wt-pts-total">${isAr ? `${numFmt(pts)} نقطة اليوم` : `${pts} pts today`}</div>` : ''}
    </div>`;
    }

    _renderCalendar(today, lang) {
        const isAr = lang === 'ar';
        const cells = Array.from({ length: 10 }, (_, i) => {
            const n = i + 1;
            const d = this.data.days[n];
            const isToday = n === today;
            const isFuture = n > today;
            let cls = 'wt-day';
            let icon = '⭕';
            if (isFuture)       { cls += ' wt-day-future';  icon = '🔒'; }
            else if (d?.completed) { cls += ' wt-day-done';  icon = '✅'; }
            else if (d)         { cls += ' wt-day-partial'; icon = '⏳'; }
            if (isToday) cls += ' wt-day-today';
            const mini = d ? `
                <div class="wt-day-mini">
                    <span class="${d.sunnahPrayers ? 'on' : ''}">☪️</span>
                    <span class="${d.quranJuz > 0 ? 'on' : ''}">📖</span>
                    <span class="${d.charity ? 'on' : ''}">💚</span>
                    <span class="${d.fasting ? 'on' : ''}">🌙</span>
                </div>` : '';
            return `
            <div class="${cls}" data-wt-cal="${n}">
                <span class="wt-day-n">${isAr ? this._toAr(n) : n}</span>
                <span class="wt-day-icon">${icon}</span>
                ${mini}
            </div>`;
        });
        return `
        <div class="wt-calendar">
            <h3 class="wt-cal-title">${isAr ? 'أيام ذي الحجة العشرة' : '10 Days of Dhul Hijjah'}</h3>
            <div class="wt-cal-grid">${cells.join('')}</div>
        </div>`;
    }

    _renderSummary(lang) {
        const isAr = lang === 'ar';
        const pct = this._overallPct();
        const b = this._breakdown();
        return `
        <div class="wt-summary">
            <h3 class="wt-summary-title">${isAr ? 'ملخص التقدم' : 'Progress Summary'}</h3>
            <div class="wt-overall">
                <div class="wt-overall-bar"><div class="wt-overall-fill" style="width:${pct}%"></div></div>
                <span class="wt-overall-pct">${isAr ? this._toAr(pct) : pct}%</span>
            </div>
            <div class="wt-breakdown">
                <div class="wt-bd-item"><span>☪️</span><span>${isAr ? 'السنن' : 'Sunnah'}</span><strong>${isAr ? this._toAr(b.sunnah) : b.sunnah}/10</strong></div>
                <div class="wt-bd-item"><span>📖</span><span>${isAr ? 'القرآن' : 'Quran'}</span><strong>${isAr ? this._toAr(b.quranDays) : b.quranDays} ${isAr ? 'أيام' : 'days'}</strong></div>
                <div class="wt-bd-item"><span>💚</span><span>${isAr ? 'الصدقة' : 'Charity'}</span><strong>${isAr ? this._toAr(b.charity) : b.charity}/10</strong></div>
                <div class="wt-bd-item"><span>🌙</span><span>${isAr ? 'الصيام' : 'Fasting'}</span><strong>${isAr ? this._toAr(b.fasting) : b.fasting}/10</strong></div>
            </div>
        </div>`;
    }

    _attachListeners(lang) {
        const isAr = lang === 'ar';
        document.querySelectorAll('[data-wt-field][type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', (e) => {
                this.updateActivity(+e.target.dataset.wtDay, e.target.dataset.wtField, e.target.checked);
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
                this.updateActivity(+e.target.dataset.wtDay, 'quranJuz', +e.target.value);
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
        // Prefer WorshipTracker (primary source), indexed 1–10
        if (typeof worshipTracker !== 'undefined' && worshipTracker) {
            return worshipTracker.data.days;
        }
        // Fallback: read from existing Ramadan checklist localStorage, map fields
        const days = {};
        this.DH_DAYS.forEach((dateStr, i) => {
            const raw = localStorage.getItem(`ramadan_checklist_${dateStr}`);
            const cl = raw ? JSON.parse(raw) : {};
            days[i + 1] = {
                sunnahPrayers: !!cl['cb-qiyam'],
                charity: !!cl['cb-sadaqah'],
                quranJuz: cl['cb-quran'] ? 1 : 0
            };
        });
        return days;
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
// VIRTUE CARDS
// ═══════════════════════════════════════════════════
const VC_DATA = [
    {
        day: 1, gregorianDate: 'May 18, 2026', hijriDate: '1 Dhul Hijjah 1447', icon: '🌙', color: '#4f46e5',
        source: {
            type: 'verse',
            arabic: 'وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ',
            transliteration: "Wa adhdhin fin-nāsi bil-ḥajji ya'tūka rijālan wa 'alā kulli ḍāmirin ya'tīna min kulli fajjin 'amīq",
            translation: {
                en: 'And proclaim to the people the Hajj; they will come to you on foot and on every lean camel; they will come from every distant pass.',
                ar: 'وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ'
            },
            reference: 'Quran 22:27'
        },
        virtue: {
            en: "The first of the 10 blessed days of Dhul Hijjah — the days Allah swore by in Surah Al-Fajr: 'By the dawn, and by the ten nights' (89:1–2).",
            ar: "اليوم الأول من العشر المباركة من ذي الحجة — الأيام التي أقسم بها الله في سورة الفجر: 'وَالْفَجْرِ وَلَيَالٍ عَشْرٍ' (89:1–2)."
        },
        lesson: {
            en: { title: 'The Significance of Dhul Hijjah', content: 'These ten days are the most sacred in the Islamic year. The Prophet ﷺ said: "There are no days in which righteous deeds are more beloved to Allah than these ten days." The Companions asked: "Not even jihad for the sake of Allah?" He said: "Not even jihad — except a man who goes out putting himself and his wealth at risk and returns with nothing." (Bukhari)\n\nHow to maximise these days:\n• Increase dhikr — Takbeer, Tahleel, Tahmeed\n• Fast as many days as you can (especially Day 9)\n• Give generously in charity\n• Pray every prayer on time\n• Begin with sincere repentance (Tawbah)\n\nMake today the start of your best ten days ever.' },
            ar: { title: 'أهمية أيام ذي الحجة', content: 'هذه الأيام العشرة هي أقدس أيام السنة الإسلامية. قال النبي ﷺ: "ما من أيام العمل الصالح فيهن أحب إلى الله من هذه الأيام العشر." فقالوا: ولا الجهاد في سبيل الله؟ قال: "ولا الجهاد، إلا رجل خرج بنفسه وماله فلم يرجع من ذلك بشيء." (البخاري)\n\nكيف تستثمر هذه الأيام:\n• أكثر من الذكر — التكبير والتهليل والتحميد\n• صم ما استطعت (خاصة اليوم التاسع)\n• أنفق بسخاء في الصدقات\n• صلِّ كل صلاة في وقتها\n• ابدأ بالتوبة الصادقة\n\nاجعل اليوم بداية أفضل عشرة أيام في حياتك.' }
        }
    },
    {
        day: 2, gregorianDate: 'May 19, 2026', hijriDate: '2 Dhul Hijjah 1447', icon: '✨', color: '#0ea5e9',
        source: {
            type: 'hadith',
            arabic: 'مَا مِنْ أَيَّامٍ الْعَمَلُ الصَّالِحُ فِيهِنَّ أَحَبُّ إِلَى اللَّهِ مِنْ هَذِهِ الأَيَّامِ الْعَشْرِ',
            transliteration: "Mā min ayyāmin al-'amalu aṣ-ṣāliḥu fīhinna aḥabbu ilā Allāhi min hādhihi al-ayyāmi al-'ashr",
            translation: {
                en: 'There are no days on which righteous deeds are more beloved to Allah than these ten days.',
                ar: 'مَا مِنْ أَيَّامٍ الْعَمَلُ الصَّالِحُ فِيهِنَّ أَحَبُّ إِلَى اللَّهِ مِنْ هَذِهِ الأَيَّامِ الْعَشْرِ'
            },
            reference: 'Sahih Bukhari 969'
        },
        virtue: {
            en: 'Every good deed — no matter how small — carries extraordinary weight during these days. A smile, a kind word, a prayer on time: all are multiplied in ways we cannot imagine.',
            ar: 'كل عمل صالح — مهما كان صغيراً — يحمل ثقلاً استثنائياً في هذه الأيام. الابتسامة، والكلمة الطيبة، والصلاة في وقتها: كلها تتضاعف بصورة لا يمكننا تخيّلها.'
        },
        lesson: {
            en: { title: 'Every Deed Counts', content: 'The scholars explain that deeds are "more beloved" here because Allah looks upon them with special pleasure during these days. When Allah loves an act, He gives it His fullest barakah.\n\nFocus on consistency over volume:\n• Pray every Sunnah prayer, not just Fardh\n• Read even one page of Quran with full attention\n• Make dhikr during idle moments (commute, waiting, walking)\n• Call a relative you have neglected\n• Give a small amount in charity every day\n\nThe Prophet ﷺ said: "The most beloved deeds to Allah are the most consistent, even if they are small." (Bukhari & Muslim)' },
            ar: { title: 'كل عمل له قيمة', content: 'يوضح العلماء أن الأعمال هنا "أحب" لأن الله ينظر إليها بمسرة خاصة في هذه الأيام. وحين يحب الله عملاً، يمنحه أتم بركاته.\n\nركّز على الاستمرارية لا على الكم:\n• صلِّ كل سنة، وليس الفرض فحسب\n• اقرأ ولو صفحة واحدة من القرآن بتأمل كامل\n• أكثر من الذكر في أوقات الفراغ\n• تواصل مع قريب أهملته\n• تصدّق بمبلغ صغير كل يوم\n\nقال النبي ﷺ: "أحب الأعمال إلى الله أدومها وإن قل." (البخاري ومسلم)' }
        }
    },
    {
        day: 3, gregorianDate: 'May 20, 2026', hijriDate: '3 Dhul Hijjah 1447', icon: '🌿', color: '#059669',
        source: {
            type: 'hadith',
            arabic: 'مَنْ صَامَ يَوْمًا فِي سَبِيلِ اللَّهِ بَعَّدَ اللَّهُ وَجْهَهُ عَنِ النَّارِ سَبْعِينَ خَرِيفًا',
            transliteration: "Man ṣāma yawman fī sabīli Allāhi ba''ada Allāhu wajhahu 'an al-nāri sab'īna kharīfā",
            translation: {
                en: 'Whoever fasts one day for the sake of Allah, Allah will keep his face away from the Fire by a distance of seventy years.',
                ar: 'مَنْ صَامَ يَوْمًا فِي سَبِيلِ اللَّهِ بَعَّدَ اللَّهُ وَجْهَهُ عَنِ النَّارِ سَبْعِينَ خَرِيفًا'
            },
            reference: 'Sahih Muslim 1153'
        },
        virtue: {
            en: 'Fasting during Dhul Hijjah is one of the greatest acts of worship. The Prophet ﷺ used to fast the first nine days of Dhul Hijjah.',
            ar: 'الصيام في ذي الحجة من أعظم العبادات. وكان النبي ﷺ يصوم التسعة الأيام الأولى من ذي الحجة.'
        },
        lesson: {
            en: { title: 'The Power of Fasting', content: 'Fasting is described in a divine hadith (Hadith Qudsi): "Every deed of the son of Adam is for himself, except fasting — it is for Me and I will reward it." (Bukhari & Muslim) Fasting uniquely belongs to Allah because it is a hidden act that only He can verify.\n\nTips for fasting these days:\n• Make niyyah (intention) before Fajr each day\n• Eat a light, nutritious suhoor\n• Use hunger as a reminder to make dhikr\n• Break fast with dua — this is a moment of acceptance\n• Avoid wasting the fast with idle speech\n\nAim to fast at least Day 9 (Arafah) if you cannot fast all nine days.' },
            ar: { title: 'قوة الصيام', content: 'وصف الله الصيام في حديث قدسي: "كل عمل ابن آدم له إلا الصيام، فإنه لي وأنا أجزي به." (البخاري ومسلم) الصيام ينتسب لله وحده لأنه عبادة خفية لا يعلمها إلا هو.\n\nنصائح للصيام في هذه الأيام:\n• انوِ نية الصيام قبل الفجر كل يوم\n• تناول سحوراً خفيفاً ومغذياً\n• استخدم الجوع تذكيراً بالذكر\n• أفطر بدعاء — هذه لحظة قبول\n• تجنب إضاعة الصيام بالكلام الفارغ\n\nاحرص على صيام يوم عرفة (اليوم التاسع) على الأقل.' }
        }
    },
    {
        day: 4, gregorianDate: 'May 21, 2026', hijriDate: '4 Dhul Hijjah 1447', icon: '📿', color: '#7c3aed',
        source: {
            type: 'hadith',
            arabic: 'مَا مِنْ يَوْمٍ أَعْظَمُ عِنْدَ اللَّهِ وَلَا أَحَبُّ إِلَيْهِ الْعَمَلُ فِيهِ مِنْ هَذِهِ الأَيَّامِ الْعَشْرِ، فَأَكْثِرُوا فِيهَا مِنَ التَّهْلِيلِ وَالتَّكْبِيرِ وَالتَّحْمِيدِ',
            transliteration: "Mā min yawmin a'ẓamu 'inda Allāhi wa lā aḥabbu ilayhi al-'amalu fīhi min hādhihi al-ayyāmi al-'ashr, fa-akthirū fīhā min at-tahlīli wa at-takbīri wa at-taḥmīd",
            translation: {
                en: 'There are no days more magnificent in the sight of Allah, nor in which good deeds are more beloved to Him, than these ten days. So increase in Tahleel, Takbeer, and Tahmeed.',
                ar: 'مَا مِنْ يَوْمٍ أَعْظَمُ عِنْدَ اللَّهِ وَلَا أَحَبُّ إِلَيْهِ الْعَمَلُ فِيهِ مِنْ هَذِهِ الأَيَّامِ الْعَشْرِ، فَأَكْثِرُوا فِيهَا مِنَ التَّهْلِيلِ وَالتَّكْبِيرِ وَالتَّحْمِيدِ'
            },
            reference: 'Ahmad, authenticated by Ibn Hajar'
        },
        virtue: {
            en: 'The tongue remembering Allah is among the lightest acts of worship yet the most rewarded. Dhikr costs nothing and can be done anywhere — walking, driving, working.',
            ar: 'ذكر اللسان لله من أخف العبادات وأعظمها أجراً. الذكر لا يكلف شيئاً ويمكن ممارسته في أي مكان — سيراً أو قيادةً أو عملاً.'
        },
        lesson: {
            en: { title: 'The Language of Dhikr', content: 'The four phrases especially recommended during Dhul Hijjah:\n\n• لَا إِلَهَ إِلَّا اللَّه — Lā ilāha illallāh\n• اللَّهُ أَكْبَر — Allāhu Akbar\n• الْحَمْدُ لِلَّهِ — Alḥamdulillāh\n• سُبْحَانَ اللَّه — Subḥānallāh\n\nThe Takbeer formula for these days: "Allāhu Akbar, Allāhu Akbar, lā ilāha illallāh, Allāhu Akbar, Allāhu Akbar, wa lillāhil ḥamd."\n\nMake dhikr your background music. Say it during every pause in your day. These phrases are treasures heavier than mountains on your scale of good deeds.' },
            ar: { title: 'لغة الذكر', content: 'العبارات الأربع الموصى بها بشكل خاص في ذي الحجة:\n\n• لَا إِلَهَ إِلَّا اللَّه\n• اللَّهُ أَكْبَر\n• الْحَمْدُ لِلَّهِ\n• سُبْحَانَ اللَّه\n\nصيغة التكبير في هذه الأيام: "الله أكبر، الله أكبر، لا إله إلا الله، الله أكبر، الله أكبر، ولله الحمد."\n\nاجعل الذكر موسيقى خلفيتك. قله في كل توقف في يومك. هذه العبارات كنوز أثقل من الجبال في ميزان حسناتك.' }
        }
    },
    {
        day: 5, gregorianDate: 'May 22, 2026', hijriDate: '5 Dhul Hijjah 1447', icon: '💛', color: '#d97706',
        source: {
            type: 'verse',
            arabic: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ',
            transliteration: "Mathalu alladhīna yunfiqūna amwālahum fī sabīli Allāhi kamathali ḥabbatin anbatat sab'a sanābila fī kulli sunbulatin mi'atu ḥabbah, wallāhu yuḍā'ifu liman yashā'",
            translation: {
                en: 'The example of those who spend their wealth in the way of Allah is like a seed of grain which grows seven spikes; in each spike is a hundred grains. And Allah multiplies for whom He wills.',
                ar: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّائَةُ حَبَّةٍ وَاللَّهُ يُضَاعِفُ لِمَن يَشَاءُ'
            },
            reference: 'Quran 2:261'
        },
        virtue: {
            en: 'Charity during these blessed days is multiplied beyond measure. Even the smallest act of giving — a meal, a smile, a kind word — carries immense weight.',
            ar: 'الصدقة في هذه الأيام المباركة تتضاعف بصورة لا تُحصى. حتى أصغر أعمال العطاء — وجبة طعام، أو ابتسامة، أو كلمة طيبة — تحمل ثقلاً عظيماً.'
        },
        lesson: {
            en: { title: 'Unlocking Generosity', content: '"Charity does not decrease wealth." (Muslim) This is a divine promise. When you give sincerely, Allah opens doors of provision you cannot foresee.\n\nWays to give during Dhul Hijjah:\n• Donate to a cause you believe in today\n• Feed someone who cannot afford a meal\n• Sponsor a share of Udhiyyah (Qurbani)\n• Share knowledge — even one useful tip counts\n• Make dua for others — this is free sadaqah\n\nThe best charity combines the material (money, food) with the immaterial (time, attention, kindness). Give from what you love most, and trust Allah to replace it with something better.' },
            ar: { title: 'فتح باب الكرم', content: '"الصدقة لا تنقص من مال." (مسلم) هذا وعد إلهي. حين تعطي بإخلاص، يفتح الله أبواب رزق لا تراها.\n\nطرق العطاء في ذي الحجة:\n• تبرّع لقضية تؤمن بها اليوم\n• أطعم شخصاً لا يستطيع تحمّل تكاليف وجبة\n• اشترك في حصة أضحية\n• شارك علماً — حتى نصيحة مفيدة واحدة تحتسب\n• ادعُ للآخرين — هذه صدقة مجانية\n\nأعطِ مما تحب، وثق بأن الله سيعوضك بما هو أفضل.' }
        }
    },
    {
        day: 6, gregorianDate: 'May 23, 2026', hijriDate: '6 Dhul Hijjah 1447', icon: '📖', color: '#0891b2',
        source: {
            type: 'hadith',
            arabic: 'اقْرَؤُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ',
            transliteration: "Iqra'ū al-Qur'āna fa-innahu ya'tī yawma al-qiyāmati shafī'an li-aṣḥābih",
            translation: {
                en: 'Recite the Quran, for it will come on the Day of Resurrection as an intercessor for its companions.',
                ar: 'اقْرَؤُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ'
            },
            reference: 'Sahih Muslim 804'
        },
        virtue: {
            en: 'The Quran is a living guide, a healing, and a light. Every letter recited earns ten good deeds. During these blessed days, recitation carries even greater blessing.',
            ar: 'القرآن دليل حيّ وشفاء ونور. كل حرف يُتلى يكسب عشر حسنات. وفي هذه الأيام المباركة، تحمل التلاوة بركة أعظم.'
        },
        lesson: {
            en: { title: 'Living with the Quran', content: 'The Prophet ﷺ said: "The best of you are those who learn the Quran and teach it." (Bukhari) Engaging with the Quran transforms the heart.\n\nPractical steps for today:\n• Set a daily Quran goal — even 5 minutes of focused reading\n• Choose one verse to reflect on deeply\n• Listen to a Quran recitation during your commute\n• Memorise one short surah or ayah\n• Read the tafseer of a verse you find difficult\n\nThe Quran was revealed as a mercy and guidance. Come to it with an open heart, and it will show you what you need to hear today.' },
            ar: { title: 'العيش مع القرآن', content: 'قال النبي ﷺ: "خيركم من تعلم القرآن وعلّمه." (البخاري) التفاعل مع القرآن يُحوّل القلب.\n\nخطوات عملية لليوم:\n• ضع هدفاً يومياً للقرآن — حتى 5 دقائق من القراءة المركّزة\n• اختر آية واحدة لتتأملها في العمق\n• استمع لتلاوة قرآنية أثناء تنقلك\n• احفظ سورة قصيرة أو آية\n• اقرأ تفسير آية تجدها صعبة\n\nأقبل على القرآن بقلب منفتح، وسيريك ما تحتاج أن تسمعه اليوم.' }
        }
    },
    {
        day: 7, gregorianDate: 'May 24, 2026', hijriDate: '7 Dhul Hijjah 1447', icon: '🔆', color: '#be185d',
        source: {
            type: 'verse',
            arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ',
            transliteration: "Qul yā 'ibādiya alladhīna asrafū 'alā anfusihim lā taqnaṭū min raḥmati Allāh, inna Allāha yaghfiru adh-dhunūba jamī'ā, innahu huwa al-Ghafūru ar-Raḥīm",
            translation: {
                en: 'Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.',
                ar: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ'
            },
            reference: 'Quran 39:53'
        },
        virtue: {
            en: 'Sincere repentance (Tawbah) wipes the slate clean. No matter how far you have drifted, Allah is always closer to you than you think — and these days are the perfect time to return.',
            ar: 'التوبة الصادقة تمحو كل شيء. بغض النظر عن مدى ابتعادك، الله أقرب إليك مما تظن — وهذه الأيام هي الوقت المثالي للعودة.'
        },
        lesson: {
            en: { title: 'The Door of Tawbah', content: 'The Prophet ﷺ said: "Allah stretches out His hand during the night so that those who sinned by day may repent, and He stretches out His hand during the day so that those who sinned by night may repent — until the sun rises from the west." (Muslim)\n\nSteps for a sincere Tawbah:\n• Acknowledge the sin honestly — no minimising or excusing\n• Feel genuine remorse in your heart\n• Firmly resolve not to return to it\n• Make amends where possible (return what was taken, apologise)\n• Replace bad habits with good ones immediately\n\nAllah loves those who return to Him repeatedly. Tawbah is not a one-time act — it is a daily practice of turning back to your Lord.' },
            ar: { title: 'باب التوبة', content: 'قال النبي ﷺ: "إن الله يبسط يده بالليل ليتوب مسيء النهار، ويبسط يده بالنهار ليتوب مسيء الليل، حتى تطلع الشمس من مغربها." (مسلم)\n\nخطوات التوبة الصادقة:\n• اعترف بالذنب بصدق — دون تهوين أو تبرير\n• اشعر بالندم الحقيقي في قلبك\n• اعقد عزماً راسخاً على عدم العودة\n• أصلح ما أمكن (أعد ما أُخذ، واعتذر)\n• استبدل العادات السيئة بأخرى حسنة فوراً\n\nالتوبة ليست فعلاً واحداً — هي ممارسة يومية للعودة إلى ربك.' }
        }
    },
    {
        day: 8, gregorianDate: 'May 25, 2026', hijriDate: '8 Dhul Hijjah 1447 — Yawm al-Tarwiyah', icon: '🕋', color: '#ea580c',
        source: {
            type: 'hadith',
            arabic: 'إِذَا كَانَ يَوْمُ التَّرْوِيَةِ أَهَلُّوا بِالْحَجِّ',
            transliteration: "Idhā kāna Yawmu al-Tarwiyati ahallū bil-ḥajj",
            translation: {
                en: 'On the Day of Tarwiyah (8th Dhul Hijjah), the pilgrims enter the state of ihram for Hajj.',
                ar: 'إِذَا كَانَ يَوْمُ التَّرْوِيَةِ أَهَلُّوا بِالْحَجِّ'
            },
            reference: 'Sahih Bukhari 1666'
        },
        virtue: {
            en: 'The Day of Tarwiyah is when pilgrims begin their Hajj journey. For non-pilgrims, it is a day to prepare the soul — purify intentions, settle disputes, and enter the final stretch with full commitment.',
            ar: 'يوم التروية هو اليوم الذي يبدأ فيه الحجاج رحلة الحج. لغير الحجاج، هو يوم لإعداد الروح — تنقية النوايا، وتسوية الخلافات، والدخول في المرحلة الأخيرة بالتزام كامل.'
        },
        lesson: {
            en: { title: 'Yawm al-Tarwiyah — Day of Preparation', content: 'As pilgrims depart for Mina today, the rest of the Ummah should also enter a state of heightened worship. Great stations require preparation.\n\nUse today to:\n• Resolve any outstanding debts or wrongs with others\n• Make a sincere intention to maximise tomorrow (Arafah)\n• Increase in Istighfar (seeking forgiveness)\n• Cut off distractions — social media, entertainment, idle talk\n• Plan and write your dua list for Arafah Day\n\nThe pilgrim who reaches Arafah is changed forever. Even from afar, we can share in that spiritual transformation by preparing our hearts today.' },
            ar: { title: 'يوم التروية — يوم الاستعداد', content: 'بينما يتوجه الحجاج إلى منى اليوم، يجب على بقية الأمة أيضاً الدخول في حالة من العبادة المتصاعدة.\n\nاستخدم اليوم لـ:\n• تسوية أي ديون أو مظالم مع الآخرين\n• النية الصادقة لتعظيم الغد (يوم عرفة)\n• الإكثار من الاستغفار\n• قطع المشتتات — وسائل التواصل والترفيه والحديث الفارغ\n• تخطيط وكتابة قائمة أدعيتك ليوم عرفة\n\nحتى من بعيد، يمكننا المشاركة في التحول الروحي بإعداد قلوبنا اليوم.' }
        }
    },
    {
        day: 9, gregorianDate: 'May 26, 2026', hijriDate: '9 Dhul Hijjah 1447 — Yawm Arafah', icon: '⭐', color: '#b45309',
        source: {
            type: 'hadith',
            arabic: 'مَا مِنْ يَوْمٍ أَكْثَرَ مِنْ أَنْ يُعْتِقَ اللَّهُ فِيهِ عَبْدًا مِنَ النَّارِ مِنْ يَوْمِ عَرَفَةَ وَإِنَّهُ لَيَدْنُو ثُمَّ يُبَاهِي بِهِمُ الْمَلَائِكَةَ',
            transliteration: "Mā min yawmin akthara min an yu'tiqa Allāhu fīhi 'abdan min al-nāri min Yawmi 'Arafah, wa-innahu la-yadnū thumma yubāhī bihimu al-malā'ikah",
            translation: {
                en: 'There is no day on which Allah frees more people from the Fire than the Day of Arafah. He draws close, then boasts about them to the angels.',
                ar: 'مَا مِنْ يَوْمٍ أَكْثَرَ مِنْ أَنْ يُعْتِقَ اللَّهُ فِيهِ عَبْدًا مِنَ النَّارِ مِنْ يَوْمِ عَرَفَةَ وَإِنَّهُ لَيَدْنُو ثُمَّ يُبَاهِي بِهِمُ الْمَلَائِكَةَ'
            },
            reference: 'Sahih Muslim 1348'
        },
        virtue: {
            en: 'Arafah is the heart of Hajj and the greatest day of the year. Fasting on this day expiates the sins of the previous and coming year. Allah boasts to His angels about those who stand in worship.',
            ar: 'عرفة هي قلب الحج وأعظم يوم في السنة. صيام هذا اليوم يكفّر ذنوب السنة الماضية والقادمة. يباهي الله ملائكته بالذين يقفون في العبادة.'
        },
        lesson: {
            en: { title: '⭐ Arafah — The Greatest Day', content: 'The Prophet ﷺ said about fasting Arafah: "It expiates the sins of the previous year and the year to come." (Muslim) This is a divine gift — a chance to wipe the slate clean.\n\nMake the most of Arafah:\n• Fast the entire day (from Fajr to Maghrib)\n• Spend time in dua — especially the last hour before Maghrib\n• Best dua of Arafah: "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahu al-mulku wa lahu al-ḥamdu wa huwa \'alā kulli shay\'in qadīr"\n• Make dua for your parents, family, and the entire Ummah\n• Cry if you can — tears on Arafah are among the most precious\n\nAllah is closer to you today than on any other day. Pour your heart out — He is listening.' },
            ar: { title: '⭐ عرفة — أعظم يوم', content: 'قال النبي ﷺ عن صيام عرفة: "يكفر السنة الماضية والسنة القادمة." (مسلم) هذه هبة إلهية — فرصة لمحو كل شيء.\n\nاستثمر يوم عرفة:\n• صم اليوم كله (من الفجر إلى المغرب)\n• أمضِ وقتاً في الدعاء — خاصة الساعة الأخيرة قبل المغرب\n• أفضل دعاء في عرفة: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير"\n• ادعُ لوالديك وأسرتك والأمة وجميع المسلمين\n• ابكِ إن استطعت — الدموع في عرفة من أثمن ما يكون\n\nالله أقرب إليك اليوم من أي يوم آخر. أفضِ بما في قلبك — هو يسمع.' }
        }
    },
    {
        day: 10, gregorianDate: 'May 27, 2026', hijriDate: '10 Dhul Hijjah 1447 — Eid al-Adha', icon: '🎉', color: '#15803d',
        source: {
            type: 'verse',
            arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
            transliteration: "Faṣalli li-rabbika wa-anḥar",
            translation: {
                en: 'So pray to your Lord and sacrifice.',
                ar: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ'
            },
            reference: 'Quran 108:2'
        },
        virtue: {
            en: "Eid al-Adha commemorates Ibrahim's ﷺ willingness to sacrifice everything for Allah's sake. The Udhiyyah is a symbol of complete submission — giving your most beloved for Allah's pleasure.",
            ar: 'يُحيي عيد الأضحى استعداد إبراهيم ﷺ للتضحية بكل شيء في سبيل الله. الأضحية رمز للاستسلام الكامل — تقديم ما تحب أكثر لرضا الله.'
        },
        lesson: {
            en: { title: '🎉 Eid al-Adha Mubarak!', content: 'Eid al-Adha is the greatest celebration in Islam — a day of gratitude, sacrifice, and community. The Prophet ﷺ said: "The first thing we do on this day of ours is to pray, then return and slaughter. Whoever does that has followed our Sunnah." (Bukhari)\n\nHow to celebrate Eid the Prophetic way:\n• Wake early and make ghusl (full ritual bath)\n• Wear your best clothes\n• Eat nothing before the Eid prayer\n• Walk to the Eid prayer if possible\n• Exchange greetings: "Taqabbal Allāhu minnā wa minkum"\n• Give Udhiyyah — share the meat with family, neighbours, and the poor\n• Spend time with loved ones — Eid is for connection\n\nMay Allah accept your worship over these ten blessed days. Eid Mubarak! 🌙' },
            ar: { title: '🎉 عيد الأضحى مبارك!', content: 'عيد الأضحى هو أعظم احتفال في الإسلام — يوم شكر وتضحية وتجمع. قال النبي ﷺ: "إن أول ما نبدأ به في يومنا هذا أن نصلي، ثم نرجع فننحر. من فعل ذلك فقد أصاب سنتنا." (البخاري)\n\nكيف تحتفل بالعيد على الطريقة النبوية:\n• استيقظ مبكراً واغتسل\n• البس أجمل ثيابك\n• لا تأكل قبل صلاة العيد\n• امشِ إلى صلاة العيد إن أمكن\n• تبادل التهاني: "تقبل الله منا ومنكم"\n• قدّم الأضحية وشارك اللحم مع الأسرة والجيران والفقراء\n• أمضِ وقتاً مع أحبائك\n\nتقبل الله منكم ومنا هذه الأيام المباركة العشر. عيد مبارك! 🌙' }
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
        if (diff >= 10) return 10;
        return diff + 1;
    }

    renderSection() {
        const container = document.getElementById('virtue-cards-container');
        if (!container) return;
        const lang = localStorage.getItem('noor-lang') || 'en';
        const today = this._currentDay();

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
            ? `${card.icon} اليوم ${this._toArabicNum(card.day)} — ${this._hijriAr(card.hijriDate)}`
            : `${card.icon} Day ${card.day} of Dhul Hijjah — ${card.hijriDate}`;

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
    arafah:      { en: 'The best dua is the dua of Arafah. Recite these on the Day of Arafah for maximum reward.', ar: 'أفضل الدعاء دعاء يوم عرفة. رددها يوم عرفة لأعظم الأجر.' },
    takbeer:     { en: 'Glorify Allah abundantly during the first ten days. The Takbeer is among the greatest deeds.', ar: 'أكثر من التكبير في العشر الأوائل. التكبير من أفضل الأعمال.' },
    forgiveness: { en: 'Seek forgiveness sincerely. Allah loves to forgive and these days are the best time to ask.', ar: 'استغفر الله بصدق. الله يحب أن يغفر وهذه أفضل الأيام للسؤال.' },
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
        { id:'tk1', ar:'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ', tr:'Allah is the Greatest, Allah is the Greatest. There is no god but Allah. Allah is the Greatest, Allah is the Greatest, and all praise belongs to Allah.', ref:'Bukhari (muʿallaq) — Takbeer of Dhul Hijjah' },
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
                `${CONFIG.SUPABASE_URL}/rest/v1/community_duas?select=text,created_at&order=created_at.desc&limit=40`,
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
        // Persist the local ameen count for this dua
        const countKey = 'noor_ameen_cnt_' + id;
        const prevCount = parseInt(localStorage.getItem(countKey) || '0', 10);
        localStorage.setItem(countKey, String(prevCount + 1));
        if (btnEl) {
            btnEl.classList.add('dc-ameen-done');
            const countEl = btnEl.querySelector('.dc-ameen-count');
            if (countEl) countEl.textContent = String(prevCount + 1);
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
                const cnt = parseInt(localStorage.getItem('noor_ameen_cnt_' + aid) || '0', 10);
                return `
                <div class="dc-shared-item">
                    <span class="dc-shared-text">${this._escape(s.text)}</span>
                    <div class="dc-shared-footer">
                        <span class="dc-shared-meta">
                            <span class="dc-shared-anon">${isAr ? 'مجهول' : 'Anonymous'}</span>
                            <span class="dc-shared-time">${this._timeAgo(new Date(s.created_at).getTime(), isAr)}</span>
                        </span>
                        <button class="dc-ameen-btn${said ? ' dc-ameen-done' : ''}" onclick="duaCompanion.tapAmeen('${aid}',this)">
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
                <span class="dc-shared-text">${this._escape(s.text)}</span>
                <div class="dc-shared-footer">
                    <span class="dc-shared-meta">
                        <span class="dc-shared-anon">${isAr ? 'مجهول' : 'Anonymous'}</span>
                        <span class="dc-shared-time">${this._timeAgo(s.ts, isAr)}</span>
                    </span>
                    <button class="dc-ameen-btn${said ? ' dc-ameen-done' : ''}" onclick="duaCompanion.tapAmeen('${aid}',this)">
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
            if (raw.length > 200 || /https?:\/\//i.test(raw)) {
                this._toast(isAr ? 'المحتوى غير مقبول' : 'Content not allowed');
                return;
            }
            const btn = document.getElementById('dc-share-submit');
            if (btn) { btn.disabled = true; btn.textContent = isAr ? '…' : '…'; }
            const ok = await this._submitCommunity(raw);
            if (ok) {
                if (inp) inp.value = '';
                this._toast(isAr ? '🤲 تمت المشاركة بنجاح' : '🤲 Shared with the community!');
            } else {
                this._toast(isAr ? '❌ فشلت المشاركة، حاول مجدداً' : '❌ Failed to share, try again');
            }
            if (btn) { btn.disabled = false; btn.textContent = t('dcShareBtn'); }
            if (!this._isSupabaseConfigured()) this.renderSection();
        });
    }

    _escape(s) {
        return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
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
const _PT_FALLBACK = { fajr: '04:23', dhuhr: '12:51', asr: '16:28', maghrib: '19:41', isha: '21:09' };
const _PT_EID_TIME = '06:30'; // Eid al-Adha prayer, Cairo, May 27 2026

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
            const res = await fetch(url);
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
        return (times && times[dateStr]) || _PT_FALLBACK;
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
        this._locTimeout = setTimeout(() => { this._api.upgradeLocationName(); }, 2000); // silently fix coordinate-only names in background
        this._times = await this._api.getTimesForDate(this._api._todayStr());
        this.render();
        if (!this._interval) {
            this._interval = setInterval(() => this._tick(), 60000);
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

        const _dhRealDay = Math.floor((getCurrentTime() - new Date(CONFIG.DHUL_HIJJAH_START).getTime()) / 86400000) + 1;
        const isEid = _dhRealDay >= 10;
        const eidRow = isEid ? `
            <div class="pt-row pt-row-eid">
                <span class="pt-name">🎉 ${isAr ? 'صلاة العيد' : 'Eid Prayer'}</span>
                <span class="pt-time">${numFmt(_PT_EID_TIME)}</span>
            </div>` : '';

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
                <span class="pt-location">📍 ${locName}</span>
                <button id="pt-detect-btn" class="pt-detect-btn" onclick="detectPrayerLocation()">${t('ptDetectBtn')}</button>
            </div>
            <div class="pt-list">${eidRow}${rows}</div>
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

        document.querySelectorAll('.pt-row:not(.pt-row-eid)').forEach((row, i) => {
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

    toggle(prayer, times) {
        const wasOn = !!this._prefs[prayer];
        this._prefs[prayer] = !wasOn;
        this._save();

        const names = t('dhPrayers');
        if (this._prefs[prayer]) {
            if (times) this._schedule(prayer, times);
            showMessage(t('ptReminderSetTitle'), t('ptReminderSetMsg')(names[prayer]));
        } else {
            if (this._timers[prayer]) { clearTimeout(this._timers[prayer]); delete this._timers[prayer]; }
            showMessage(t('ptReminderOffTitle'), t('ptReminderOffMsg')(names[prayer]));
        }

        // Update bell UI without full re-render
        document.querySelectorAll(`.pt-bell[data-prayer="${prayer}"]`).forEach(btn => {
            btn.classList.toggle('pt-bell-on', !!this._prefs[prayer]);
        });
    }

    scheduleAll(times) {
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
        const ms = target.getTime() - now.getTime();
        if (ms <= 0) return; // prayer time already passed today
        this._timers[prayer] = setTimeout(() => this._fire(prayer), ms);
    }

    _fire(prayer) {
        if (!('Notification' in window) || Notification.permission !== 'granted') return;
        const names = t('dhPrayers');
        const isAr = currentLang === 'ar';
        const title = `🕌 ${names[prayer]}`;
        const body = isAr
            ? `حان وقت صلاة ${names[prayer]} — حيّ على الصلاة`
            : `It's time for ${names[prayer]} — Hayya 'ala-s-Salah`;
        const options = {
            body, icon: 'assets/icons/icon-512.png', badge: 'assets/icons/badge-96.png',
            tag: `noor-prayer-${prayer}`, renotify: true, vibrate: [300, 100, 300, 100, 300],
            requireInteraction: true,
        };
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.ready.then(reg => reg.showNotification(title, options));
        } else {
            new Notification(title, options);
        }
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
        const options = {
            body, icon: 'assets/icons/icon-512.png', badge: 'assets/icons/badge-96.png',
            tag: 'noor-prayer-test', renotify: true, vibrate: [300, 100, 300, 100, 300],
            requireInteraction: true,
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
                    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
                        navigator.serviceWorker.ready.then(reg => reg.showNotification(title, options));
                    } else {
                        new Notification(title, options);
                    }
                }
            }, 1000);
        } else {
            if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
                navigator.serviceWorker.ready.then(reg => reg.showNotification(title, options));
            } else {
                new Notification(title, options);
            }
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
    if (prayerReminders) {
        const isOn = prayerReminders.isEnabled(prayer);
        if (isOn) {
            prayerReminders.disable(prayer);
        } else {
            prayerReminders.enable(prayer, prayerWidget ? prayerWidget._times : null);
        }
    }
    _updateSettingsPrayerToggles();
    if (prayerWidget) prayerWidget.render();
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

function renderDailyFocusCard() {
    const day = getDhulHijjahDay();
    // Render inline inside the countdown card instead of a standalone card
    const countdownCard = document.getElementById('dhul-hijjah-card');
    // Remove any existing inline banner first
    const existing = document.getElementById('dfc-inline-banner');
    if (existing) existing.remove();
    // Also hide old standalone card if still present
    const oldCard = document.getElementById('daily-focus-card');
    if (oldCard) oldCard.style.display = 'none';
    if (!countdownCard || day < 1 || day > 10) return;
    const lang = currentLang;
    const isAr = lang === 'ar';
    const f = DAILY_FOCUS[day - 1];
    const loc = isAr ? f.ar : f.en;
    const banner = document.createElement('div');
    banner.id = 'dfc-inline-banner';
    banner.className = 'dfc-inline-banner';
    banner.dir = isAr ? 'rtl' : 'ltr';
    banner.innerHTML = `
        <div class="dfc-inline-theme">${loc.theme}</div>
        <div class="dfc-inline-focus">${loc.focus}</div>`;
    countdownCard.appendChild(banner);
}

function _checkReEngagement() {
    const VISIT_KEY = 'noor_last_visit';
    const now = Date.now();
    const last = parseInt(localStorage.getItem(VISIT_KEY) || '0', 10);
    localStorage.setItem(VISIT_KEY, String(now));

    if (!last) return; // first visit ever

    const daysMissed = Math.floor((now - last) / 86400000);
    if (daysMissed < 1) return; // same day or recent — no message

    const day = getDhulHijjahDay();
    if (day < 1 || day > 10) return; // outside Dhul Hijjah — skip

    const lang = localStorage.getItem('noor-lang') || 'en';
    const isAr = lang === 'ar';
    const daysLeft = 10 - day + 1;

    const msg = isAr
        ? `أهلاً بعودتك — لا يزال أمامك ${daysLeft} ${daysLeft === 1 ? 'يوم' : 'أيام'}. التوبة والبداية الجديدة مقبولة دائماً.`
        : `Welcome back — ${daysLeft} day${daysLeft === 1 ? '' : 's'} still remain. A fresh start is always accepted.`;

    const banner = document.createElement('div');
    banner.className = 'reengagement-banner';
    banner.dir = isAr ? 'rtl' : 'ltr';
    banner.innerHTML = `<span class="reengagement-icon">🌙</span><span class="reengagement-msg">${msg}</span><button class="reengagement-close" onclick="this.closest('.reengagement-banner').remove()">×</button>`;
    // Insert at the top of the home tab
    const homeTab = document.getElementById('tab-home');
    if (homeTab && homeTab.firstChild) {
        homeTab.insertBefore(banner, homeTab.firstChild);
    } else {
        document.body.prepend(banner);
    }
    setTimeout(() => { if (banner.parentNode) { banner.classList.add('reengagement-out'); setTimeout(() => banner.remove(), 500); } }, 8000);
}

function _checkDay1Banner() {
    const day = getDhulHijjahDay();
    if (day !== 1) return;
    const SEEN_KEY = 'noor_day1_banner_seen_1447';
    if (localStorage.getItem(SEEN_KEY)) return;
    localStorage.setItem(SEEN_KEY, '1');
    const isAr = currentLang === 'ar';
    const banner = document.createElement('div');
    banner.className = 'day1-banner';
    banner.dir = isAr ? 'rtl' : 'ltr';
    banner.innerHTML = `
        <div class="day1-banner-icon">🕋</div>
        <div class="day1-banner-text">
            <strong>${isAr ? 'بدأت أيام ذي الحجة!' : 'Dhul Hijjah has begun!'}</strong>
            <span>${isAr ? 'اللهم بلّغنا العشر وأعنّا على العمل الصالح فيها.' : 'May Allah grant us the best of these ten blessed days.'}</span>
        </div>
        <button class="day1-banner-close" onclick="this.closest('.day1-banner').remove()">×</button>`;
    const homeTab = document.getElementById('tab-home');
    const ref = document.getElementById('today-glance') || (homeTab && homeTab.firstChild);
    if (homeTab && ref) {
        homeTab.insertBefore(banner, ref);
    } else if (homeTab) {
        homeTab.prepend(banner);
    }
    setTimeout(() => { if (banner.parentNode) { banner.classList.add('day1-banner-out'); setTimeout(() => banner.remove(), 500); } }, 10000);
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

function initArafahMode() {
    // Activate on arafah-eve (Day 8 after Maghrib) AND arafah (Day 9)
    const stage = getDhStage();
    const isArafa = stage === 'arafah' || stage === 'arafah-eve';
    document.documentElement.classList.toggle('arafah-mode', isArafa);

    // Particles — sparse, slow embers; only on actual Day 9
    let particles = document.getElementById('arafah-particles');
    const needParticles = stage === 'arafah';
    if (needParticles && !particles) {
        particles = document.createElement('div');
        particles.id = 'arafah-particles';
        particles.className = 'arafah-particles';
        for (let i = 0; i < 10; i++) {
            const p = document.createElement('div');
            p.className = 'arafah-particle';
            const size = 1.5 + Math.random() * 2;
            p.style.cssText = `left:${Math.random()*100}%;width:${size}px;height:${size}px;animation-duration:${12+Math.random()*14}s;animation-delay:${Math.random()*16}s`;
            particles.appendChild(p);
        }
        document.body.prepend(particles);
    } else if (!needParticles && particles) {
        particles.remove();
    }

    // Triple prayer timeline — only on Day 9
    updateTripleCountdown(stage);
}

// Prayer times for Arafah Day (May 26, 2026) — Cairo UTC+2, approximate
const _ARAFAH_DATE = '2026-05-26';
const _ARAFAH_PRAYERS = {
    fajr:    new Date(`${_ARAFAH_DATE}T04:15:00+02:00`).getTime(),
    dhuhr:   new Date(`${_ARAFAH_DATE}T12:12:00+02:00`).getTime(),
    asr:     new Date(`${_ARAFAH_DATE}T15:47:00+02:00`).getTime(),
    maghrib: new Date(`${_ARAFAH_DATE}T19:30:00+02:00`).getTime(),
};

function updateTripleCountdown(stage) {
    const card = document.getElementById('arafah-triple-card');
    if (!card) return;

    if (stage !== 'arafah') {
        card.style.display = 'none';
        return;
    }
    card.style.display = '';

    const lang = localStorage.getItem('noor-lang') || 'en';
    const isAr = lang === 'ar';
    const now = getCurrentTime();

    const fmt = ms => {
        if (ms <= 0) return null;
        const h = Math.floor(ms / 3600000);
        const m = Math.floor((ms % 3600000) / 60000);
        const s = Math.floor((ms % 60000) / 1000);
        return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    };

    const prayers = [
        {
            id: 'fajr',
            icon: '🌄',
            label: isAr ? 'الفجر' : 'Fajr',
            sub: isAr ? 'بداية وقت عرفة' : 'Arafah wuquf begins',
            time: _ARAFAH_PRAYERS.fajr,
            timeStr: '04:15',
        },
        {
            id: 'asr',
            icon: '⭐',
            label: isAr ? 'العصر' : 'Asr',
            sub: isAr ? 'أفضل وقت للدعاء' : 'Peak dua time',
            time: _ARAFAH_PRAYERS.asr,
            timeStr: '15:47',
            peak: true,
        },
        {
            id: 'maghrib',
            icon: '🌇',
            label: isAr ? 'المغرب' : 'Maghrib',
            sub: isAr ? 'نهاية وقت عرفة' : 'Arafah wuquf ends',
            time: _ARAFAH_PRAYERS.maghrib,
            timeStr: '19:30',
        },
    ];

    // Determine peak window: between Asr and Maghrib
    const inPeak = now >= _ARAFAH_PRAYERS.asr && now < _ARAFAH_PRAYERS.maghrib;

    const cardHtml = prayers.map(p => {
        const remaining = p.time - now;
        const passed = remaining <= 0;
        const countdown = fmt(remaining);
        let statusHtml;
        if (passed) {
            if (p.peak && inPeak) {
                statusHtml = `<div class="at-status at-status-live">${isAr ? '🔥 ادعُ الآن!' : '🔥 Make Dua NOW!'}</div>`;
            } else {
                statusHtml = `<div class="at-status at-status-done">${isAr ? '✓ انتهى' : '✓ Passed'}</div>`;
            }
        } else {
            statusHtml = `<div class="at-countdown${p.peak ? ' at-countdown-peak' : ''}">${countdown}</div>`;
        }
        return `
        <div class="at-prayer${p.peak ? ' at-prayer-peak' : ''}${passed && !(p.peak && inPeak) ? ' at-prayer-done' : ''}">
            <div class="at-prayer-icon">${p.icon}</div>
            <div class="at-prayer-label">${p.label}</div>
            <div class="at-prayer-sub">${p.sub}</div>
            <div class="at-prayer-time">${p.timeStr}</div>
            ${statusHtml}
        </div>`;
    }).join('');

    const titleEl = card.querySelector('.at-title');
    const gridEl = card.querySelector('.at-grid');
    if (titleEl) titleEl.textContent = isAr ? '⏱ مواقيت يوم عرفة' : '⏱ Arafah Day Timeline';
    if (gridEl) gridEl.innerHTML = cardHtml;
}

const dhulHijjahDate = new Date(CONFIG.DHUL_HIJJAH_START).getTime();
// Progress bar fills over the 30 days leading up to Dhul Hijjah
const dhulHijjahRefStart = dhulHijjahDate - (30 * 86400000);

// ═══════════════════════════════════════════════════
// FASTING TRACKER (TASK 07) — Arafah Day only
// ═══════════════════════════════════════════════════
const _FT_KEY = 'noor_fast_1447';

class FastingTracker {
    constructor() {
        const saved = JSON.parse(localStorage.getItem(_FT_KEY) || '{}');
        this.fasting = saved.fasting || false;
        this.milestones = saved.milestones || { dhuhr: false, asr: false, maghrib: false };
    }

    _save() {
        localStorage.setItem(_FT_KEY, JSON.stringify({
            fasting: this.fasting,
            milestones: this.milestones
        }));
    }

    _pct() {
        const now = getCurrentTime();
        const total = _ARAFAH_PRAYERS.maghrib - _ARAFAH_PRAYERS.fajr;
        return Math.min(100, Math.max(0, Math.round((now - _ARAFAH_PRAYERS.fajr) / total * 100)));
    }

    _remaining() {
        const diff = Math.max(0, _ARAFAH_PRAYERS.maghrib - getCurrentTime());
        return { h: Math.floor(diff / 3600000), m: Math.floor(diff % 3600000 / 60000) };
    }

    _remText(isAr) {
        const r = this._remaining();
        if (r.h === 0 && r.m === 0) return isAr ? '\u2705 \u0627\u0643\u062a\u0645\u0644' : '\u2705 Complete';
        return isAr ? `${r.h}\u0633 ${r.m}\u062f \u0645\u062a\u0628\u0642\u064a` : `${r.h}h ${r.m}m left`;
    }

    _milestoneMsg(isAr) {
        const pct = this._pct();
        if (pct >= 100) return isAr ? '\uD83C\uDF89 \u0623\u062a\u0645\u0645\u062a \u0627\u0644\u0635\u064a\u0627\u0645! \u062a\u0642\u0628\u0644 \u0627\u0644\u0644\u0647 \u0645\u0646\u0643' : '\uD83C\uDF89 Fast complete! May Allah accept it';
        if (pct >= 80) return isAr ? '\u2B50 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u2014 \u0623\u0639\u0638\u0645 \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0642\u0627\u062f\u0645\u0629' : '\u2B50 Final stretch \u2014 the most blessed hours ahead';
        if (pct >= 50) return isAr ? '\uD83D\uDCAA \u0646\u0635\u0641 \u0627\u0644\u0637\u0631\u064a\u0642! \u062a\u0642\u0628\u0644 \u0627\u0644\u0644\u0647 \u0635\u064a\u0627\u0645\u0643' : '\uD83D\uDCAA Halfway there! May Allah accept your fast';
        return isAr ? '\uD83C\uDF05 \u0628\u062f\u0623 \u0635\u064a\u0627\u0645\u0643 \u2014 \u0627\u0644\u0644\u0647\u0645 \u062a\u0642\u0628\u0644 \u0645\u0646\u0627' : '\uD83C\uDF05 Fast begun \u2014 may Allah accept it from us';
    }

    init() {
        const card = document.getElementById('ft-card');
        const el = document.getElementById('ft-container');
        if (!card || !el) return;

        if (getDhStage() !== 'arafah') { card.style.display = 'none'; return; }
        card.style.display = '';

        const isAr = currentLang === 'ar';
        const dir = isAr ? 'rtl' : 'ltr';

        if (!this.fasting) {
            el.innerHTML = `
            <div class="ft-intention" dir="${dir}">
                <p class="ft-hadith">"\u0635\u0650\u064a\u064e\u0627\u0645\u064f \u064a\u064e\u0648\u0645\u0650 \u0639\u064e\u0631\u064e\u0641\u064e\u0629\u060c \u0623\u064e\u062d\u0652\u062a\u064e\u0633\u0650\u0628\u064f \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0623\u064e\u0646\u0652 \u064a\u064f\u0643\u064e\u0641\u0651\u0650\u0631\u064e \u0627\u0644\u0633\u0651\u064e\u0646\u064e\u0629\u064e \u0627\u0644\u0651\u064e\u062a\u0650\u064a \u0642\u064e\u0628\u0652\u0644\u064e\u0647\u064f\u060c \u0648\u064e\u0627\u0644\u0633\u0651\u064e\u0646\u064e\u0629\u064e \u0627\u0644\u0651\u064e\u062a\u0650\u064a \u0628\u064e\u0639\u0652\u062f\u064e\u0647\u064f"
                    <span class="ft-source">\u2014 ${isAr ? '\u0635\u062d\u064a\u062d \u0645\u0633\u0644\u0645' : 'Sahih Muslim'}</span></p>
                <p class="ft-question">${isAr ? '\u0647\u0644 \u062a\u0635\u0648\u0645 \u064a\u0648\u0645 \u0639\u0631\u0641\u0629\u061f' : 'Are you fasting Arafah today?'}</p>
                <div class="ft-btns">
                    <button class="btn ft-yes-btn" id="ft-yes">${isAr ? '\u2705 \u0646\u0639\u0645\u060c \u0623\u0646\u0627 \u0635\u0627\u0626\u0645' : '\u2705 Yes, I\'m fasting'}</button>
                    <button class="btn btn-outline ft-no-btn" id="ft-no">${isAr ? '\u0644\u0633\u062a \u0635\u0627\u0626\u0645\u064b\u0627' : 'Not today'}</button>
                </div>
            </div>`;
            document.getElementById('ft-yes')?.addEventListener('click', () => {
                this.fasting = true;
                this._save();
                this.init();
                this._ftToast(isAr ? '\uD83C\uDF19 \u062a\u0642\u0628\u0644 \u0627\u0644\u0644\u0647 \u0635\u064a\u0627\u0645\u0643!' : '\uD83C\uDF19 May Allah accept your fast!');
            });
            document.getElementById('ft-no')?.addEventListener('click', () => {
                card.style.display = 'none';
            });
        } else {
            this._renderProgress(el, isAr);
        }
    }

    _renderProgress(el, isAr) {
        const pct = this._pct();
        const dir = isAr ? 'rtl' : 'ltr';
        el.innerHTML = `
        <div class="ft-tracker" dir="${dir}">
            <div class="ft-timeline">
                <div class="ft-pt">
                    <span class="ft-pt-icon">\uD83C\uDF05</span>
                    <span class="ft-pt-label">${isAr ? '\u0627\u0644\u0641\u062c\u0631' : 'Fajr'}</span>
                    <span class="ft-pt-time">04:15</span>
                </div>
                <div class="ft-bar-wrap">
                    <div class="ft-bar">
                        <div class="ft-fill" style="width:${pct}%"></div>
                    </div>
                    <span class="ft-pct">${pct}%</span>
                </div>
                <div class="ft-pt">
                    <span class="ft-pt-icon">\uD83C\uDF07</span>
                    <span class="ft-pt-label">${isAr ? '\u0627\u0644\u0645\u063a\u0631\u0628' : 'Maghrib'}</span>
                    <span class="ft-pt-time">19:30</span>
                </div>
            </div>
            <div class="ft-meta">
                <span class="ft-rem">${this._remText(isAr)}</span>
                <span class="ft-msg">${this._milestoneMsg(isAr)}</span>
            </div>
        </div>`;
    }

    tick() {
        if (getDhStage() !== 'arafah' || !this.fasting) return;
        const fill = document.querySelector('.ft-fill');
        if (!fill) return;

        const pct = this._pct();
        const isAr = currentLang === 'ar';
        fill.style.width = pct + '%';
        const pctEl = document.querySelector('.ft-pct');
        if (pctEl) pctEl.textContent = pct + '%';
        const remEl = document.querySelector('.ft-rem');
        if (remEl) remEl.textContent = this._remText(isAr);
        const msgEl = document.querySelector('.ft-msg');
        if (msgEl) msgEl.textContent = this._milestoneMsg(isAr);

        this._checkMilestones(pct, isAr);
    }

    _checkMilestones(pct, isAr) {
        if (pct >= 50 && !this.milestones.dhuhr) {
            this.milestones.dhuhr = true; this._save();
            this._ftToast(isAr ? '\uD83D\uDCAA \u0646\u0635\u0641 \u0627\u0644\u0637\u0631\u064a\u0642! \u062a\u0642\u0628\u0644 \u0627\u0644\u0644\u0647 \u0635\u064a\u0627\u0645\u0643' : '\uD83D\uDCAA Halfway there! May Allah accept your fast', 6000);
        }
        if (pct >= 80 && !this.milestones.asr) {
            this.milestones.asr = true; this._save();
            this._ftToast(isAr ? '\u2B50 \u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u2014 \u0623\u0639\u0638\u0645 \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0642\u0627\u062f\u0645\u0629' : '\u2B50 Final stretch \u2014 the most blessed hours ahead', 6000);
        }
        if (pct >= 100 && !this.milestones.maghrib) {
            this.milestones.maghrib = true; this._save();
            this._celebrate(isAr);
        }
    }

    _celebrate(isAr) {
        const colors = ['#D4AF37', '#c9963a', '#14b8a6', '#ffffff', '#F4C430'];
        for (let i = 0; i < 120; i++) {
            setTimeout(() => {
                const p = document.createElement('div');
                p.className = 'ft-confetti';
                const size = 6 + Math.random() * 8;
                p.style.cssText = `left:${Math.random()*100}%;width:${size}px;height:${size}px;` +
                    `background:${colors[Math.floor(Math.random()*colors.length)]};` +
                    `animation-duration:${2 + Math.random()*3}s;border-radius:${Math.random() > 0.5 ? '50%' : '2px'}`;
                document.body.appendChild(p);
                setTimeout(() => p.remove(), 5500);
            }, i * 25);
        }

        const overlay = document.createElement('div');
        overlay.className = 'ft-celebrate-overlay';
        overlay.innerHTML = `
        <div class="ft-celebrate-box" dir="${isAr ? 'rtl' : 'ltr'}">
            <div class="ft-celebrate-icon">\uD83C\uDF89</div>
            <h2 class="ft-celebrate-title">${isAr ? '\u0645\u0628\u0631\u0648\u0643! \u0623\u062a\u0645\u0645\u062a \u0635\u064a\u0627\u0645 \u0623\u0639\u0638\u0645 \u064a\u0648\u0645' : 'Alhamdulillah! You fasted the best day of the year'}</h2>
            <p class="ft-celebrate-msg">\uD83E\uDD32 ${isAr ? '\u063a\u064f\u0641\u0650\u0631 \u0644\u0643 \u0630\u0646\u0628 \u0633\u0646\u062a\u064a\u0646' : '2 years of sins forgiven'}</p>
            <div class="ft-celebrate-hadith">"\u0635\u0650\u064a\u064e\u0627\u0645\u064f \u064a\u064e\u0648\u0645\u0650 \u0639\u064e\u0631\u064e\u0641\u064e\u0629\u060c \u0623\u064e\u062d\u0652\u062a\u064e\u0633\u0650\u0628\u064f \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0623\u064e\u0646\u0652 \u064a\u064f\u0643\u064e\u0641\u0651\u0650\u0631\u064e \u0627\u0644\u0633\u0651\u064e\u0646\u064e\u0629\u064e \u0627\u0644\u0651\u064e\u062a\u0650\u064a \u0642\u064e\u0628\u0652\u0644\u064e\u0647\u064f\u060c \u0648\u064e\u0627\u0644\u0633\u0651\u064e\u0646\u064e\u0629\u064e \u0627\u0644\u0651\u064e\u062a\u0650\u064a \u0628\u064e\u0639\u0652\u062f\u064e\u0647\u064f"
                <br><small>\u2014 ${isAr ? '\u0635\u062d\u064a\u062d \u0645\u0633\u0644\u0645' : 'Sahih Muslim'}</small></div>
            <button class="btn ft-celebrate-close" id="ft-celebrate-close">${isAr ? '\u0627\u0644\u062d\u0645\u062f \u0644\u0644\u0647 \u2728' : 'Alhamdulillah \u2728'}</button>
        </div>`;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('ft-celebrate-show'));
        document.getElementById('ft-celebrate-close')?.addEventListener('click', () => {
            overlay.classList.remove('ft-celebrate-show');
            setTimeout(() => overlay.remove(), 300);
        });
    }

    _ftToast(msg, duration = 3500) {
        document.querySelectorAll('.ft-toast').forEach(el => el.remove());
        const el = document.createElement('div');
        el.className = 'ft-toast';
        el.textContent = msg;
        document.body.appendChild(el);
        requestAnimationFrame(() => el.classList.add('ft-toast-show'));
        setTimeout(() => { el.classList.remove('ft-toast-show'); setTimeout(() => el.remove(), 300); }, duration);
    }
}

let fastingTracker;

// ── Multi-stage Dhul Hijjah Countdown ──

const _DH_TIPS_EN = [
    "These 10 days are more beloved to Allah than any other days. Make every moment count!",
    "Every good deed is multiplied immensely — fast, pray, give charity, and make dhikr.",
    "The Prophet \uFDFAused to fast these first nine days. Consider fasting today.",
    "Fill your day with Takbeer: Allahu Akbar, Allahu Akbar, La ilaha illallah, Allahu Akbar.",
    "Give in charity today — even a little. Sadaqah multiplied these days becomes oceans of reward.",
    "Recite Quran — even one page. Each letter earns hasanat, multiplied in these blessed days.",
    "Seek sincere forgiveness today. Dhul Hijjah is a time of tawbah and abundant mercy.",
    "Tomorrow is Yawm Arafah — the greatest day of the year. Prepare your duas tonight.",
    "Fast today if you can! The Prophet \uFDFAsaid Arafah fasting expiates two years of sins.",
    "Eid Mubarak! Pray Eid prayer, give Udhiyyah, and spread joy with your loved ones."
];

const _DH_TIPS_AR = [
    "\u0647\u0630\u0647 \u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0639\u0634\u0631 \u0623\u062d\u0628 \u0625\u0644\u0649 \u0627\u0644\u0644\u0647 \u0645\u0646 \u0633\u0627\u0626\u0631 \u0623\u064a\u0627\u0645 \u0627\u0644\u0633\u0646\u0629. \u0627\u062c\u0639\u0644 \u0643\u0644 \u0644\u062d\u0638\u0629 \u062a\u064f\u062d\u0633\u0628!",
    "\u0643\u0644 \u0639\u0645\u0644 \u0635\u0627\u0644\u062d \u0645\u0636\u0627\u0639\u0641 \u0627\u0644\u0623\u062c\u0631 \u2014 \u0635\u0645 \u0648\u0635\u0644\u0651 \u0648\u062a\u0635\u062f\u0651\u0642 \u0648\u0623\u0643\u062b\u0631 \u0645\u0646 \u0627\u0644\u0630\u0643\u0631.",
    "\u0643\u0627\u0646 \u0627\u0644\u0646\u0628\u064a \ufdfa \u064a\u0635\u0648\u0645 \u0647\u0630\u0647 \u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u062a\u0633\u0639\u0629. \u0641\u0643\u0651\u0631 \u0641\u064a \u0627\u0644\u0635\u064a\u0627\u0645 \u0627\u0644\u064a\u0648\u0645.",
    "\u0627\u0643\u062b\u0631 \u0645\u0646 \u0627\u0644\u062a\u0643\u0628\u064a\u0631: \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631\u060c \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631\u060c \u0644\u0627 \u0625\u0644\u0647 \u0625\u0644\u0627 \u0627\u0644\u0644\u0647\u060c \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631.",
    "\u062a\u0635\u062f\u0651\u0642 \u0627\u0644\u064a\u0648\u0645 \u0648\u0644\u0648 \u0628\u0627\u0644\u0642\u0644\u064a\u0644. \u0627\u0644\u0635\u062f\u0642\u0629 \u0627\u0644\u0645\u0636\u0627\u0639\u0641\u0629 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0623\u064a\u0627\u0645 \u062a\u0635\u0628\u062d \u0628\u062d\u0627\u0631\u0627\u064b \u0645\u0646 \u0627\u0644\u0623\u062c\u0631.",
    "\u0627\u062a\u0644\u064f \u0627\u0644\u0642\u0631\u0622\u0646 \u0648\u0644\u0648 \u0635\u0641\u062d\u0629. \u0643\u0644 \u062d\u0631\u0641 \u0628\u062d\u0633\u0646\u0627\u062a \u0645\u0636\u0627\u0639\u0641\u0629 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0645\u0628\u0627\u0631\u0643\u0629.",
    "\u0627\u0633\u062a\u063a\u0641\u0631 \u0628\u0635\u062f\u0642 \u0627\u0644\u064a\u0648\u0645. \u0630\u0648 \u0627\u0644\u062d\u062c\u0629 \u0645\u0648\u0633\u0645 \u0627\u0644\u062a\u0648\u0628\u0629 \u0648\u0627\u0644\u0631\u062d\u0645\u0629 \u0627\u0644\u0625\u0644\u0647\u064a\u0629.",
    "\u063a\u062f\u0627\u064b \u064a\u0648\u0645 \u0639\u0631\u0641\u0629 \u2014 \u0623\u0639\u0638\u0645 \u064a\u0648\u0645 \u0641\u064a \u0627\u0644\u0633\u0646\u0629. \u062c\u0647\u0651\u0632 \u0623\u062f\u0639\u064a\u062a\u0643 \u0627\u0644\u0644\u064a\u0644\u0629.",
    "\u0635\u064f\u0645 \u0627\u0644\u064a\u0648\u0645 \u0625\u0646 \u0627\u0633\u062a\u0637\u0639\u062a! \u0642\u0627\u0644 \ufdfa: \u0635\u064a\u0627\u0645 \u064a\u0648\u0645 \u0639\u0631\u0641\u0629 \u064a\u0643\u0641\u0651\u0631 \u0633\u0646\u062a\u064a\u0646.",
    "\u0639\u064a\u062f \u0645\u0628\u0627\u0631\u0643! \u0635\u0644\u0651 \u0635\u0644\u0627\u0629 \u0627\u0644\u0639\u064a\u062f \u0648\u0642\u062f\u0651\u0645 \u0627\u0644\u0623\u0636\u062d\u064a\u0629 \u0648\u0623\u0633\u0639\u062f \u0645\u0646 \u062d\u0648\u0644\u0643."
];

let _dhStage = null;
let _dhLastLang = null;

function _dhGetDay() {
    // Returns the Dhul Hijjah day number (1-based) based on DHUL_HIJJAH_START
    // Returns 0 if Dhul Hijjah hasn't started yet
    const now = getCurrentTime();
    const start = dhulHijjahDate;
    if (now < start) return 0;
    return Math.floor((now - start) / 86400000) + 1;
}

function getDhStage() {
    const testDay = CONFIG.WT_TEST_DAY;
    if (testDay !== undefined && testDay !== null) {
        if (testDay >= 10) return 'eid';
        if (testDay === 9) return 'arafah';
        if (testDay === 8) return 'arafah-eve';
        if (testDay >= 1) return 'during';
    }

    const now = getCurrentTime();
    if (now < dhulHijjahDate) return 'pre';

    const day = _dhGetDay();
    if (day >= 10) return 'eid';
    if (day === 9) return 'arafah';
    if (day === 8) {
        // After 19:30 local time → arafah-eve
        const d = new Date(now);
        const mins = d.getHours() * 60 + d.getMinutes();
        if (mins >= 19 * 60 + 30) return 'arafah-eve';
        return 'during';
    }
    return 'during';
}

function renderDhStage(stage, lang) {
    const body = document.getElementById('dh-stage-body');
    const titleEl = document.getElementById('dhul-hijjah-title');
    if (!body) return;

    const isAr = (lang || currentLang) === 'ar';

    function arNum(n) {
        return String(n).split('').map(d => '٠١٢٣٤٥٦٧٨٩'[+d]).join('');
    }

    if (stage === 'pre') {
        if (titleEl) titleEl.textContent = t('dhulHijjahTitle');
        const now = getCurrentTime();
        const distance = Math.max(0, dhulHijjahDate - now);
        const dL = Math.floor(distance / 86400000);
        const hL = Math.floor((distance % 86400000) / 3600000);
        const mL = Math.floor((distance % 3600000) / 60000);
        const sL = Math.floor((distance % 60000) / 1000);
        const elapsed = now - dhulHijjahRefStart;
        const total = dhulHijjahDate - dhulHijjahRefStart;
        const pct = Math.max(0, Math.min(100, Math.round((elapsed / total) * 100)));
        const daysLeft = dL;
        const motiv = daysLeft > 10 ? t('dhulHijjahMotivation') : t('dhulHijjahChallenge', daysLeft);

        body.innerHTML = `
            <div class="dh-status-text">${t('dhulHijjahSubStatus')}</div>
            <div class="countdown-display dh-countdown">
                <div class="time-box dh-time-box"><span class="time-value dh-time-value" id="dh-days">${numFmt(String(dL).padStart(2,'0'))}</span><span class="time-label">${t('days')}</span></div>
                <div class="time-box dh-time-box"><span class="time-value dh-time-value" id="dh-hours">${numFmt(String(hL).padStart(2,'0'))}</span><span class="time-label">${t('hours')}</span></div>
                <div class="time-box dh-time-box"><span class="time-value dh-time-value" id="dh-minutes">${numFmt(String(mL).padStart(2,'0'))}</span><span class="time-label">${t('mins')}</span></div>
                <div class="time-box dh-time-box"><span class="time-value dh-time-value" id="dh-secs">${numFmt(String(sL).padStart(2,'0'))}</span><span class="time-label">${t('secs')}</span></div>
            </div>
            <div class="dh-message">${motiv}</div>
            <div class="dh-progress-container"><div class="dh-progress-bar" id="dh-progress-bar" style="width:${pct}%"></div></div>
            <div id="dh-progress-text" style="text-align:center;font-size:0.8rem;color:var(--text-muted);margin-top:0.5rem">${t('dhulHijjahProgress', pct)}</div>
        `;
        return;
    }

    if (stage === 'during') {
        if (titleEl) titleEl.textContent = isAr ? '🕋 أيام ذي الحجة المباركة' : '🕋 Days of Dhul Hijjah';

        const testDay = CONFIG.WT_TEST_DAY;
        const day = (testDay !== undefined && testDay !== null && testDay >= 1 && testDay < 10)
            ? testDay
            : Math.min(9, Math.max(1, _dhGetDay()));

        const tipEn = _DH_TIPS_EN[day - 1] || '';
        const tipAr = _DH_TIPS_AR[day - 1] || '';
        const tip = isAr ? tipAr : tipEn;

        // Build pips
        let pipsHtml = '';
        for (let i = 1; i <= 10; i++) {
            const done = i <= day;
            pipsHtml += `<div class="dh-pip${done ? ' dh-pip-done' : ''}" style="left:${((i-1)/9)*100}%"></div>`;
        }

        const fillPct = ((day - 1) / 9) * 100;
        const dayDisp = isAr ? arNum(day) : day;
        const tenDisp = isAr ? arNum(10) : 10;

        // Until next day: ms until next midnight
        const now = getCurrentTime();
        const msUntilMidnight = 86400000 - (now % 86400000);
        const nH = Math.floor(msUntilMidnight / 3600000);
        const nM = Math.floor((msUntilMidnight % 3600000) / 60000);
        const nS = Math.floor((msUntilMidnight % 60000) / 1000);
        const nextLabel = isAr ? 'حتى اليوم التالي:' : 'Until next day:';

        body.innerHTML = `
            <div class="dh-during">
                <div class="dh-day-ring">
                    <span class="dh-day-num" id="dh-ring-num">${dayDisp}</span>
                    <span class="dh-day-of">/ ${tenDisp}</span>
                </div>
                <div class="dh-days-bar-wrap">
                    <div class="dh-days-track">
                        <div class="dh-days-fill" id="dh-days-fill" style="width:${fillPct}%"></div>
                        ${pipsHtml}
                    </div>
                    <div class="dh-days-labels">
                        <span>1</span><span>10</span>
                    </div>
                </div>
                <div class="dh-tip-box">
                    <span class="dh-tip-icon">💡</span>
                    <p class="dh-tip-text">${tip}</p>
                </div>
                <div class="dh-next-day">
                    <span class="dh-next-label">${nextLabel}</span>
                    <span class="dh-next-time" id="dh-next-time">${numFmt(String(nH).padStart(2,'0'))}:${numFmt(String(nM).padStart(2,'0'))}:${numFmt(String(nS).padStart(2,'0'))}</span>
                </div>
            </div>
        `;
        return;
    }

    if (stage === 'arafah-eve') {
        if (titleEl) titleEl.textContent = isAr ? '🕌 يوم التروية' : '🕌 Yawm al-Tarwiyah';

        // Countdown to midnight (start of day 9)
        const now = getCurrentTime();
        const msUntilMidnight = 86400000 - (now % 86400000);
        const hL = Math.floor(msUntilMidnight / 3600000);
        const mL = Math.floor((msUntilMidnight % 3600000) / 60000);
        const sL = Math.floor((msUntilMidnight % 60000) / 1000);

        const badgeText = isAr ? '🕌 يوم التروية — اليوم الثامن' : '🕌 Yawm al-Tarwiyah — Day 8';
        const eveMsg = isAr
            ? 'يوم التروية هو اليوم الثامن من ذي الحجة. سُمّي بذلك لأن الحجاج كانوا يتروّون (يحملون الماء) استعداداً للتوجه إلى منى. غداً يوم عرفة — أعظم يوم في السنة. جهّز أدعيتك، نوِّ الصيام، وأكثر من الاستغفار والذكر.'
            : "Yawm al-Tarwiyah is the 8th of Dhul Hijjah — named for when pilgrims would gather water (tarwiyah) before setting out to Mina. Tomorrow is Yawm Arafah, the greatest day of the year. Prepare your duas, set your intention to fast, and increase in istighfar and dhikr.";

        const prepTitle = isAr ? 'جهّز نفسك:' : 'Prepare yourself:';
        const prepItems = isAr
            ? ['🌙 نيّة الصيام الليلة لغد عرفة', '📋 اكتب قائمة أدعيتك قبل النوم', '🤲 أكثر من الاستغفار والذكر الآن']
            : ['🌙 Make your niyyah tonight to fast tomorrow', '📋 Write your dua list before you sleep', '🤲 Increase in istighfar and dhikr now'];

        body.innerHTML = `
            <div class="dh-arafah-eve">
                <div class="dh-arafah-eve-badge">${badgeText}</div>
                <p class="dh-arafah-eve-msg">${eveMsg}</p>
                <div class="countdown-display dh-countdown">
                    <div class="time-box dh-time-box dh-arafah-box"><span class="time-value dh-time-value" id="dh-eve-h">${numFmt(String(hL).padStart(2,'0'))}</span><span class="time-label">${t('hours')}</span></div>
                    <div class="time-box dh-time-box dh-arafah-box"><span class="time-value dh-time-value" id="dh-eve-m">${numFmt(String(mL).padStart(2,'0'))}</span><span class="time-label">${t('mins')}</span></div>
                    <div class="time-box dh-time-box dh-arafah-box"><span class="time-value dh-time-value" id="dh-eve-s">${numFmt(String(sL).padStart(2,'0'))}</span><span class="time-label">${t('secs')}</span></div>
                </div>
                <div class="dh-arafah-prep">
                    <div class="dh-prep-title">${prepTitle}</div>
                    <ul class="dh-prep-list">
                        ${prepItems.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        return;
    }

    if (stage === 'arafah') {
        // The arafah-banner above already shows the full Arafah content — just show day progress + tip here
        if (titleEl) titleEl.textContent = isAr ? '⭐ اليوم التاسع' : '⭐ Day 9 of 10';
        const tip = isAr ? _DH_TIPS_AR[8] : _DH_TIPS_EN[8];
        const pips = Array.from({length: 10}, (_, i) => {
            const pos = i === 0 ? '0' : i === 9 ? 'calc(100% - 5px)' : (i * 11.11).toFixed(1) + '%';
            return `<span class="dh-pip${i < 9 ? ' dh-pip-done' : ''}" style="left:${pos}"></span>`;
        }).join('');
        body.innerHTML = `
            <div class="dh-during">
                <div class="dh-days-bar-wrap">
                    <div class="dh-days-track">
                        <div class="dh-days-fill" style="width:90%"></div>
                        ${pips}
                    </div>
                    <div class="dh-days-labels"><span>${isAr ? '\u0661' : '1'}</span><span>${isAr ? '\u0661\u0660' : '10'}</span></div>
                </div>
                <div class="dh-tip-box">
                    <span class="dh-tip-icon">\uD83E\uDD32</span>
                    <p class="dh-tip-text">${tip}</p>
                </div>
            </div>
        `;
        return;
    }

    if (stage === 'eid') {
        if (titleEl) titleEl.textContent = isAr ? '🎉 عيد الأضحى' : '🎉 Eid al-Adha';
        const eidMsg = isAr
            ? 'تقبّل الله منا ومنكم صالح الأعمال. أعاده الله عليكم بالخير واليُمن والبركات.'
            : 'May Allah accept from us and from you. May He return this day to you with goodness, joy, and blessings.';

        body.innerHTML = `
            <div class="dh-eid">
                <span class="dh-eid-icon">🎉</span>
                <div class="dh-eid-title">${isAr ? 'عيد مبارك!' : 'Eid Mubarak!'}</div>
                <p class="dh-eid-msg">${eidMsg}</p>
                <div class="dh-eid-ar">تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُم</div>
            </div>
        `;
        return;
    }
}

function tickDhStage(stage) {
    if (stage === 'pre') {
        const now = getCurrentTime();
        const distance = Math.max(0, dhulHijjahDate - now);
        const dL = Math.floor(distance / 86400000);
        const hL = Math.floor((distance % 86400000) / 3600000);
        const mL = Math.floor((distance % 3600000) / 60000);
        const sL = Math.floor((distance % 60000) / 1000);
        const elapsed = now - dhulHijjahRefStart;
        const total = dhulHijjahDate - dhulHijjahRefStart;
        const pct = Math.max(0, Math.min(100, Math.round((elapsed / total) * 100)));

        const eD = document.getElementById('dh-days');
        const eH = document.getElementById('dh-hours');
        const eM = document.getElementById('dh-minutes');
        const eS = document.getElementById('dh-secs');
        const ePB = document.getElementById('dh-progress-bar');
        const ePT = document.getElementById('dh-progress-text');
        if (eD) eD.textContent = numFmt(String(dL).padStart(2,'0'));
        if (eH) eH.textContent = numFmt(String(hL).padStart(2,'0'));
        if (eM) eM.textContent = numFmt(String(mL).padStart(2,'0'));
        if (eS) eS.textContent = numFmt(String(sL).padStart(2,'0'));
        if (ePB) ePB.style.width = pct + '%';
        if (ePT) ePT.textContent = t('dhulHijjahProgress', numFmt(pct));
        return;
    }

    if (stage === 'during') {
        const now = getCurrentTime();
        const msUntilMidnight = 86400000 - (now % 86400000);
        const nH = Math.floor(msUntilMidnight / 3600000);
        const nM = Math.floor((msUntilMidnight % 3600000) / 60000);
        const nS = Math.floor((msUntilMidnight % 60000) / 1000);
        const eNT = document.getElementById('dh-next-time');
        if (eNT) eNT.textContent = `${numFmt(String(nH).padStart(2,'0'))}:${numFmt(String(nM).padStart(2,'0'))}:${numFmt(String(nS).padStart(2,'0'))}`;
        return;
    }

    if (stage === 'arafah-eve') {
        const now = getCurrentTime();
        const msUntilMidnight = 86400000 - (now % 86400000);
        const hL = Math.floor(msUntilMidnight / 3600000);
        const mL = Math.floor((msUntilMidnight % 3600000) / 60000);
        const sL = Math.floor((msUntilMidnight % 60000) / 1000);
        const eH = document.getElementById('dh-eve-h');
        const eM = document.getElementById('dh-eve-m');
        const eS = document.getElementById('dh-eve-s');
        if (eH) eH.textContent = numFmt(String(hL).padStart(2,'0'));
        if (eM) eM.textContent = numFmt(String(mL).padStart(2,'0'));
        if (eS) eS.textContent = numFmt(String(sL).padStart(2,'0'));
        return;
    }
    // arafah and eid are static — no tick needed
}

function updateDhulHijjahCountdown() {
    const body = document.getElementById('dh-stage-body');
    if (!body) return;

    const stage = getDhStage();
    const lang = currentLang;

    if (stage !== _dhStage || lang !== _dhLastLang) {
        _dhStage = stage;
        _dhLastLang = lang;
        renderDhStage(stage, lang);
    } else {
        tickDhStage(stage);
    }

    // Triple prayer timeline — refreshes every second on Day 9
    updateTripleCountdown(stage);

    // Fasting tracker tick — updates bar/time/milestones
    if (fastingTracker) fastingTracker.tick();
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

function renderTodayGlance() {
    const el = document.getElementById('today-glance');
    if (!el) return;
    const day = getDhulHijjahDay();
    if (day < 1 || day > 10) { el.style.display = 'none'; return; }
    const isAr = currentLang === 'ar';
    const wt = worshipTracker;
    const dayData = wt ? (wt.data.days[day] || {}) : {};
    const tasks = [
        { key: 'allPrayers',    icon: '🕌', en: 'All prayers', ar: 'الصلوات الخمس' },
        { key: 'fasting',       icon: '🌙', en: 'Fasting',     ar: 'الصيام' },
        { key: 'quranJuz',      icon: '📖', en: 'Quran',        ar: 'القرآن' },
        { key: 'tasbeeh',       icon: '📿', en: 'Tasbeeh',      ar: 'التسبيح' },
        { key: 'adhkar',        icon: '🤲', en: 'Adhkar',       ar: 'الأذكار' },
        { key: 'charity',       icon: '💝', en: 'Charity',      ar: 'الصدقة' },
    ];
    const done = tasks.filter(t => dayData[t.key] && dayData[t.key] !== 0 && dayData[t.key] !== false).length;
    const total = tasks.length;
    const pct = Math.round(done / total * 100);
    const toAr = (n) => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    const dayLabel = isAr ? `اليوم ${toAr(day)} من ذي الحجة` : `Day ${day} of Dhul Hijjah`;
    const dots = tasks.map(t => {
        const isDone = dayData[t.key] && dayData[t.key] !== 0 && dayData[t.key] !== false;
        return `<span class="tg-dot${isDone ? ' tg-dot-done' : ''}" title="${isAr ? t.ar : t.en}">${t.icon}</span>`;
    }).join('');

    // Streak: count consecutive days back from today where completed===true
    let streak = 0;
    if (wt) {
        for (let d = day; d >= 1; d--) {
            const dd = wt.data.days[d] || {};
            const dayDone = tasks.filter(tk => dd[tk.key] && dd[tk.key] !== 0 && dd[tk.key] !== false).length;
            if (dayDone > 0) streak++;
            else break;
        }
    }
    const streakHtml = streak > 1
        ? `<div class="tg-streak">${isAr ? `🔥 ${toAr(streak)} أيام متتالية` : `🔥 ${streak}-day streak`}</div>`
        : '';

    el.style.display = '';
    el.className = 'tg-bar-container';
    el.innerHTML = `
        <div class="tg-row" dir="${isAr ? 'rtl' : 'ltr'}">
            <div class="tg-left">
                <div class="tg-day-label">${dayLabel}</div>
                <div class="tg-score">${isAr ? toAr(done) : done}<span class="tg-total">/${isAr ? toAr(total) : total}</span> ${isAr ? 'مكتمل' : 'done'}</div>
                ${streakHtml}
            </div>
            <div class="tg-right">
                <div class="tg-dots">${dots}</div>
                <div class="tg-bar-wrap"><div class="tg-bar"><div class="tg-bar-fill" style="width:${pct}%"></div></div></div>
            </div>
        </div>`;
}

function shareApp() {
    const isAr = currentLang === 'ar';
    const shareData = {
        title: isAr ? 'نور الليالي — تطبيق العشر الأوائل' : 'Noor Nights — Dhul Hijjah App',
        text: isAr
            ? 'اغتنم أفضل أيام السنة — تطبيق يساعدك على تتبع عباداتك في العشر الأوائل من ذي الحجة'
            : 'Make the most of the best days of the year — track your worship during the blessed 10 days of Dhul Hijjah',
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

    // Immediately disable to prevent double-clicks
    btn.disabled = true;
    btn.style.opacity = '0.5';

    // ── OneSignal path — true background push ──
    if (window.OneSignalDeferred) {
        window.OneSignalDeferred.push(async function (OneSignal) {
            try {
                // Focus on enabling: Refresh opt-in status every time.
                await OneSignal.User.PushSubscription.optIn();
                _updateNotifyBtnState(btn, true);
                trackEvent('/push-opt-in', 'push_opt_in_triggered');

                // Show modal AND trigger a native system notification for immediate feedback
                showMessage(t('subActivated'), t('subActivatedMsg'));
                _sendSuccessNotification();
            } catch (err) {
                console.warn('[OneSignal] Error — falling back to native:', err);
                _fallbackNativeNotification(btn);
            }
        });
        return;
    }

    // ── Native browser fallback (requires tab open) ──
    _fallbackNativeNotification(btn);
}

function _sendSuccessNotification() {
    if (!("Notification" in window) || Notification.permission !== "granted") return;

    const title = t('subActivated');
    const body = t('subActivatedMsg');
    const options = {
        body: body,
        icon: 'assets/icons/icon-512.png',
        badge: 'assets/icons/badge-96.png',
        tag: 'noor-nights-success',
        renotify: true,
        vibrate: [100, 50, 100],
        data: { url: window.location.href }
    };

    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(reg => reg.showNotification(title, options));
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
        // Big icon in the body (The Navy/Gold App Icon)
        icon: 'assets/icons/icon-512.png',
        // Small icon in the system/header (Pure white silhouette mask)
        badge: 'assets/icons/badge-96.png',
        tag: 'noor-nights-remind',
        renotify: true,
        vibrate: [200, 100, 200],
        silent: false,
        data: {
            url: window.location.href
        }
    };

    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(title, options);
        });
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
        initArafahMode(); // re-evaluate golden mode on day rollover
    }
    _checkMaghribNudge();
}

function _checkMaghribNudge() {
    const day = getDhulHijjahDay();
    if (day < 1 || day > 10) return;
    const now = new Date(getCurrentTime());
    const h = now.getHours();
    // Show nudge between 18:00 and 20:00 (approximate Maghrib window)
    if (h < 18 || h >= 20) return;
    const nudgeKey = `noor_maghrib_nudge_${now.toISOString().split('T')[0]}`;
    if (localStorage.getItem(nudgeKey)) return; // already shown today

    // Check if all tasks done
    const wt = worshipTracker;
    if (!wt) return;
    const dayData = wt.data.days[day] || {};
    const tasks = ['allPrayers','fasting','quranJuz','tasbeeh','adhkar','charity'];
    const done = tasks.filter(k => dayData[k] && dayData[k] !== 0 && dayData[k] !== false).length;
    if (done >= tasks.length) return; // already completed — no nudge needed

    localStorage.setItem(nudgeKey, '1');
    const isAr = currentLang === 'ar';
    const remaining = tasks.length - done;
    const msg = isAr
        ? `أقبل المغرب — لا يزال أمامك ${remaining} ${remaining === 1 ? 'عمل' : 'أعمال'} لإتمام يومك 🌙`
        : `Maghrib is near — ${remaining} worship goal${remaining !== 1 ? 's' : ''} left for today 🌙`;
    const nudge = document.createElement('div');
    nudge.className = 'maghrib-nudge';
    nudge.dir = isAr ? 'rtl' : 'ltr';
    nudge.innerHTML = `<span class="maghrib-nudge-icon">🌅</span><span class="maghrib-nudge-msg">${msg}</span><button class="maghrib-nudge-btn" onclick="switchTab('tracker'); this.closest('.maghrib-nudge').remove()">${isAr ? 'تتبع ←' : 'Track →'}</button>`;
    document.body.appendChild(nudge);
    requestAnimationFrame(() => nudge.classList.add('maghrib-nudge-in'));
    setTimeout(() => {
        nudge.classList.remove('maghrib-nudge-in');
        setTimeout(() => { if (nudge.parentNode) nudge.remove(); }, 400);
    }, 8000);
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

// Global Initialization — two phases for faster LCP:
//   Phase 1 (rAF): language + DH countdown — lets skeleton text paint first
//   Phase 2 (setTimeout 0): everything else, yielded after first paint
document.addEventListener('DOMContentLoaded', () => {

    // Phase 1: apply language immediately, then update countdown after first frame
    applyLanguage(currentLang);
    requestAnimationFrame(() => {
        updateDhulHijjahCountdown();
        setInterval(updateDhulHijjahCountdown, 1000);
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
        prayerAPI = new PrayerTimesAPI();
        prayerReminders = new PrayerReminders(prayerAPI);
        prayerWidget = new PrayerTimesWidget(prayerAPI);
        prayerWidget.init().then(() => {
            if (prayerWidget._times) prayerReminders.scheduleAll(prayerWidget._times);
        });
        fastingTracker = new FastingTracker();
        fastingTracker.init();
        initArafahMode();
        renderDailyFocusCard();
        renderTodayGlance();
        setTimeout(() => { renderTodayGlance(); }, 300);
        _updateSettingsCard();
        initDhikrSections();
        checkDayChange();
        setInterval(checkDayChange, 60000);
        rotateYoussefDua();
        _checkReEngagement();
        _checkDay1Banner();

        // Dhikr card collapse on tap
        document.addEventListener('click', function(e) {
            const card = e.target.closest('.dhikr-card');
            if (!card) return;
            if (e.target.closest('button')) return;
            card.classList.toggle('dhikr-card-collapsed');
        });

        // Unregister legacy sw.js so OneSignal can cleanly own its worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const reg of registrations) {
                    const url = (reg.active || reg.installing || reg.waiting || {}).scriptURL || '';
                    if (url.includes('sw.js') && !url.includes('OneSignal')) {
                        reg.unregister();
                    }
                }
            });
        }

        // Set notify button state once OneSignal is ready
        if (window.OneSignalDeferred) {
            window.OneSignalDeferred.push(async function (OneSignal) {
                const btn = document.getElementById('notify-btn');
                if (btn) _updateNotifyBtnState(btn, OneSignal.User.PushSubscription.optedIn);
            });
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
// NOTIFICATION PREFERENCES (User Controls / OneSignal Tags)
// ═══════════════════════════════════════════════════
window.savePushPreferences = function (quietHoursEnabled, highFrequency) {
    if (window.OneSignalDeferred) {
        window.OneSignalDeferred.push(async function (OneSignal) {
            await OneSignal.User.addTags({
                quiet_hours: quietHoursEnabled ? 'true' : 'false',
                frequency: highFrequency ? 'hourly' : 'daily_maghrib',
                channel: 'push'
            });
            showMessage('Preferences Saved', 'Your notification settings have been updated to OneSignal.');
            trackEvent('/push-preferences-saved', 'user_controls_updated');
        });
    }
};

window.triggerEmailFallback = function () {
    trackEvent('/fallback-email-sent', 'fallback_email_sent');
    window.location.href = "mailto:?subject=Noor Nights - Ramadan Reminders&body=Sign up to receive spiritual reminders via email during the last 10 nights.";
};
