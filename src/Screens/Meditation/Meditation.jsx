import React from "react";
import "./style.css";

export const Meditation = () => {
  return (
    <div className="meditation">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="home" alt="Home" src="/img/home.svg" />
            <img className="sounds" alt="Sounds" src="/img/sounds.png" />
            <header className="header">
              <img className="logo" alt="Logo" src="/img/logo.svg" />
              <img className="hamburger" alt="Hamburger" src="/img/hamburger.svg" />
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-2.png" />
            </header>
            <img className="character-meditating" alt="Character meditating" src="/img/character-meditating.png" />
            <div className="time">45:00</div>
            <div className="button">
              <div className="div">
                <div className="rectangle" />
                <div className="start-now"> Start Now</div>
              </div>
            </div>
            <div className="title">
              <div className="overlap-2">
                <div className="text-wrapper">Meditation</div>
                <p className="sub">
                  Guided by a short introductory course,
                  <br />
                  start trying meditation.
                </p>
              </div>
            </div>
          </div>
          <img className="usr" alt="Usr" src="/img/usr.png" />
        </div>
      </div>
    </div>
  );
};
