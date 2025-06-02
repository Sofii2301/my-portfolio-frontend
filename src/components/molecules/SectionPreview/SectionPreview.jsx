import { useLanguage } from "../../../context/LanguageContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../../atoms/Card/Card";
import "./sectionPreview.css";

export default function SectionPreview({ title, children, to }) {
    const { translations } = useLanguage();
    return (
        <div className="section-preview">
            <Card>
                <h2>{title}</h2>
                <div className="section-preview-content">{children}</div>
                <Link className="btn btn-outline-light mt-3" to={to}>
                    {translations.know_more} →
                </Link>
            </Card>
        </div>
    );
}

SectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
