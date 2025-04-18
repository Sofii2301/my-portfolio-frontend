import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function useProjects () {
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`/data/projects_${language}.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, [language]);

  return [...projects].sort((a, b) => b.year - a.year);;
};

