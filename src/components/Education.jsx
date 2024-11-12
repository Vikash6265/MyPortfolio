import React, { useEffect } from 'react'
import tenth from '../assets/10th.jpg'
import twelve from '../assets/12.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Education = () => {

    useEffect(()=>{
        Aos.init({duration : 1700})
    })  

  return (
    <>
      <div className="qualification">
        <h1>My <span>Educations</span></h1>
      <div className="education-section">
        <div data-aos="fade-up" className="education-box">
            <div className="school-img">
                <img src={tenth} alt="" />
            </div>
            <div className="about-school">
                <h2>Secondary Education</h2>
                <h6><i class="fa-solid fa-circle"></i> Genius Academy H.S. School</h6>
                <p><i class="fa-solid fa-circle"></i> Tilawad Govind , Shajapur</p>
                <h5><i class="fa-solid fa-circle"></i> 2019 with 88%</h5>
            </div>
        </div>
        <div data-aos="fade-up" className="education-box">
            <div className="school-img">
                <img src={twelve} alt="" />
            </div>
            <div className="about-school">
                <h2>Higher Secondary Education</h2>
                <h6><i class="fa-solid fa-circle"></i> Genius Academy H.S. School</h6>
                <p><i class="fa-solid fa-circle"></i> Tilawad Govind , Shajapur</p>
                <h5><i class="fa-solid fa-circle"></i> 2021 with 89%</h5>
            </div>
        </div>
        <div data-aos="fade-up" className="education-box">
            <div className="school-img">
                <img src={tenth} alt="" />
            </div>
            <div className="about-school">
                <h2>B.Sc in Computer Science (CS)</h2>
                <h6><i class="fa-solid fa-circle"></i> Govt. Nirbhay Singh Patel College</h6>
                <p><i class="fa-solid fa-circle"></i> Indore , M.P</p>
                <h5><i class="fa-solid fa-circle"></i> 2021 - Present</h5>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Education
