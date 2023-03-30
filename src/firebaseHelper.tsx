// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh5JZFAlVivqWBKzvO8gWdbDBHtlSAwZM",
  authDomain: "portfolio-df2ca.firebaseapp.com",
  projectId: "portfolio-df2ca",
  storageBucket: "portfolio-df2ca.appspot.com",
  messagingSenderId: "376115011771",
  appId: "1:376115011771:web:5b5b0216336f14bf23499e",
  measurementId: "G-7Y3QG9WX5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
