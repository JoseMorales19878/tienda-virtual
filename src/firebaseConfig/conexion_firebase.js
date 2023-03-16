// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'

import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

 apiKey: "AIzaSyA66uiRT_npen_dOyBf0ne81eKYqZ_CKxo",
 
  authDomain: "seungs-solution.firebaseapp.com",
  
  databaseURL: "https://seungs-solution-default-rtdb.firebaseio.com",
  projectId: "seungs-solution",
  
  storageBucket: "seungs-solution.appspot.com",
  
  messagingSenderId: "357600281790",
  
  appId: "1:357600281790:web:92dd608052565d4a7b8aef",
  
  measurementId: "G-EJQX9XNJJM"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);

export const db = getFirestore(app)