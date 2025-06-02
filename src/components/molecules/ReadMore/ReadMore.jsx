import { useLanguage } from "../../../context/LanguageContext";
import { useState } from "react";
import PropTypes from "prop-types";
import "./readMore.css";

export default function ReadMore({ text, maxChars = 355 }) {
    const { translations } = useLanguage();
    const [expanded, setExpanded] = useState(false);

    maxChars = translations.max_chars;

    if (text.length <= maxChars) return <p>{text}</p>;

    return (
        <div className="read-more-text">
            <p>
                {expanded ? text : text.slice(0, maxChars) + "..."}
                <button onClick={() => setExpanded(!expanded)} className="read-more-btn">
                    {expanded ? translations.see_less : translations.see_more}
                </button>
            </p>
            
        </div>
    );
}

ReadMore.propTypes = {
    text: PropTypes.string.isRequired,
    maxChars: PropTypes.number,
};
