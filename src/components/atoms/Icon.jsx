import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Icon({ name, link }) {
  return (
    <Link to={link} target="_blank">
      <i className={`bi bi-${name}`}></i>
    </Link>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

// <Icon name="" link="" />