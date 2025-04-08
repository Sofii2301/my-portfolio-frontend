import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card";
import "./cardsList.css";

export default function CardsList({ items, hover }) {
  return (
    <div className="col-md-6 col-lg-6 col-xl-4 col-12 mb-3 cards-list">
      {items.map((item) => (
        <Card key={item.id} {...item} hover={hover} />
      ))}
    </div>
  );
}

CardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

