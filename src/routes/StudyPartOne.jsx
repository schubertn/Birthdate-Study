import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { docRef } from "../firebase";
import DateInput from "../components/DateInput";

/** array of all possible input methods, ordered alphabetically */
const inputMethods = ["calendar", "dropdown", "oneTextbox", "splitTextbox"];
/** array of all possible dates */
const dates = ["17.11.2020", "22.10.1974", "03.04.1998", "11.02.2003"];

/**
 * First part of the study.
 * Displays a date the participants have to put in and measures the time and correctness.
 * The result are stored by updating the firestore document each time
 * the participant pressed the "Continue" button. The next date and input method are shown afterwards,
 * their order is random. There are sixteen iterations in total.
 */
export default function StudyPartOne() {
  // bool to disable the continue-button as long as there is no input
  const [disabled, setDisabled] = useState(true);

  // counter for number of iterations of the study (currently there are 16 in total)
  const [counter, setCounter] = useState(0);

  /** value for the progressbar */
  var progress = counter * 5 + 15;

  // get the start time only once when the page is first loaded and otherwise load it from sessionStorage
  if (!sessionStorage.getItem("startTime")) {
    sessionStorage.setItem("startTime", performance.now().toString());
  }

  /** Return a shuffled array of all possible combinations of dates and input methods. */
  const createShuffledArray = () => {
    let newArray = createCombinationsArray();
    shuffleArray(newArray);
    return newArray;
  };

  /** Return an array with all possible combinations of dates and input methods. */
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

  /** Shuffle an array using the Fisher-Yates algorithm. */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  /** array with all combinations of dates and input methods that have not been used yet */
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

  /** Set the date the user entered and test if the continue-button can be enabled. */
  const onInputDate = (date) => {
    setInputDate(date);
    // allow button to be clicked if all fields have been filled
    if (
      !date.includes("TT") &&
      !date.includes("MM") &&
      !date.includes("JJJJ")
    ) {
      setDisabled(false);
    }
  };

  /** Calculate the time the user needs until continue-button is pressed. */
  const calculateElapsedTime = () => {
    const startTime = parseFloat(sessionStorage.getItem("startTime")) / 1000.0;
    const endTime = parseFloat(sessionStorage.getItem("endTime")) / 1000.0;
    var timeNeeded = endTime - startTime;
    timeNeeded = Math.round(timeNeeded * 1e2) / 1e2; // round to two decimal places
    sessionStorage.removeItem("startTime"); // remove the old start time before the next iteration
    return timeNeeded;
  };

  /** Called when the user presses the submit button. Stores the results to firestore. */
  const handleSubmit = async (e) => {
    e.preventDefault();

    /** the date displayed in this iteration */
    let date = unusedCombinations[0].date;
    /** the input method used in this iteration */
    let input = unusedCombinations[0].inputMethod;

    // remove the used combination (which is the first on in the array) and store the updated array
    unusedCombinations.shift();
    window.sessionStorage.setItem(
      "unusedCombinations",
      JSON.stringify(unusedCombinations)
    );

    /** the correctness of the user input */
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

  // prevent user from manually navigating to the study without reading the instructions
  if (useLocation().state?.previousComponent != "instructions") {
    return <Navigate to="/Error" />;
  }
  // go to the next screen if all sixteen possible combinations of date and input method have been shown
  else if (counter >= 16) {
    return (
      <Navigate
        to="/StudyPartTwo"
        state={{ previousComponent: "studyPartOne" }}
      />
    );
  }
  // display all 16 possible combinations of the 4 dates and 4 input methods
  else {
    return (
      <div className="container">
        <div className="p-2 m-md-4 m-1 mb-3">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Fortschritt der Studie"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "" + progress + "%" }}
            >
              {progress} %
            </div>
          </div>
        </div>

        <div className="p-md-5 p-2 m-md-4 m-1 mb-3 bg-light rounded-3">
          <div className="row align-items-center g-3">
            <DateInput
              key={counter} // used to reset state (so that input field is cleared every time)
              inputMethod={unusedCombinations[0].inputMethod}
              date={unusedCombinations[0].date}
              onInputDate={onInputDate}
            />
            <div className="text-start text-md-start">
              <button
                type="button"
                className="btn btn-custom"
                disabled={disabled}
                aria-disabled={disabled}
                onClick={(e) => {
                  sessionStorage.setItem(
                    "endTime",
                    performance.now().toString()
                  );
                  setCounter(counter + 1);
                  setDisabled(true);
                  sessionStorage.setItem("progress", progress.toString());
                  sessionStorage.setItem("counter", counter.toString());
                  handleSubmit(e);
                }}
              >
                Weiter
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
