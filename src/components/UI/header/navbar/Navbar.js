import React, { useState } from 'react'
import "./navbar.css"
import logo from "./Images/logo.png"
const Navbar = () => {

  const [navBarSwich, setNavBarSwich] = useState (false)

  return (
    <div className='Navbar'>
      <div className='Navbar-inner'>
     
   {navBarSwich ? <div className='Navbar-flex '>
      <button className='Navbar-profile btn'>Profile</button>
      <button className='Navbar-home btn'>Home</button>
      </div> : <div></div>} 
       <img className='Navbar-logo' src={logo} alt="logo" height={70} />
       <div className='Navbar-flex Login-register-btns'>
      <button className='Navbar-login btn'>Login</button>
      <button className='Navbar-register btn'>Register</button>
      </div>
    </div>
   
   
    </div>
 
  )
}

export default Navbar