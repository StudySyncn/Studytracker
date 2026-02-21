// El Robot Ultra que permite notificaciones locales y remotas
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Esta parte es la que hace que el aviso aparezca aunque la app esté cerrada
self.onmessage = (event) => {
    const data = event.data;
    const options = {
        body: data.body,
        icon: 'icon-192.png.PNG',
        badge: 'icon-192.png.PNG',
        vibrate: [200, 100, 200]
    };
    self.registration.showNotification(data.title, options);
};
