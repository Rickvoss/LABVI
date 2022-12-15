// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz78jLNQk5ZSt_rRuVDizzDPt0xTBWfaw",
  authDomain: "labvi-7b35c.firebaseapp.com",
  projectId: "labvi-7b35c",
  storageBucket: "labvi-7b35c.appspot.com",
  messagingSenderId: "426240117360",
  appId: "1:426240117360:web:2eea08978370d67b3f82b5",
  measurementId: "G-5Q3GXJSKHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);