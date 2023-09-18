import React from "react";
import "./style.css";

export const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="background">
            <div className="overlap-group">
              <img className="element" alt="Element" src="https://c.animaapp.com/KFbV3y81/img/2752811-1.png" />
              <div className="rectangle" />
            </div>
          </div>
          <img className="logo" alt="Logo" src="https://c.animaapp.com/KFbV3y81/img/logo.svg" />
        </div>
      </div>
    </div>
  );
};
