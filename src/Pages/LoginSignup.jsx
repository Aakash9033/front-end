import React from "react";
import "./Css/Loginsignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-feilds">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have account?<span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use and private policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
