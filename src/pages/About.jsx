import AboutMe from "../components/organisms/AboutMe/AboutMe";
import SkillList from "../components/molecules/SkillList/SkillList";
import Card from "../components/atoms/Card/Card";
import ToolsList from "../components/molecules/ToolsList/ToolsList";

export default function About() {
  return (
    <>
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
