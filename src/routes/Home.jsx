import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div className="progress-bar" style={{ width: "10%" }}>
            10%
          </div>
        </div>
      </div>

      <div className="p-5 my-4 bg-light rounded-3">
        <h1>Studie zur Eingabe von Geburtsdaten</h1>
        <p>
          Hier ist die Startseite. Hier werden Sie eine Einleitung und weitere
          Informationen zur Studie lesen.
        </p>

        <Link to="/Instructions" className="btn btn-primary" role="button">
          Weiter zur Anleitung
        </Link>
      </div>
    </div>
  );
};

export default Home;
