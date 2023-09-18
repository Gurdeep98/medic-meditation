import React from "react";
import "./style.css";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="div">
        <div className="overlap">
          <img className="logo" alt="Logo" src="/img/logo.svg" />
          <div className="title">
            <div className="main-title">Sign Up</div>
            <p className="subtitle">Sign up now for free and start meditating, and explore Medic.</p>
          </div>
        </div>
        <div className="name">
          <img className="vector" alt="Vector" src="/img/vector-2.svg" />
          <div className="text-wrapper">Name</div>
        </div>
        <div className="email">
          <img className="vector" alt="Vector" src="/img/vector-2.svg" />
          <div className="text-wrapper">Email Address</div>
        </div>
        <div className="password">
          <img className="vector" alt="Vector" src="/img/vector-2.svg" />
          <div className="text-wrapper">Password</div>
        </div>
        <div className="overlap-group">
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-2">SIGNUP</div>
            </div>
          </div>
          <p className="already-have-an">
            <span className="span">Already have an account?</span>
            <span className="text-wrapper-3">&nbsp;&nbsp;</span>
            <span className="text-wrapper-4">Sign In</span>
          </p>
          <img className="group" alt="Group" src="/img/group-27.png" />
        </div>
      </div>
    </div>
  );
};
