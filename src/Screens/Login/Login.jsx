import React from "react";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="main-title">Sign In</div>
              <img className="logo" alt="Logo" src="/img/logo.svg" />
              <p className="subtitle">Sign in now to acces your excercises and saved music.</p>
            </div>
            <img className="vector" alt="Vector" src="/img/vector-2.svg" />
            <img className="img" alt="Vector" src="/img/vector-2.svg" />
            <div className="text-wrapper">Email Address</div>
            <div className="div">Password</div>
            <div className="text-wrapper-2">Forgot Password?</div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-3">LOGIN</div>
              </div>
            </div>
            <p className="don-t-have-an">
              <span className="span">Don’t have an account?</span>
              <span className="text-wrapper-4">&nbsp;&nbsp;</span>
              <span className="text-wrapper-5">Sign Up</span>
            </p>
          </div>
          <img className="group-2" alt="Group" src="/img/group-28.png" />
        </div>
      </div>
    </div>
  );
};
