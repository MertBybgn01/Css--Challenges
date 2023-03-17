import React from "react";
import Email from "../images/Email";
import Password from "../images/Password";
import Google from '../images/google.jpg'
import Facebook from '../images/facebook.jpg'

import "./login.scss";
export default function Login() {
  return (
    <div className="login">
      <div className="login-widget">
        <div className="auto-witget">
          <div className="logo">
            <div className="dot"></div>
            <span className="logo-name">Logo</span>
          </div>

          <div className="login-panel">
            <h2 className="log-in">Log in</h2>
            <div className="input-div">
              <span className="input-svg"><Email className='svg' /> </span>
              <input className="input" placeholder="Your email" />
            </div>
            <div className="input-div">
              <span className="input-svg"><Password className='svg' /></span>
              <input className="input" placeholder="Password" />
            </div>
            <button className="login-btn" >Log In</button>

            <span className="forgot">Forgot password?</span>
            <div className="text-or"><span>or</span></div>

            <div className="googleAndFacebook-login">
                <button className="googleAndFacebook-btn"><img src={Google} alt='google' /> Google</button>
                <button className="googleAndFacebook-btn"><img src={Facebook} alt='facebook' /> Facebook</button>
            </div>
            
          </div>
          <span className="sing-up">Don’t have an account? <span className="link" >Sign Up</span></span>
        </div>
      </div>
      <div className="images"></div>
    </div>
  );
}
