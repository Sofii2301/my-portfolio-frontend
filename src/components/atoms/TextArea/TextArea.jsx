import PropTypes from "prop-types";
import "../InputField/input.css";

export default function TextArea({ placeholder, value, onChange, name }) {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="form-control custom-textarea"
      rows={5}
      required
    />
  );
}

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
