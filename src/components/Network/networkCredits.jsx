import React from "react";

const NetworkCredits = () => (
  <div className="demo-cont__credits">
    <div className="demo-cont__credits-close"></div>
    <h2 className="demo-cont__credits-heading"></h2>
    <h3 className="demo-cont__credits-name"></h3>
    <h4 className="demo-cont__credits-blend">Change Color Mode</h4>
    <div className="colorful-switch">
      <input
        type="checkbox"
        className="colorful-switch__checkbox js-activate-global-blending"
        id="colorful-switch-cb"
      />
      <label className="colorful-switch__label" htmlFor="colorful-switch-cb">
        <span className="colorful-switch__bg"></span>
        <span className="colorful-switch__dot"></span>
        <span className="colorful-switch__on">
          <span className="colorful-switch__on__inner"></span>
        </span>
        <span className="colorful-switch__off"></span>
      </label>
    </div>
  </div>
);
export default NetworkCredits;
