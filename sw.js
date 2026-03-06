const CACHE_NAME = 'noor-nights-v2';
const ASSETS = [
    '/',
    '/index.html',
    '/retro.html',
    '/manifest.json',
    '/src/css/modern.css',
    '/src/css/retro.css',
    '/src/js/app.js',
    '/src/js/duas.js',
    '/assets/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
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
