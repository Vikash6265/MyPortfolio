import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(()=>{
    Aos.init({duration : 1500})
  })
  
  return (
    <>
      <div className="contact">
        <h1><i>Contact <span>Us</span></i></h1>
        <div data-aos="zoom-in-up" className="backpart">
        <div className="mailgif">
            <img src={""} alt="" />
           </div>
           <div className="form-part">
           <h2><i>Connect Me</i></h2>
             <form action="https://api.web3forms.com/submit" method="POST">
               <input type="hidden" name="access_key" value="97e0d370-624a-47c1-978f-160354927b38"/>
               <input type="text" name='text' placeholder='Your Name..' required />
               <input type="email" name='email' placeholder='Your Email..' required />
               <textarea name="message" placeholder='Your Message..' required></textarea>
               <button>Submit</button>
             </form>
           </div>
        </div>
      </div>
    </>
  )
}

export default Contact;