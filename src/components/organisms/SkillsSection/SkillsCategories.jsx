import { useLanguage } from "../../../context/LanguageContext";
import useSkills from "../../../hooks/useSkills";
import "./skillsCategories.css";

export default function SkillsSection() {
    const { translations } = useLanguage();
    const { groupedSkills } = useSkills();

    return (
        <div className="skills-section">
            <h2 className="text-center">{translations.categories}</h2>
            {Object.entries(groupedSkills).map(([category, items], index) => (
                <div key={index} className="skill-category">
                <h5 className="category-title">{category}</h5>
                <div className="skills-listt">
                    {items.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                        <span className="skill-badge">{skill.tech}</span>
                    </div>
                    ))}
                </div>
                </div>
            ))}
        </div>
    );
}
