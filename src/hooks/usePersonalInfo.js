import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function usePersonalInfo() {
  const { language } = useLanguage();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`/data/personalInfo_${language}.json`)
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.error("Error cargando datos de contacto:", err));
  }, [language]);

  return info;
}
