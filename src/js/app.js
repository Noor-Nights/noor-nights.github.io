// Core Application Logic for Noor Nights
let currentYoussefIdx = new Date().getDate() % youssefDuas.length;

function renderDuaList(list, containerId, prefix, cardColors) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const body = container.querySelector('.card-body');
    const colors = cardColors || ['var(--win-blue)', 'var(--win-pink)', 'var(--win-green)', 'var(--win-orange)'];

    list.forEach((dua, idx) => {
        const card = document.createElement('div');
        card.className = 'dua-card';
        card.innerHTML = `
            <div class="card-header" style="background: ${colors[idx % colors.length]}"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
            <div class="card-body">
                <span class="badge" style="background: ${colors[(idx + 1) % colors.length]}">${dua.badge}</span>
                <div class="arabic-text">${dua.arabic}</div>
                ${dua.english ? `<div class="translation">${dua.english}</div>` : ''}
                <div class="share-buttons">
                    <button class="btn btn-share" onclick="shareImage('${prefix}', ${idx})">📤 Share</button>
                    <button class="btn btn-share" onclick="copyText('${prefix}', ${idx})">📋 Copy</button>
                </div>
            </div>
        `;
        body.appendChild(card);
    });
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
    showMessage("Copied", "Dua text copied to clipboard!");
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
    const arLines = getWrappedLines(tempCtx, arabic, 900);

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

    ctx.font = 'bold 24px "Inter", sans-serif';
    ctx.fillStyle = 'rgba(45,45,45,0.3)';
    ctx.fillText('Noor Nights App • Sadaqah Jariyah for Youssef Abdelkader', 540, canvasHeight - 60);

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
    let url = generateCanvasURL(dua.arabic, `"${dua.english}"`, dua.badge, false);
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
    let url = generateCanvasURL(dua.arabic, `"${dua.english}"`, "", true);
    const filename = 'dua-youssef.jpg';
    fetch(url).then(r => r.blob()).then(blob => {
        const file = new File([blob], filename, { type: 'image/jpeg' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            return navigator.share({ files: [file], text: 'Please make dua for Youssef Abdelkader' });
        } else { triggerDownload(url, filename); }
    }).catch(() => triggerDownload(url, filename));
}

const checklistTasks = [
    { id: 'cb-taraweeh', icon: '🕌', text: 'Pray Taraweeh/Qiyam' },
    { id: 'cb-dua', icon: '🤲', text: 'Make Dua' },
    { id: 'cb-sadaqah', icon: '🎁', text: 'Give Sadaqah' },
    { id: 'cb-zakat', icon: '💰', text: 'Pay Zakat al-Fitr' },
    { id: 'cb-quran', icon: '📖', text: 'Recite Quran' }
];

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
            `<span style="font-size:1.8rem;">Tonight is Night ${n} of 10</span><br><span style="font-size:1rem; color:var(--text-muted)">Make the most of it 🌙</span>` :
            "The Last 10 Nights have concluded.";
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

    timerStatus.innerText = "Until Noor Nights begin (Egypt Time)";
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

    checklistTasks.forEach(task => {
        const label = document.createElement('label');
        label.className = 'checklist-item';
        const checked = !!data[task.id];
        if (checked) completed++;
        label.innerHTML = `<input type="checkbox" id="${task.id}" ${checked ? 'checked' : ''}> <span class="checklist-label">${task.icon} ${task.text}</span>`;
        cont.appendChild(label);
        label.querySelector('input').addEventListener('change', () => {
            data[task.id] = label.querySelector('input').checked;
            localStorage.setItem(key, JSON.stringify(data));
            updateProgress(document.querySelectorAll('#checklist-container input:checked').length, 5);
        });
    });
    updateProgress(completed, 5);
}

function updateProgress(c, t) {
    const bar = document.getElementById('checklist-progress');
    const text = document.getElementById('checklist-text');
    if (bar) bar.style.width = `${(c / t) * 100}%`;
    if (text) text.innerText = `${c} of ${t} tasks completed today`;
}

function requestNotifications() {
    if ("Notification" in window) {
        Notification.requestPermission().then(p => {
            if (p === 'granted') {
                const btn = document.getElementById('notify-btn');
                if (btn) btn.innerText = '✅ Notifications Enabled';
                showMessage('Success', 'Hourly reminders for the nights (7 PM - 5 AM) activated!');
                checkAndSendNotification();
            } else showMessage('Denied', 'We need permission to send you reminders.');
        });
    } else showMessage('Error', 'Your browser does not support notifications.');
}

