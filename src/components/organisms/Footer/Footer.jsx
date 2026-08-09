import { useLanguage } from "../../../context/LanguageContext";
import SocialIcons from "../../molecules/SocialIcons/SocialIcons";
import useSkills from "../../../hooks/useSkills";
import "./footer.css"

export default function Footer() {
    const { translations } = useLanguage();
    const { techStack } = useSkills();

    return(
        <>
            <div className="container-footer">
                <footer className="row">
                    <div className="content-footer flex-column">
                        <p className="mb-3">{translations.developed_width}</p>
                        <div className="tech-stack-container">
                            {techStack.map((tech,index) => (
                                <div key={index} className="tech-stack-footer">
                                    <img src={tech.image} alt={tech.tech} className="tech-logo" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="content-footer">
                        <p>{translations.footer_text}</p>
                    </div>
                    <div className="content-footer icons-copyright">
                        <p>© Sofía Alvarez Rodero 2026</p>
                        <SocialIcons />
                    </div>
                </footer>
            </div>
        </>
    )
}