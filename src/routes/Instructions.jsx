import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div className="progress-bar" style={{ width: "20%" }}>
            20%
          </div>
        </div>
      </div>
      <div className="p-5 m-4 bg-light rounded-3">
        <h3>Anleitung</h3>
        <p>
          Hier folgt eine Anleitung zur Durchführung der Studie. Wenn Sie auf{" "}
          <q>Beginnen</q> drücken, dann beginnt die Studie. Juhu!
        </p>
        <Link to="/StudyPartOne" className="btn btn-custom" role="button">
          Beginnen
        </Link>
        <Link to="/" className="btn btn-custom" role="button">
          Zurück
        </Link>
      </div>
    </div>
  );
};

export default Instructions;
