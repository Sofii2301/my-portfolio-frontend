import "./personalInfo.css";
import Icon from "../../atoms/Icon";
import { Link } from "react-router-dom";

export default function PersonalInfo() {
  return (
    <div className="contact-info">
      <p><Icon name="envelope" /> <Link to=''>sofialvarezrodero97@gmail.com</Link></p>
      <p><Icon name="phone" /> <Link to='https://wa.me/+542914046122'>+54 291 4046122</Link></p>
      <p>
        <Icon name="geo-alt" /> 
        <Link to='https://www.google.com.ar/maps/place/Caballito,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6166192,-58.4653298,14z/data=!3m1!4b1!4m14!1m7!3m6!1s0x95bccb6df65fda81:0xb5dcf876f4177a9c!2sCaballito!8m2!3d-34.6173601!4d-58.4331165!16s%2Fg%2F11mtd10j7m!3m5!1s0x95bcca3911f8ab2d:0x27b394c2f3d87d2d!8m2!3d-34.6159245!4d-58.4406027!16zL20vMDl5cWo3?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D'>
          Caballito, Buenos Aires, Argentina
        </Link>
      </p>
    </div>
  );
}
