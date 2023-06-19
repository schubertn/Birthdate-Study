import { useRouteError, Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="p-md-5 p-2 m-md-4 m-1 mb-3 bg-light rounded-3">
      <h3 className="text-center text-md-start">Ups!</h3>
      <p className="text-center text-md-start">
        Ein unerwarteter Fehler ist aufgetreten. Bitte kehren Sie zurück zum
        Beginn der Studie.
      </p>
      <Link to="/" className="btn btn-custom" role="button">
        Zurück zur Startseite
      </Link>
    </div>
  );
}
