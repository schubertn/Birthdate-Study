import { useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { docRef } from "../firebase";
import PartTwoInput from "../components/PartTwoInput";

/**
 * Second part of the study.
 * Displays an image of each input method. For each method the participants
 * have to answer two questions using radio buttons with a scale from 1 to 5.
 */
export default function StudyPartTwo() {
  // bool to disable the submit-button as long as the input is not complete
  const [disabled, setDisabled] = useState(true);

  /** array containing the selected values from the radio buttons for the efficiency question */
  var buttonFastArray =
    JSON.parse(window.sessionStorage.getItem("buttonFastArray")) ||
    new Array(4).fill(null);

  /** array containing the selected values from the radio buttons for the simplicity question */
  var buttonEasyArray =
    JSON.parse(window.sessionStorage.getItem("buttonEasyArray")) ||
    new Array(4).fill(null);

  /**
   * Called every time a new radio button is selected and saves the new value.
   * Enables submit-button if necessary.
   */
  const onButtonChange = (buttonValue, method, type) => {
    if (type == "fast") {
      switch (method) {
        case "calendar":
          buttonFastArray[0] = buttonValue;
          break;
        case "dropdown":
          buttonFastArray[1] = buttonValue;
          break;
        case "oneTextbox":
          buttonFastArray[2] = buttonValue;
          break;
        case "splitTextbox":
          buttonFastArray[3] = buttonValue;
          break;
        default:
          console.log("Error");
      }
    } else {
      switch (method) {
        case "calendar":
          buttonEasyArray[0] = buttonValue;
          break;
        case "dropdown":
          buttonEasyArray[1] = buttonValue;
          break;
        case "oneTextbox":
          buttonEasyArray[2] = buttonValue;
          break;
        case "splitTextbox":
          buttonEasyArray[3] = buttonValue;
          break;
        default:
          console.log("Error");
      }
    }

    // enable submit button once all radio buttons are checked and temporarily store the results
    if (!buttonFastArray.includes(null) && !buttonEasyArray.includes(null)) {
      window.sessionStorage.setItem(
        "buttonFastArray",
        JSON.stringify(buttonFastArray)
      );
      window.sessionStorage.setItem(
        "buttonEasyArray",
        JSON.stringify(buttonEasyArray)
      );
      setDisabled(false);
    }
  };

  /** Called when the user presses the submit button. Stores the results in firestore. */
  const handleSubmit = async () => {
    buttonFastArray = JSON.parse(
      window.sessionStorage.getItem("buttonFastArray")
    );
    buttonEasyArray = JSON.parse(
      window.sessionStorage.getItem("buttonEasyArray")
    );

    // update data in firestore
    try {
      await updateDoc(docRef, {
        "preferenceFast.calendar": buttonFastArray[0],
        "preferenceFast.dropdown": buttonFastArray[1],
        "preferenceFast.oneTextbox": buttonFastArray[2],
        "preferenceFast.splitTextbox": buttonFastArray[3],
        "preferenceEasy.calendar": buttonEasyArray[0],
        "preferenceEasy.dropdown": buttonEasyArray[1],
        "preferenceEasy.oneTextbox": buttonEasyArray[2],
        "preferenceEasy.splitTextbox": buttonEasyArray[3],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // prevent user from manually navigating to the second part of the study
  if (useLocation().state?.previousComponent != "studyPartOne") {
    return <Navigate to="/Error" />;
  }
  // display the second part of the study
  else {
    return (
      <div className="container">
        <div className="p-2 m-md-4 m-1 mb-3">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Fortschritt der Studie"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>
        </div>

        <div className="p-md-5 p-2 m-md-4 m-1 mb-3 bg-light rounded-3">
          <h3 className="text-center text-md-start">
            Persönliche Einschätzung
          </h3>
          <p className="text-center text-md-start">
            Bitte bewerten Sie die im Folgenden abgebildeten Eingabemethoden auf
            einer Skala von 1 &#40;trifft überhaupt nicht zu&#41; bis 5
            &#40;trifft vollkommen zu&#41;.
          </p>
        </div>
        <PartTwoInput method="calendar" onButtonChange={onButtonChange} />
        <PartTwoInput method="dropdown" onButtonChange={onButtonChange} />
        <PartTwoInput method="oneTextbox" onButtonChange={onButtonChange} />
        <PartTwoInput method="splitTextbox" onButtonChange={onButtonChange} />
        <div className="p-md-5 p-2 m-md-4 m-1 mb-3">
          <Link
            to="/End"
            state={{ previousComponent: "studyPartTwo" }}
            className={disabled ? "btn btn-custom-disabled" : "btn btn-custom"}
            role="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            Absenden
          </Link>
        </div>
      </div>
    );
  }
}
