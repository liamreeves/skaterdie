import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGev_d529VNDBNCXvvTLhTgCc6Yub6_g8",
  authDomain: "skaterdie.firebaseapp.com",
  projectId: "skaterdie",
  storageBucket: "skaterdie.appspot.com",
  messagingSenderId: "310354133895",
  appId: "1:310354133895:web:8c713724998290ef7f8922",
  databaseURL: "https://skaterdie-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);


// Initialize Firebase Auth
const auth = getAuth();

export { auth };