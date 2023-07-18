import { Navigate, useLocation } from "react-router-dom";

/**
 * The final page of the application.
 */
export default function End() {
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
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "100%" }}
            >
              100%
            </div>
          </div>
        </div>
        <div className="p-md-5 p-2 m-md-4 m-1 mb-3 bg-light rounded-3">
          <h3 className="text-center text-md-start">
            Vielen Dank für Ihre Teilnahme!
          </h3>
          <p className="text-center text-md-start">Studie beendet! Danke!</p>
        </div>
      </div>
    );
  }
}
