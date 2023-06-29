import React from "react";
import "./index.css";
import App from "./App";
// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { createRoot } from "react-dom/client";

const firebaseConfig = {
  apiKey: "AIzaSyAq3PfN9UV-kiDCluVt9-afz9wmLj0fv4E",
  authDomain: "cart-68bd9.firebaseapp.com",
  projectId: "cart-68bd9",
  storageBucket: "cart-68bd9.appspot.com",
  messagingSenderId: "466911460199",
  appId: "1:466911460199:web:70664609c46b1d08a18dc2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

createRoot(document.getElementById("root")).render(<App />);
