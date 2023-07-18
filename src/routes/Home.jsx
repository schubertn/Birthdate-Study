import { Link } from "react-router-dom";

/**
 * The start screen of the application.
 */
export default function Home() {
  sessionStorage.clear();

  return (
    <div className="container">
      <div className="p-2 m-md-4 m-1 mb-3">
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

      <div className="p-md-5 p-2 m-md-4 m-1 mb-3 bg-light rounded-3">
        <h3 className="text-center text-md-start">Herzlich Willkommen</h3>
        <p className="text-center text-md-start">
          Ich führe zur derzeit eine Studie im Rahmen meiner Master-Arbeit
          durch. Dazu beschäftige ich mich mit der Eingabe von Geburtsdaten in
          Online-Formularen. Die Studie nimmt in etwa 10 Minuten in Anspruch und
          ich wäre Ihnen für Ihre Teilnahme sehr dankbar. Die Angabe von
          persönlichen Daten ist dazu nicht nötig und die Ergebnisse der Studie
          werden anonym gespeichert und können Ihnen später nicht zugeordnet
          werden.
        </p>
        <p className="text-center text-md-start">
          Durch das Klicken auf <q>Weiter zur Anleitung</q> bestätigen Sie Ihr
          Einverständnis zur Teilnahme. Es folgt eine genauere Anleitung zur
          Durchführung der Studie.
        </p>
        <div className="text-center text-md-start">
          <Link
            to="/Instructions"
            state={{ previousComponent: "home" }}
            className="btn btn-custom"
            role="button"
          >
            Weiter zur Anleitung
          </Link>
        </div>
      </div>
    </div>
  );
}
