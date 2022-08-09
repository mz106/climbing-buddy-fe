import React, {useState} from 'react'
import "./navbar.css"
import logo from "./Images/logo.png"
import homeIcon from "./Images/home.png"
import blankProfile from "./Images/blank.png"
import burgerBar from "./Images/burger-bar.png"
import SignOrLogin from '../../signOrLogin/SignOrLogin'

const Navbar = () => {

  // const [navBarSwich, setNavBarSwich] = useState (true)
const navBarSwich = false;

const [loginRegisterToggle, setLoginRegisterToggle] = useState({
  login: false,
  register: false,
})

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
    <button className=' btn' onClick={()=>setLoginRegisterToggle({login:true})} >Login</button>
    <button className=' btn' onClick={()=>setLoginRegisterToggle({register:true})}>Register</button>
    </div>
    </div>} 
    {loginRegisterToggle.login ? <SignOrLogin loginRegisterToggle={loginRegisterToggle} setLoginRegisterToggle={setLoginRegisterToggle}/> : ""}
    {loginRegisterToggle.register ? <SignOrLogin loginRegisterToggle={loginRegisterToggle} setLoginRegisterToggle={setLoginRegisterToggle}/> : ""}
    </div>
   
   
   
 
  )
}

export default Navbar