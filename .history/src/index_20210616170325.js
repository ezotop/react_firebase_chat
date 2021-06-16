import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyATpWKqjzQCk4pGPsBJixE4-uhivcczmno",
    authDomain: "react-chat-firebase-3657a.firebaseapp.com",
    projectId: "react-chat-firebase-3657a",
    storageBucket: "react-chat-firebase-3657a.appspot.com",
    messagingSenderId: "288681830942",
    appId: "1:288681830942:web:05981ec9a9d5499a665c0f",
    measurementId: "G-H9MERCPCYG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
