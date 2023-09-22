// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOX_YMKGi_qS03A8b8HYpaZwKElQnchBo",
  authDomain: "first-project-11f75.firebaseapp.com",
  projectId: "first-project-11f75",
  storageBucket: "first-project-11f75.appspot.com",
  messagingSenderId: "270444353082",
  appId: "1:270444353082:web:3db9dc08a8d0eeb6334703",
  measurementId: "G-921GGM29V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const Provider = new GoogleAuthProvider();

export const firestore = getFirestore(app);

export const storage = getStorage(app);

export const signInWithGoogle = async () => {
    return await signInWithPopup(auth, Provider);
}

const analytics = getAnalytics(app);