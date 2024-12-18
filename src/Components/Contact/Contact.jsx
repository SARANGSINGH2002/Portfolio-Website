import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p></p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img className='first' src={mail_icon} alt="" />
                        <p>sarangkumarsingh454@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+91-8710096475</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>West Bengal, India</p>
                    </div>
                </div>
            </div>

            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name="email"  />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" placeholder='Enter your message..' rows="4"></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>

        </div>
    </div>
  )
}

export default Contact