// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY37fxxMWeQ0z8wn-dkBwj-IfgrOC-VOk",
  authDomain: "sunglass-house-a89b0.firebaseapp.com",
  projectId: "sunglass-house-a89b0",
  storageBucket: "sunglass-house-a89b0.appspot.com",
  messagingSenderId: "282801266723",
  appId: "1:282801266723:web:4d3f9407c1a1fb46b1d196",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth