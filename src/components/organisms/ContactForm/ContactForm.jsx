import { useLanguage } from "../../../context/LanguageContext";
import InputField from "../../atoms/InputField/InputField";
import TextArea from "../../atoms/TextArea/TextArea";
import useContactForm from "../../../hooks/useContactForm";
import "./contactForm.css"

export default function ContactForm() {
  const { translations } = useLanguage();
  const { form, handleChange, handleSubmit } = useContactForm(() =>
    alert(translations.messageSent)
  )

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={translations.name}
      />
      <InputField
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder={translations.email}
      />
      <TextArea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={translations.write_message}
      />
      <button className="btn btn-primary mt-3" type="submit">
        {translations.send}
      </button>
    </form>
  );
}
