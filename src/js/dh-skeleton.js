(function() {
    var el = document.getElementById('dh-skeleton-msg');
    if (!el) return;
    var messages = [
        '🤲 اللهم أعني على ذكرك وشكرك وحسن عبادتك',
        '📿 سبحان الله وبحمده، سبحان الله العظيم',
        '🕌 الصلاة نور — حافظ عليها في وقتها',
        '📖 القرآن شفاء لما في الصدور — اقرأ ولو آية',
    ];
    el.textContent = messages[Math.floor(Date.now() / 86400000) % messages.length];
})();
