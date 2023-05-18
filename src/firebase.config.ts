// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTJNftbNywxerRHJYESYlxqW8-XRTdREE",
  authDomain: "minseoungreact.firebaseapp.com",
  projectId: "minseoungreact",
  storageBucket: "minseoungreact.appspot.com",
  messagingSenderId: "334767008993",
  appId: "1:334767008993:web:ac242070f878454953dba0",
  measurementId: "G-F0JGN89WG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);