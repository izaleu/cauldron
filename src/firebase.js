// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAfGQ61ZJ8W1asCcsNvn6BnjQ9S9_v0Zw",
  authDomain: "cauldron-358719.firebaseapp.com",
  projectId: "cauldron-358719",
  storageBucket: "cauldron-358719.appspot.com",
  messagingSenderId: "709088852359",
  appId: "1:709088852359:web:93af8cbf625bc684e37b22",
  measurementId: "G-L53J176TBY"
};

// Initialize Firebase

export function makeFirebaseApp() {
    const app = initializeApp(firebaseConfig);
    return app;
}

export function getGoogleAnalytics(app) {
    return getAnalytics(app);
}

export function getFirestoreDB(app){
    return getFirestore(app);
}