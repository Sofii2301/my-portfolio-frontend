import PersonalInfo from "../../molecules/PersonalInfo/PersonalInfo";
import Sofi from '../../../assets/Sofia Alvarez Rodero.jpg'
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="row">
        {/* Foto y descripción */}
        <div className="col-md-4 about-info">
          <img src={Sofi} alt="Sofia Alvarez" className="profile-pic" />
        </div>
        <div className="col-md-8 about-info">
          <h2>Sofia Alvarez Rodero</h2>
          <p>Frontend Developer con experiencia en React, JavaScript y diseño web.</p>
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}
