/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp, increment } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMCgA7fEeTz1aj0JLJn0mLM2dtuHWHIPw",
  authDomain: "genious-649e9.firebaseapp.com",
  projectId: "genious-649e9",
  storageBucket: "genious-649e9.appspot.com",
  messagingSenderId: "292433030610",
  appId: "1:292433030610:web:f70fd94b4137a40e276c0b",
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
 const firestore = getFirestore(app);

const auth = getAuth(app);
 const FieldValue = {
   serverTimestamp,
   increment,
 };

const storage = getStorage(app); 
export { app, db, auth ,storage};
