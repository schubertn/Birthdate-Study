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
          Ich führe zur derzeit eine Studie im Rahmen meiner Master-Arbeit
          durch. Dazu beschäftige ich mich mit der Eingabe von Geburtsdaten in
          Online-Formularen. Die Studie nimmt in etwa ??? Minuten in Anspruch
          und ich wäre Ihnen für Ihre Teilnahme sehr dankbar. Die Angabe von
          persönlichen Daten ist dazu nicht nötig und die Ergebnisse der Studie
          werden anonym gespeichert und können Ihnen später nicht zugeordnet
          werden.
        </p>
        <p>
          Durch das Klicken auf <q>Weiter zur Anleitung</q> bestätigen Sie Ihr
          Einverständnis zur Teilnahme. Es folgt eine genauere Anleitung zur
          Durchführung der Studie.
        </p>
        <Link
          to="/Instructions"
          state={{ previousComponent: "home" }}
          className="btn btn-custom"
          role="button"
        >
          Weiter zur Anleitung
        </Link>
        <Link
          to="/StudyPartTwo"
          state={{ previousComponent: "studyPartOne" }}
          className="btn btn-custom"
          role="button"
        >
          Testing StudyPartTwo
        </Link>
      </div>
    </div>
  );
}
