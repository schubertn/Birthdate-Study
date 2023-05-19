// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

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

// for each user we create a new document with a random id, so the data is anonymous
export const docRef = doc(collection(db, "study"));
await setDoc(docRef, {
  // input method calender with date 11.01.1011
  calender0: {
    time: Date(),
    input: null,
    correct: false,
  },
  // input method calender with date 22.02.2022
  calender1: {
    time: Date(),
    input: null,
    correct: false,
  },
  calender2: {
    time: Date(),
    input: null,
    correct: false,
  },
  dropdown0: {
    time: Date(),
    input: null,
    correct: false,
  },
  dropdown1: {
    time: Date(),
    input: null,
    correct: false,
  },
  dropdown2: {
    time: Date(),
    input: null,
    correct: false,
  },
  textbox0: {
    time: Date(),
    input: null,
    correct: false,
  },
  textbox1: {
    time: Date(),
    input: null,
    correct: false,
  },
  textbox2: {
    time: Date(),
    input: null,
    correct: false,
  },
  age: null,
  gender: "",
  // more to come
});
