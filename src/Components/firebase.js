import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD159LQIuVocLiMFh8bkI29F4tiKg7ptc0",
    authDomain: "burgerqueen-68a02.firebaseapp.com",
    databaseURL: "https://burgerqueen-68a02.firebaseio.com",
    projectId: "burgerqueen-68a02",
    storageBucket: "burgerqueen-68a02.appspot.com",
    messagingSenderId: "464225907748",
    appId: "1:464225907748:web:3799d032d60a9346"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;