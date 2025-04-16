import Icon from "../../atoms/Icon/Icon";
import './socialIcons.css'

export default function SocialIcons() {
    return (
        <>
            <div className="social-icons">
                <Icon name="instagram" link="https://www.instagram.com/sofi_alvarez.32/" />
                <Icon name="tiktok" link="https://www.tiktok.com/@sofialvarez44" />
                <Icon name="linkedin" link="https://www.linkedin.com/in/sofi-alvarez-rodero/" />
                <Icon name="github" link="https://github.com/Sofii2301" />
            </div>
        </>
    );
}
