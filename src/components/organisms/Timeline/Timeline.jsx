import PropTypes from "prop-types";
import TimelineItem from "../../molecules/TimelineItem/TimelineItem";
import "./timeline.css";

export default function Timeline({ items }) {
    // Order the elements from most recent to oldest
    const sortedItems = [...items].sort((a, b) => parseInt(b.startDate.split(" ")[1]) - parseInt(a.startDate.split(" ")[1]));

    // Extract the unique years
    const years = [...new Set(sortedItems.map(item => item.startDate.split(" ")[1]))];

    return (
        <div className="timeline">
            <div className="timeline-container">
                <div className="timeline-line"></div> {/* Vertical line */}
                <div className="timeline-content">
                    {years.map((year, index) => (
                        <div key={index} className="timeline-year">
                            <span>{year}</span>
                            {sortedItems
                            .filter(item => item.startDate.includes(year))
                            .map((item, i) => (
                                <TimelineItem key={i} {...item} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Timeline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
