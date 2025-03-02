import PropTypes from "prop-types";
import "./progressBar.css";

export default function ProgressBar({ label, percentage }) {
  return (
    <div className="progress-bar-container">
      <span className="progress-label">{label}</span>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
