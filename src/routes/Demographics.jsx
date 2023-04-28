import { Link } from "react-router-dom";

export default function Demographics() {
  localStorage.clear();

  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div className="progress-bar" style={{ width: "80%" }}>
            80%
          </div>
        </div>
      </div>

      <div className="p-5 my-4 bg-light rounded-3">
        <h1>Studie zur Eingabe von Geburtsdaten</h1>
        <p>
          Hier werden weitere Fragen gestellt. Es fehlt vorher noch die
          subjektive Einschätzung der Eingabemethoden.
        </p>

        <Link to="/Study" className="btn btn-primary" role="button">
          Test zurück zur Studie
        </Link>
      </div>
    </div>
  );
}
