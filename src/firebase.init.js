// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjwSrJ2phRx1C4iIPcWy56VDV-8cdyMnY",
  authDomain: "genius-car-services-653f5.firebaseapp.com",
  projectId: "genius-car-services-653f5",
  storageBucket: "genius-car-services-653f5.appspot.com",
  messagingSenderId: "167355830530",
  appId: "1:167355830530:web:af583fd19b25881431321b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
