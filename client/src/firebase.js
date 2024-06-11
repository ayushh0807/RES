// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "r-es-f26e8.firebaseapp.com",
  projectId: "r-es-f26e8",
  storageBucket: "r-es-f26e8.appspot.com",
  messagingSenderId: "370393736907",
  appId: "1:370393736907:web:c76c428acecf9524331d4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);