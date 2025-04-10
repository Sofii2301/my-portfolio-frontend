import { useLanguage } from "../../../context/LanguageContext";
import "./personalInfo.css";
import Icon from "../../atoms/Icon/Icon";
import ContactInfo from "../ContactInfo/ContactInfo";
import usePersonalInfo from "../../../hooks/usePersonalInfo";
import useLinks from "../../../hooks/useLinks";
import getAge from "../../../js/getAge";

export default function PersonalInfo() {
  const { translations } = useLanguage();
  const info = usePersonalInfo();
  const links = useLinks();

  return (
    <div className="personal-info d-flex">
      <div className="col-6">
        <ContactInfo />
        <Icon name="geo-alt-fill" link={links.location} text={info.location} />
        <Icon name="geo-fill" link={links.address} text={info.address} />
      </div>
      <div className="col-6">
        <Icon name="geo-fill" text={`${translations.age}: ${getAge(info.birthDate)}`} />
        <Icon name="calendar-event" text={info.birth} />
        <Icon name="person-arms-up" text={info.degree} />
        <Icon name="person-workspace" text={info.available} />
        <Icon name="stack" text={info.stack} />
      </div>
    </div>
  );
}
