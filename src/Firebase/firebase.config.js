// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4iLp3bCdy8-dCltYuGvtNiqu4MeGwrZ8",
  authDomain: "user-email-password-auth-13d6f.firebaseapp.com",
  projectId: "user-email-password-auth-13d6f",
  storageBucket: "user-email-password-auth-13d6f.appspot.com",
  messagingSenderId: "338117962530",
  appId: "1:338117962530:web:aa17a690bc55b50e52937b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;