//import { useLanguage } from "../../../context/LanguageContext";
import usePersonalInfo from "../../../hooks/usePersonalInfo";
import useLinks from "../../../hooks/useLinks";
import Icon from "../../atoms/Icon/Icon";
import './contactInfo.css'

export default function ContactInfo() {
  //
  const info = usePersonalInfo();
  const links = useLinks();

  return (
    <div className="contact-info">
      <Icon name="envelope" link={links.email} text={info.email} />
      <Icon name="whatsapp" link={links.whatsapp} text={info.phone} />
      <Icon name="github" link={links.github} text={info.github} />
      <Icon name="linkedin" link={links.linkedIn} text={info.linkedIn} />
    </div>
  );
}
