import { useLanguage } from "../../../context/LanguageContext";
import useSkills from "../../../hooks/useSkills";
import './toolsList.css';

export default function ToolsList() {
  const { translations } = useLanguage();
  const { skills } = useSkills();

  const tools = skills.filter(item => item.type === "tool");

  return (
    <div className="tech-tools-container">
      <h2>{translations.tech_tools}</h2>
      <div className="tech-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tech-card">
            <img src={tool.image} alt={tool.tech} className="tech-logo" />
            <span className="tech-name">{tool.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
