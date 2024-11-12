import React, { useEffect } from 'react'
// import about from '../assets/about1.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import black4 from "../assets/black4.png"

const About = () => {

  useEffect(()=>{
    Aos.init({duration : 2500})
  })


  return (
    <div class="about">
       <div data-aos="zoom-in"  className="left">
          <div className="imgsection">
            <img src={black4} alt="" />
          </div>
       </div>
       <div data-aos="zoom-in"  className="right">
         <h1>About <span>Me</span></h1>
         <h3>Frontend Developer</h3>
         <p>I'm <span>Vikash Patidar</span> , a frontend developer passionate about crafting intuitive <br /> user experiences. With 8 months of experience, I specialize in HTML, CSS, <br /> JavaScript, and frameworks  like React , Bootstrap , Material UI and Redux. I <br /> thrive on staying updated with the latest trends and technologies to create <br /> innovative solutions. From pixel-perfect designs to responsive layouts, I'm <br /> dedicated to bringing your ideas to life. Let's collaborate and build <br /> something amazing together</p>
       </div>
    </div>
  )
}

export default About;
