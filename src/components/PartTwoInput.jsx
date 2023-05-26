import PropTypes from "prop-types";
// import { useState } from "react";

PartTwoInput.propTypes = {
  method: PropTypes.string,
  onInputDate: PropTypes.func,
};

export default function PartTwoInput(props) {
  // TODO: change images
  const imagePath = "/" + props.method + ".png";

  return (
    <div className="container p-3">
      <div className="row align-items-center" >
        <div className="col-4">
          <div className="card" style={{ width: "300px" }}>
            <img src={imagePath} className="card-img-top" alt="test image" />
          </div>
        </div>
        <div className="col-8">
          <div className="card" style={{ width: "300px" }}>
            <div className="card-body">
              <p className="card-text">
                Mit dieser Eingabemethode war die Eingabe des Datums schnell
                möglich
              </p>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="fast"
                  id="fast1"
                  checked
                />
                <label className="form-check-label" htmlFor="fast1">
                  1 - trifft überhaupt nicht zu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="fast"
                  id="fast2"
                />
                <label className="form-check-label" htmlFor="fast2">
                  2 - trifft nicht zu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="fast"
                  id="fast3"
                />
                <label className="form-check-label" htmlFor="fast3">
                  3 - trifft wenig zu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="fast"
                  id="fast4"
                />
                <label className="form-check-label" htmlFor="fast4">
                  4 - trifft etwas zu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="fast"
                  id="fast5"
                />
                <label className="form-check-label" htmlFor="fast5">
                  5 - trifft zu
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="fast"
                  id="fast6"
                />
                <label className="form-check-label" htmlFor="fast6">
                  6 - trifft vollkommen zu
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
