import { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ContainerSlider = {
  width: '80vw',
  height: '40vh',
  backgroundColor: 'red',
  diplay: 'flex',
  flexDirection: 'row',
}

const StyledSlider = {
  width: '40vw',
  height: '20vh',
  backgroundColor: 'blue',
}

const rightArrowStyles = {
  position: 'absolute',
  top: '30%',
  transform: 'translate(0, -50%)',
  right: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
}

const leftArrowStyles = {
  position: 'absolute',
  top: '30%',
  transform: 'translate(0, -50%)',
  left: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
}

const SlideShow = ({ pictures }) => {
  const timer = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const getPrevious = () => {
    const firstPicture = currentIndex === 0
    const newIndex = firstPicture ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const getNext = useCallback(() => {
    const lastPicture = currentIndex === pictures.length - 1
    const newIndex = lastPicture ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, pictures])

  const getSlide = (pictureIndex) => {
    setCurrentIndex(pictureIndex)
  }

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      getNext()
    }, 2000)
  })
  return (
    <div style={ContainerSlider}>
      <div style={StyledSlider}>
        <div onClick={getPrevious}>
          <FaChevronLeft style={leftArrowStyles} />
        </div>
        <div onClick={getNext}>
          <FaChevronRight style={rightArrowStyles} />
        </div>
        <div>slide1</div>
        <div>slide2</div>
        <div>slide3</div>
      </div>
    </div>
  )
}

export default SlideShow
