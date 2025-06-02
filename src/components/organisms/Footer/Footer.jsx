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
                    <div className="content-footer">
                        <p>{translations.developed_width}</p>
                        {techStack.map((tech,index) => (
                            <div key={index} className="tech-stack-footer">
                                <img src={tech.image} alt={tech.tech} className="tech-logo" />
                            </div>
                        ))}
                    </div>
                    <div className="content-footer">
                        <p>{translations.footer_text}</p>
                    </div>
                    <div className="content-footer justify-content-between">
                        <p>© Sofía Alvarez Rodero 2025</p>
                        <SocialIcons />
                    </div>
                </footer>
            </div>
        </>
    )
}