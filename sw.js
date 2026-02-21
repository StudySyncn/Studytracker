self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : '¡Tienes una tarea pendiente!',
        icon: 'icon-192.png.PNG',
        badge: 'icon-192.png.PNG'
    };
    event.waitUntil(
        self.registration.showNotification('StudySync Ultra 🚀', options)
    );
});
