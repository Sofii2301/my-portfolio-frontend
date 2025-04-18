import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
import "./Card.css";

export default function Card({ children, image, title, year, technologies, github, demo, icon, description, type }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <>
      {type == 'projects' ? (
        <div ref={ref} className={`custom-card card-projects fade-in-section ${visible ? 'is-visible' : ''}`}>
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
                <div className="links-projects d-flex">
                  {github && <Icon link={github} name='github' />}
                  {demo && <Icon link={demo} name='link-45deg' />}
                </div>
              </div>
            </div>
        </div>
      ):(type == 'services' ? (
        <div ref={ref} className={`custom-card card-services fade-in-section ${visible ? 'is-visible' : ''}`}>
          <div className="card-icon">
            <Icon name={icon} />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ) : (
        <div ref={ref} className={`custom-card generic-card fade-in-section ${visible ? 'is-visible' : ''}`}>{children}</div>
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
