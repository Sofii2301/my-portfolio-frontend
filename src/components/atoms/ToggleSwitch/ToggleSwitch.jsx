import { useLanguage } from "../../../context/LanguageContext";
import PropTypes from "prop-types";
import "./toggleSwitch.css";

export default function ToggleSwitch({ selected, onToggle }) {
    const { translations } = useLanguage();
    return (
        <div className="toggle-switch">
            <div className="toggle-switch-container">
                <button 
                    className={`toggle-btn left ${selected === "education" ? "active" : ""}`} 
                    onClick={() => onToggle("education")}
                >
                    {translations.education}
                </button>
                <button 
                    className={`toggle-btn ${selected === "experience" ? "active" : ""}`} 
                    onClick={() => onToggle("experience")}
                >
                    {translations.experience}
                </button>
            </div>
        </div>
    );
}

ToggleSwitch.propTypes = {
  selected: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};
