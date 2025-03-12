import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "../atoms/LanguageSelector/LanguageSelector";

export default function Navbar() {
  const { translations } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">Sofia Alvarez Rodero</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/about">{translations.about}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/experience">{translations.experience}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">{translations.projects}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">{translations.contact}</Link></li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