function testNotification() {
    // Special check for iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches;

    if (isIOS && !isStandalone) {
        showMessage('Action Required', 'On iPhone, notifications ONLY work after you "Add to Home Screen". Please add the app to your home screen first, then open it from there to test.');
        return;
    }

    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(p => {
            if (p === 'granted') {
                sendActualTest();
            } else {
                showMessage('Denied', 'We need permission to send you a test notification.');
            }
        });
    } else {
        sendActualTest();
    }
}

function sendActualTest() {
    const testDua = essentialDuas[0];
    new Notification(`🧪 Noor Nights Test | ${testDua.arabic}`, {
        body: "Success! You will receive reminders like this during the last 10 nights.",
        icon: 'assets/icons/icon-512.png'
    });
    showMessage('Notification Sent', 'Check your device for the test notification!');
}

const earlyMessages = [
    "🤲 Pour your heart out in Dua right now.",
    "🎁 Don't forget your Sadaqah for tonight.",
    "✨ Focus on your Dua and Sadaqah tonight."
];

const lateMessages = [
    "🌙 Time for Qiyam & standing in prayer.",
    "🌟 Standing in Qiyam - pouring Dua.",
    "✨ Balance your night with Qiyam and Dua."
];

let lastNotificationHour = -1;
function checkAndSendNotification() {
    if (Notification.permission !== "granted") return;

    const now = new Date(getCurrentTime());
    const hours = now.getHours();
    const time = now.getTime();

    const startLimit = new Date("2026-03-09T17:54:00+02:00").getTime();
    const endLimit = new Date("2026-03-20T05:00:00+02:00").getTime();

    if (time < startLimit || time > endLimit) return;

    if ((hours >= 19 || hours <= 5) && hours !== lastNotificationHour) {
        // Calculate hour index: 19:00 is 0, 20:00 is 1, ..., 00:00 is 5...
        let hrIdx = hours >= 19 ? hours - 19 : hours + 5;

        const distance = time - startLimit;
        const nightNum = Math.floor(distance / 86400000) + 1;

        if (nightNum >= 1 && nightNum <= 10) {
            const duaList = essentialDuas.concat(jawamiDuas);
            const idx = Math.abs(hrIdx) % duaList.length;
            const dua = duaList[idx];

            const actionMsg = hrIdx < 4 ?
                earlyMessages[hrIdx % earlyMessages.length] :
                lateMessages[(hrIdx - 4) % lateMessages.length];

            new Notification(`\u200eNight ${nightNum}: ${actionMsg} | ${dua.arabic}`, {
                body: `Night ${nightNum} of 10 reminder`,
                icon: 'favicon.ico'
            });
            lastNotificationHour = hours;
        }
    }
}

function generateICS() {
    let lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Noor Nights//EN",
        "CALSCALE:GREGORIAN",
        "X-WR-CALNAME:Noor Nights",
        "X-WR-CALDESC:Hourly Reminders for the last 10 nights of Ramadan"
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
                earlyMessages[i % earlyMessages.length] :
                lateMessages[(i - 4) % lateMessages.length];
            const desc = `Night ${night.n} of 10`;

            lines.push("BEGIN:VEVENT");
            lines.push(`UID:noornights-2026-${night.n}-${i}@eman`);
            lines.push(`DTSTART:${sStart}`);
            lines.push(`DTEND:${sEnd}`);
            // Summary: Night X - Action | Dua Arabic (Forced LTR)
            lines.push(`SUMMARY:\u200eNight ${night.n} - ${actionMsg} | ${dua.arabic}`);
            lines.push(`DESCRIPTION:${desc}`);
            lines.push("END:VEVENT");
        }
    });

    lines.push("END:VCALENDAR");
    return lines.join('\r\n');
}

function downloadICS() {
    try {
        const content = generateICS();
        const url = URL.createObjectURL(new Blob([content], { type: 'text/calendar;charset=utf-8' }));
        const a = document.createElement('a'); a.href = url; a.download = 'noor-nights.ics';
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        const success = document.getElementById('calendar-success');
        if (success) success.style.display = 'block';
    } catch (err) { alert("Download failed."); }
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    loadChecklist();
    rotateYoussefDua();
    setInterval(checkAndSendNotification, 60000);

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker Registered'));
    }
});
