import { Link } from "react-router-dom";

export default function Demographics() {
  localStorage.clear();

  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div className="progress-bar" style={{ width: "95%" }}>
            95%
          </div>
        </div>
      </div>

      <div className="p-5 my-4 bg-light rounded-3">
        <h1>Studie zur Eingabe von Geburtsdaten</h1>
        <p>Hier werden weitere Fragen gestellt.</p>
        <Link to="/End" className="btn btn-custom" role="button">
          Beenden
        </Link>
      </div>
    </div>
  );
}
