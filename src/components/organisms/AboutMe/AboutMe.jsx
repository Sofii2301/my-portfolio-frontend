import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router-dom";
import PersonalInfo from "../../molecules/PersonalInfo/PersonalInfo";
import Sofi from '../../../assets/Sofia Alvarez Rodero.jpg'
import CV from '../../../assets/CV - Alvarez Rodero.pdf'
import "./aboutMe.css";

export default function AboutMe() {
  const { translations } = useLanguage();

  return (
    <div className="about-container">
      <div className="row">
        {/* Foto y descripción */}
        <div className="col-xl-4 col-lg-6 col-md-10 about-info image">
          <img src={Sofi} alt="Sofia Alvarez" className="profile-pic" />
        </div>
        <div className="col-xl-8 col-lg-6 about-info">
          <div className="row">
            <h2>Sofia Alvarez Rodero</h2>
            <p>{translations.description}</p>
          </div>
          <div className="row">
            <PersonalInfo />
          </div>
          <div className="row container-download-btn">
            <Link to={CV} download className="btn btn-primary w-auto">
              {translations.download_cv}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
