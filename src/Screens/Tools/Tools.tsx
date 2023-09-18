import React from "react";
import "./style.css";

export const Tools = (): JSX.Element => {
  return (
    <div className="tools">
      <div className="div">
        <div className="overlap">
          <img className="nav" alt="Nav" src="/img/nav.png" />
          <div className="goal-trainer">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="vector" alt="Vector" src="/img/vector-8.svg" />
              <div className="text-wrapper">Goal Trainer</div>
              <img className="group" alt="Group" src="/img/group.png" />
              <img className="img" alt="Group" src="/img/group-38.png" />
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="overlap-3">
            <header className="header">
              <img className="logo" alt="Logo" src="/img/logo.svg" />
              <img className="hamburger" alt="Hamburger" src="/img/hamburger.svg" />
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-2.png" />
            </header>
            <div className="mood-booster">
              <div className="overlap-group">
                <div className="rectangle-2" />
                <img className="vector-2" alt="Vector" src="/img/vector-4.svg" />
                <div className="text-wrapper-2">Mood Booster</div>
                <img className="group-2" alt="Group" src="/img/group-36.png" />
              </div>
            </div>
            <div className="mood-journal">
              <div className="overlap-4">
                <div className="rectangle-3" />
                <div className="text-wrapper-3">Mood Journal</div>
                <img className="vector-2" alt="Vector" src="/img/vector-3.svg" />
                <div className="text-wrapper-4">Mood Journal</div>
                <img className="group-3" alt="Group" src="/img/group-1.png" />
              </div>
            </div>
          </div>
          <div className="title">Tools</div>
        </div>
        <div className="trigger-plan">
          <div className="overlap-group">
            <div className="rectangle-4" />
            <img className="vector-2" alt="Vector" src="/img/vector-6.svg" />
            <div className="text-wrapper-5">Trigger Plan</div>
            <img className="group-4" alt="Group" src="/img/group-35.png" />
          </div>
        </div>
        <div className="positive-notes">
          <div className="overlap-4">
            <div className="rectangle-5" />
            <img className="vector-2" alt="Vector" src="/img/vector-5.svg" />
            <div className="text-wrapper-6">Positive Notes</div>
            <img className="group-5" alt="Group" src="/img/group-37.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
