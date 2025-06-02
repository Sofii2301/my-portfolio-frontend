import ContentHome from '../components/organisms/ContentHome/ContentHome'
import SectionPreview from '../components/molecules/SectionPreview/SectionPreview'
import AboutMe from '../components/organisms/AboutMe/AboutMe'
import Carousel from '../components/organisms/Carousel/Carousel'
import CircularProgressBar from '../components/atoms/CircularProgressBar/CircularProgressBar'
import Projects from './Projects'
import useSkills from '../hooks/useSkills'
import Services from './Services'
import Contact from './Contact'
import Career from './Career'

const Home = () => {
  const { skills } = useSkills();
  const technicalSkills = skills.filter(item => item.type === "skill");

  return (
    <>
      <ContentHome />
      <div className="mt-4"></div>
      <SectionPreview to='/about'>
        <AboutMe />
        <Carousel>
          {technicalSkills.map((skill, index) => (
            <CircularProgressBar
              key={index}
              percent={skill.percent}
              image={skill.image}
              label={skill.tech}
            />
          ))}
        </Carousel>
      </SectionPreview>
      <SectionPreview to='/projects'>
        <Projects preview={true} />
      </SectionPreview>
      <SectionPreview to='/services'>
        <Services preview={true} />
      </SectionPreview>
      <SectionPreview to='/career'>
        <Career limit={2} />
      </SectionPreview>
      <SectionPreview to='/contact' seeMore={false}>
        <Contact/>
      </SectionPreview>
    </>
  )
}

export default Home
