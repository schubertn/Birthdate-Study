import { Link } from "react-router-dom";
import { useState } from "react";
import { updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { testDocRef } from "../firebase";
import InputVersionOne from "../components/InputVersionOne";
import InputVersionTwo from "../components/InputVersionTwo";
import DateInput from "../components/DateInput";

export default function Study() {
  var progress = parseInt(localStorage.getItem("progress")) || 20;
  progress = progress + 10;
  var counter = parseInt(localStorage.getItem("counter")) || 0;

  const [renderOne, setRenderOne] = useState(true);
  const [renderTwo, setRenderTwo] = useState(false);
  const [inputVersion, setInputVersion] = useState(1);
  const [date, setDate] = useState("11.01.1011");


  const [inputDate, setInputDate] = useState(1);
  const onInputDate = (date) => {
    setInputDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let dbCorrect = false;

    if (inputDate == "1") {
      dbCorrect = true;
    }

    setInputVersion(2);
    setDate("22.02.2022");


    // upload is currently too slow
    try {
      await updateDoc(testDocRef, {
        testing: "testtest",
        "input1.input": inputDate,
        "input1.correct": dbCorrect,
      });
      console.log("Document written with ID: ", testDocRef.id);
      console.log("Date: ", date);
      console.log("InputVersion: ", inputVersion);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    

    /**
    if (renderOne == true) {
      setRenderOne(false);
      setRenderTwo(true);
    } else {
      setRenderOne(true);
      setRenderTwo(false);
    }
    */
  };
 /**
  let input;

  

  if(inputVersion == 0) {
    input = <DateInput inputVersion = {1} date={date} onInputDate={onInputDate}/>
  } else if(inputVersion == 1) {
    input = <DateInput inputVersion = {2} date={date} onInputDate={onInputDate}/>
  } else if(inputVersion == 2) {
    input = <DateInput inputVersion = {3} date={date} onInputDate={onInputDate}/>
  }

  */
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
          
          
          <DateInput inputVersion = {inputVersion} date={date} onInputDate={onInputDate}/>
            
            <div className="col-auto">
              <button
                className="btn btn-custom"
                onClick={(e) => {
                  localStorage.setItem("progress", progress.toString());
                  localStorage.setItem("counter", counter.toString());
                  handleSubmit(e);
                  // TODO: clear textfield
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

//<DateInput inputVersion = {inputVersion} date={date} onInputDate={onInputDate}/>

// {renderOne && <InputVersionOne onInputDate={onInputDate} />}
// {renderTwo && <InputVersionTwo onInputDate={onInputDate} />}

// {inputVersion == 1 && <InputVersionOne date={date} onInputDate={onInputDate} />}
// {inputVersion == 2 && <InputVersionTwo date={date} onInputDate={onInputDate} />}