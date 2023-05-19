import { Link } from "react-router-dom";
import { useState } from "react";
import {
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { db } from "../firebase";
import DateInput from "../components/DateInput";

const inputMethods = ["calender", "dropdown", "textbox"];
const dates = ["11.01.1011", "22.02.2022", "33.03.3033"];

export default function Study() {
  // TODO: progress could maybe be calculated using counter
  var progress = parseInt(localStorage.getItem("progress")) || 20;
  progress = progress + 10;
  //var counter = parseInt(localStorage.getItem("counter")) || 0;
  const [counter, setCounter] = useState(0);

  // create a shuffled array of all combinations of dates and input methods
  const createShuffledArray = () => {
    let newArray = createCombinationsArray();
    shuffleArray(newArray);
    return newArray;
  };

  // create an array with all combinations of dates and input methods
  const createCombinationsArray = () => {
    const combArray = [];
    for (let i = 0; i < dates.length; i++) {
      for (let j = 0; j < inputMethods.length; j++) {
        let arrayObject = {
          date: dates[i],
          inputMethod: inputMethods[j],
        };
        combArray.push(arrayObject);
      }
    }
    return combArray;
  };

  // shuffle an array using the Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  // array with all combinations of dates and input methods that have not been used yet
  var unusedCombinations =
    JSON.parse(window.localStorage.getItem("unusedCombinations")) ||
    createShuffledArray();

  // store the array
  window.localStorage.setItem(
    "unusedCombinations",
    JSON.stringify(unusedCombinations)
  );

  const [inputDate, setInputDate] = useState("");
  const onInputDate = (date) => {
    setInputDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: test for correctness of input
    let dbCorrect = false;
    if (inputDate == "1") {
      dbCorrect = true;
    }

    let date = unusedCombinations[0].date;
    let input = unusedCombinations[0].inputMethod;
    // remove the first combination and store the updated array
    unusedCombinations.shift();
    window.localStorage.setItem(
      "unusedCombinations",
      JSON.stringify(unusedCombinations)
    );

    // input name for db
    const inputName = input + dates.indexOf(date);

    try {
      await setDoc(doc(db, "user2", inputName), {
        inputMethod: input,
        inputDate: date,
        userInput: inputDate,
        correct: dbCorrect,
      });
      console.log("Document written with ID: ", inputName);
      // alternative: auto-generated ID instead of inputName as ID
      // const docRef = await addDoc(collection(db, "user2"), {...}
      // console.log("Document written with ID: ", docRef.id);

      console.log("Date: ", date);
      console.log("InputMethod: ", input);
      console.log("Counter", counter);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // show all 9 possible combinations of the 3 dates and 3 input methods
  // afterwards go to next screen
  if (counter >= 9) {
    return (
      <div className="container">
        <div className="p-5 my-4 bg-light rounded-3">
          <h1>Studie zur Eingabe von Geburtsdaten</h1>
          <p>
            Der erste Teil der Studie ist beendet. Jetzt kommen noch Fragen.
            Diese Seite ist nur vorübergehend hier. Später sollen an dieser
            Stelle einfach nur die Daten der Studie gespeichert werden.
          </p>
          <Link to="/Demographics" className="btn btn-custom" role="button">
            Weiter zu den Fragen
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="m-4">
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: "" + progress + "%" }}
            >
              {progress} %
            </div>
          </div>
        </div>
        <div className="p-5 my-4 bg-light rounded-3">
          <h1>Studie zur Eingabe von Geburtsdaten</h1>

          <div className="row align-items-center g-3">
            <DateInput
              key={counter} //used to reset state (so that textfield is cleared every time)
              inputMethod={unusedCombinations[0].inputMethod}
              date={unusedCombinations[0].date}
              onInputDate={onInputDate}
            />

            <div className="col-auto">
              <button
                className="btn btn-custom"
                onClick={(e) => {
                  setCounter(counter + 1);
                  localStorage.setItem("progress", progress.toString());
                  localStorage.setItem("counter", counter.toString());
                  handleSubmit(e);
                }}
              >
                Testbutton
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
