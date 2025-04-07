import { useLanguage } from "../context/LanguageContext";
import SectionHeader from "../components/atoms/SectionHeader/SectionHeader";
import AboutMe from "../components/organisms/AboutMe/AboutMe";
import SkillList from "../components/molecules/SkillList/SkillList";
import Card from "../components/atoms/Card/Card";
import ToolsList from "../components/molecules/ToolsList/ToolsList";

export default function About() {
  const { translations } = useLanguage();

  return (
    <>
      <SectionHeader title={translations.about_me}/>
      <div className="about-page background-image">
        <Card>
          <AboutMe />
        </Card>
        <Card>
          <SkillList  />
        </Card>
        <Card>
          <ToolsList />
        </Card>
      </div>
    </>
  );
}
