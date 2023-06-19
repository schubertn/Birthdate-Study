import { Link, useLocation, Navigate } from "react-router-dom";

export default function Instructions() {
  if (useLocation().state?.previousComponent != "home") {
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
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "10%" }}
            >
              10%
            </div>
          </div>
        </div>

        <div className="p-md-5 p-2 m-md-4 m-1 mb-3 bg-light rounded-3">
          <h3 className="text-center text-md-start">Anleitung</h3>
          <p className="text-center text-md-start">
            Die Studie besteht insgesamt aus ??? Durchgängen. In jedem Durchgang
            müssen Sie ein vorgegebenes Datum eingeben und anschließend durch
            einen <q>Weiter</q>-Button Ihre Eingabe bestätigen. Danach beginnt
            automatisch der nächste Durchgang. Dabei variieren in allen
            Durchgängen das Datum, welches Sie eingeben müssen, und auch die Art
            der Eingabe. Bitte versuchen Sie, das gegebene Datum korrekt und
            möglichst schnell einzugeben.
          </p>
          <p className="text-center text-md-start">
            Im Anschluss an die eigentlich Studie werden Sie außerdem nach Ihrer
            persönlichen Einschätzung zu den verschiedenen Eingabemethoden
            gefragt, die Sie auf einer Skala von 1 bis 5 bewerten können.
          </p>
          <p className="text-center text-md-start">
            Bitte stellen Sie sicher, dass während der gesamten Studie eine
            stabile Internetverbindung besteht und Sie die Studie nicht
            zwischenzeitlich unterbrechen.
          </p>
          <p className="text-center text-md-start">
            Wenn Sie auf <q>Beginnen</q> klicken, startet die eigentliche
            Studie.
          </p>
          <Link
            to="/StudyPartOne"
            state={{ previousComponent: "instructions" }}
            className="btn btn-custom"
            role="button"
          >
            Beginnen
          </Link>
          <Link to="/" className="btn btn-custom" role="button">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }
}
