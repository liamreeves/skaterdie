import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGev_d529VNDBNCXvvTLhTgCc6Yub6_g8",
  authDomain: "skaterdie.firebaseapp.com",
  projectId: "skaterdie",
  storageBucket: "skaterdie.appspot.com",
  messagingSenderId: "310354133895",
  appId: "1:310354133895:web:8c713724998290ef7f8922"
};

initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth();

export { auth };