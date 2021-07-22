import firebase from 'firebase/app';
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZXwp4wG6lyZdc6Ug_1bu2IdgQCAC6RH8",
    authDomain: "elitecleaning-f19b4.firebaseapp.com",
    projectId: "elitecleaning-f19b4",
    storageBucket: "elitecleaning-f19b4.appspot.com",
    messagingSenderId: "738898070061",
    appId: "1:738898070061:web:eab9bb5e13843f9ba306a4",
    measurementId: "G-3830V6HYH0"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;