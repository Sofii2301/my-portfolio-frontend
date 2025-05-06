import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function useSkills() {
    const { language } = useLanguage();
    const [skills, setSkills] = useState([]);
    const [groupedSkills, setGroupedSkills] = useState({});
  
    useEffect(() => {
      fetch(`/data/skills_${language}.json`)
        .then((response) => response.json())
        .then((data) => {
          setSkills(data);
  
          // Group by category
          const grouped = data.reduce((acc, skill) => {
            if (!acc[skill.category]) {
              acc[skill.category] = [];
            }
            acc[skill.category].push(skill);
            return acc;
          }, {});
  
          setGroupedSkills(grouped);
        })
        .catch((error) => console.error("Error cargando skills:", error));
    }, [language]);
  
    return { skills, groupedSkills };
  }