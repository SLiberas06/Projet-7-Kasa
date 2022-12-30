import React from 'react'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import DataProperty from '../../datas/logements.json'
import styled from 'styled-components'

const StyledSlider = styled(Slide)`
  width: 10vw;
  height: 20vh;
  // background-color: red;
`
const ImgSlider = styled.img`
  width: 100%;
`

const SlideShow = () => {
  // const SlideProperty = {}
  return (
    <div>
      <StyledSlider>
        {DataProperty.map((property, index) => (
          <div key={index.toString()} id={property.id}>
            <ImgSlider src={property} alt={property.title} />
          </div>
        ))}
      </StyledSlider>
    </div>
  )
}

export default SlideShow
