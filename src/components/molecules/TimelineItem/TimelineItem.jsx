import { useLanguage } from "../../../context/LanguageContext";
import Card from "../../atoms/Card/Card";
import PropTypes from "prop-types";
import "./timelineItem.css";

export default function TimelineItem({ title, institution, description, startDate, endDate, current }) {
    const { translations } = useLanguage();
  
    return (
        <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-details">
                <Card>
                    <h3>{title}</h3>
                    <h5>{institution}</h5>
                    <p>{description}</p>
                    <p className="timeline-date">
                        {startDate} - {current ? translations.present : endDate}
                    </p>
                </Card>
            </div>
        </div>
    );
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  current: PropTypes.bool,
};
