import { useLanguage } from "../../../context/LanguageContext";
import useSkills from "../../../hooks/useSkills";
import CircularProgressBar from "../../atoms/CircularProgressBar/CircularProgressBar";
import Carousel from '../../organisms/Carousel/Carousel'
import "./skillList.css";

export default function SkillList() {
  const { translations } = useLanguage();
  const { skills } = useSkills();
  const isMobile = window.innerWidth < 767;
  const technicalSkills = skills.filter(item => item.type === "skill");

  return (
    <div className="skills-list">
      <h3>{translations.tech_skills}</h3>
      {isMobile ? 
        <Carousel>
          {technicalSkills.map((skill, index) => (
            <CircularProgressBar
              key={index}
              percent={skill.percent}
              image={skill.image}
              label={skill.tech}
            />
          ))}
        </Carousel>
        :
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
      }
    </div>
  );
}
