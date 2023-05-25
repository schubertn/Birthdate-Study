import { Link } from "react-router-dom";

export default function StudyPartTwo() {
  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div className="progress-bar" style={{ width: "90%" }}>
            90%
          </div>
        </div>
      </div>
      <div className="p-5 my-4 bg-light rounded-3">
        <h1>Studie zur Eingabe von Geburtsdaten</h1>
        <p>
          Hier folgt der zweite Teil der Studie, wo nach der subjektiven Meinung
          der Teilnehmer zu den Eingabemethoden gefragt wird.
        </p>
        <Link to="/Demographics" className="btn btn-custom" role="button">
          Absenden
        </Link>
      </div>
    </div>
  );
}
