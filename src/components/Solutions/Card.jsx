import React from "react";

function Card({ background, icon, main, sub }) {
  return (
    <div
      className="option"
      style={{
        "--optionBackground": `url(${background})`,
      }}
    >
      <div className="shadow"></div>
      <div className="label">
        <div className="icon">
          <i className={`fas ${icon}`}></i>
        </div>
        <div className="info">
          <div className="main">{main}</div>
          <div className="sub">{sub}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
