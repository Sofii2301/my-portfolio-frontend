import PropTypes from "prop-types";
import TimelineItem from "../../molecules/TimelineItem/TimelineItem";
import useSortedTimeline from "../../../hooks/useSortedTimeline";
import "./timeline.css";

export default function Timeline({ items }) {
    const { sorted, years } = useSortedTimeline(items);

    return (
        <div className="timeline">
            <div className="timeline-container">
                <div className="timeline-line"></div> {/* Vertical line */}
                <div className="timeline-content">
                    {years.map((year) => (
                        <div key={year} className="timeline-year">
                        <span>{year}</span>
                        {sorted
                            .filter(item => item.startDate.startsWith(year))
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
