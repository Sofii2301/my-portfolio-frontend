import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";

export default function Contact() {
  const { translations } = useLanguage();

  return (
    <>
      <SectionHeader title={translations.contact_me}/>
    </>
  )
}