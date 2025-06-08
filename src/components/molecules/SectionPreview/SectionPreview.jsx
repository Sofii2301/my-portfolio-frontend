import { useLanguage } from "../../../context/LanguageContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../../atoms/Card/Card";
import Button from "../../atoms/Button/Button";
import "./sectionPreview.css";

export default function SectionPreview({ title, children, to, seeMore = true }) {
    const { translations } = useLanguage();
    return (
        <div className="section-preview">
            <h2>{title}</h2>
            <div className="section-preview-content">{children}</div>
            {seeMore && 
                <Button>
                    <Link className="mt-3" to={to}>
                        {translations.learn_more} →
                    </Link>
                </Button>
            }
        </div>
    );
}

SectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
