import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router-dom";
import PersonalInfo from "../../molecules/PersonalInfo/PersonalInfo";
import ReadMore from "../../molecules/ReadMore/ReadMore";
import Button from "../../atoms/Button/Button";
import Sofi from '../../../assets/Sofia Alvarez Rodero.jpg'
import "./aboutMe.css";

export default function AboutMe() {
  const { translations } = useLanguage();

  return (
    <div className="about-container row d-flex justify-content-center">
      <div className="col-xl-4 col-lg-6 col-md-10 about-info image">
        <img src={Sofi} alt="Sofia Alvarez" className="profile-pic" />
      </div>
      <div className="col-xl-8 col-lg-6 about-info">
        <h2>Sofia Alvarez Rodero</h2>
        <div className="row pt-2">
          <PersonalInfo />
        </div>
        <div className="row container-download-btn">
          <Link to={translations.cv} target="_blank" className="w-auto">
            <Button>{translations.see_cv}</Button>
          </Link>
        </div>
      </div>
      <div className="row p-4">
        <ReadMore text={translations.description} />
      </div>
    </div>
  );
}
