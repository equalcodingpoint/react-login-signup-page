import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCKs7W92blrszXIyxeO3BiEVhnQCnj86jw",
    authDomain: "application-1d2a5.firebaseapp.com",
    projectId: "application-1d2a5",
    storageBucket: "application-1d2a5.appspot.com",
    messagingSenderId: "891301393031",
    appId: "1:891301393031:web:9b8ad09effe3bbd1d7fe22",
    measurementId: "G-2X9V04WGPS"
  };
 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };