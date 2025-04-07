import PropTypes from "prop-types";
import "./card.css";

export default function Card({ children, image, title, year, technologies, github, demo }) {
  return (
    <div className="custom-card">
      <div className="">{children}</div>
      <img src={image} alt={title} className="card-image" />
      { title && <div className="card-content">
        <h3>{title}</h3>
        <p>{year}</p>
        <div className="tags">
          {technologies && technologies.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
        <div className="links">
          {github && <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>}
        </div>
      </div>}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string,
  demo: PropTypes.string,
};
