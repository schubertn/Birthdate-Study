import { Navigate, useLocation } from "react-router-dom";

export default function End() {
  // prevent user from manually navigating here
  if (useLocation().state?.previousComponent != "demographics") {
    return <Navigate to="/Error" />;
  } else {
    return (
      <div className="container">
        <div className="m-4">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Fortschritt der Studie"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "100%" }}
            >
              100%
            </div>
          </div>
        </div>

        <div className="p-5 m-4 bg-light rounded-3">
          <h3>Vielen Dank für Ihre Teilnahme!</h3>
          <p>Studie beendet! Danke!</p>
        </div>
      </div>
    );
  }
}
