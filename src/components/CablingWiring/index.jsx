import React from "react";
import "./style.scss";
import "./script.js";
import CablingWiringSlider from "./CablingWiringSlider.jsx";
import CablingWiringCredits from "./CablingWiringCredits.jsx";

const CablingWiring = () => (
  <div className="demo-cont">
    <CablingWiringSlider />
    <CablingWiringCredits />
  </div>
);
export default CablingWiring;
