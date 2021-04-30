import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const firebase = require('firebase');
//require('firebase/firestore');

// Initialize Firebase
//firebase.initializeApp({
  //apiKey: "AIzaSyCTwHmVr8EN7k_OVHFcxi0ohfIrquUHhUk",
  //authDomain: "evernote-clone-40ab2.firebaseapp.com",
  //projectId: "evernote-clone-40ab2",
  //storageBucket: "evernote-clone-40ab2.appspot.com",
  //messagingSenderId: "641818735389",
  //appId: "1:641818735389:web:8bd0557d67dca7f41a27f4"
//});

ReactDOM.render(
  
    <App />,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
