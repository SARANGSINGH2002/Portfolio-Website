import React from 'react'
import './Hero.css'
import profile_img2 from '../../assets/profile_img2.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='prof-details' src={profile_img2} alt="" />
        <h1><span>I am Sarang Kumar Singh,</span> a FrontEnd Developer. </h1>
        <p>I have skills in HTML, CSS, Javascript,  NodeJS, ExpressJS, MongoDB and ReactJS and coding skills in C++.
        </p>
        <div className="hero-action">
            {/* <div className="hero-connect">Connect With Me</div> */}
            
             <a className="hero-connect"
                href="https://www.linkedin.com/in/sarang-kumar-singh-372811318/" 
                target="_blank" 
                rel="noopener noreferrer">
                Connect With Me
             </a>
            
          
            {/* <div className="hero-resume">My Resume</div> */}

            <a className="hero-resume"
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer">
            My Resume</a>

        </div>

    </div>
  )
}

export default Hero