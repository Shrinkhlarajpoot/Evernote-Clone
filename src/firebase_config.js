import firebase from "firebase";
import 'firebase/firestore';



var firebaseConfig = {
    apiKey: "AIzaSyCjqHuEJi35GSLn0PACgd_1g4OReQPr7gQ",
    authDomain: "evernote---clone1.firebaseapp.com",
    projectId: "evernote---clone1",
    storageBucket: "evernote---clone1.appspot.com",
    messagingSenderId: "1018696978306",
    appId: "1:1018696978306:web:afc0466beb32c52e27899b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const timestamp = firebase.firestore.FieldValue.serverTimestamp();

const projectFirestore = firebase.firestore();
export {  projectFirestore, timestamp };