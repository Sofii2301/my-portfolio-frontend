import PropTypes from "prop-types";
import { Offcanvas, Nav } from "react-bootstrap";
//import "./sidebar.css";

export default function Sidebar({ title, show, onClose, children }) {
  return (
    <Offcanvas show={show} onHide={onClose} placement="end" className="bg-dark text-white">
      <Offcanvas.Header closeButton closeVariant="white">
        <Offcanvas.Title>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          {typeof children === "function" ? children(onClose) : children}
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
