import firebase from 'firebase';
require ('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyB5MBe7LjAqHb--sB3_8jVDtQX3noLRYEc",
    authDomain: "barter-app-4032c.firebaseapp.com",
    databaseURL: "https://barter-app-4032c.firebaseio.com",
    projectId: "barter-app-4032c",
    storageBucket: "barter-app-4032c.appspot.com",
    messagingSenderId: "997165878837",
    appId: "1:997165878837:web:57ebeeff3c8168a416ab7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();