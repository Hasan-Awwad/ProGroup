import React from "react";
import "./style.scss";
import "./script.js";
import Card from "./Card.jsx";

function Main() {
  const optionsData = [
    {
      background:
        "./assets/images/programming.webp",
      icon: "fa-solid fa-code",
      main: "Programming",
      sub: "Unlocking the World of Code",
      classNameToRedirect: "cont",
      additionalClass: "active"
    },
    {
      background:
        "./assets/images/network-main.webp",
      icon: "fa-solid fa-diagram-project",
      main: "Network",
      classNameToRedirect: "content",
      sub: "Seamless Connectivity Solutions",
    },
    {
      background:
        "./assets/images/post-images-consulting-firms.jpeg",
      icon: "fa-solid fa-people-arrows",
      main: "Consultancy",
      sub: "Years of expertise at your service",
      classNameToRedirect: "blog-slider",
    },
    {
      background:
        "./assets/images/solutions.jpg",
      icon: "fa-solid fa-server",
      main: "Solutions",
      sub: "Tailored Technology for Your Needs",
      classNameToRedirect: "solutions",
    },
    {
      background:
        "./assets/images/cabling_wiring.webp",
      icon: "fa-solid fa-network-wired",
      main: "Cabling and Wiring",
      sub: "Efficient and Reliable Network Infrastructure",
      classNameToRedirect: "demo-cont",
    }
  ];

  return (
    <div className="options">
      {optionsData.map((option, index) => (
        <Card
          key={index}
          background={option.background}
          icon={option.icon}
          main={option.main}
          sub={option.sub}
          classNameToRedirect={option.classNameToRedirect}
          additionalClass={option.additionalClass}
        />
      ))}
    </div>
  );
}

export default Main;
