// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth }    from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage }  from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2ckTFEHHstww4vQPbzyGlH68q8nAKSGY",
  authDomain: "my-curiosity-blog.firebaseapp.com",
  projectId: "my-curiosity-blog",
  storageBucket: "my-curiosity-blog.firebasestorage.app",
  messagingSenderId: "162369255785",
  appId: "1:162369255785:web:1b19c5039c98eb694ae5f8",
  measurementId: "G-VKGBC0ZG6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
