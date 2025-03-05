import AboutMe from "../components/organisms/AboutMe/AboutMe";
import SkillList from "../components/molecules/SkillList/SkillList";
import Card from "../components/atoms/Card/Card";

export default function About() {
  return (
    <>
      <div className="background-overlay"></div>
      <div className="about-page background-image">
        <Card>
          <AboutMe />
        </Card>
        <Card>
          <SkillList  />
        </Card>
      </div>
    </>
  );
}
