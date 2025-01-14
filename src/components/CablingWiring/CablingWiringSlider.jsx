import React from "react";
import CablingWiringSlide from "./CablingWiringSlide";

const NetworkSlider = () => {
  return (
    <div className="fnc-slider example-slider">
      <div className="fnc-slider__slides">
        {/* Slide Components */}
        <CablingWiringSlide
          blendClass="m--blend-green m--active-slide"
          headingLines={["Electrical", "Wiring"]}
          dataCreditType="electrical_wiring"
        />
        <CablingWiringSlide
          blendClass="m--blend-dark"
          headingLines={["Fire", "Networks"]}
          dataCreditType="fire_networks"
        />
        <CablingWiringSlide
          blendClass="m--blend-red"
          headingLines={["Security", "Networks"]}
          dataCreditType="security_networks"
        />
        {/* End of Slide Components */}
      </div>
      {/* Navigation */}
      <nav className="fnc-nav">
        <div className="fnc-nav__bgs">
          <div className="fnc-nav__bg m--navbg-green m--active-nav-bg"></div>
          <div className="fnc-nav__bg m--navbg-dark"></div>
          <div className="fnc-nav__bg m--navbg-red"></div>
          <div className="fnc-nav__bg m--navbg-blue"></div>
        </div>
        <div className="fnc-nav__controls">
          <button className="fnc-nav__control">
            Electrical Wiring
            <span className="fnc-nav__control-progress"></span>
          </button>
          <button className="fnc-nav__control">
            Fire Networks
            <span className="fnc-nav__control-progress"></span>
          </button>
          <button className="fnc-nav__control">
            Security Networks
            <span className="fnc-nav__control-progress"></span>
          </button>
        </div>
      </nav>
      {/* End of Navigation */}
    </div>
  );
};

export default NetworkSlider;
