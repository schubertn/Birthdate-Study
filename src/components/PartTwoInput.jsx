import PropTypes from "prop-types";
import { useState } from "react";

PartTwoInput.propTypes = {
  method: PropTypes.string,
  onButtonChange: PropTypes.func,
};

/**
 * Component for the second part of the study.
 * Displays an image of the corresponding input method. For each method the participants
 * have to answer two questions using radio buttons with a scale from 1 to 5.
 * The selected values are sent to the StudyPartTwo component.
 */
export default function PartTwoInput(props) {
  /** image path that differs depending on the input method */
  const imagePath = "/" + props.method + ".jpeg";

  // selected radio button for the efficiency question (at the beginning none is selected)
  const [buttonFast, setButtonFast] = useState(0);
  // selected radio button for the simplicity question (at the beginning none is selected)
  const [buttonEasy, setButtonEasy] = useState(0);

  /**
   * Update selected radio button for the efficiency question
   * and send the selected value to the StudyPartTwo component.
   */
  const handleFastButtonChange = (buttonValue) => {
    setButtonFast(buttonValue);
    props.onButtonChange(buttonValue, props.method, "fast");
  };

  /**
   * Update selected radio button for the simplicity question
   * and send the selected value to the StudyPartTwo component.
   */
  const handleEasyButtonChange = (buttonValue) => {
    setButtonEasy(buttonValue);
    props.onButtonChange(buttonValue, props.method, "easy");
  };

  return (
    <div className="p-md-5 p-2 m-md-4 m-1 mb-3 bg-light rounded-3">
      <div className="row align-items-center">
        <div className="col-md-4 col-10 offset-md-0 offset-1">
          <div className="card mb-2 mb-md-0 shadow">
            <img
              src={imagePath}
              className="card-img-fluid img-thumbnail"
              alt={"Ein Screenshot der Eingabemethode " + props.method}
            />
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card mb-2 mb-md-0 shadow">
            <div className="card-body">
              <p className="card-text">
                Mit dieser Eingabemethode war die Eingabe des Datums für mich
                schnell und effizient möglich.
              </p>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "fast"}
                  value="fast1"
                  id="fast1"
                  checked={buttonFast == 1}
                  onChange={() => handleFastButtonChange(1)}
                />
                <label className="form-check-label" htmlFor="fast1">
                  1 - stimme überhaupt nicht zu
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "fast"}
                  value="fast2"
                  id="fast2"
                  checked={buttonFast == 2}
                  onChange={() => handleFastButtonChange(2)}
                />
                <label className="form-check-label" htmlFor="fast2">
                  2 - stimme eher nicht zu
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "fast"}
                  value="fast3"
                  id="fast3"
                  checked={buttonFast == 3}
                  onChange={() => handleFastButtonChange(3)}
                />
                <label className="form-check-label" htmlFor="fast3">
                  3 - neutral
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "fast"}
                  value="fast4"
                  id="fast4"
                  checked={buttonFast == 4}
                  onChange={() => handleFastButtonChange(4)}
                />
                <label className="form-check-label" htmlFor="fast4">
                  4 - stimme eher zu
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "fast"}
                  value="fast5"
                  id="fast5"
                  checked={buttonFast == 5}
                  onChange={() => handleFastButtonChange(5)}
                />
                <label className="form-check-label" htmlFor="fast5">
                  5 - stimme vollkommen zu
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card mb-2 mb-md-0 shadow">
            <div className="card-body">
              <p className="card-text">
                Mit dieser Eingabemethode war die Eingabe des Datums für mich
                einfach und nicht zu komplex.
              </p>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "easy"}
                  value="easy1"
                  id="easy1"
                  checked={buttonEasy == 1}
                  onChange={() => handleEasyButtonChange(1)}
                />
                <label className="form-check-label" htmlFor="easy1">
                  1 - stimme überhaupt nicht zu
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "easy"}
                  value="easy2"
                  id="easy2"
                  checked={buttonEasy == 2}
                  onChange={() => handleEasyButtonChange(2)}
                />
                <label className="form-check-label" htmlFor="easy2">
                  2 - stimme eher nicht zu
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "easy"}
                  value="easy3"
                  id="easy3"
                  checked={buttonEasy == 3}
                  onChange={() => handleEasyButtonChange(3)}
                />
                <label className="form-check-label" htmlFor="easy3">
                  3 - neutral
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "easy"}
                  value="easy4"
                  id="easy4"
                  checked={buttonEasy == 4}
                  onChange={() => handleEasyButtonChange(4)}
                />
                <label className="form-check-label" htmlFor="easy4">
                  4 - stimme eher zu
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name={props.method + "easy"}
                  value="easy5"
                  id="easy5"
                  checked={buttonEasy == 5}
                  onChange={() => handleEasyButtonChange(5)}
                />
                <label className="form-check-label" htmlFor="easy5">
                  5 - stimme vollkommen zu
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
