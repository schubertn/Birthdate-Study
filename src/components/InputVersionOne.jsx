import PropTypes from "prop-types";

// added to avoid ''onChangeText' is missing in props validation' warning
InputVersionOne.propTypes = {
  onInputDate: PropTypes.func,
};

export default function InputVersionOne(props) {
  return (
    <div className="col-auto">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Firebase Test"
        onChange={(e) => {
          props.onInputDate(e.target.value);
        }}
      />
    </div>
  );
}
