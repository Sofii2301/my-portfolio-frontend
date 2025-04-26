import { useState } from "react";
import { useSnackbarContext } from "../context/SnackbarContext";

export default function useContactForm(onSuccess) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { showSnackbar } = useSnackbarContext();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://my-portfolio-backend-ten-blue.vercel.app/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        onSuccess();
        setForm({ name: "", email: "", message: "" });
      } else {
        showSnackbar("Algo salió mal. Intentalo de nuevo.", "error");
      }
    } catch (err) {
      console.error("Error al enviar mensaje", err);
      showSnackbar("No se pudo enviar el mensaje. Revisa tu conexión.", "error");
    }
  };

  return { form, handleChange, handleSubmit };
}
