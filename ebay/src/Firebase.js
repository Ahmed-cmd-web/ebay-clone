/** @format */
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQXAkVlG5oPdzdiZy46Tcoewqk4PoM1KU",
  authDomain: "ebay-ba153.firebaseapp.com",
  projectId: "ebay-ba153",
  storageBucket: "ebay-ba153.appspot.com",
  messagingSenderId: "968372369914",
  appId: "1:968372369914:web:e82573625c013e84100c43",
  measurementId: "G-8ND0ZVJ5KK",
};

//Inializing the store

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();
const apple = new firebase.auth.OAuthProvider("apple.com");
const fb = new firebase.auth.FacebookAuthProvider();

export { db, auth, google, apple, fb };
