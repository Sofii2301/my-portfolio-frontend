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
  const { form, handleChange, handleSubmit, isLoading } = useContactForm(() =>
    showSnackbar(translations.message_sent, "success")
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
          disabled={isLoading}
        />
        <InputField
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={translations.email}
          disabled={isLoading}
        />
        <TextArea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={translations.write_message}
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? translations.sending : translations.send}
        </Button>
      </form>
    </>
  );
}