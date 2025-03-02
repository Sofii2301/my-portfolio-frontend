import AboutMe from "../components/organisms/AboutMe/AboutMe";
import SkillList from "../components/molecules/SkillList/SkillList";

export default function About() {
  return (
    <>
      <div className="background-overlay"></div>
      <div className="about-page background-image">
        <AboutMe />
        <SkillList  />
      </div>
    </>
  );
}
