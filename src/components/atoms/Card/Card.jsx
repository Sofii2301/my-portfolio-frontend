import PropTypes from "prop-types";
import "./card.css";

export default function Card({ children }) {
  return <div className="custom-card">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
