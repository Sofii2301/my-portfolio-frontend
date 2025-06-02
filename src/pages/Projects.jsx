import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import CardsList from "../components/organisms/CardsList/CardsList";
import useProjects from "../hooks/useProjects";

const Projects = ({preview}) => {
  const projects = useProjects();
  const { translations } = useLanguage();

  const previewProjects = projects.slice(0, 4);

  return (
    <>
      <SectionHeader title={translations.my_projects}/>
      <CardsList items={preview ? previewProjects : projects} type='projects'/>
    </>
  );
};

export default Projects;

