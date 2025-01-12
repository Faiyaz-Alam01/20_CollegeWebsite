import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {
  return (
    <>
      <Hero />
      <Program />
      <About />
      <Campus title="GALLERY" Subtitle = "Campus Photos" />
      <Testimonial />
    </>
  )
}

export default App
