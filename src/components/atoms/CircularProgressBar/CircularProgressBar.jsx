import PropTypes from "prop-types";
import "./circularProgressBar.css";

export default function CircularProgressBar({ percent, image, label }) {
  const strokeDashoffset = 440 - (440 * percent) / 100;

  return (
    <div className="circular-skill">
      <div className="outer">
        <div className="inner">
          {image && <img src={image} alt={label} className="skill-image" />}
          <div className="skill-label">{label}</div>
          <div className="percent">{percent}%</div>
        </div>
      </div>
      <svg width="150" height="150">
        <circle cx="75" cy="75" r="70" stroke="#333" strokeWidth="10" fill="none" />
        <circle
          cx="75"
          cy="75"
          r="70"
          stroke="#f1c40f"
          strokeWidth="10"
          fill="none"
          strokeDasharray="440"
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

CircularProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  image: PropTypes.string,
  label: PropTypes.string.isRequired,
};
