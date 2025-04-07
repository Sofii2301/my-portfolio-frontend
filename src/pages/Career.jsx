import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import EducationExperience from "../components/organisms/EducationExperience/EducationExperience"

export default function Career() {
    const { translations } = useLanguage();
    return (
        <>
            <SectionHeader title={translations.my_career}/>
            <EducationExperience />
        </>
    )
}