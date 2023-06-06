import { Link } from "react-router-dom";

export default function Demographics() {
  localStorage.clear();

  return (
    <div className="container">
      <div className="m-4">
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

      <div className="p-5 m-4 bg-light rounded-3">
        <h3>Demographische Daten</h3>
        <p>Hier werden vielleicht noch weitere Fragen gestellt.</p>
        <Link to="/End" className="btn btn-custom" role="button">
          Beenden
        </Link>
      </div>
    </div>
  );
}
