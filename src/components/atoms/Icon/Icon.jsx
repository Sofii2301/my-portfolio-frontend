import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./icon.css";

export default function Icon({ name, link, text }) {
    return link ? (
        <div className="icon">
            <Link to={link} target="_blank" className="icon-click">
                <i className={`bi bi-${name}`}></i>
            </Link>
            {text && (
                <Link to={link} target="_blank" className="icon-click">
                    <p>{text}</p>
                </Link>
            )}
        </div>
    ) : (
        <div className="icon">
            <i className={`bi bi-${name}`}></i>
            {text && <p>{text}</p>}
        </div>
    );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

// <Icon name="" link="" />