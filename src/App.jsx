
import './App.css'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/ContactUs/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Hero />
      <Program />
      <About />
      <Campus title="GALLERY" Subtitle = "Campus Photos" />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App
