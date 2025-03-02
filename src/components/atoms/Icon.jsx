import PropTypes from "prop-types";

export default function Icon({ name, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={`bi bi-${name}`}></i>
    </a>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
