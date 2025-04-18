import PropTypes from "prop-types";
import Card from "../../atoms/Card/Card";
import Modal from "../Modal/Modal";
import ProjectModalContent from "../../molecules/ProjectModalContent/ProjectModalContent";
import useModal from "../../../hooks/useModal";
import "./cardsList.css";

export default function CardsList({ items, type }) {
  const { isOpen, modalData, openModal, closeModal } = useModal();

  return (
    <>
      <div className="row row-sm cards-list">
        {items && items.map((item) => (
          <div 
            className="col-md-6 col-lg-6 col-xl-4 col-12 mb-5 col-card" 
            onClick={() => type === 'projects' ? openModal(item) : null}
          >
            <Card key={item.id} {...item} type={type}/>
          </div>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {modalData && type === "projects" && <ProjectModalContent project={modalData} />}
      </Modal>
    </>
  );
}

CardsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
};

