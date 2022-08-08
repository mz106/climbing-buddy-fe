import React from 'react';
import { useEffect, useState } from 'react';
import "./SignOrLogin.css"
import { testFunction } from '../../../functions/signupOrLogin/helpers/helpers';
import loginPic from "./Images/login-pic.png"
import logo from "../header/navbar/Images/logo.png"
const SignOrLogin = ({loginRegisterToggle, setLoginRegisterToggle}) => {


const closePage = () =>{
  // setLoginToggle(false)
  if (loginRegisterToggle.register === true){
    setLoginRegisterToggle({register:false})
  }
  if (loginRegisterToggle.login === true){
    setLoginRegisterToggle({login:false})
  }
  
}




  useEffect(() => {

  }, []);

  return (
    <div className='Login-box'  >
     
      <div className='Login-inner-box' >
      
        <img className="Login-pic" src={loginPic} alt="Login" height={345.5}/> 
      <div className='Login-form'>
      <img src={logo} alt="logo" className="Login-logo"/>
      <div className='Login-register-box' >
      <div className={loginRegisterToggle.register ? 'Register-btn-active' : "Register-btn"} onClick={()=>{setLoginRegisterToggle({login:false, register: true})}}>Register</div>
        <div className={loginRegisterToggle.login ? "Login-link-active" : "Login-link"} onClick={()=>{setLoginRegisterToggle({login:true, register: false})}}>Login</div>
       
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