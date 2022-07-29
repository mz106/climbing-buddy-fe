import React, { useState } from 'react'
import "./navbar.css"
import logo from "./Images/logo.png"
import homeIcon from "./Images/home.png"
import blankProfile from "./Images/blank.png"
const Navbar = () => {

  const [navBarSwich, setNavBarSwich] = useState (true)

  return (
    <div className='Navbar'>
      <div className='Navbar-inner'>
     
   {navBarSwich ? 

   //Logged in navbar
   <div className='Navbar-inner'>
    <div className='Navbar-flex'>
      <img src={homeIcon} alt="" height={25}/>
      <button className=' btn'>Page 1</button>
      <button className=' btn'>Page 2</button>
      <button className=' btn'>Page 3</button>
      </div>
      <img className='Navbar-logo' src={logo} alt="logo" height={70} />
      <div className='Navbar-flex'>
      <button className=' btn'>Page 4</button>
      <button className=' btn'>Page 5</button>
      <button className=' btn'>Page 6</button>
      <img src={blankProfile} alt="" height={40}/>
      </div>
    </div> :
     //Logged out navbar
     <div className='Navbar-inner-logout'>      
      <img className='Navbar-logo' src={logo} alt="logo" height={70} />
     <div className='Navbar-flex Login-register-btns-logout'>
    <button className=' btn'>Login</button>
    <button className=' btn'>Register</button>
    </div>
    </div>} 

    </div>
   
   
    </div>
 
  )
}

export default Navbar