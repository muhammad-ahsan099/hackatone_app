// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC76qwtz2BHrW5nEFgOdwTb2-MJFXgQdEA",
  authDomain: "student-management-syste-4d5b4.firebaseapp.com",
  projectId: "student-management-syste-4d5b4",
  storageBucket: "student-management-syste-4d5b4.appspot.com",
  messagingSenderId: "190383175003",
  appId: "1:190383175003:web:b58c2b78a3b4d1c0a0d67e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
