import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getFirestore,
  doc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// the app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVa7qvhLgjvWNoserRrEGztH0hXwwSt6E",
  authDomain: "birthdate-study.firebaseapp.com",
  projectId: "birthdate-study",
  storageBucket: "birthdate-study.appspot.com",
  messagingSenderId: "328086566717",
  appId: "1:328086566717:web:93a6e15eb350e0b3247754",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// export firestore database
export const db = getFirestore(app);

// for each user we create a new document with a random id in the study collection
export const docRef = doc(collection(db, "study"));