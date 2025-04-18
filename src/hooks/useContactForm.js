import { useState } from "react";

export default function useContactForm(onSuccess) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        onSuccess();
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("❌ Error al enviar mensaje", err);
    }
  };

  return { form, handleChange, handleSubmit };
}
