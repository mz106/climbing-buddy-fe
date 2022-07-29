import { useState } from 'react';

//react icons
import { ImHome3 } from 'react-icons/im';
import { RiAccountBoxFill } from 'react-icons/ri'
import { FaBars } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

import './CSS/Navbar.css'

const Navbar = () => {

  //useState for toggling mobile navbar

    const [nav, setNav] = useState(false);

    //toggle
    const handleNav = () => {
      setNav(!nav)
    }


    //header when user is logged in
  return (
    <div className="nav-container">
      <nav className='nav-desktop'>
        <ul className='ul-desktop left'>
        <div className='navbar-home-link'>
        <ImHome3 size={30}/>
        </div>
          <li><button><a href='#'>Page 1</a></button></li>
          <li><button><a href='#'>Page 2</a></button></li>
          <li><button><a href='#'>Page 3</a></button></li>
        </ul>
        <img className='nav-logo' src="https://picsum.photos/150" alt="logo-placeholder" />
        <ul className='ul-desktop right'>
          <li><button><a href='#'>Page 4</a></button></li>
          <li><button><a href='#'>Page 5</a></button></li>
          <li><button><a href='#'>Page 6</a></button></li>
          <RiAccountBoxFill size={40}/>
        </ul>
        </nav>
        <div onClick={handleNav} className='nav-menu-btn'>
          {!nav ? <BsFillArrowLeftCircleFill size={30} /> 
                : <FaBars size={30} />}
        
        </div>
        
        
        <nav className={!nav ? 'nav-mobile': 'nav-mobile-hidden'}>
          <ul className='ul-mobile'>
            <li><a href='#'>Page 1</a></li>
            <li><a href='#'>Page 2</a></li>
            <li><a href='#'>Page 3</a></li>
            <li><a href='#'>Page 4</a></li>
            <li><a href='#'>Page 5</a></li>
            <li><a href='#'>Page 6</a></li>
            <RiAccountBoxFill size={40}/>
          </ul>
        </nav>
    </div>

  )
}

export default Navbar