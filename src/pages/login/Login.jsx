import React, { useState } from 'react'
import "./styles/Login.css"
import { Logo, Facebook, Google } from '../../assets/svgs';
import { Button } from '../../components';
import { useFormik } from "formik";
import { signUpSchema } from "../../services/auth";

const Login = () => {

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
  });
    
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
          <form className="login-forms-action">
            <div className="input-fields-label">
              <div className="login-forms">
                <label>Email</label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="Enter your email adress here..."
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? "input-error" : ""}
                />
                {errors.email && touched.email && (
                  <p className="error-text">{errors.email}</p>
                )}
              </div>
              <div className="login-forms">
                <label>Password</label>
                <input
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  type="password"
                  placeholder="Enter your password here..."
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : ""
                  }
                />
                {errors.password && touched.password && (
                  <p className="error-text">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="btn-login-method">
              <Button text="Log in" className="login-btn" />
            </div>
          </form>
          <div className="login-forgot-password">
            <p>Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login