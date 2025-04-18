import { useLanguage } from "../../../context/LanguageContext";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icon/Icon";
import "./projectModalContent.css";

export default function ProjectModalContent({ project }) {
    const { title, image, description, year, technologies, github, demo, role, type, client } = project;
    const { translations } = useLanguage();

    return (
        <div className="project-modal-content row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 col-img-modal justify-content-center d-flex">
                <img src={image} alt={title} className="modal-image img-fluid" />
            </div>
            <div className="col-lg-6 col-md-12 d-flex flex-column h-100 mt-3">
                <div className="d-flex flex-column">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="mt-3">
                        <p><strong>{translations.year}:</strong> {year}</p>
                        {role && <p><strong>{translations.role}:</strong> {role}</p>}
                        {type && <p><strong>{translations.type}:</strong> {type}</p>}
                        {client && <p><strong>{translations.client}:</strong> {client}</p>}
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="tags">
                        {technologies.map((tech, index) => (
                        <span key={index} className="tag">{tech}</span>
                        ))}
                    </div>
                    <div className="links-projects d-flex">
                        {github && <Icon link={github} name="github" />}
                        {demo && <Icon link={demo} name="link-45deg" />}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

ProjectModalContent.propTypes = {
  project: PropTypes.object.isRequired,
};
