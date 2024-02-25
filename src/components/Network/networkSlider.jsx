import React, { useState } from "react";
import NetworkSlide from "./networkSlide";

const NetworkSlider = () => {
  return (
    <div className="fnc-slider example-slider">
      <div className="fnc-slider__slides">
        {/* Slide Components */}
        <NetworkSlide
          blendClass="m--blend-green m--active-slide"
          headingLines={["Network"]}
          dataCreditType="network"
        />
        <NetworkSlide
          blendClass="m--blend-dark"
          headingLines={["Business", "Laws"]}
          dataCreditType="business_laws"
        />
        <NetworkSlide
          blendClass="m--blend-red"
          headingLines={["Client", "Server"]}
          dataCreditType="client_server"
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
            Network
            <span className="fnc-nav__control-progress"></span>
          </button>
          <button className="fnc-nav__control">
            Business Laws
            <span className="fnc-nav__control-progress"></span>
          </button>
          <button className="fnc-nav__control">
            Client Server
            <span className="fnc-nav__control-progress"></span>
          </button>
        </div>
      </nav>
      {/* End of Navigation */}
    </div>
  );
};

export default NetworkSlider;
