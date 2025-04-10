import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function useServices () {
  const { language } = useLanguage();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`/data/services_${language}.json`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, [language]);

  return services;
};