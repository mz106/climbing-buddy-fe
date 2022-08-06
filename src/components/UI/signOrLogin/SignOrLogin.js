import React from 'react';
import { useEffect } from 'react';
import "./SignOrLogin.css"
import { testFunction } from '../../../functions/signupOrLogin/helpers/helpers';
import loginPic from "./Images/login-pic.png"
import logo from "../header/navbar/Images/logo.png"
const SignOrLogin = ({loginToggle, setLoginToggle, registerToggle, setRegisterToggle}) => {


const closePage = () =>{
  // setLoginToggle(false)
  if (registerToggle === true){
    setRegisterToggle(false)
  }
 if(loginToggle === true){
  setLoginToggle(false)
 }
  
}

  useEffect(() => {
    testFunction();
  }, []);

  return (
    <div className='Login-box'  >
     
      <div className='Login-inner-box' >
      
        <img className="Login-pic" src={loginPic} alt="Login" height={345.5}/> 
      <div className='Login-form'>
      <img src={logo} alt="logo" className="Login-logo"/>
      <div className='Login-register-box' >
      <div className={registerToggle ? 'Register-btn-active' : "Register-btn"}>Register</div>
        <div className={loginToggle ? "Login-link-active" : "Login-link"}>Login</div>
       
      </div>
      <input type="text" placeholder='Username' className='Login-username-input' />
      <input type="password" placeholder='Password' className='Login-username-input' />
      <button className='Login-btn' >LOGIN</button>
      <div className='Forgot-password' >Forgot password?</div>
      </div>
      <button className='Login-close-btn' onClick={closePage} >X</button>
      </div>
      
      
      
      
      </div>
  );
};

export default SignOrLogin;