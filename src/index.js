import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAvUPBZABNBdyUXUyo2GUNPQVcTXjQK2Q",
  authDomain: "proyecto-react-01-3ddfa.firebaseapp.com",
  projectId: "proyecto-react-01-3ddfa",
  storageBucket: "proyecto-react-01-3ddfa.appspot.com",
  messagingSenderId: "1095143929213",
  appId: "1:1095143929213:web:64101f03a3166b1ae78814"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

