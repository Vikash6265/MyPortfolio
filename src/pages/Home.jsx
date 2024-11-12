import React from 'react'
import Hero_Section from '../components/Hero_Section'
import About from './About'
import Service from './Service'
import Projects from './Projects'
import Contact from './Contact'
import Education from '../components/Education'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <>
     <Hero_Section/>
     <About/>
     <Education/>
     <Skills/>
     <Service/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default Home
