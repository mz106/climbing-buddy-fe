import "./navbar.css"
import logo from "./Images/logo.png"
import homeIcon from "./Images/home.png"
import blankProfile from "./Images/blank.png"
import burgerBar from "./Images/burger-bar.png"
import closeDropdown from "./Images/close-x.png"

import { useState } from "react"


const Navbar = () => {

// const [navBarSwich, setNavBarSwich] = useState (true)
const navBarSwich = true;

// useState for toggling mobile dropdown
const [dropdown, setDropdown] = useState(false);

//dropdown toggle function
const handleDropdown = () => {
  setDropdown(!dropdown);
};

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
      <div onClick={handleDropdown} className="dropdown-btns">
        {/* If dropdown is hidden: show burger icon. X icon when the dropdown is visible */}
      {!dropdown ?
        <img className='Navbar-burger-menu' src={burgerBar} alt="burger bar" height={33}  />
        :
        <img src={closeDropdown} alt="x icon" height={28} />
      }
      </div>
      <img className='Navbar-blank-pic' src={blankProfile} alt="" height={40}/>
      
      {/* If dropdown is false, hide it. Else, show it */}
      <nav className={!dropdown ? 'nav-dropdown-hidden' : 'nav-dropdown'}>
        <ul className="ul-dropdown">
          <li><button className=" btn">Page 1</button></li>
          <li><button className=" btn">Page 2</button></li>
          <li><button className=" btn">Page 3</button></li>
          <li><button className=" btn">Page 4</button></li>
          <li><button className=" btn">Page 5</button></li>
          <li><button className=" btn">Page 6</button></li>
          <img className='Navbar-blank-pic mobile' src={blankProfile} alt="" height={50}/>
        </ul>
      </nav>
    </div>

    :
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