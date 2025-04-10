import PropTypes from "prop-types";
import "./input.css";

export default function InputField({ type, placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="form-control custom-input"
      required
      autoComplete="dark"
    />
  );
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
