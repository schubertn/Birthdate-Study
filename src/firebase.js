// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVa7qvhLgjvWNoserRrEGztH0hXwwSt6E",
  authDomain: "birthdate-study.firebaseapp.com",
  projectId: "birthdate-study",
  storageBucket: "birthdate-study.appspot.com",
  messagingSenderId: "328086566717",
  appId: "1:328086566717:web:93a6e15eb350e0b3247754",
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
// export firestore database
// it will be imported into your react app whenever it is needed
export const db = getFirestore(app);
