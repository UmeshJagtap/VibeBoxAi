import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-89f51.firebaseapp.com",
  projectId: "interviewiq-89f51",
  storageBucket: "interviewiq-89f51.firebasestorage.app",
  messagingSenderId: "473285077507",
  appId: "1:473285077507:web:07efc36f3593c0e652bc36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);