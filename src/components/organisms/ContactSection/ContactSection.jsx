import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../../molecules/ContactInfo/ContactInfo";
import usePersonalInfo from "../../../hooks/usePersonalInfo";
import "./contactSection.css";

export default function ContactSection() {
    const info = usePersonalInfo();
    return (
        <div className="contact-section-container">
        <div className="row w-100 h-100">
            <div className="col-md-6 animate-from-left contact-info-container">
                <p className="mb-4 me-4 text-center text-md-start">{info.why_contact_me}</p>
                <ContactInfo />
            </div>
            <div className="col-md-6 animate-from-right">
                <ContactForm />
            </div>
        </div>
        </div>
    );
}
