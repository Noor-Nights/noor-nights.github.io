// ═══════════════════════════════════════════════════════
//  Noor Nights — Unified Service Worker
//  Handles: Background Push (OneSignal) + PWA Caching
//
//  OneSignal MUST be imported FIRST, before any other code.
// ═══════════════════════════════════════════════════════
importScripts("/OneSignalSDK.sw.js");

// ── PWA Cache ────────────────────────────────────────────────
const CACHE_NAME = 'noor-nights-v24';
// Core shell assets to pre-cache on install.
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/src/css/modern.css',
    '/src/js/app.js',
    '/src/js/cairo-times.js',
    '/src/js/duas.js',
    '/src/js/onesignal-init.js',
    '/src/js/dh-skeleton.js',
    '/src/js/ui-init.js',
    '/assets/icons/icon-192.svg',
    '/assets/icons/icon-512.png',
    '/assets/icons/icon-96-mono.png',
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
            ))
            .then(() => self.clients.claim())
            .then(() => self.clients.matchAll({ type: 'window' }))
            .then((clients) => clients.forEach((c) => c.postMessage({ type: 'SW_UPDATED' })))
    );
});

self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests and non-GET requests
    if (!event.request.url.startsWith(self.location.origin)) return;
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Stale-While-Revalidate for JS and CSS: serve cached immediately,
    // then refresh in the background. This overcomes GitHub Pages' short
    // 600-second Cache-Control max-age for repeat visitors.
    if (url.pathname.match(/\.(js|css)$/)) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) =>
                cache.match(event.request).then((cached) => {
                    const fetchPromise = fetch(event.request).then((response) => {
                        if (response && response.ok) {
                            cache.put(event.request, response.clone());
                        }
                        return response;
                    }).catch(() => cached);
                    // Return the cached version immediately while refreshing
                    return cached || fetchPromise;
                })
            )
        );
        return;
    }

    // Cache-First for all other same-origin requests (HTML, images, icons)
    event.respondWith(
        caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
});

self.addEventListener('notificationclick', (event) => {
    // Fire silent background ping to GoatCounter API for analytics
    fetch('https://noor-nights.goatcounter.com/count?p=/push_open&t=push_open&e=true', { mode: 'no-cors' }).catch(() => { });

    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if ('focus' in client) return client.focus();
            }
            if (clients.openWindow) return clients.openWindow('/');
        })
    );
});
