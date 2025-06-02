import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function useSkills() {
    const { language } = useLanguage();
    const [skills, setSkills] = useState([]);
    const [groupedSkills, setGroupedSkills] = useState({});
    const [techStack, setTechStack] = useState([]);
    const usedStack = ["React", "Node.js", "Bootstrap", "Express.js"]
  
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

          const stack = data.filter(item => usedStack.includes(item.tech));

          setGroupedSkills(grouped);
          setTechStack(stack);
        })
        .catch((error) => console.error("Error cargando skills:", error));
    }, [language]);
  
    return { skills, groupedSkills, techStack };
  }