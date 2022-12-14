import AboutBanner from '../components/AboutBanner'
import ImageAboutBanner from '../assets/Banner_About_M.png'
import { Body } from '../utils/Atoms'

function About() {
  return (
    <Body>
      <AboutBanner cover={ImageAboutBanner} />
      <h1>A propos</h1>
    </Body>
  )
}
export default About
