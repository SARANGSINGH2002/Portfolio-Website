import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import logo from '../../assets/logo3.png'


const Footer = () => {
  return (
    <div  className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='prof-footer' src={logo} alt="" />
                <p>"Pixels to Perfection: For Web Lovers."</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom">@2024 Sarang Kumar Singh. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect</p>
            </div>
        </div>
    </div>
  )
}

export default Footer