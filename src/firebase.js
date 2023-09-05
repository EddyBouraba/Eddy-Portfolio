// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP8rCkk1PmGd6y2Sn9RsZtrHkZJEtfWLA",
  authDomain: "portfolio-db-d4660.firebaseapp.com",
  projectId: "portfolio-db-d4660",
  storageBucket: "portfolio-db-d4660.appspot.com",
  messagingSenderId: "973873099861",
  appId: "1:973873099861:web:8191ced2047140710c50dc",
  measurementId: "G-GP1H5D98FL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
