import React, { useState, useEffect } from 'react';
import { getFCMToken, onMessageListener } from './firebase';

function App() {
  const [isTokenFound, setTokenFound] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });

  // Get FCM Token on load
  useEffect(() => {
    getFCMToken(setTokenFound);
  }, []);

  // Listen to incoming messages
  onMessageListener()
    .then(payload => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body
      });
      console.log('Notification received: ', payload);
    })
    .catch(err => console.log('Failed to receive message: ', err));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Cloud Messaging in React</h1>
        {isTokenFound ? <p>Token found</p> : <p>Token not found</p>}
        <h2>Notification</h2>
        {notification.title ? (
          <div>
            <h3>{notification.title}</h3>
            <p>{notification.body}</p>
          </div>
        ) : (
          <p>No new notifications</p>
        )}
      </header>
    </div>
  );
}

export default App;
