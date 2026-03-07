// ═══════════════════════════════════════════════════
// INTERNATIONALIZATION (i18n) — EN / AR
// ═══════════════════════════════════════════════════
const TRANSLATIONS = {
    en: {
        appName: 'Noor Nights',
        subtitle: 'Illuminate your worship in the last ten nights',
        installBtn: '📲 Install App',
        countdownTitle: '⏳ Countdown to the Nights',
        calculating: 'Calculating...',
        untilBegin: 'Until Last Ten Nights of Ramadan begin (Egypt Time)',
        concluded: 'The Last 10 Nights have concluded.',
        days: 'Days', hours: 'Hours', mins: 'Mins', secs: 'Secs',
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
        calendarDesc: 'Get daily reminders at Maghrib time for all 10 nights (Egypt timezone).',
        calendarBtn: '📅 Download Calendar (.ics)',
        essentialTitle: '🤲 Essential Duas',
        jamawiTitle: "📖 Jawami' ad-Du'a",
        jamawiSubtitle: "Comprehensive prayers from the Prophet (ﷺ)",
        nightStatus: (n) => `Tonight is Night ${n} of 10`,
        nightSubStatus: 'Make the most of it 🌙',
        reminderActive: '🔔 Reminders Active!',
        reminderMsg: "You'll receive a dua reminder every 2 minutes while this tab is open. Real hourly reminders start when the nights begin (Mar 9).",
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
            "🎁 Don't forget your Sadaqah for tonight.",
            "✨ Focus on your Dua and Sadaqah tonight."
        ],
        lateMessages: [
            "🌙 Time for Qiyam & standing in prayer.",
            "🌟 Standing in Qiyam - pouring Dua.",
            "✨ Balance your night with Qiyam and Dua."
        ],
        actShareFull: 'Share Dua',
        actShareCard: 'Share',
        actCopy: 'Copy',
        footerMemory: 'In loving memory of',
        footerName: 'YOUSSEF ABDELKADER',
        footerSadaqah: 'This app is Sadaqah Jariyah (ongoing charity) for him.',
        footerCanvas: 'Noor Nights App • Sadaqah Jariyah for Youssef Abdelkader',
        zakatReminder: '💰 Remember to Pay Zakat al-Fitr before end of ramadan',
        blessingTitle: 'The Blessing of Sharing Duas',
        blessingDesc1: 'Sharing a dua can uplift anyone who sees it during their day—reminding them to turn back to Allah, calming their heart, or inspiring them to make their own dua.',
        blessingHadith1: '"Whoever guides someone to goodness will have a reward like the one who did it." (Sahih Muslim)',
        blessingHadith2: '"When a servant dies, his deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for him." (Sahih Muslim)',
        blessingFooter: 'Every dua you share may inspire someone else—and you share in their reward.',
        footerMadeWith: 'Made with ♥️ for Ramadan.',
        notifyDisable: '🔕 Disable Reminders',
        alreadySubTitle: '🔔 Already Subscribed!',
        alreadySubMsg: 'You are already receiving nightly reminders. Do you want to disable them?',
        unsubTitle: '🔕 Reminders Disabled',
        unsubMsg: 'You will no longer receive push notifications. You can re-enable anytime.',
        permNeeded: '🔔 Permission Required',
        permNeededAndroid: '👉 On Android: Tap the 🔒 in your browser address bar → Site Settings → Notifications → Allow. Then try again.',
        permNeededIOS: '👉 On iPhone: Add the app to your Home Screen first, then try enabling reminders inside the installed app.',
        permNeededDesktop: '👉 Click the 🔒 in your browser address bar → Site Settings → Notifications → Allow. Then try again.',
        subActivated: '🌙 Reminders Activated!',
        subActivatedMsg: 'Jazakallah Khayran! You will now receive nightly reminders during the Last 10 Nights of Ramadan — even when the app is closed or your phone is locked.',
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
        calDesc: 'Hourly Reminders for the last 10 nights of Ramadan',
        calEventTitle: (n, msg) => `Night ${n} - ${msg}`,
        calEventDesc: (n) => `Night ${n} of 10`

    },
    ar: {
        appName: 'ليالي النور',
        subtitle: 'أنِر عبادتك في العشر الأواخر',
        installBtn: '📲 تثبيت التطبيق',
        countdownTitle: '⏳ العد التنازلي للليالي',
        calculating: 'جارٍ الحساب...',
        untilBegin: 'حتى بدء العشر الأواخر من رمضان (توقيت مصر)',
        concluded: 'انتهت العشر الأواخر.',
        days: 'أيام', hours: 'ساعات', mins: 'دقائق', secs: 'ثواني',
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
        calendarDesc: 'احصل على تذكيرات يومية عند أذان المغرب لجميع العشر ليالٍ (توقيت مصر).',
        calendarBtn: '📅 تحميل التقويم (.ics)',
        essentialTitle: '🤲 أدعية أساسية',
        jamawiTitle: '📖 جوامع الدعاء',
        jamawiSubtitle: 'أدعية جامعة من النبي ﷺ',
        nightStatus: (n) => `الليلة هي الليلة ${n} من العشر`,
        nightSubStatus: 'استثمرها 🌙',
        reminderActive: '🔔 التذكيرات مفعّلة!',
        reminderMsg: 'ستتلقى تذكيراً بالدعاء كل دقيقتين طالما هذا التبويب مفتوح. تبدأ التذكيرات الفعلية مع بدء الليالي (9 مارس).',
        notifTitle: 'نور الليالي 🌙',
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
            "🎁 لا تنسَ صدقتك لهذه الليلة.",
            "✨ ركّز على الدعاء والصدقة الليلة."
        ],
        lateMessages: [
            "🌙 وقت القيام والصلاة.",
            "🌟 ادعُ وأنت في صلاة القيام.",
            "✨ وازن ليلتك بين القيام والدعاء."
        ],
        actShareCard: 'مشاركة',
        actCopy: 'نسخ',
        footerMemory: 'صدقة جارية عن روح',
        footerName: 'يوسف عبد القادر',
        footerSadaqah: 'هذَا التطبيق صدقة جاريةٌ له.',
        footerCanvas: 'تطبيق نور الليالي • صدقة جارية عن روح يوسف عبد القادر',
        zakatReminder: '💰 تذكر دفع زكاة الفطر قبل نهاية رمضان',
        blessingTitle: 'بركة مشاركة الدعاء',
        blessingDesc1: 'مشاركة الدعاء قد تشرح صدر من يقرأه في يومه، وتذكره بالرجوع إلى الله، وتُسكن قلبه، أو تُلهمه ليدعو بدوره.',
        blessingHadith1: '"مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ" (صحيح مسلم)',
        blessingHadith2: '"إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ: إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ" (صحيح مسلم)',
        blessingFooter: 'كل دعاء تشاركه قد يُلهم غيرك — فتنال من أجرهم الجميل.',
        footerMadeWith: 'صُنع بـ ❤️ لرمضان.',
        notifyDisable: '🔕 تعطيل التذكيرات',
        alreadySubTitle: '🔔 أنت مشترك بالفعل!',
        alreadySubMsg: 'أنت تتلقى تذكيرات الليالي بالفعل. هل ترغب في تعطيلها؟',
        unsubTitle: '🔕 تم إيقاف التذكيرات',
        unsubMsg: 'لن تتلقى إشعارات بعد الآن. يمكنك إعادة التفعيل في أي وقت.',
        permNeeded: '🔔 إذن مطلوب',
        permNeededAndroid: '👉 على أندرويد: اضغط على 🔒 في شريط العنوان ← إعدادات الموقع ← الإشعارات ← سماح. ثم حاول مجدداً.',
        permNeededIOS: '👉 على آيفون: أضف التطبيق إلى شاشة الرئيسية أولاً، ثم فعّل التذكيرات من داخل التطبيق المثبت.',
        permNeededDesktop: '👉 انقر على 🔒 في شريط العنوان ← إعدادات الموقع ← الإشعارات ← سماح. ثم حاول مجدداً.',
        subActivated: '🌙 تم تفعيل التذكيرات!',
        subActivatedMsg: 'جزاكم الله خيراً! ستتلقى الآن تذكيرات ليلية خلال العشر الأواخر من رمضان — حتى عندما يكون التطبيق مغلقاً أو هاتفك مقفلاً.',
        downloadAppTitle: '📲 احصل على تطبيق نور الليالي',
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
        calDesc: 'تذكيرات كل ساعة للعشر الأواخر من رمضان',
        calEventTitle: (n, msg) => `الليلة ${n} - ${msg}`,
        calEventDesc: (n) => `الليلة ${n} من 10`

    }
};

