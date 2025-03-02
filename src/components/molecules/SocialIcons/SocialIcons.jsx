import { Link } from "react-router-dom";
import './socialIcons.css'

export default function SocialIcons() {
    return (
        <>
            <div className="row social-icons">
                <Link to="https://www.instagram.com/sofi_alvarez.32/" target='_blank'>
                    <i className="bi bi-instagram"></i>
                </Link>
                <Link to="https://www.tiktok.com/@sofialvarez44" target='_blank'>
                    <i className="bi bi-tiktok"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/sofi-alvarez-rodero/" target='_blank'>
                    <i className="bi bi-linkedin"></i>
                </Link>
                <Link  to="https://github.com/Sofii2301" target='_blank'>
                    <i className="bi bi-github"></i>
                </Link>
            </div>
        </>
    );
}
