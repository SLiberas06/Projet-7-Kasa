import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Property from './pages/Property'
import Error from './pages/Error'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/property/:id" element={<Property />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
