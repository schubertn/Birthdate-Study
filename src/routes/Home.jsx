import { Link } from "react-router-dom";

export default function Home() {
  sessionStorage.clear();

  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Fortschritt der Studie"
            aria-valuenow="5"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "5%" }}
          >
            5%
          </div>
        </div>
      </div>

      <div className="p-5 m-4 bg-light rounded-3">
        <h3>Herzlich Willkommen</h3>
        <p>
          Hier ist die Startseite. Hier werden Sie eine Einleitung und weitere
          Informationen zur Studie lesen.
        </p>
        <Link to="/Instructions" className="btn btn-custom" role="button">
          Weiter zur Anleitung
        </Link>
        <Link to="/StudyPartTwo" className="btn btn-custom" role="button">
          Testing StudyPartTwo
        </Link>
      </div>
    </div>
  );
}
