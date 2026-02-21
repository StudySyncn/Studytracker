self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => clients.claim());

self.onmessage = (event) => {
    const options = {
        body: event.data.body,
        icon: 'icon-192.png',
        badge: 'icon-192.png',
        vibrate: [200, 100, 200]
    };
    self.registration.showNotification(event.data.title, options);
};
