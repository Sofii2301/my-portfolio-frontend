import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card";
import "./cardsList.css";

export default function CardsList({ items, type }) {
  return (
    <div className="row row-sm cards-list">
      {items && items.map((item) => (
        <div className="col-md-6 col-lg-6 col-xl-4 col-12 mb-3 col-card">
          <Card key={item.id} {...item} type={type}/>
        </div>
      ))}
    </div>
  );
}

CardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
};

