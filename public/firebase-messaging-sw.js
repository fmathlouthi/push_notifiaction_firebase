importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({

    apiKey: "AIzaSyDFMMKxn92cZauDHwhQm8f7T6sfUkanvV8",
    projectId: "laravel-firebase-crud-270af",
    messagingSenderId: "138720219427",
    appId: "1:138720219427:web:528427553d4735d7de7c96",
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({ data: { title, body, icon } }) {
    return self.registration.showNotification(title, { body, icon });
});