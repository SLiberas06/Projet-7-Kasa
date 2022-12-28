import HomeBanner from '../../components/HomeBanner'
import Card from '../../components/Card'
import styled from 'styled-components'
import DataProperty from '../../datas/logements.json'
import Colors from '../../utils/Colors'
import ImageHomeBanner from '../../assets/Banner_Home_D.png'
import { Main } from '../../utils/Atoms'
import { Link } from 'react-router-dom'

const CardWrapper = styled.section`
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
    height: 100%;
    background-color: ${Colors.CardWrapper};
    margin: 50px 0 50px 0;
    padding: 30px 0 0 0;
    border-radius: 25px;
  }
`
const LinkSingleProperty = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: flex;
`

function Home() {
  return (
    <Main>
      <HomeBanner cover={ImageHomeBanner} />
      <CardWrapper>
        {DataProperty.map((property, index) => (
          <article key={index}>
            <LinkSingleProperty to={`/property/${property.id}`}>
              <Card
                id={property.id}
                title={property.title}
                cover={property.cover}
              />
            </LinkSingleProperty>
          </article>
        ))}{' '}
      </CardWrapper>
    </Main>
  )
}

export default Home
