import React from "react";
import "./style.scss";
import "./script.js";
import Card from "./Card.jsx";

function Solutions() {
  const optionsData = [
    {
      background:
        "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
      icon: "fa-walking",
      main: "Technical Soultion",
      sub: "Omuke trughte a otufta",
    },
    {
      background:
        "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
      icon: "fa-snowflake",
      main: "Technical Soultion 2",
      sub: "Omuke trughte a otufta",
    },
    {
      background:
        "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
      icon: "fa-tree",
      main: "Hardware",
      sub: "Omuke trughte a otufta",
    },
    {
      background:
        "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
      icon: "fa-tree",
      main: "Software",
      sub: "Omuke trughte a otufta",
    },
    {
      background:
        "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
      icon: "fa-tree",
      main: "Software 2",
      sub: "Omuke trughte a otufta",
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
        />
      ))}
    </div>
  );
}

export default Solutions;
