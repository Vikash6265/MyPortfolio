import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Service = () => {

   useEffect(()=>{
      Aos.init({duration : 1700})
    })

  return (
    <>
     <div className="service">
        <h4><i>My <span>Services</span></i></h4>
        <div className="service-frame">
           <div data-aos="fade-up" className="square">
              <i class="fa-solid fa-code"></i>
              <h3>Web Development</h3>
              <p>Building websites from scratch using HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces</p>
              <a href="https://www.codecademy.com/resources/blog/what-is-web-development/"><button>Read More</button></a>
           </div>
           
           <div data-aos="fade-up" className="square">
              <i class="fa-solid fa-palette"></i>
              <h3>UI Design</h3>
              <p>
                 UI design shapes user experience through layout, typography, color, and imagery for visually engaging and intuitive interfaces.
               </p>
              <a href="https://www.interaction-design.org/literature/topics/ui-design"><button>Read More</button></a>
           </div>

           <div data-aos="fade-up" className="square">
              <i class="fa-solid fa-arrows-to-dot"></i>
              <h3>Responsive Design</h3>
              <p>Web applications are optimized for viewing on various devices and screen sizes, including desktops, tablets, and mobile phones</p>
              <a href="https://www.interaction-design.org/literature/topics/responsive-design"><button>Read More</button></a>
           </div>

        </div>
     </div>
    </>
  )
}

export default Service
