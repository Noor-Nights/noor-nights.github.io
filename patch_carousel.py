import re

# ── 1. Patch app.js: add renderDuaCarousel + shareFullDua ──────────────────
with open('src/js/app.js', 'r') as f:
    js = f.read()

CAROUSEL_JS = '''
// ═══════════════════════════════════════════════════
// DUA CAROUSEL (Jawami' section)
// ═══════════════════════════════════════════════════
const WATERCOLOR_PALETTES = [
    { blob1: 'rgba(251,191,36,0.09)',  blob2: 'rgba(124,58,237,0.07)',  border: 'rgba(251,191,36,0.18)'  },
    { blob1: 'rgba(20,184,166,0.08)',  blob2: 'rgba(251,191,36,0.07)',  border: 'rgba(20,184,166,0.18)'  },
    { blob1: 'rgba(168,85,247,0.08)',  blob2: 'rgba(20,184,166,0.07)',  border: 'rgba(168,85,247,0.18)'  },
    { blob1: 'rgba(245,158,11,0.08)',  blob2: 'rgba(168,85,247,0.07)', border: 'rgba(245,158,11,0.18)'  },
    { blob1: 'rgba(16,185,129,0.08)',  blob2: 'rgba(251,191,36,0.07)',  border: 'rgba(16,185,129,0.18)'  },
];

function shareFullDua(prefix, idx) {
    const list = prefix === 'jaw' ? jawamiDuas : essentialDuas;
    const dua = list[idx];
    const text = dua.arabic + (dua.english ? '\\n\\n' + dua.english : '');
    if (navigator.share) {
        navigator.share({ title: 'Noor Nights \\uD83C\\uDF19', text, url: window.location.href }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text)
            .then(() => showMessage('\\u2705 Copied!', 'Dua copied to clipboard.'))
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

        slide.innerHTML =
            '<div class="dua-slide-inner">' +
                '<div class="slide-counter">' + (idx + 1) + ' / ' + list.length + '</div>' +
                '<div class="dua-arabic-main">' + dua.arabic + '</div>' +
                (dua.english ? '<div class="dua-english-main">' + dua.english + '</div>' : '') +
                '<div class="dua-badge-row"><span class="slide-badge">' + dua.badge + '</span></div>' +
                '<div class="slide-actions">' +
                    '<button class="slide-btn" onclick="shareFullDua(\'' + prefix + '\',' + idx + ')" aria-label="Share full dua">' +
                        '<span class="slide-btn-icon">\\uD83D\\uDCE4</span>' +
                        '<span class="slide-btn-label">Share Dua</span>' +
                    '</button>' +
                    '<button class="slide-btn" onclick="shareImage(\'' + prefix + '\',' + idx + ')" aria-label="Share card image">' +
                        '<span class="slide-btn-icon">\\uD83D\\uDCC4</span>' +
                        '<span class="slide-btn-label">Share Card</span>' +
                    '</button>' +
                    '<button class="slide-btn" onclick="copyText(\'' + prefix + '\',' + idx + ')" aria-label="Copy dua text">' +
                        '<span class="slide-btn-icon">\\uD83D\\uDCCB</span>' +
                        '<span class="slide-btn-label">Copy</span>' +
                    '</button>' +
                '</div>' +
            '</div>';

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

    const prevBtn  = document.getElementById(prevId);
    const nextBtn  = document.getElementById(nextId);
    const countEl  = document.getElementById(countId);

    function goToSlide(idx) {
        currentSlide = Math.max(0, Math.min(idx, list.length - 1));
        track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        countEl.textContent = (currentSlide + 1) + ' / ' + list.length;
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === list.length - 1;
        trackEvent('/carousel-swipe', 'Carousel: dua ' + (currentSlide + 1));
    }

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
            goToSlide(dx < 0 ? currentSlide + 1 : currentSlide - 1);
        }
    }, { passive: true });

    goToSlide(0);
}

'''

# Insert carousel JS right before the renderDuaList function
js = js.replace(
    'const JAWAMI_PREVIEW = 3;',
    CAROUSEL_JS + 'const JAWAMI_PREVIEW = 3;'
)

with open('src/js/app.js', 'w') as f:
    f.write(js)
print('app.js: carousel added OK')

# ── 2. Patch index.html: use renderDuaCarousel for jawami ──────────────────
with open('index.html', 'r') as f:
    html = f.read()

html = html.replace(
    "renderDuaList(jawamiDuas, 'jawami-duas-container', 'jaw', null, true);",
    "renderDuaCarousel(jawamiDuas, 'jawami-duas-container', 'jaw');"
)

with open('index.html', 'w') as f:
    f.write(html)
print('index.html: jawami updated OK')

# ── 3. Patch retro.html: use renderDuaCarousel for jawami ──────────────────
with open('retro.html', 'r') as f:
    retro = f.read()

retro = retro.replace(
    "renderDuaList(jawamiDuas, 'jawami-duas-container', 'jaw', null, true);",
    "renderDuaCarousel(jawamiDuas, 'jawami-duas-container', 'jaw');"
)
retro = retro.replace(
    "renderDuaList(jawamiDuas, 'jawami-duas-container', 'jaw');",
    "renderDuaCarousel(jawamiDuas, 'jawami-duas-container', 'jaw');"
)

with open('retro.html', 'w') as f:
    f.write(retro)
print('retro.html: jawami updated OK')

print('All patches applied successfully.')
