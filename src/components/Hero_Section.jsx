import React, { useEffect } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import Frontend from "../assets/Frontend Resume latest.pdf"
import h2 from '../assets/h2.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
// import three from "../assets/3.png"
// import black1 from "../assets/black1-removebg-preview.png"
import black1 from "../assets/3-removebg-preview.png"

const Hero_Section = () => {

  useEffect(()=>{
    Aos.init({duration : 1000})
  })

  return (
    <>
      <div className="hero-section">

        <div data-aos="fade-right" className="left-part">
            <h3>Hi , Myself</h3>
            <h1>Vikash Patidar</h1>
            <h4>And I'm a <span>Frontend Developer</span></h4>
            <p>I'm a Web Developer with extensive experience for over 6 months.
            expertise is to create dynamic websites , website design , Frontend Design, and many more...
            </p>

            <div className="frame">

                <a href={"https://github.com/Vikash6265"}>
                  <div className="box"><FaGithub color='#4D93CD' size="21px"/></div>
                </a>

                <a href={"https://join.skype.com/invite/uFjO7D9m8nYb"}>
                  <div className="box"><FaSkype color='#4D93CD' size="21px" /></div>
                </a>

                <a href={"https://www.instagram.com/vikash_patidar_03?igsh=aTc1YmZvZWpsdm84"}>
                  <div className="box"><FaInstagram color='#4D93CD' size="21px" /></div>
                </a>

                <a href={"https://www.linkedin.com/in/vikash-patidar-6b4956264/"}>
                  <div className="box"><FaLinkedinIn color='#4D93CD' size="21px" /></div>
                </a>

            </div>

            <a href={Frontend} download="true">
              <button>Download CV <i class="fa-solid fa-arrow-down"></i></button>
            </a>
        </div>

        <div className="right-part">
            <div data-aos="fade-left" className="img-part">
              <img src={black1} alt="" />
            </div>
        </div>

      </div>
    </>
  )
}

export default Hero_Section
