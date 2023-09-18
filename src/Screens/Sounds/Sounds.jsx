import React from "react";
import "./style.css";

export const Sounds = () => {
  return (
    <div className="sounds">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="group" />
          <div className="rectangle" />
          <div className="relax-sounds">
            <div className="overlap-group">
              <img className="img" alt="Rectangle" src="/img/rectangle-23.png" />
              <div className="overlap-group-wrapper">
                <div className="div">
                  <p className="text-wrapper">Sometimes the most productive thing you can do is relax.</p>
                  <div className="text-wrapper-2">Relax Sounds</div>
                </div>
              </div>
              <div className="play-button">
                <div className="overlap-2">
                  <div className="rectangle-2" />
                  <div className="text-wrapper-3">play now</div>
                  <img className="group-2" alt="Group" src="/img/group.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="div-2">
            <div className="group-3">
              <div className="text-wrapper-4">Painting Forest</div>
              <div className="text-wrapper-5">59899 Listening</div>
              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-23-1.png" />
              <div className="text-wrapper-6">20 Min</div>
            </div>
            <div className="group-4">
              <div className="text-wrapper-7">Mountaineers</div>
              <div className="text-wrapper-8">45697 Listening</div>
              <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-25.png" />
              <div className="text-wrapper-9">15 Min</div>
            </div>
            <div className="group-5">
              <div className="text-wrapper-10">Lovely Deserts</div>
              <div className="element-listening">9428&nbsp;&nbsp;Listening</div>
              <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-26.png" />
              <div className="text-wrapper-6">39 Min</div>
            </div>
            <div className="group-6">
              <div className="overlap-group-2">
                <div className="text-wrapper-11">The Hill Sides</div>
                <div className="text-wrapper-12">52599 Listening</div>
              </div>
              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-28.png" />
              <div className="text-wrapper-6">50 Min</div>
            </div>
          </div>
          <img className="nav" alt="Nav" src="/img/nav.png" />
          <header className="header">
            <img className="logo" alt="Logo" src="/img/logo.svg" />
            <img className="hamburger" alt="Hamburger" src="/img/hamburger.svg" />
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-2.png" />
          </header>
        </div>
      </div>
    </div>
  );
};
