import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUio5PrQgAgslewtw8xNH1MB1MsSzCfEg",
  authDomain: "jkt48-c9e60.firebaseapp.com",
  projectId: "jkt48-c9e60",
  storageBucket: "jkt48-c9e60.appspot.com",
  messagingSenderId: "388685448293",
  appId: "1:388685448293:web:832a23cdfef25692eb728c",
  measurementId: "G-XBTQ4PLDMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, app };