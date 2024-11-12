import React, { useEffect } from 'react'
import laptop from '../assets/laptop.jpg'
import software from '../assets/software.jpg'
import coding from '../assets/coding.webp'
import feed from '../assets/feed.webp'
import qr from '../assets/qr.png'
import weather from '../assets/weather.jpg'
import restaurant from '../assets/restaurant.jpg'
import thumb from '../assets/thumb.jpg'
import finger from '../assets/Finger.webp'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {

  useEffect(()=>{
    Aos.init({duration : 1700})
  })


  return (
    <>
      <div className="portfolio">
         <h1><i>Latest <span>Projects</span></i></h1>
         <div className="allProject">
          <h2><i id='sym' class="fa-solid fa-circle-dot"></i><i>HTML & CSS <span>Websites Clone</span></i> <i class="fa-solid fa-angles-right"></i></h2> 
         <div className="project-list">
            <div data-aos="zoom-in" className="box1">
              <img src={software} alt="" />
              <div className="project-text">
                 <h3>WhatsApp Clone</h3>
                 <p>I'm Creating a Fully Responsive <br /> WhatsApp Clone Using HTML and CSS</p>
                 <a href={'https://whats-app-jet.vercel.app/'}><i id='angle' class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
            
            <div data-aos="zoom-in" className="box1">
              <img src={laptop} alt="" />
              <div className="project-text">
                 <h3>Panfilla Web Clone</h3>
                 <p>I'm Creating a Fully Responsive Panfilla <br /> Web Clone Using HTML and CSS</p>
                 <a href={'https://panfilla.vercel.app/'}><i class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>  
            
            <div data-aos="zoom-in" className="box1">
              <img src={coding} alt="" />
              <div className="project-text">
                 <h3>Business Software <br />(G2) Web Clone</h3>
                 <p>I'm Creating a Fully Responsive Business <br /> Software & Services Clone Using <br /> HTML and CSS</p>
                 <a href={'https://g2-black.vercel.app/'}><i class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>

         </div>
         </div>

         {/* Js Projects */}

         <div className="allProject">
          <h2><i id='sym' class="fa-solid fa-circle-dot"></i><i>Javascript <span>Projects</span></i><i id='angle' class="fa-solid fa-angles-right"></i></h2>
         <div className="project-list">
            <div data-aos="zoom-in" className="box1">
              <img src={weather} alt="" />
              <div className="project-text">
                 <h3>Weather Report</h3>
                 <p>I'm building a weather app using HTML, <br /> CSS, JavaScript, and integrating <br /> third-party APIs.</p>
                 <a href={'https://weather-app-rho-five-56.vercel.app/'}><i class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
            
            <div data-aos="zoom-in" className="box1">
              <img src={feed} alt="" />
              <div className="project-text">
                 <h3>Feedback App</h3>
                 <p>I'm crafting a user-friendly feedback <br /> app using HTML , CSS & Javascript.</p>
                 <a href={'https://feedback-app-zeta-three.vercel.app/'}><i class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>  
            
            <div data-aos="zoom-in" className="box1">
              <img src={qr} alt="" />
              <div className="project-text">
                 <h3>QR Generator</h3>
                 <p>I'm constructing a QR code generator <br /> using HTML, CSS, and JavaScript  <br />for user convenience</p>
                 <a href={'https://qr-generator-app-rose.vercel.app/'}><i class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>

         </div>
         </div>

         <div className="allProject">
          <h2><i id='sym' class="fa-solid fa-circle-dot"></i><i>React Js <span>Projects</span></i><i id='angle' class="fa-solid fa-angles-right"></i></h2>
         <div className="project-list">
            <div data-aos="zoom-in" className="box1">
              <img src={restaurant} alt="" />
              <div className="project-text">
                 <h3>FoodZone</h3>
                 <p>I'm building a FoodZone Web using <br /> HTML, CSS and Rect Js with own <br /> data .This website is based on <br /> online food service</p>
                 <a href={'https://food-zone-two-delta.vercel.app/'}><i class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>
            
            <div data-aos="zoom-in" className="box1">
              <img src={thumb} alt="" />
              <div className="project-text">
                 <h3>CryptoMania Web</h3>
                 <p>I'm building a CryptoMania Web using <br /> Bootstrap and React Js with third- <br />party API data. This is based on <br /> crypto currency</p>
                 <a href={'https://crypto-mania-seven.vercel.app/'}><i class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>  
            
            <div data-aos="zoom-in" className="box1">
              <img src={finger} alt="" />
              <div className="project-text">
                 <h3>Authentication Web</h3>
                 <p>I'm building user authentication using <br /> React Js without API which based <br /> on user register or login</p>
                 <a href={'https://auth-app-zeta-blue.vercel.app/'}><i class="fa-solid fa-up-right-from-square"></i></a>
              </div>
            </div>

         </div>
         </div>

      </div>
    </>
  )
}

export default Projects;
