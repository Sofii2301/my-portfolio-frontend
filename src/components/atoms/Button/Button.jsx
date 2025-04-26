import PropTypes from "prop-types";
import "./button.css";

export default function Button({ type, children, className }) {
    return (
        <button className={`btn btn-custom mt-3 ${className}`} type={type}>
            {children}
        </button>
    );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string,
};