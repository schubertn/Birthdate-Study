import { Link } from "react-router-dom";
import { useState } from "react";
import { updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { docRef } from "../firebase";
import DateInput from "../components/DateInput";

// array of all possible input methods
const inputMethods = ["calendar", "dropdown", "oneTextbox", "splitTextbox"];
// array of all possible dates
const dates = ["11.01.1011", "22.02.2022", "33.03.3033"];

export default function Study() {
  // counter for number of iterations of the study (currently there are 9)
  const [counter, setCounter] = useState(0);

  // value for the progressbar
  // TODO: change depending on final number of iterations
  var progress = counter * 10 + 30;

  // get the time only once when the page is first loaded
  if (!sessionStorage.getItem("startTime")) {
    sessionStorage.setItem("startTime", performance.now().toString());
  }

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
    JSON.parse(window.sessionStorage.getItem("unusedCombinations")) ||
    createShuffledArray();

  // store the array
  window.sessionStorage.setItem(
    "unusedCombinations",
    JSON.stringify(unusedCombinations)
  );

  // the date the user will enter
  const [inputDate, setInputDate] = useState("");
  const onInputDate = (date) => {
    setInputDate(date);
  };

  // calculate the time the user needs until button is pressed
  const calculateElapsedTime = () => {
    const startTime = parseFloat(sessionStorage.getItem("startTime")) / 1000.0;
    const endTime = parseFloat(sessionStorage.getItem("endTime")) / 1000.0;
    var timeNeeded = endTime - startTime;
    timeNeeded = Math.round(timeNeeded * 1e2) / 1e2; // round to two decimal places
    sessionStorage.removeItem("startTime"); // remove this value for the next iteration
    return timeNeeded;
  };

  // called when the user presses the submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    // the displayed date and the used input method in this iteration
    let date = unusedCombinations[0].date;
    let input = unusedCombinations[0].inputMethod;

    // remove the used combination (which is the first on in the array) and store the updated array
    unusedCombinations.shift();
    window.sessionStorage.setItem(
      "unusedCombinations",
      JSON.stringify(unusedCombinations)
    );

    // bool for correctness of user input
    const isInputCorrect = inputDate == date;

    // needed for storing the results in firestore
    const firestoreFieldName = input + dates.indexOf(date);

    try {
      await updateDoc(docRef, {
        [`${firestoreFieldName}.time`]: calculateElapsedTime(),
        [`${firestoreFieldName}.input`]: inputDate,
        [`${firestoreFieldName}.correct`]: isInputCorrect,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log("User input: ", inputDate);
      console.log("Date: ", date);
      console.log("InputMethod: ", input);
      console.log("Correctness: ", isInputCorrect);
      console.log("Counter", counter);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // show all 12 possible combinations of the 3 dates and 4 input methods
  // afterwards go to next screen
  if (counter >= 12) {
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
              key={counter} // used to reset state (so that input field is cleared every time)
              inputMethod={unusedCombinations[0].inputMethod}
              date={unusedCombinations[0].date}
              onInputDate={onInputDate}
            />

            <div className="row align-items-center g-3">
              <div className="col-auto">
                <button
                  className="btn btn-custom"
                  onClick={(e) => {
                    sessionStorage.setItem(
                      "endTime",
                      performance.now().toString()
                    );
                    setCounter(counter + 1);
                    sessionStorage.setItem("progress", progress.toString());
                    sessionStorage.setItem("counter", counter.toString());
                    handleSubmit(e);
                  }}
                >
                  Testbutton
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
