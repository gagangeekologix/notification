// import React, { useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/messaging';

// const PushNotification = () => {
//   useEffect(() => {
//     // Firebase configuration
//     const firebaseConfig = {
//       // Your Firebase project configuration values
//       // apiKey, authDomain, projectId, etc.
//     };

//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);

//     const messaging = firebase.messaging();

//     // Request permission to receive push notifications
//     messaging
//       .requestPermission()
//       .then(() => {
//         console.log('Notification permission granted.');

//         // Retrieve the FCM token
//         return messaging.getToken();
//       })
//       .then((token) => {
//         console.log('FCM token:', token);
//         // Send the token to your server for storing or processing
//       })
//       .catch((error) => {
//         console.log('Error obtaining permission or token:', error);
//       });

//     // Handle token refresh
//     messaging.onTokenRefresh(() => {
//       messaging
//         .getToken()
//         .then((refreshedToken) => {
//           console.log('FCM token refreshed:', refreshedToken);
//           // Send the refreshed token to your server for updating
//         })
//         .catch((error) => {
//           console.log('Error refreshing token:', error);
//         });
//     });
//   }, []);

//   return <div>Push Notification Example</div>;
// };

// export default PushNotification;
