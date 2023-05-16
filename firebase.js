// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJcCOtM1nJOT3vGaLYjYpYV3J6o0CkBrw",
  authDomain: "d-laundry-appliaction.firebaseapp.com",
  projectId: "d-laundry-appliaction",
  storageBucket: "d-laundry-appliaction.appspot.com",
  messagingSenderId: "551748946871",
  appId: "1:551748946871:web:661f43b9607f2b8c653632",
  measurementId: "G-SYWPN3W2MK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
