import ProgressBar from "../../atoms/ProgressBar/ProgressBar";

export default function SkillList() {
  const skills = [
    { label: "React", percentage: 85 },
    { label: "JavaScript", percentage: 90 },
    { label: "CSS", percentage: 80 },
    { label: "Git", percentage: 75 },
    { label: "Bootstrap", percentage: 70 },
  ];

  return (
    <div className="skills-list">
      <h3>Habilidades Técnicas</h3>
      {skills.map((skill, index) => (
        <ProgressBar key={index} label={skill.label} percentage={skill.percentage} />
      ))}
    </div>
  );
}
