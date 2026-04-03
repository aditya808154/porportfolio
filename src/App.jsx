import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Certificates from './Components/Certificates/Certificates'
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Skills/>
     <Projects/>
     <Certificates/>
     <Contact/>
    </>
  )
}

export default App
