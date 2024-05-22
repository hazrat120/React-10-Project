// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgA48girNXc9d0G8wHEBoBU2som_brRJs",
  authDomain: "vite-contact-44283.firebaseapp.com",
  projectId: "vite-contact-44283",
  storageBucket: "vite-contact-44283.appspot.com",
  messagingSenderId: "91042702197",
  appId: "1:91042702197:web:5e5de251ad749f8666293c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
