// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARGt4e4eQqrmjVwmWbjufXQ_6Jug3CXJs",
  authDomain: "search-combo.firebaseapp.com",
  databaseURL: "https://search-combo-default-rtdb.firebaseio.com",
  projectId: "search-combo",
  storageBucket: "search-combo.appspot.com",
  messagingSenderId: "709875204694",
  appId: "1:709875204694:web:23d4e93c844aa8f1c5b1f7",
  measurementId: "G-1B8RP8K3SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);