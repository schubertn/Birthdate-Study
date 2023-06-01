import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
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

// for each user we create a new document with a Frandom id in the study collection
export const docRef = doc(collection(db, "study"));

await setDoc(docRef, {
  timestamp: Date(),
  // input method calendar with date 11.01.1011
  calendar0: {
    time: null,
    input: null,
    correct: false,
  },
  // input method calendar with date 22.02.2022
  calendar1: {
    time: null,
    input: null,
    correct: false,
  },
  calendar2: {
    time: null,
    input: null,
    correct: false,
  },
  dropdown0: {
    time: null,
    input: null,
    correct: false,
  },
  dropdown1: {
    time: null,
    input: null,
    correct: false,
  },
  dropdown2: {
    time: null,
    input: null,
    correct: false,
  },
  oneTextbox0: {
    time: null,
    input: null,
    correct: false,
  },
  oneTextbox1: {
    time: null,
    input: null,
    correct: false,
  },
  oneTextbox2: {
    time: null,
    input: null,
    correct: false,
  },
  splitTextbox0: {
    time: null,
    input: null,
    correct: false,
  },
  splitTextbox1: {
    time: null,
    input: null,
    correct: false,
  },
  splitTextbox2: {
    time: null,
    input: null,
    correct: false,
  },
  // results from part two of the study
  preferenceFast: {
    calendar: null,
    dropdown: null,
    oneTextbox: null,
    splitTextbox: null,
  },
  preferenceEasy: {
    calendar: null,
    dropdown: null,
    oneTextbox: null,
    splitTextbox: null,
  },
  // TODO: add demographics
});
