import PropTypes from "prop-types";
//import "./Sidebar.css";

export default function Sidebar({ title, children, id = "offcanvasMenu" }) {
  const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById(id);
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (bsOffcanvas) bsOffcanvas.hide();
  };

  return (
    <div className="offcanvas offcanvas-end bg-dark text-white" id={id}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">{title}</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        {typeof children === "function" ? children(closeOffcanvas) : children}
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.string
};
