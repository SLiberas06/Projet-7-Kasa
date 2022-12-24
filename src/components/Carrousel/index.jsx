import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Carrousel({ pictures }) {
  const [scrollPicture, setPicture] = useState(0)
  const allPicture = pictures.length
  const prev = () => {
    setPicture(scrollPicture === 0 ? allPicture - 1 : scrollPicture - 1)
  }
  const next = () => {
    setPicture(scrollPicture === allPicture - 1 ? 0 : scrollPicture + 1)
  }

  if (allPicture === 1) {
    return (
      <div>
        <img src={pictures[scrollPicture]} alt="property" />
      </div>
    )
  }

  
  return (
    <div>
      <Link to={`/property/${prevPictureNumber}`}>
        <FaChevronLeft />
      </Link>
      <Link to={`/property/${nextPictureNumber}`}>
        <FaChevronRight />
      </Link>
    </div>
  )
}
export default Carrousel
