import AboutBanner from '../../components/AboutBanner'
import ImageAboutBanner from '../../assets/Banner_About_M.png'
import { Main } from '../../utils/Atoms'
import Collapse from '../../components/Collapse'
import AboutData from '../../datas/About_Data'
import Footer from '../../components/Footer'
import styled from 'styled-components'

const CollapseWrapper = styled.div`
  @media (min-width: 992px) {
    width: 80%;
  }
`
function About() {
  return (
    <div>
      <Main>
        <AboutBanner cover={ImageAboutBanner} />
        <CollapseWrapper>
          {AboutData.map((data, index) => (
            <Collapse key={index} title={`${data.title}`} text={data.text} />
          ))}
        </CollapseWrapper>
      </Main>
      <Footer />
    </div>
  )
}
export default About
