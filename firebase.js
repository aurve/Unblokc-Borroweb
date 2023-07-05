import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqwP8xcXbW-TxfSmLwIER3O8d1BUjkrxo",
  authDomain: "hackfest2023-m.firebaseapp.com",
  projectId: "hackfest2023-m",
  storageBucket: "hackfest2023-m.appspot.com",
  messagingSenderId: "801390007850",
  appId: "1:801390007850:web:f9c5015245bfeb0bfe1553",
  measurementId: "G-2MRVM61KYJ",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
const app2 = initializeApp(firebaseConfig);

export { auth };
export const db = getFirestore(app2);
