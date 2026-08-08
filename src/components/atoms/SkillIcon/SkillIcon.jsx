import PropTypes from "prop-types";
import "./skillIcon.css";

export default function SkillIcon({ image, label }) {
  return (
    <div className="skill-icon">
      <div className="skill-icon-circle">
        {image && <img src={image} alt={label} className="skill-image" />}
      </div>
      <div className="skill-label">{label}</div>
    </div>
  );
}

SkillIcon.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string.isRequired,
};