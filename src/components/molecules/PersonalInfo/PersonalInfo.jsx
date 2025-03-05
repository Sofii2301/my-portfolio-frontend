import "./personalInfo.css";
import Icon from "../../atoms/Icon";
import { Link } from "react-router-dom";

export default function PersonalInfo() {
  return (
    <div className="contact-info">
      <p><Icon name="envelope" /> sofia.alvarez@example.com</p>
      <p><Icon name="phone" /> +54 9 1122334455</p>
      <p><Icon name="geo-alt" /> Buenos Aires, Argentina</p>
      <Link to="/assets/CV_SofiaAlvarez.pdf" download className="btn btn-primary">
        Descargar CV
      </Link>
    </div>
  );
}
