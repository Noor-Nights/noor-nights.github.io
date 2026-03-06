const CACHE_NAME = 'noor-nights-v8';
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
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Handle clicking on a notification
self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // Close the notification

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // If the app is already open, focus it
            for (const client of clientList) {
                if (client.url.includes('/') && 'focus' in client) {
                    return client.focus();
                }
            }
            // Otherwise open it
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});
