/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdbxj4u_GUmNTtcZqYr5KfB8Di2px1BHo",
  authDomain: "genious-elearning-app.firebaseapp.com",
  databaseURL: "https://genious-elearning-app-default-rtdb.firebaseio.com",
  projectId: "genious-elearning-app",
  storageBucket: "genious-elearning-app.appspot.com",
  messagingSenderId: "282699781362",
  appId: "1:282699781362:web:d89ea9bdd94186f4f62c6b",
  measurementId: "G-ENC20QLJPC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firestore

const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

export { db, auth };
