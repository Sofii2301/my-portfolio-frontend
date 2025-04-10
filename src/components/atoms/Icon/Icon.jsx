import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./icon.css";

export default function Icon({ name, link, text }) {
  return link ? (
    <Link to={link} target="_blank" className="icon icon-with-link" >
      <i className={`bi bi-${name}`}></i>
      {text && <p>{text}</p>}
    </Link>
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