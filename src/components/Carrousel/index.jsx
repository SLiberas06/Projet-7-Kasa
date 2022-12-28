// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// function Carrousel({ pictures }) {
//   const [picture, setPicture] = useState(0)
//   const allPicture = pictures.length

//   const prev = () => {
//     setPicture(picture === 0 ? allPicture - 1 : picture - 1)
//   }
//   const next = () => {
//     setPicture(picture === allPicture - 1 ? 0 : picture + 1)
//   }

//   if (allPicture === 1) {
//     return (
//       <div>
//         <img src={pictures[picture]} alt="property" />
//       </div>
//     )
//   }

//   return (
//     <div>
//       <Link to={`/property/${prev}`}>
//         <FaChevronLeft />
//       </Link>
//       <Link to={`/property/${next}`}>
//         <FaChevronRight />
//       </Link>
//     </div>
//   )
// }
// export default Carrousel
