/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdbxj4u_GUmNTtcZqYr5KfB8Di2px1BHo",
  authDomain: "genious-elearning-app.firebaseapp.com",
  databaseURL: "https://genious-elearning-app-default-rtdb.firebaseio.com",
  projectId: "genious-elearning-app",
  storageBucket: "genious-elearning-app.appspot.com",
  messagingSenderId: "282699781362",
  appId: "1:282699781362:web:eb3f96260feb796af62c6b",
  measurementId: "G-6F45VEGE53",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firestore

const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

export { db, auth };
