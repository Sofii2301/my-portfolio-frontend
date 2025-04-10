import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import CardsList from "../components/organisms/CardsList/CardsList";
import useServices from "../hooks/useServices";

export default function Services() {
    const services = useServices();
    const { translations } = useLanguage();

    return (
        <>
            <SectionHeader title={translations.my_services}/>
            <CardsList items={services} type='services' />
        </>
    )
}