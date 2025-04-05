// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBskqrFTJXRqpIOn4ICLwdpkqDeK9MBVMo",
  authDomain: "netflixgpt-1-6f730.firebaseapp.com",
  projectId: "netflixgpt-1-6f730",
  storageBucket: "netflixgpt-1-6f730.firebasestorage.app",
  messagingSenderId: "234252952066",
  appId: "1:234252952066:web:0703bbce0858e25404fd1b",
  measurementId: "G-J2ZT8G9DV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();