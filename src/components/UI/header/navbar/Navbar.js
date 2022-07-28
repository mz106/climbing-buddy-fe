import React from 'react'
import "./navbar.css"
import logo from "./logo.png"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-inner'>
     
    <ul className='Navbar-list'>
      <li className='Navbar-profile white'>Profile</li>
      <li className='Navbar-home white'>Home</li>
      <li > <img className='Navbar-logo' src={logo} alt="logo" height={70} /></li>
      <li className='Navbar-login white'>Login</li>
      <li className='Navbar-register white'>Register</li>
    </ul>
   
   
    </div>
    </div>
  )
}

export default Navbar