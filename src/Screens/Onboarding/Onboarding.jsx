import React from "react";
import "./style.css";

export const Onboarding = () => {
  return (
    <div className="onboarding">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="background">
            <div className="overlap-group">
              <img className="element" alt="Element" src="https://c.animaapp.com/pRIsUOb8/img/2752811-1.png" />
              <div className="rectangle" />
            </div>
          </div>
          <button className="button">
            <div className="div-wrapper">
              <div className="text-wrapper">Login With Email</div>
            </div>
          </button>
          <p className="don-t-have-an">
            <span className="span">Don’t have an account?</span>
            <span className="text-wrapper-2">&nbsp;</span>
            <span className="text-wrapper-3">Sign Up</span>
          </p>
          <img className="logo" alt="Logo" src="https://c.animaapp.com/pRIsUOb8/img/logo.svg" />
          <div className="welcome-text">
            <p className="get-better-sleep">
              Get better sleep patterns. Do meditation. <br />
              Stay focused. Live a healthy life.
            </p>
            <div className="div">WELCOME</div>
          </div>
        </div>
      </div>
    </div>
  );
};
