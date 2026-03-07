// Legacy sw.js — self-removes on activate so OneSignalSDKWorker.js can take over.
// This file exists only to cleanly migrate users who had the old sw.js registered.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
    event.waitUntil(
        self.registration.unregister().then(() => self.clients.claim())
    );
});
