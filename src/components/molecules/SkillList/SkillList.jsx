import { useLanguage } from "../../../context/LanguageContext";
import useSkills from "../../../hooks/useSkills";
import CircularProgressBar from "../../atoms/CircularProgressBar/CircularProgressBar";
import "./skillList.css";

export default function SkillList() {
  const { translations } = useLanguage();
  const { skills } = useSkills();

  const technicalSkills = skills.filter(item => item.type === "skill");

  return (
    <div className="skills-list">
      <h3>{translations.tech_skills}</h3>
      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <CircularProgressBar
            key={index}
            percent={skill.percent}
            image={skill.image}
            label={skill.tech}
          />
        ))}
      </div>
    </div>
  );
}
