import PropTypes from 'prop-types';
import './sectionHeader.css';

export default function SectionHeader({ title }) {
  return (
    <div className="section-header">
      <h2 className="section-title montserrat-italic">{title}</h2>
      <div className="section-line"></div>
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
