import PropTypes from "prop-types";

// added to avoid ''onChangeText' is missing in props validation' warning
DateInput.propTypes = {
  inputVersion: PropTypes.number,
  onInputDate: PropTypes.func,
  date: PropTypes.string,
};

export default function DateInput(props) {
  if (props.inputVersion == 0) {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Input Version Zero"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  } else if(props.inputVersion == 1) {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Input Version One"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  } else if(props.inputVersion == 2){
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Input Version Two"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Problem"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  }
}
