import { Link } from "react-router-dom";
import LanguageSwitcher from "../atoms/LanguageSelector/LanguageSelector";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">Sofia Alvarez Rodero</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/about">Acerca de</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/experience">Experiencia</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/projects">Proyectos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
