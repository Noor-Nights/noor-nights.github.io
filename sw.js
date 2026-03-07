// ── Noor Nights PWA Service Worker ────────────────────────────────────────
// Handles offline caching for the Progressive Web App

const CACHE_NAME = 'noor-nights-v10';
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
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    // Don't intercept OneSignal or external requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if (client.url.includes('/') && 'focus' in client) return client.focus();
            }
            if (clients.openWindow) return clients.openWindow('/');
        })
    );
});
