import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1_DS9nCnjN8qoxldceUZlx0JpVWpCVzo",
  authDomain: "talita-cf92f.firebaseapp.com",
  projectId: "talita-cf92f",
  storageBucket: "talita-cf92f.appspot.com",
  messagingSenderId: "91424433366",
  appId: "1:91424433366:web:8a41cac0b2e4690e3cd577",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
