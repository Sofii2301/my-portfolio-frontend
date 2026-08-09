import PropTypes from "prop-types";
import "./button.css";

export default function Button({ type, children, className, disabled }) {
    return (
        <button className={`btn btn-custom mt-3 ${className}`} type={type} disabled={disabled}>
            {children}
        </button>
    );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string,
  disabled: PropTypes.bool,
};