import { useState } from 'react';

import { FaBars } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import './CSS/Navbar.css'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className="nav-container">
      <h2 className='nav-logo'>Climb Buddy</h2>
      <nav className='nav-desktop'>
        <ul className='ul-desktop'>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Events</a></li>
          <li><a href='#'>News</a></li>
          <li><a href='#'>Routes</a></li>
          <li><a href='#'>Community</a></li>
          <li><a href='#'>Get Started</a></li>
          <button>Sign Up</button>
        </ul>
        </nav>
        <div onClick={handleNav} className='nav-menu-btn'>
          {!nav ? <BsFillArrowLeftCircleFill size={20} /> 
                : <FaBars size={20} />}
        
        </div>
        <nav className={!nav ? 'nav-mobile': 'nav-mobile-hidden'}>
          <ul className='ul-mobile'>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Events</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Routes</a></li>
            <li><a href='#'>Community</a></li>
            <li><a href='#'>Get Started</a></li>
            <button>Sign Up</button>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar