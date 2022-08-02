import React, { useState } from 'react'
import "./navbar.css"
import logo from "./Images/logo.png"
import homeIcon from "./Images/home.png"
import blankProfile from "./Images/blank.png"
import burgerBar from "./Images/burger-bar.png"
const Navbar = () => {

  const [navBarSwich, setNavBarSwich] = useState (true)

  return (
    <div className='Navbar'>
     
      
   {navBarSwich ? 

   //Logged in navbar
   <div className='Navbar-inner'>
   
     <img className='Navbar-home-icon' src={homeIcon} alt="" height={25}/>
    <div className='Navbar-flex left-content'>
      <button className=' btn'>Page 1</button>
      <button className=' btn'>Page 2</button>
      <button className=' btn'>Page 3</button>
      </div>
      <img className=' center-content' src={logo} alt="logo" height={70} />
      <div className='Navbar-flex right-content'>
      <button className=' btn'>Page 4</button>
      <button className=' btn'>Page 5</button>
      <button className=' btn'>Page 6</button>
      </div>
      <img  className='Navbar-burger-menu' src={burgerBar} alt="burger bar" height={25}  />
      <img className='Navbar-blank-pic' src={blankProfile} alt="" height={40}/>

    </div> :
     //Logged out navbar
     <div className='Navbar-inner-logout'>      
      <img className='Navbar-logo-logout' src={logo} alt="logo" height={70} />
     <div className='Navbar-flex Login-register-btns-logout'>
    <button className=' btn'>Login</button>
    <button className=' btn'>Register</button>
    </div>
    </div>} 

    </div>
   
   
   
 
  )
}

export default Navbar