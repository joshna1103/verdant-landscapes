// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDqso7fVAz32wiF96wTS671cI1DFPamxGc",
  authDomain: "verdant-aef16.firebaseapp.com",
  projectId: "verdant-aef16",
  storageBucket: "verdant-aef16.firebasestorage.app",
  messagingSenderId: "255508929547",
  appId: "1:255508929547:web:72c90d3c6d3cb87ca5bb0e",
  measurementId: "G-L47DWSE8N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // 🔥 Firestore initialization

export { db };
