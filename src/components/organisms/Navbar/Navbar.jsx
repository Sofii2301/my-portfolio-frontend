import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import LanguageSwitcher from "../../atoms/LanguageSelector/LanguageSelector";
import logo from "../../../../public/images/logo.png"
import "./navbar.css"

export default function Navbar() {
    const { translations } = useLanguage();
    const isMobile = window.innerWidth < 992;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" className="img-fluid"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end bg-dark text-white" id="navbarOffcanvas">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">{translations.menu}</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><Link className="nav-link" to="/about" {...(isMobile ? { 'data-bs-dismiss': 'offcanvas' } : {})}>{translations.about}</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/career" {...(isMobile ? { 'data-bs-dismiss': 'offcanvas' } : {})}>{translations.career}</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/projects" {...(isMobile ? { 'data-bs-dismiss': 'offcanvas' } : {})}>{translations.projects}</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/services" {...(isMobile ? { 'data-bs-dismiss': 'offcanvas' } : {})}>{translations.services}</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact" {...(isMobile ? { 'data-bs-dismiss': 'offcanvas' } : {})}>{translations.contact}</Link></li>
                  <li className="nav-item"><LanguageSwitcher /></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    );
}
