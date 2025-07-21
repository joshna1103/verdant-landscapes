// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA49WJUF9rXDxrAcb3dbdLV_PYFrC27Pn8",
  authDomain: "verdant-8273c.firebaseapp.com",
  projectId: "verdant-8273c",
  storageBucket: "verdant-8273c.appspot.com",
  messagingSenderId: "500097818320",
  appId: "1:500097818320:web:6125a7291870212b9d48d5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
