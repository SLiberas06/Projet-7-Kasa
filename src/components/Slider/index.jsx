import { useState, useEffect, useRef } from 'react'
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md'
// import { Transition } from 'react-transition-group'
import styled from 'styled-components'

const ContainerSlider = styled.div`
  width: 85vw;
  height: 38vh;
  background-image: ${(props) => props.theme.main};
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    height: 55vh;
    border-radius: 25px;
    align-items: flex-end;
  }
`
const CurrentIndexStyled = styled.div`
  width: 100%;
  font-size: 20px;
  color: #fff;
  margin-top: -10vh;
  display: inline-block;
  text-align: center;
  @media (max-width: 992px) {
    display: none;
  }
`
const RightArrowStyled = styled(MdOutlineArrowForwardIos)`
  right: 5vw;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  @media (min-width: 992px) {
    font-size: 100px;
  }
`
const LeftArrowStyled = styled(MdOutlineArrowBackIosNew)`
left: 5vw;
font-size: 30px;
color: #fff;
cursor: pointer;
@media (min-width: 992px) {
font-size: 100px;
`

function Slider({ pictures }) {
  const timerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const allPictures = pictures.length

  //retourner à la photo précédente
  const getPrevious = () => {
    const firstPicture = currentIndex === 0
    const newIndex = firstPicture ? allPictures - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  // aller à la photo suivante
  const getNext = () => {
    const lastPicture = currentIndex === allPictures - 1
    const newIndex = lastPicture ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  //le logement comporte qu'une seule photo
  const onePicture = () =>
    allPictures <= 1 ? null : (
      <span>
        {currentIndex + 1} / {allPictures}
      </span>
    )

  //utilisation d'une props pour intégrer au container " styled" les photos de logements scopées dans la function
  const theme = {
    main: `url(${pictures[currentIndex]})`,
  }

  // timer pour que les photos défilent toute seule
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      getNext()
    }, 3500)
  })
  return (
    <ContainerSlider theme={theme}>
      <LeftArrowStyled onClick={getPrevious} />
      <RightArrowStyled onClick={getNext} />
      <CurrentIndexStyled>{onePicture()}</CurrentIndexStyled>{' '}
    </ContainerSlider>
  )
}

export default Slider
