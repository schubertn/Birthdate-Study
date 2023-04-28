//import { useState } from "react";
import { Link } from "react-router-dom";

/**
function setTestValues() {
  var btnTypes = [
    "btn btn-primary",
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-danger",
  ];
  btnType = btnTypes[Math.floor(Math.random() * btnTypes.length)];
  var dates = ["11.01.1011", "22.02.2022", "33.03.3033"];
  randomDate = dates[Math.floor(Math.random() * dates.length)];
}
*/

export default function Study() {
  var progress = parseInt(localStorage.getItem("progress")) || 20;
  progress = progress + 10;
  var counter = parseInt(localStorage.getItem("counter")) || 0;

  /**
  var btnTypes = [
    "btn btn-primary",
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-danger",
  ];
  var dates = ["11.01.1011", "22.02.2022", "33.03.3033"];
  const [color, setColor] = useState("btn btn-primary");
  const [date, setDate] = useState("22.02.2022");
  */

  if (counter >= 5) {
    //localStorage.removeItem("progress");
    //localStorage.removeItem("counter");
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
          <form>
            <p>Datum</p>
            <div className="row align-items-center g-3">
              <div className="col-auto">
                <input type="text" id="typeText" className="form-control" />
                <label className="form-label" htmlFor="typeText">
                  Testtext
                </label>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-custom"
                  onClick={() => {
                    localStorage.setItem("progress", progress.toString());
                    localStorage.setItem("counter", counter.toString());
                  }}
                >
                  Testbutton
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
