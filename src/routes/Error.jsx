import { useRouteError, Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="p-5 m-4 bg-light rounded-3">
      <h3>Ups!</h3>
      <p>
        Ein unerwarteter Fehler ist aufgetreten. Bitte kehren Sie zurück zum
        Beginn der Studie.
      </p>
      <Link to="/" className="btn btn-custom" role="button">
        Zurück zur Startseite
      </Link>
    </div>
  );
}
