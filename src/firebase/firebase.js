// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-next-shopapp.firebaseapp.com",
  projectId: "react-next-shopapp",
  storageBucket: "react-next-shopapp.appspot.com",
  messagingSenderId: "955882976712",
  appId: "1:955882976712:web:7a3c10a1b2ff2502dbfcfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 인증, DB(FireStore), 스토리지(이미지...)
export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;
