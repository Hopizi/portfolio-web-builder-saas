import React, { useState } from 'react'
import "./styles/SignUp.css"
import { Logo, Facebook, Google } from "../../assets/svgs";
import { Button } from '../../components';

const SignUp = () => {

  const [btnClicked, setBtnClicked] = useState(false)

  return (
    <div className="sign-up-main-container">
      <div className="sign-up-main">
        <Logo className="logo" />
      </div>
      <div className="sign-up-main-inner flex">
        <div className="sign-up-block">
          <h1>Sign up</h1>
          <div className="sign-up-form-action">
            <div className="input-fields-sign-up">
              {btnClicked ? (
                <React.Fragment>
                  <label>Password</label>
                  <input placeholder="Enter your password..." />
                  <label>Confirm Password</label>
                  <input placeholder="Confirm your password..." />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <label>Email</label>
                  <input placeholder="Enter your email address..." />
                </React.Fragment>
              )}
            </div>
            <div className="sign-up-btn">
              {btnClicked ? (
                <Button text="Create Account" className="login-btn" />
              ) : (
                <Button text="Continue with Email" className="login-btn" />
              )}
            </div>
          </div>
          <div className="continue-with-sign-up">
            <div className="continue-with">
              <Google className="svg-icons" />
              <p>Continue With Google</p>
            </div>
            <div className="continue-with">
              <Facebook className="svg-icons" />
              <p>Continue With Facebook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp