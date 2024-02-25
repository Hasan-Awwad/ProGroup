import React from "react";

const NetworkSlide = ({ blendClass, headingLines, dataCreditType }) => (
  <div className={`fnc-slide ${blendClass}`}>
    <div className="fnc-slide__inner">
      <div className="fnc-slide__mask">
        <div className="fnc-slide__mask-inner"></div>
      </div>
      <div className="fnc-slide__content">
        <h2 className="fnc-slide__heading">
          {headingLines.map((line, index) => (
            <div key={index} className="fnc-slide__heading-line">
              <span>{line}</span>
            </div>
          ))}
        </h2>
        <button
          type="button"
          className="fnc-slide__action-btn"
          data-credit-type={dataCreditType}
        >
          More Info
          <span data-text="More Info">More Info</span>
        </button>
      </div>
    </div>
  </div>
);

export default NetworkSlide;
