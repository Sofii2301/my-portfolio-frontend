import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import LanguageSwitcher from "../../atoms/LanguageSelector/LanguageSelector";
import logo from "../../../../public/images/logo.png";
import Sidebar from "../Sidebar/Sidebar";
import "./navbar.css";

export default function Navbar() {
  const { translations } = useLanguage();
  const isMobile = window.innerWidth < 992;
  const isMobileLanguage = window.innerWidth < 992;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="img-fluid" />
        </Link>

        <Sidebar title={translations.menu} id="navbarOffcanvas">
          {(closeOffcanvas) => (
            <ul className="navbar-nav ms-auto">
              {["about", "career", "projects", "services", "contact"].map((route) => (
                <li className="nav-item " key={route}>
                  <Link
                    className="nav-link w-100"
                    to={`/${route}`}
                    onClick={() => isMobile && closeOffcanvas()}
                  >
                    {translations[route]}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Sidebar>

        {isMobileLanguage && <LanguageSwitcher />}

        <div className="right-section-nav">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {isMobileLanguage ? <></> : <LanguageSwitcher />}
        </div>
      </div>
    </nav>
  );
}
