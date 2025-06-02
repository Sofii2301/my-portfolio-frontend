import PropTypes from "prop-types";
import TimelineItem from "../../molecules/TimelineItem/TimelineItem";
import useSortedTimeline from "../../../hooks/useSortedTimeline";
import "./timeline.css";

export default function Timeline({ items, limit }) {
    const { sorted } = useSortedTimeline(items);
    const limitedSorted = limit ? sorted.slice(0, limit) : sorted;
    const years = [...new Set(limitedSorted.map(item => item.startDate.split("-")[0]))];
    const isMobile = window.innerWidth < 767;

    return (
        <div className="timeline">
            <div className="timeline-container">
                {!isMobile && <div className="timeline-line"></div>} {/* Vertical line */}
                <div className="timeline-content">
                    {years.map((year) => {
                        const itemsOfYear = sorted.filter(item => item.startDate.startsWith(year));
                        const limitedItems = limit ? itemsOfYear.slice(0, limit) : itemsOfYear;

                        return (
                        <div key={year} className="timeline-year">
                            {!isMobile && <span>{year}</span>}
                            {limitedItems.map((item, i) => (
                            <TimelineItem key={i} {...item} />
                            ))}
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

Timeline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  limit: PropTypes.number,
};
