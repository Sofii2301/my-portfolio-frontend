import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import CardsList from "../components/organisms/CardsList/CardsList";
import useProjects from "../hooks/useProjects";

const Projects = () => {
  const projects = useProjects();
  const { translations } = useLanguage();

  return (
    <>
      <SectionHeader title={translations.my_projects}/>
      <CardsList items={projects} />
    </>
  );
};

export default Projects;

