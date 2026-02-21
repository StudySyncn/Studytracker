// El Robot Ultra que permite notificaciones locales
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Esta parte hace que el aviso aparezca aunque la app esté cerrada
self.onmessage = (event) => {
    const data = event.data;
    const options = {
        body: data.body,
        icon: 'icon-192.png', // Ahora sí coincide con tu archivo
        badge: 'icon-192.png',
        vibrate: [200, 100, 200]
    };
    self.registration.showNotification(data.title, options);
};
