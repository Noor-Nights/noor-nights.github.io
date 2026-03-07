// ── Import OneSignal SDK worker FIRST (handles push subscription & background delivery)
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// ── Noor Nights PWA Cache ──────────────────────────────────────────────────
const CACHE_NAME = 'noor-nights-v9';
const ASSETS = [
    '/',
    '/index.html',
    '/retro.html',
    '/manifest.json',
    '/src/css/modern.css',
    '/src/css/retro.css',
    '/src/js/app.js',
    '/src/js/duas.js',
    '/assets/icons/icon-192.png',
    '/assets/icons/icon-512.png',
    '/assets/icons/favicon.png',
    '/assets/icons/favicon-32.png',
    '/assets/icons/badge-96.png'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    // Don't intercept OneSignal API calls
    if (event.request.url.includes('onesignal.com')) return;

    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Handle clicking on a notification
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if (client.url.includes('/') && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});
