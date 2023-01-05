import AboutBanner from '../../components/AboutBanner'
import ImageAboutBanner from '../../assets/Banner_About_M.png'
import { Main } from '../../utils/Atoms'
import Collapse from '../../components/Collapse'
import AboutData from '../../datas/About_Data'
import Footer from '../../components/Footer'

function About() {
  return (
    <div>
      <Main>
        <AboutBanner cover={ImageAboutBanner} />

        {AboutData.map((data, index) => (
          <Collapse key={index} title={`${data.title}`} text={data.text} />
        ))}
      </Main>
      <Footer />
    </div>
  )
}
export default About
