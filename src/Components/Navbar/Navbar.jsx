import React, { useRef } from 'react'
import './Navbar.css'
import '../../index.css';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../assets/logo3.png'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");  
  const menuRef= useRef();
  const openMenu= ()=>{ 
    menuRef.current.style.right ="70px";
  }
  const closeMenu= ()=>{ 
    menuRef.current.style.right ="-240px";
  }
  return (
    <div className='navbar'>
        <img className='images-bar' src={logo} alt="" />
        <img src={menu_open} onClick={openMenu}  className='nav-mob-open' alt=""/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} className='nav-mob-close'  alt="" />
          <li> <AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt=''/> : null}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={underline} alt=''/> : null}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src={underline} alt=''/> : null}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline} alt=''/> : null}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt=''/> : null}</li>
        </ul>
        {/* <div className="nav-connect">Connect With Me</div> */}
        <a className="nav-connect"
          href="https://www.linkedin.com/in/sarang-kumar-singh-372811318/" 
          target="_blank" 
          rel="noopener noreferrer" 
        > <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink>
         
        </a>
    </div>
  )
}




export default Navbar