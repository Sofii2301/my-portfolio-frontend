// components/molecules/SectionPreview/SectionPreview.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./sectionPreview.css";

export default function SectionPreview({ title, children, to }) {
  return (
    <div className="section-preview">
      <h2>{title}</h2>
      <div className="section-preview-content">{children}</div>
      <Link className="btn btn-outline-light mt-3" to={to}>
        Saber más →
      </Link>
    </div>
  );
}

SectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
