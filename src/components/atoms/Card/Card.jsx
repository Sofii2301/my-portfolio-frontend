import PropTypes from "prop-types";
import "./card.css";
import Icon from "../Icon";

export default function Card({ children, image, title, year, technologies, github, demo, icon, description, type }) {
  return (
    <>
      {type == 'projects' ? (
        <div className="custom-card card-projects">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
              <h3>{title}</h3>
              <div className="tags">
                {technologies && technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <div className="d-flex justify-content-between">
                <p>{year}</p>
                <div className="links-projects">
                  {github && <Icon link={github} name='github' />}
                  {demo && <Icon link={demo} name='link-45deg' />}
                </div>
              </div>
            </div>
        </div>
      ):(type == 'services' ? (
        <div className="custom-card card-services">
          <div className="card-icon">
            <Icon name={icon} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ) : (
        <div className="custom-card generic-card">{children}</div>
      ))}
    </>
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
  icon: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
};
