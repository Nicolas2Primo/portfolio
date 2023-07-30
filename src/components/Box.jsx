import React from "react";
import "../styles/Box.css";

const Box = () => {
  return (
    <div className="container flex items-center justify-center scale-[0.3]">
      <div className=" box">
        <div className="card" id="front">
          Front
        </div>
        <div className="card" id="back">
          Back
        </div>
        <div className="card" id="left">
          Left
        </div>
        <div className="card" id="right">
          Right
        </div>
        <div className="card" id="top">
          Top
        </div>
        <div className="card" id="bottom">
          Bottom
        </div>
      </div>
    </div>
  );
};

export default Box;
