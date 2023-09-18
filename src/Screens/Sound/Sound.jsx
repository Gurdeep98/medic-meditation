import React from "react";
import "./style.css";

export const Sound = () => {
  return (
    <div className="sound">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="group" />
          <img className="time" alt="Time" src="/img/time.png" />
          <img className="img" alt="Group" src="/img/group.png" />
          <div className="title">Painting Forest</div>
          <div className="arist">By: Painting with Passion</div>
          <img className="album-art" alt="Album art" src="/img/album-art.png" />
          <img className="nav" alt="Nav" src="/img/nav.png" />
          <div className="div">
            <img className="logo" alt="Logo" src="/img/logo.svg" />
            <img className="hamburger" alt="Hamburger" src="/img/hamburger.svg" />
            <img className="ellipse" alt="Ellipse" src="/img/ellipse-2.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
