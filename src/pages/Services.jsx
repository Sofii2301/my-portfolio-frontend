import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";

export default function Services() {
    const { translations } = useLanguage();
    return (
        <>
            <SectionHeader title={translations.my_services}/>
        </>
    )
}