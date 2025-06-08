import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function useProjects() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [groupedByCategory, setGroupedByCategory] = useState({});

  useEffect(() => {
    fetch(`/data/projects_${language}.json`)
      .then((response) => response.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => b.year - a.year);
        setProjects(sorted);

        const grouped = sorted.reduce((acc, project) => {
          const category = project.category || "other";
          if (!acc[category]) acc[category] = [];
          acc[category].push(project);
          return acc;
        }, {});

        setGroupedByCategory(grouped);
      });
  }, [language]);

  return { projects, groupedByCategory };
}
