// ═══════════════════════════════════════════════════════
//  Noor Nights — Unified Service Worker
//  Handles: Background Push (Firebase Messaging) + PWA Caching
// ═══════════════════════════════════════════════════════
// Vendored locally (src/js/vendor/) to avoid loading scripts from an external CDN.
// To upgrade: download new versions from gstatic, replace files, bump CACHE_NAME.

// True only when a previous SW was already active — i.e. this is a version update,
// not a first install. Checked in activate to avoid reloading the page on first visit
// (which caused a 4.7 s redirect chain in Lighthouse — GH-83).
let _isSWUpdate = false;

importScripts('/src/js/vendor/firebase-app-compat.js');
importScripts('/src/js/vendor/firebase-messaging-compat.js');

// Firebase client config — these are public project identifiers, not secrets.
// Security is enforced via Firebase Security Rules and App Check, not by
// hiding this config. See: https://firebase.google.com/docs/projects/api-keys
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAzOmE1zT85Kgvf4hsxJDqdswoDaqLK3PQ",
    authDomain: "noor-nights.firebaseapp.com",
    projectId: "noor-nights",
    storageBucket: "noor-nights.firebasestorage.app",
    messagingSenderId: "724399486488",
    appId: "1:724399486488:web:2120cfaa4c5b6209ccf56d",
};
firebase.initializeApp(FIREBASE_CONFIG);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const { title, body, icon } = payload.notification;
    self.registration.showNotification(title, {
        body,
        icon: icon || 'https://noor-nights.github.io/assets/icons/icon-512.png',
        badge: 'https://noor-nights.github.io/assets/icons/icon-96-mono.png',
        silent: false,
        vibrate: [200, 100, 200],
        data: { url: 'https://noor-nights.github.io' },
    });
});

// ── PWA Cache ────────────────────────────────────────────────
const CACHE_NAME = 'noor-nights-v26';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/src/css/modern.css',
    '/src/js/app.js',
    '/src/js/cairo-times.js',
    '/src/js/duas.js',
    '/src/js/dh-skeleton.js',
    '/src/js/ui-init.js',
    '/src/js/vendor/firebase-app-compat.js',
    '/src/js/vendor/firebase-messaging-compat.js',
    '/assets/icons/icon-192.svg',
    '/assets/icons/icon-512.png',
    '/assets/icons/icon-96-mono.png',
];

self.addEventListener('install', (event) => {
    // If there is already an active SW, this is a version update not a fresh install.
    _isSWUpdate = !!self.registration.active;
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
            .then(() => {
                // Only reload clients when an existing SW was replaced by this version.
                // Skipping this on fresh installs eliminates the self-redirect Lighthouse
                // was measuring as a 4.7 s redirect chain (GH-83).
                if (!_isSWUpdate) return;
                return self.clients.matchAll({ type: 'window' })
                    .then((clients) => clients.forEach((c) => c.postMessage({ type: 'SW_UPDATED' })));
            })
    );
});

self.addEventListener('fetch', (event) => {
    if (!event.request.url.startsWith(self.location.origin)) return;
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Stale-While-Revalidate for JS and CSS
    if (url.pathname.match(/\.(js|css)$/)) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) =>
                cache.match(event.request).then((cached) => {
                    const fetchPromise = fetch(event.request).then((response) => {
                        if (response && response.ok) cache.put(event.request, response.clone());
                        return response;
                    }).catch(() => cached);
                    return cached || fetchPromise;
                })
            )
        );
        return;
    }

    // Cache-First for HTML, images, icons
    event.respondWith(
        caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
});

self.addEventListener('notificationclick', (event) => {
    fetch('https://noor-nights.goatcounter.com/count?p=/push_open&t=push_open&e=true', { mode: 'no-cors' }).catch(() => {});
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
