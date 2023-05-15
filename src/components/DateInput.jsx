import PropTypes from "prop-types";

// added to avoid ''onChangeText' is missing in props validation' warning
DateInput.propTypes = {
  inputMethod: PropTypes.string,
  onInputDate: PropTypes.func,
  date: PropTypes.string,
};

export default function DateInput(props) {
  if (props.inputMethod == "calender") {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Calender Input"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  } else if (props.inputMethod == "textbox") {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Textbox Input"
          onChange={(e) => {
            props.onInputDate(e.target.value);
          }}
        />
      </div>
    );
  } else if (props.inputMethod == "dropdown") {
    return (
      <div className="col-auto">
        <p>Datum: {props.date}</p>
        <input
          type="text"
          placeholder="Dropdown Input"
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
