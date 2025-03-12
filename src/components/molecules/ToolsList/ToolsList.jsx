import { useLanguage } from "../../../context/LanguageContext";
import './toolsList.css'

import react from "../../../assets/logos/react.png"
import js from "../../../assets/logos/js.png"
import html from "../../../assets/logos/html.png"
import css from "../../../assets/logos/css.png"
import git from "../../../assets/logos/git.png"
import bootstrap from "../../../assets/logos/bootstrap.png"
import figma from "../../../assets/logos/figma.png"
import vscode from "../../../assets/logos/vscode.png"

const techTools = [
    { name: "React", logo: react },
    { name: "JavaScript", logo: js },
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "Git", logo: git },
    { name: "Bootstrap", logo: bootstrap },
    { name: "Figma", logo: figma },
    { name: "VS Code", logo: vscode },
  ];
  
  export default function ToolsList() {
    const { translations } = useLanguage();

    return (
      <div className="tech-tools-container">
        <h2>{translations.tech_tools}</h2>
        <div className="tech-grid">
          {techTools.map((tool, index) => (
            <div key={index} className="tech-card">
              <img src={tool.logo} alt={tool.name} className="tech-logo" />
              <span className="tech-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }