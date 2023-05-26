import { Link } from "react-router-dom";
import PartTwoInput from "../components/PartTwoInput";

export default function StudyPartTwo() {
  return (
    <div className="container">
      <div className="m-4">
        <div className="progress">
          <div className="progress-bar" style={{ width: "90%" }}>
            90%
          </div>
        </div>
      </div>
      <div className="p-5 my-4 bg-light rounded-3">
        <h1>Studie zur Eingabe von Geburtsdaten</h1>
        <p>
          Bitte bewerten Sie die im Folgenden abgebildeten Eingabemethoden auf
          einer Skala von 1 &#40;trifft überhaupt nicht zu&#41; bis 6
          &#40;trifft vollkommen zu&#41;.
        </p>
        <PartTwoInput method="calendar"/>
        <PartTwoInput method="dropdown"/>
        <PartTwoInput method="oneTextbox"/>
        <PartTwoInput method="splitTextbox"/>
        <Link to="/Demographics" className="btn btn-custom" role="button">
          Absenden
        </Link>
      </div>
    </div>
  );
}
