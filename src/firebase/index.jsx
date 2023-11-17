// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDINXnj041cQ1JdVfOW6Z5gZZdHpCoQtoc",
  authDomain: "clone-9639b.firebaseapp.com",
  projectId: "clone-9639b",
  storageBucket: "clone-9639b.appspot.com",
  messagingSenderId: "943736731407",
  appId: "1:943736731407:web:2b6d5dda2c002620f2707a",
  measurementId: "G-1CCVYZE104",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = fire
// const auth = getAuth(app);
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
