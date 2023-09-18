import React from "react";
import "./style.css";

export const Sleep = (): JSX.Element => {
  return (
    <div className="sleep">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="nav" alt="Nav" src="/img/nav.png" />
            <header className="header">
              <img className="logo" alt="Logo" src="/img/logo.svg" />
              <img className="hamburger" alt="Hamburger" src="/img/hamburger.svg" />
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-2.png" />
            </header>
            <div className="title">Sleep Session</div>
            <div className="text-wrapper">Bedtime</div>
            <div className="overlap-group-wrapper">
              <div className="div">
                <div className="rectangle" />
                <img className="group" alt="Group" src="/img/group.png" />
                <div className="text-wrapper-2">Sleep</div>
                <div className="text-wrapper-3">5h 30m</div>
              </div>
            </div>
            <div className="deep">
              <div className="div">
                <div className="rectangle-2" />
                <div className="text-wrapper-4">Deep</div>
                <img className="img" alt="Group" src="/img/group-39.png" />
                <div className="text-wrapper-5">1h 10m</div>
              </div>
            </div>
            <div className="chart">
              <div className="overlap-2">
                <div className="overlap-3">
                  <img className="graph-lines" alt="Graph lines" src="/img/graph-lines.png" />
                  <img className="graph-lines-2" alt="Graph lines" src="/img/graph-lines-1.png" />
                  <div className="selector">
                    <div className="overlap-group-2">
                      <img className="shape" alt="Shape" src="/img/shape.svg" />
                      <div className="selector-2" />
                    </div>
                  </div>
                  <div className="tooltip">
                    <div className="overlap-4">
                      <img className="shape-2" alt="Shape" src="/img/shape-1.svg" />
                      <div className="label">May</div>
                      <div className="label-2">$27,632</div>
                    </div>
                  </div>
                  <div className="text-wrapper-6">May</div>
                  <div className="text-wrapper-7">Apr</div>
                  <div className="text-wrapper-8">Mar</div>
                  <div className="text-wrapper-9">Feb</div>
                  <div className="side-value">
                    <div className="text-wrapper-10">0</div>
                    <div className="text-wrapper-11">200</div>
                    <div className="text-wrapper-12">400</div>
                    <div className="text-wrapper-13">600</div>
                    <div className="text-wrapper-14">800</div>
                  </div>
                </div>
                <div className="text-wrapper-15">Jun</div>
                <div className="text-wrapper-16">Jan</div>
              </div>
            </div>
          </div>
          <div className="quality">
            <div className="div">
              <div className="rectangle" />
              <div className="text-wrapper-17">Quality</div>
              <img className="group-2" alt="Group" src="/img/group-1.png" />
              <div className="text-wrapper-3">3h 30m</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
