import React from "react";
import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="div">
        <div className="main-title">Welcome back, Afreen!</div>
        <p className="subtitle">How are you feeling today ?</p>
        <div className="overlap">
          <div className="meditation">
            <div className="overlap-group">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper">watch now</div>
                  <img className="group" alt="Group" src="/img/group-1.png" />
                </div>
              </div>
              <div className="meditation-2" />
              <div className="text-wrapper-2">Meditation 101</div>
              <p className="p">Techniques, Benefits, and a Beginner’s How-To</p>
            </div>
          </div>
          <img className="element-removebg" alt="Element removebg" src="/img/2844687-removebg-preview-1.png" />
        </div>
        <div className="overlap-2">
          <div className="cardio-meditation">
            <div className="overlap-group">
              <p className="text-wrapper-3">Basics of Yoga for Beginners or Experienced Professionals</p>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper">watch now</div>
                  <img className="group" alt="Group" src="/img/group-1.png" />
                </div>
              </div>
              <div className="text-wrapper-4">Cardio Meditation</div>
              <div className="rectangle" />
            </div>
          </div>
          <img className="nav" alt="Nav" src="/img/nav.png" />
          <img className="img" alt="Element removebg" src="/img/2831156-removebg-preview-1.png" />
        </div>
        <div className="feelings">
          <div className="calm-mood">
            <div className="div-2">
              <img className="img-2" alt="Calm icon" src="/img/calm-icon.png" />
            </div>
            <div className="text-wrapper-5">Calm</div>
          </div>
          <div className="relax-mood">
            <div className="div-2">
              <img className="relax" alt="Relax" src="/img/relax.svg" />
            </div>
            <div className="text-wrapper-5">Relax</div>
          </div>
          <div className="focus-mood">
            <div className="div-2">
              <img className="img-2" alt="Focus" src="/img/focus.png" />
            </div>
            <div className="text-wrapper-5">Focus</div>
          </div>
          <div className="anxious">
            <div className="overlap-3">
              <div className="div-2" />
              <div className="text-wrapper-6">Anxious</div>
              <img className="anxious-2" alt="Anxious" src="/img/anxious.png" />
            </div>
          </div>
        </div>
        <header className="header">
          <div className="overlap-4">
            <img className="logo" alt="Logo" src="/img/logo.svg" />
            <img className="hamburger" alt="Hamburger" src="/img/hamburger.svg" />
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-2.png" />
          </div>
        </header>
      </div>
    </div>
  );
};
