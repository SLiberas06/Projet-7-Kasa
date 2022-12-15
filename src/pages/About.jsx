import AboutBanner from '../components/AboutBanner'
import ImageAboutBanner from '../assets/Banner_About_M.png'
import { Body } from '../utils/Atoms'
import Collapse from '../components/Collapse'
import AboutData from '../datas/About_Data'

function About() {
  return (
    <Body>
      <AboutBanner cover={ImageAboutBanner} />
      {AboutData.map((data) => (
        <Collapse title={`${data.title}`} text={data.text} />
      ))}
    </Body>
  )
}
export default About
