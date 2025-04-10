import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import ContactSection from "../components/organisms/ContactSection/ContactSection";

export default function Contact() {
  const { translations } = useLanguage();

  return (
    <div className="contact-page">
      <SectionHeader title={translations.contact_me}/>
      <ContactSection />
    </div>
  )
}