(function() {
    var DH_START = new Date('2026-05-18T00:00:00+02:00').getTime();
    var now = Date.now();
    var el = document.getElementById('dh-skeleton-msg');
    if (!el) return;
    if (now >= DH_START) {
        // During Dhul Hijjah — show day number
        var day = Math.min(10, Math.max(1, Math.floor((now - DH_START) / 86400000) + 1));
        el.textContent = '🕋 Day ' + day + ' of Dhul Hijjah — make every moment count.';
    } else {
        var daysLeft = Math.ceil((DH_START - now) / 86400000);
        if (daysLeft <= 10) {
            el.textContent = '🌟 Only ' + daysLeft + ' day' + (daysLeft !== 1 ? 's' : '') + ' left! Begin your daily spiritual challenge.';
        }
        // else keep the default motivation text already in the p
    }
})();
