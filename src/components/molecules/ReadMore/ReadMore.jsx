import { useLanguage } from "../../../context/LanguageContext";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./readMore.css";

export default function ReadMore({ text }) {
    const { translations } = useLanguage();
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 992);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const paragraphs = Array.isArray(text) ? text : [text];
    const maxChars = translations.max_chars;
    const fullText = paragraphs.join(" ");

    // Desktop: siempre completo, en párrafos, sin botón
    if (!isMobile) {
        return (
            <div className="read-more-text">
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
        );
    }

    // Mobile: si entra completo, mostrar en párrafos igual, sin botón
    if (fullText.length <= maxChars) {
        return (
            <div className="read-more-text">
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
        );
    }

    // Mobile: colapsado (truncado) vs expandido (párrafos completos)
    return (
        <div className="read-more-text">
            {expanded ? (
                paragraphs.map((p, i) =>
                    i === paragraphs.length - 1 ? (
                        <p key={i}>
                            {p}{" "}
                            <button onClick={() => setExpanded(!expanded)} className="read-more-btn">
                                {translations.see_less}
                            </button>
                        </p>
                    ) : (
                        <p key={i}>{p}</p>
                    )
                )
            ) : (
                <p>
                    {fullText.slice(0, maxChars) + "... "}
                    <button onClick={() => setExpanded(!expanded)} className="read-more-btn">
                        {translations.see_more}
                    </button>
                </p>
            )}
        </div>
    );
}

ReadMore.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
};