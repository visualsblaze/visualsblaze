// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8HQfO1nLGKjiCoDw53sYwaxBwXG-vauo",
  authDomain: "visuals-3874c.firebaseapp.com",
  projectId: "visuals-3874c",
  storageBucket: "visuals-3874c.firebasestorage.app",
  messagingSenderId: "254468766345",
  appId: "1:254468766345:web:d4d69f1001e2a50d9be458",
  measurementId: "G-BF75DMRRV6"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
