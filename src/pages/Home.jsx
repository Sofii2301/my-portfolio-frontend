import ContentHome from '../components/organisms/ContentHome/ContentHome'
import SectionPreview from '../components/molecules/SectionPreview/SectionPreview'
import AboutMe from '../components/organisms/AboutMe/AboutMe'

const Home = () => {
  return (
    <>
      <ContentHome />
      <SectionPreview to='/about'>
        <AboutMe />
      </SectionPreview>
    </>
  )
}

export default Home
