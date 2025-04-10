import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./icon.css";

export default function Icon({ name, link, text }) {
  const content = (
    <>
      <i className={`bi bi-${name}`}></i>
      <p>{text}</p>
    </>
  );
  
  return link ? (
    <Link to={link} target="_blank" className="icon icon-with-link" >
      <i className={`bi bi-${name}`}></i>
      <p>{text}</p>
    </Link>
  ) : (
    <div className="icon">
      {content}
    </div>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

// <Icon name="" link="" />