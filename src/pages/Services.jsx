import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import CardsList from "../components/organisms/CardsList/CardsList";
import useServices from "../hooks/useServices";
import useColumns from "../hooks/useColumns";

export default function Services({preview}) {
    const services = useServices();
    const { translations } = useLanguage();
    const columns = useColumns();

    const previewServices = services.slice(0, columns);

    return (
        <>
            <SectionHeader title={translations.my_services}/>
            <CardsList items={preview ? previewServices : services} type='services' />
        </>
    )
}