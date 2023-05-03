import { Link } from "react-router-dom";
import { useState } from "react";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { db } from "../firebase";

export default function Study() {
  var progress = parseInt(localStorage.getItem("progress")) || 20;
  progress = progress + 10;
  var counter = parseInt(localStorage.getItem("counter")) || 0;

  const [inputText, setInputText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "testing"), {
        text: inputText,
      });
      console.log("Document written with ID: ", docRef.id);

      // temporary solution to upload data and reload page
      window.location.reload(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <p>Datum</p>
            <div className="row align-items-center g-3">
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Firebase Test"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <button
                  type="submit"
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
