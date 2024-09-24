// Import Firebase
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Firebase configuration (same as in firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyBuu9aOTnie6WDGLTbdLJ_5K6fmMvyymiY",
  authDomain: "tp-gf-fs.firebaseapp.com",
  projectId: "tp-gf-fs",
  storageBucket: "tp-gf-fs.appspot.com",
  messagingSenderId: "23146986142",
  appId: "1:23146986142:web:94d79b2ba5b75be570d98f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize messaging
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
