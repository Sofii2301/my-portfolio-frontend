import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import ToggleSwitch from "../components/atoms/ToggleSwitch/ToggleSwitch";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import CardsList from "../components/organisms/CardsList/CardsList";
import useProjects from "../hooks/useProjects";
import useColumns from "../hooks/useColumns";

const Projects = ({ preview }) => {
  const [selected, setSelected] = useState("developer");
  const { groupedByCategory } = useProjects();
  const { translations } = useLanguage();
  const columns = useColumns();

  const categoryProjects = groupedByCategory[selected] || [];
  const previewProjects = categoryProjects.slice(0, columns);

  return (
    <>
      <SectionHeader title={translations.my_projects} />
      <ToggleSwitch
        selected={selected}
        onToggle={setSelected}
        options={[
          { value: "developer", label: translations.developer },
          { value: "cm", label: translations.cm },
          //{ value: "designer", label: translations.designer },
        ]}
      />
      <CardsList items={preview ? previewProjects : categoryProjects} type="projects" />
    </>
  );
};

export default Projects;