let currentLang = localStorage.getItem('noor-lang') || 'en';

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
        el.textContent = t(el.getAttribute('data-i18n'));
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
}

function toggleLanguage() {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
    window.dispatchEvent(new Event('languageChanged'));
    trackEvent('/lang-toggle', 'Language Toggle');
}

// ═══════════════════════════════════════════════════
// ANALYTICS EVENT TRACKING (GoatCounter)
// ═══════════════════════════════════════════════════
function trackEvent(path, title) {
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path, title, event: true });
    }
}

let currentYoussefIdx = new Date().getDate() % youssefDuas.length;


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
    trackEvent('/share-full-dua', 'Share Full Dua');
}

function renderDuaCarousel(list, containerId, prefix) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const body = container.querySelector('.card-body');

    let currentSlide = 0;

    const carousel = document.createElement('div');
    carousel.className = 'dua-carousel';
    carousel.setAttribute('role', 'region');
    carousel.setAttribute('aria-label', 'Dua carousel');

    const track = document.createElement('div');
    track.className = 'dua-carousel-track';

    list.forEach((dua, idx) => {
        const pal = WATERCOLOR_PALETTES[idx % WATERCOLOR_PALETTES.length];
        const slide = document.createElement('div');
        slide.className = 'dua-slide';
        slide.style.setProperty('--blob1', pal.blob1);
        slide.style.setProperty('--blob2', pal.blob2);
        slide.style.setProperty('--card-border', pal.border);
        slide.setAttribute('aria-label', 'Dua ' + (idx + 1));

        slide.innerHTML = `
            <div class="dua-slide-inner">
                <div class="dua-arabic-main">${dua.arabic.replace(/\n/g, '<br>')}</div>
                ${dua.english ? `<div class="dua-english-main">${dua.english}</div>` : ''}
                <div class="dua-badge-row"><span class="slide-badge">${dua.badge}</span></div>
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
    const colors = cardColors || ['var(--win-blue)', 'var(--win-pink)', 'var(--win-green)', 'var(--win-orange)'];

    list.forEach((dua, idx) => {
        const card = document.createElement('div');
        card.className = 'dua-card';
        // If collapsible, hide cards beyond the preview count initially
        if (collapsible && idx >= JAWAMI_PREVIEW) {
            card.classList.add('dua-card--hidden');
        }
        card.innerHTML = `
            <div class="card-header" style="background: ${colors[idx % colors.length]}"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <div class="card-body">
                <span class="badge" style="background: ${colors[(idx + 1) % colors.length]}">${dua.badge}</span>
                <div class="arabic-text">${dua.arabic.replace(/\n/g, '<br>')}</div>
                ${dua.english ? `<div class="translation">${dua.english}</div>` : ''}
                <div class="share-buttons">
                    <button class="btn btn-share" onclick="shareImage('${prefix}', ${idx})">📤 Share</button>
                    <button class="btn btn-share" onclick="copyText('${prefix}', ${idx})">📋 ${t('actCopy')}</button>
                </div>
            </div>
        `;
        body.appendChild(card);
    });

    // Add Show More / Show Less toggle for collapsible lists
    if (collapsible && list.length > JAWAMI_PREVIEW) {
        const remaining = list.length - JAWAMI_PREVIEW;
        let expanded = false;

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'btn btn-outline dua-toggle-btn';
        toggleBtn.id = `toggle-${containerId}`;
        toggleBtn.innerHTML = t('showMore', remaining);

        toggleBtn.addEventListener('click', () => {
            expanded = !expanded;
            const hidden = body.querySelectorAll('.dua-card--hidden, .dua-card--visible-extra');
            if (expanded) {
                body.querySelectorAll('.dua-card--hidden').forEach(c => {
                    c.classList.remove('dua-card--hidden');
                    c.classList.add('dua-card--visible-extra');
                });
                toggleBtn.innerHTML = t('showLess');
            } else {
                body.querySelectorAll('.dua-card--visible-extra').forEach((c, i) => {
                    c.classList.remove('dua-card--visible-extra');
                    c.classList.add('dua-card--hidden');
                });
                toggleBtn.innerHTML = t('showMore', remaining);
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

function generateCanvasURL(arabic, english, badge, isYoussef) {
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');

    let arFontSize = arabic.length > 250 ? 44 : 56;
    let arLineHeight = arabic.length > 250 ? 70 : 90;

    tempCtx.font = `bold ${arFontSize}px "Amiri", serif`;
    const cleanArabicCanvas = arabic.replace(/<br>/g, '\n').replace(/\n+/g, ' ');
    const arLines = getWrappedLines(tempCtx, cleanArabicCanvas, 900);

    tempCtx.font = 'bold 32px "Inter", sans-serif';
    const enLines = getWrappedLines(tempCtx, english, 900);
    const enLineHeight = 45;

    let totalHeight = 280;
    totalHeight += arLines.length * arLineHeight;
    if (enLines.length > 0) {
        totalHeight += 40 + (enLines.length * enLineHeight);
    }
    totalHeight += 120;

    const canvasHeight = Math.max(1080, totalHeight);
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, canvasHeight);
    grad.addColorStop(0, '#f1e5d1');
    grad.addColorStop(1, '#fffdf5');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, canvasHeight);

    ctx.fillStyle = 'rgba(212, 175, 55, 0.03)';
    ctx.fillRect(50, 50, 980, canvasHeight - 100);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.font = 'bold 42px "Inter", sans-serif';
    ctx.fillStyle = '#2d2d2d';
    ctx.fillText(isYoussef ? "🤲 Special Dua for Youssef Abdelkader" : badge, 540, 150);

    let currentY = 280;
    ctx.font = `bold ${arFontSize}px "Amiri", serif`;
    ctx.fillStyle = '#2d2d2d';
    arLines.forEach(line => {
        ctx.fillText(line, 540, currentY);
        currentY += arLineHeight;
    });

    if (enLines.length > 0) {
        currentY += 40;
        ctx.font = 'bold 36px "Inter", sans-serif';
        ctx.fillStyle = '#5d5d5d';
        enLines.forEach(line => {
            ctx.fillText(line, 540, currentY);
            currentY += enLineHeight;
        });
    }

    ctx.font = 'bold 16px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(45,45,45,0.6)';
    const madeWithText = t('footerMadeWith') || 'Made with ❤️ for Ramadan.';
    ctx.fillText(madeWithText, 540, canvasHeight - 70);

    ctx.font = 'bold 14px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(45,45,45,0.4)';
    const canvasRefText = t('footerCanvas') || 'Noor Nights App • Sadaqah Jariyah for Youssef';
    ctx.fillText(canvasRefText, 540, canvasHeight - 40);

    return canvas.toDataURL('image/jpeg', 0.9);
}

function triggerDownload(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function shareImage(type, idx) {
    let dua = type === 'ess' ? essentialDuas[idx] : jawamiDuas[idx];
    let url = generateCanvasURL(dua.arabic.replace(/\n/g, '<br>'), `"${dua.english}"`, dua.badge, false);
    const filename = `dua-${dua.badge.replace(/\s/g, '-')}.jpg`;
    fetch(url).then(r => r.blob()).then(blob => {
        const file = new File([blob], filename, { type: 'image/jpeg' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            return navigator.share({ files: [file], title: dua.badge, text: 'Shared from the Noor Nights App' });
        } else { triggerDownload(url, filename); }
    }).catch(() => triggerDownload(url, filename));
}

function shareYoussef() {
    let dua = youssefDuas[currentYoussefIdx];
    let url = generateCanvasURL(dua.arabic.replace(/\n/g, '<br>'), `"${dua.english}"`, "", true);
    const filename = 'dua-youssef.jpg';
    fetch(url).then(r => r.blob()).then(blob => {
        const file = new File([blob], filename, { type: 'image/jpeg' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            return navigator.share({ files: [file], text: 'Please make dua for Youssef Abdelkader' });
        } else { triggerDownload(url, filename); }
    }).catch(() => triggerDownload(url, filename));
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

const targetDate = new Date("2026-03-09T17:54:00+02:00").getTime();

function updateCountdown() {
    const timerStatus = document.getElementById('countdown-status');
    const timerDisplay = document.getElementById('countdown-timer');
    if (!timerStatus || !timerDisplay) return;

    const distance = targetDate - getCurrentTime();
    if (distance < 0) {
        const n = Math.floor(Math.abs(distance) / 86400000) + 1;
        timerDisplay.style.display = 'none';
        timerStatus.innerHTML = n <= 10 ?
            `<span style="font-size:1.8rem;">${t('nightStatus', n)}</span><br><span style="font-size:1rem; color:var(--text-muted)">${t('nightSubStatus')}</span>` :
            t('concluded');
        return;
    }

    const d = document.getElementById('days');
    const h = document.getElementById('hours');
    const m = document.getElementById('minutes');
    const s = document.getElementById('seconds');

    if (d) d.innerText = String(Math.floor(distance / 86400000)).padStart(2, '0');
    if (h) h.innerText = String(Math.floor((distance % 86400000) / 3600000)).padStart(2, '0');
    if (m) m.innerText = String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0');
    if (s) s.innerText = String(Math.floor((distance % 60000) / 1000)).padStart(2, '0');

    timerStatus.innerText = t('untilBegin');
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
        label.innerHTML = `<input type="checkbox" id="${task.id}" ${checked ? 'checked' : ''}> <span class="checklist-label">${task.icon} ${task.text}</span>`;
        cont.appendChild(label);
        label.querySelector('input').addEventListener('change', () => {
            data[task.id] = label.querySelector('input').checked;
            localStorage.setItem(key, JSON.stringify(data));
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
        triggerConfetti();
        showMessage(t('mashaallah'), t('mashaallahMsg'));
    } else if (c < tot) {
        window.hasCelebrated = false;
    }
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

let testModeInterval = null;
let testModeCount = 0;
const TEST_MODE_MAX = 5;               // 5 test notifications
const TEST_MODE_MS = 2 * 60 * 1000;   // every 2 minutes

function sendTestModeNotification() {
    const duas = essentialDuas.concat(jawamiDuas);
    const dua = duas[testModeCount % duas.length];
    const msgs = t('earlyMessages').concat(t('lateMessages'));
    const msg = msgs[testModeCount % msgs.length];

    const options = {
        body: t('reminderNum', testModeCount + 1, msg) + `\n\n"${dua.arabic.replace(/\n/g, '<br>')}"`,
        icon: 'assets/icons/icon-512.png',
        badge: 'assets/icons/badge-96.png',
        tag: 'noor-nights-remind',
        renotify: true,
        vibrate: [200, 100, 200],
        silent: false,
        data: { url: window.location.href }
    };

    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(reg => reg.showNotification(t('notifTitle'), options));
    } else {
        new Notification(t('notifTitle'), options);
    }

    testModeCount++;
    if (testModeCount >= TEST_MODE_MAX) {
        clearInterval(testModeInterval);
        testModeInterval = null;
        testModeCount = 0;
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
                const isSubscribed = OneSignal.User.PushSubscription.optedIn;

                if (isSubscribed) {
                    // DISABLE flow: Ask user if they actually want to disable
                    if (confirm(t('alreadySubTitle') + '\n\n' + t('alreadySubMsg'))) {
                        await OneSignal.User.PushSubscription.optOut();
                        _updateNotifyBtnState(btn, false);
                        showMessage(t('unsubTitle'), t('unsubMsg'));
                    } else {
                        // User canceled: restore enabled state
                        _updateNotifyBtnState(btn, true);
                    }
                } else {
                    // ENABLE flow
                    if (Notification.permission === 'granted') {
                        // Edge case: OS permission already granted but OneSignal was manually opted out.
                        // promptPush() will silently fail. We MUST explicitly opt-in here.
                        await OneSignal.User.PushSubscription.optIn();
                        _updateNotifyBtnState(btn, true);
                        trackEvent('/push-opt-in', 'push_opt_in_restored');
                        showMessage(t('subActivated'), t('subActivatedMsg'));
                    } else {
                        // Standard flow: prompt for permission
                        OneSignal.Slidedown.promptPush().then((accepted) => {
                            if (accepted) {
                                _updateNotifyBtnState(btn, true);
                                trackEvent('/push-opt-in', 'push_opt_in_new');
                                showMessage(t('subActivated'), t('subActivatedMsg'));
                            } else {
                                _updateNotifyBtnState(btn, false);
                                const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
                                const isAndroid = /Android/.test(navigator.userAgent);
                                showMessage(
                                    t('permNeeded'),
                                    isIOS ? t('permNeededIOS') : isAndroid ? t('permNeededAndroid') : t('permNeededDesktop')
                                );
                            }
                        });
                    }
                }
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
            testModeCount = 0;
            sendTestModeNotification();
            if (testModeInterval) clearInterval(testModeInterval);
            testModeInterval = setInterval(sendTestModeNotification, TEST_MODE_MS);
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

    // Curate exactly 12 short, powerful Duas for the calendar events
    const calendarDuas = [
        { arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي" },
        { arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ" },
        { arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ" },
        { arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ" },
        { arabic: "اللَّهُمَّ اغْفِرْ لِي ، وَارْحَمْنِي وَاهْدِنِي ، وَعَافِنِي وَارْزُقْنِي" },
        { arabic: "اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا ، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا" },
        { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ" },
        { arabic: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي" },
        { arabic: "اللَّهُمَّ رَبِّ هَبْ لِيْ مِنَ الصَّالِحِينَ" },
        { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ" },
        { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الهُدَى ، وَالتُّقَى ، وَالعَفَافَ وَالغِنَى" },
        { arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنَ عِبَادَتِكَ" }
    ];

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

            const dua = calendarDuas[i % calendarDuas.length];
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

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    checkDayChange();
    setInterval(checkDayChange, 60000); // Check for day change every minute
    rotateYoussefDua();

    // Apply saved language preference
    applyLanguage(currentLang);

    // Unregister legacy sw.js so OneSignal can cleanly own its worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (const reg of registrations) {
                const url = (reg.active || reg.installing || reg.waiting || {}).scriptURL || '';
                if (url.includes('sw.js') && !url.includes('OneSignal')) {
                    reg.unregister();
                    console.log('[Noor Nights] Unregistered legacy sw.js');
                }
            }
        });
        // NOTE: OneSignalSDKWorker.js is registered automatically by the OneSignal SDK.
        // Do NOT register it manually here - doing so causes a race condition.
    }

    // Set notify button state once OneSignal is ready
    if (window.OneSignalDeferred) {
        window.OneSignalDeferred.push(async function (OneSignal) {
            const btn = document.getElementById('notify-btn');
            if (btn) _updateNotifyBtnState(btn, OneSignal.User.PushSubscription.optedIn);
        });
    }

    // --- Dynamic Install App Card Logic ---
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

    // Only show the install card if it's not already installed
    if (!isStandalone) {
        const installCard = document.getElementById('app-install-card');
        const iosSection = document.getElementById('ios-install-section');
        const androidSection = document.getElementById('android-install-section');

        if (installCard) {
            installCard.style.display = 'block';
            trackEvent('/a2hs-shown', 'a2hs_shown_ios_fallback');
        }

        if (isIOS && iosSection) {
            // Show iOS manual instructions
            iosSection.style.display = 'block';
        }
    }
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

window.addEventListener('appinstalled', (e) => {
    document.getElementById('app-install-card').style.display = 'none';
    trackEvent('/a2hs-installed', 'a2hs_installed_success');
});

function handleInstallClick() {
    if (deferredPrompt) {
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
