import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router-dom";
import PersonalInfo from "../../molecules/PersonalInfo/PersonalInfo";
import ReadMore from "../../molecules/ReadMore/ReadMore";
import Button from "../../atoms/Button/Button";
import Sofi from '../../../assets/sofi.png'
import "./aboutMe.css";

export default function AboutMe() {
  const { translations } = useLanguage();

  return (
    <div className="about-container row d-flex justify-content-lg-between justify-content-md-center mb-5 text-start">
      <div className="col-xl-4 col-lg-6 col-md-10 about-info image">
        <img src={Sofi} alt="Sofia Alvarez" className="profile-pic" />
      </div>
      <div className="col-xl-7 col-lg-6 about-info">
        <h2>Sofia Alvarez Rodero</h2>
        <div className="py-2">
          <PersonalInfo />
        </div>
        <ReadMore text={translations.description} />
        <div className="container-download-btn">
          <Link to={translations.cv} target="_blank" className="w-auto">
            <Button>{translations.see_cv}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
