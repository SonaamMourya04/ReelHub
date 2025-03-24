// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbtBnGXMadKCooOiQlEMrsyplJrKp04T8",
  authDomain: "reelhub-52a1c.firebaseapp.com",
  projectId: "reelhub-52a1c",
  storageBucket: "reelhub-52a1c.appspot.com",
  messagingSenderId: "194399151975",
  appId: "1:194399151975:web:f57a0b168b68243e5a31c2",
  measurementId: "G-MVZZD8VNLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();