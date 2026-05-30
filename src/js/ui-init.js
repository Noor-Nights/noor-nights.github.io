// ── Tab Navigation ──
function switchTab(name) {
    document.querySelectorAll('.tab-content').forEach(function(el) { el.classList.remove('active'); });
    document.querySelectorAll('.nav-item').forEach(function(el) { el.classList.remove('active'); });
    var tab = document.getElementById('tab-' + name);
    if (tab) tab.classList.add('active');
    var btn = document.querySelector('.nav-item[data-tab="' + name + '"]');
    if (btn) btn.classList.add('active');
    window.scrollTo(0, 0);
    try { localStorage.setItem('noor_active_tab', name); } catch(e) {}
}

// ── Onboarding ──
function createOnboardingModal() {
    if (document.getElementById('onboarding-modal')) return;
    var modal = document.createElement('div');
    modal.id = 'onboarding-modal';
    modal.className = 'modal';
    modal.style.display = 'none';
    modal.innerHTML = '<div class="modal-content onboarding-content">' +
        '<div class="ob-icon-card"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none"><path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 44c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#c8a96e"/><path d="M32 14a18 18 0 0 0 0 36 18 18 0 0 1 0-36z" fill="#c8a96e" opacity=".5"/></svg></div>' +
        '<div class="ob-wordmark">' +
        '<div class="ob-wordmark-en">NOOR NIGHTS</div>' +
        '<div class="ob-wordmark-divider"></div>' +
        '<div class="ob-wordmark-ar">ليالي النور</div>' +
        '<div class="ob-tagline" data-i18n="onboardingTitle">Daily Worship Companion</div>' +
        '</div>' +
        '<p class="ob-hadith" data-i18n="onboardingBody">The Prophet ﷺ said: "There are no days on which righteous deeds are more beloved to Allah than these ten days."</p>' +
        '<div class="onboarding-steps">' +
        '<div class="onboarding-step"><span class="onboarding-step-num">①</span><span data-i18n="onboardingF1">Open the app each day for your Daily Focus</span></div>' +
        '<div class="onboarding-step"><span class="onboarding-step-num">②</span><span data-i18n="onboardingF2">Make dhikr, read duas, track your worship</span></div>' +
        '<div class="onboarding-step"><span class="onboarding-step-num">③</span><span data-i18n="onboardingF3">Share a dua — your brothers &amp; sisters say Ameen</span></div>' +
        '<div class="onboarding-step"><span class="onboarding-step-num">④</span><span data-i18n="onboardingF4">Install the app for prayer time reminders</span></div>' +
        '</div>' +
        '<button class="btn onboarding-btn" onclick="closeOnboarding()" data-i18n="onboardingBtn">Begin — بسم الله →</button>' +
        '<div class="ob-mem">Sadaqah Jariyah for Youssef Abdelkader<br><span class="ob-mem-ar">رَحِمَهُ اللَّهُ</span></div>' +
        '</div>';
    document.body.appendChild(modal);
}

function closeOnboarding() {
    var modal = document.getElementById('onboarding-modal');
    if (modal) modal.style.display = 'none';
    try { localStorage.setItem('noor_welcomed_v1', '1'); } catch(e) {}
    // Pulse the tracker nav button to guide new users
    var trackerBtn = document.querySelector('.nav-item[data-tab="tracker"]');
    if (trackerBtn) {
        trackerBtn.classList.add('nav-pulse');
        setTimeout(function() { trackerBtn.classList.remove('nav-pulse'); }, 3000);
    }
}

// ── Virtue Card Toggle ──
function toggleVirtueCard(btn) {
    var body = document.getElementById('virtue-cards-container');
    if (!body) return;
    var isOpen = !body.classList.contains('vc-body-collapsed');
    body.classList.toggle('vc-body-collapsed', isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
    var chev = btn.querySelector('.vc-chevron');
    if (chev) chev.style.transform = isOpen ? 'rotate(-90deg)' : '';
}

// ── Dhikr Card Counters ──
function tapDhikrCounter(btn) {
    var target = parseInt(btn.dataset.target);
    var key = 'dhikr_cnt_' + btn.dataset.key;
    var count = parseInt(localStorage.getItem(key) || '0');
    if (count >= target) return;
    count++;
    localStorage.setItem(key, count);
    btn.querySelector('.dc-curr').textContent = count;
    var done = count >= target;
    btn.classList.toggle('dc-done', done);
    btn.classList.add('dc-tapped');
    setTimeout(function() { btn.classList.remove('dc-tapped'); }, 130);
}
function resetDhikrCounter(btn) {
    var key = 'dhikr_cnt_' + btn.dataset.key;
    localStorage.removeItem(key);
    btn.querySelector('.dc-curr').textContent = '0';
    btn.classList.remove('dc-done');
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dhikr-counter').forEach(function(btn) {
        var count = parseInt(localStorage.getItem('dhikr_cnt_' + btn.dataset.key) || '0');
        btn.querySelector('.dc-curr').textContent = count;
        if (count >= parseInt(btn.dataset.target)) btn.classList.add('dc-done');
    });
});

// ── Render Duas ──
function renderAllDuas() {
    renderDuaCarousel(jawamiDuas, 'jawami-duas-container', 'jaw');
}

document.addEventListener('DOMContentLoaded', function () {
    // Restore last active tab AFTER app.js has initialized everything
    try {
        var saved = localStorage.getItem('noor_active_tab');
        if (saved && document.getElementById('tab-' + saved)) {
            switchTab(saved);
        }
    } catch(e) {}

    // Show onboarding on first visit — modal is created lazily so it stays
    // out of the initial DOM and cannot become the LCP element (GH-85).
    try {
        if (!localStorage.getItem('noor_welcomed_v1')) {
            createOnboardingModal();
            document.getElementById('onboarding-modal').style.display = 'flex';
        }
    } catch(e) {}

    // Render prophetic duas
    renderAllDuas();
});
