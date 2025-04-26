import { useLanguage } from "../../../context/LanguageContext";
import { useSnackbarContext } from "../../../context/SnackbarContext";
import InputField from "../../atoms/InputField/InputField";
import TextArea from "../../atoms/TextArea/TextArea";
import Button from "../../atoms/Button/Button";
import useContactForm from "../../../hooks/useContactForm";
import "./contactForm.css"

export default function ContactForm() {
  const { translations } = useLanguage();
  const { showSnackbar } = useSnackbarContext();
  const { form, handleChange, handleSubmit } = useContactForm(() =>
    showSnackbar(translations.messageSent, "success")
  )

  return (
    <>
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
        <Button type="sumit">
          {translations.send}
        </Button>
      </form>
    </>
  );
}
