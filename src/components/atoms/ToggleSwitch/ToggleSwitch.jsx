import PropTypes from "prop-types";
import "./toggleSwitch.css";

export default function ToggleSwitch({ options, selected, onToggle }) {
  return (
    <div className="toggle-switch">
      <div className="toggle-switch-container">
        {options.map(({ value, label }) => (
          <button
            key={value}
            className={`toggle-btn ${selected === value ? "active" : ""}`}
            onClick={() => onToggle(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

ToggleSwitch.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};
