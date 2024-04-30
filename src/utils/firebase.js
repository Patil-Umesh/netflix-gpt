// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf7RaOYabNq7NLTmdVQZjfdmwdeSay-z0",
  authDomain: "netflixgpt-d1bfd.firebaseapp.com",
  projectId: "netflixgpt-d1bfd",
  storageBucket: "netflixgpt-d1bfd.appspot.com",
  messagingSenderId: "129628962686",
  appId: "1:129628962686:web:3f44f0fcf7e93055c57d2f",
  measurementId: "G-5T90BMZH5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
