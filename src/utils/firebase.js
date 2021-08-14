import firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "messenger-demo-c5b6c",
    storageBucket: "messenger-demo-c5b6c.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
    appId: "1:336131159485:web:ffa934a58eb49f66480ed4",
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  

  export { db }