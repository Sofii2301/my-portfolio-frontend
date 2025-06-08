import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import ToggleSwitch from "../components/atoms/ToggleSwitch/ToggleSwitch";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import CardsList from "../components/organisms/CardsList/CardsList";
import useProjects from "../hooks/useProjects";

const Projects = ({ preview }) => {
  const [selected, setSelected] = useState("developer");
  const { groupedByCategory } = useProjects();
  const { translations } = useLanguage();

  const isMediumLarge = window.innerWidth > 767 && window.innerWidth < 1200;

  const categoryProjects = groupedByCategory[selected] || [];
  const slice = isMediumLarge ? (4) : (3);
  const previewProjects = categoryProjects.slice(0, slice);

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

