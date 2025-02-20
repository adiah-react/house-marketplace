import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR1U1t_YZaMgioGGsordDEEDIfKJaYsBw",
  authDomain: "house-marketplace-app-e068d.firebaseapp.com",
  projectId: "house-marketplace-app-e068d",
  storageBucket: "house-marketplace-app-e068d.appspot.com",
  messagingSenderId: "630899793834",
  appId: "1:630899793834:web:b6f7cb3852aeba1234d5d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
