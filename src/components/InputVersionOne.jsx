import PropTypes from "prop-types";

// added to avoid ''onChangeText' is missing in props validation' warning
InputVersionOne.propTypes = {
  onInputDate: PropTypes.func,
  date: PropTypes.string,
};

export default function InputVersionOne(props) {
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
}