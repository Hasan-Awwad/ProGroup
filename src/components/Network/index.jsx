import React from "react";
import "./style.scss";
import "./script.js";
import NetworkSlider from "./networkSlider.jsx";
import NetworkCredits from "./networkCredits.jsx";

const Network = () => (
  <div className="demo-cont">
    <NetworkSlider />
    <NetworkCredits />
  </div>
);
export default Network;
