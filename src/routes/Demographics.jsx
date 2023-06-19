import { Link, Navigate, useLocation } from "react-router-dom";

export default function Demographics() {
  localStorage.clear();

  // prevent user from manually navigating here
  if (useLocation().state?.previousComponent != "studyPartTwo") {
    return <Navigate to="/Error" />;
  } else {
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
          <h3 className="text-center text-md-start">Demographische Daten</h3>
          <p className="text-center text-md-start">
            Hier werden vielleicht noch weitere Fragen gestellt.
          </p>
          <Link
            to="/End"
            state={{ previousComponent: "demographics" }}
            className="btn btn-custom"
            role="button"
          >
            Beenden
          </Link>
        </div>
      </div>
    );
  }
}
