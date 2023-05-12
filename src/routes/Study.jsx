import { Link } from "react-router-dom";
import { useState } from "react";
import { updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { testDocRef } from "../firebase";
import DateInput from "../components/DateInput";

const inputVariants = ["calender", "textbox", "dropdown"];
const dates = ["11.01.1011", "22.02.2022", "33.03.3033"];

export default function Study() {
  // TODO: progress could maybe be calculated using counter
  var progress = parseInt(localStorage.getItem("progress")) || 20;
  progress = progress + 10;
  var counter = parseInt(localStorage.getItem("counter")) || 0;

  const [inputVersion, setInputVersion] = useState(randomizeInputVersion());
  const [date, setDate] = useState(randomizeDate());

  const [inputDate, setInputDate] = useState("");
  const onInputDate = (date) => {
    setInputDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let dbCorrect = false;
    if (inputDate == "1") {
      dbCorrect = true;
    }

    setInputVersion(randomizeInputVersion());
    setDate(randomizeDate());

    try {
      await updateDoc(testDocRef, {
        testing: "testtest",
        "input1.input": inputDate,
        "input1.correct": dbCorrect,
      });
      console.log("Document written with ID: ", testDocRef.id);
      console.log("Date: ", date);
      console.log("InputVersion: ", inputVersion);
      console.log("Counter", counter);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  function randomizeInputVersion() {
    let randomInputVersion =
      inputVariants[Math.floor(Math.random() * inputVariants.length)];
    return randomInputVersion;
  }

  function randomizeDate() {
    let randomDate = dates[Math.floor(Math.random() * dates.length)];
    return randomDate;
  }

  if (counter >= 5) {
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
    counter = counter + 1;
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
              inputVersion={inputVersion}
              date={date}
              onInputDate={onInputDate}
            />

            <div className="col-auto">
              <button
                className="btn btn-custom"
                onClick={(e) => {
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
