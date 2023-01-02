import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const SlideShow = ({ pictures }) => {
  // const timer = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  // const allPictures = pictures.length

  const ContainerSlider = {
    backgroundImage: `url(${pictures[currentIndex]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '85vw',
    height: '38vh',
    diplay: 'flex',
    borderRadius: '10px',
    transition: '500ms ease-in-out',
    color: '#fff',
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '30%',
    transform: 'translate(0, -50%)',
    right: '18px',
    fontSize: '30px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '30%',
    transform: 'translate(0, -50%)',
    left: '18px',
    fontSize: '30px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const getPrevious = () => {
    const firstPicture = currentIndex === 0
    const newIndex = firstPicture ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const getNext = () => {
    const lastPicture = currentIndex === pictures.length - 1
    const newIndex = lastPicture ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  //le logement comporte qu'une seule photo
  const onePicture = () =>
    pictures.length <= 1 ? null : (
      <span>
        {currentIndex + 1} / {pictures.length}
      </span>
    )

  // const getSlide = (pictureIndex) => {
  //   setCurrentIndex(pictureIndex)
  // }

  // useEffect(() => {
  //   if (timer.current) {
  //     clearTimeout(timer.current)
  //   }
  //   timer.current = setTimeout(() => {
  //     getNext()
  //   }, 2000)
  // })
  return (
    <div style={ContainerSlider}>
      <div onClick={getPrevious}>
        <FiChevronLeft style={leftArrowStyles} />
      </div>
      <div onClick={getNext}>
        <FiChevronRight style={rightArrowStyles} />
      </div>
      {/* <div style={ContainerSlider} draggable="false"></div> */}
      <div>{onePicture()}</div>
    </div>
  )
}

export default SlideShow
