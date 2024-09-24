// Import Firebase libraries
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuu9aOTnie6WDGLTbdLJ_5K6fmMvyymiY",
  authDomain: "tp-gf-fs.firebaseapp.com",
  projectId: "tp-gf-fs",
  storageBucket: "tp-gf-fs.appspot.com",
  messagingSenderId: "23146986142",
  appId: "1:23146986142:web:94d79b2ba5b75be570d98f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = getMessaging(firebaseApp);

// Request permission and get registration token
export const getFCMToken = async (setTokenFound) => {
  let currentToken = '';
  try {
    currentToken = await getToken(messaging, { vapidKey: 'BPA0rPkOAgMwj-FRFlNMZ59Un-bNa53Jtdfv5gyPUiHVH5hwl9F3ZnH2nrAzGI5K70AJt4--1B-dkUmwU1M2uSQ' });
    if (currentToken) {
      setTokenFound(true);
      console.log('FCM Token:', currentToken);
    } else {
      console.log('No registration token available.');
      setTokenFound(false);
    }
  } catch (error) {
    console.error('An error occurred while retrieving token.', error);
    setTokenFound(false);
  }
};

// Handle incoming messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });