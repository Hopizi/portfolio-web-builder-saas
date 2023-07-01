import React, { useState } from 'react'
import "./styles/SignUp.css"
import { Logo, Facebook, Google } from "../../assets/svgs";
import { Button } from '../../components';
import {useFormik} from "formik"
import {signUpSchema} from "../../services/auth"
import axios from 'axios';

const SignUp = () => {

  const onSubmit = (values, actions) => {
    axios.post(`https://portfolio-api-iymu.onrender.com/signup`, {
      name: values.fullName,
      username: values.userName,
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  };

  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      userName: '',
      fullName: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: signUpSchema, 
    onSubmit,
  })

  // console.log(errors)

  return (
    <div className="sign-up-main-container">
      <div className="sign-up-main">
        <Logo className="logo" />
      </div>
      <div className="sign-up-main-inner flex">
        <div className="sign-up-block">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit} className="sign-up-form-action">
            <div className="input-fields-sign-up">
              <div>
                <label>Email</label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="Enter your email address..."
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? "input-error" : ""}
                />
                {errors.email && touched.email && (
                  <p className="error-text">{errors.email}</p>
                )}
              </div>
              <div>
                <label>Username</label>
                <input
                  value={values.userName}
                  onChange={handleChange}
                  id="userName"
                  type="text"
                  placeholder="Enter your username..."
                  onBlur={handleBlur}
                  className={
                    errors.userName && touched.userName ? "input-error" : ""
                  }
                />
                {errors.userName && touched.userName && (
                  <p className="error-text">{errors.userName}</p>
                )}
              </div>
              <div>
                <label>Full Name</label>
                <input
                  value={values.fullName}
                  onChange={handleChange}
                  id="fullName"
                  type="text"
                  placeholder="Enter your Name..."
                  onBlur={handleBlur}
                  className={
                    errors.fullName && touched.fullName ? "input-error" : ""
                  }
                />
                {errors.fullName && touched.fullName && (
                  <p className="error-text">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label>Password</label>
                <input
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  type="password"
                  placeholder="Enter your password..."
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : ""
                  }
                />
                {errors.password && touched.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>
              <div>
                <label>Confirm Password</label>
                <input
                  value={values.confirmPassword}
                  onChange={handleChange}
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password..."
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error"
                      : ""
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error-text">{errors.confirmPassword}</p>
                )}
              </div>
            </div>
            <div className="sign-up-btn">
              <Button disabled={isSubmitting} text="Create Account" className="login-btn" />
            </div>
          </form>
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