import React, { useState } from 'react'
import "./styles/Login.css"
import { Logo, Facebook, Google } from '../../assets/svgs';
import { Button } from '../../components';

const Login = () => {

const [btnClicked, setBtnClicked] = useState(true);
    
  return (
    <div className="login-main-container">
      <div className="logo-login-main">
        <Logo className="logo" />
      </div>
      <div className="login-main-container-inner">
        <div className="login-block">
          <h1>Log in</h1>
          <div className="login-methods">
            <div className="continue-with">
              <Google className="svg-icons" />
              <p>Continue With Google</p>
            </div>
            <div className="continue-with">
              <Facebook className="svg-icons" />
              <p>Continue With Facebook</p>
            </div>
          </div>
          <div className="login-forms-action">
            <div className="input-fields-label">
              {btnClicked ? (
                <React.Fragment>
                  <label>Password</label>
                  <input placeholder="Enter your password here..." />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <label>Email</label>
                  <input placeholder="Enter your email adress here..." />
                </React.Fragment>
              )}
            </div>
            <div className="btn-login-method">
              {btnClicked ? (
                <Button text="Log in" className="login-btn" />
              ) : (
                <Button text="Continue With Email" className="login-btn" />
              )}
            </div>
          </div>
          <div className="login-forgot-password">
            <p>Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login