import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card";
import "./cardsList.css";

export default function CardsList({ items }) {
  return (
    <div className="cards-list">
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

CardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

