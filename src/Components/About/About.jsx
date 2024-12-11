import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img2 from '../../assets/profile_img2.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img2} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am Sarang Kumar Singh, a 3rd year undergraduate student of Electronics and Communication Engineering Department (ECE), NIT Durgapur.</p>
                    <p> I have a current CGPA of 8.01 and I had scored 91.17% in 12th Standard and 93.70% in 10th Standard.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"40%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p>
                        <hr style={{width:"55%"}} />
                    </div>
                    <div className="about-skill">
                        <p>ReactJS</p>
                        <hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>NodeJS</p>
                        <hr style={{width:"55%"}} />
                    </div>
                    {/* <div className="about-skill">
                        <p>ExpressJS</p>
                        <hr style={{width:"65%"}} />
                    </div> */}

                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>200+</h1>                
                <p>Coding Questions Solved</p>
            </div>
            <hr />
            <div className="about-achievement"> 
                <h1>97 pcile</h1>               
                <p>In JEE Mains 2022</p>
            </div>

        </div>
        
    </div>
  )
}

export default About