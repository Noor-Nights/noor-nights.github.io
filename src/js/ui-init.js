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
function closeOnboarding() {
    document.getElementById('onboarding-modal').style.display = 'none';
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

    // Show onboarding on first visit
    try {
        if (!localStorage.getItem('noor_welcomed_v1')) {
            document.getElementById('onboarding-modal').style.display = 'flex';
        }
    } catch(e) {}

    // Render prophetic duas
    renderAllDuas();
});
