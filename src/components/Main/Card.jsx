import React from "react";

function Card({ background, icon, main, sub, classNameToRedirect, additionalClass }) {

  const handleMoreInfoClick = () => {
    const targetOffset = document.querySelector(`.${classNameToRedirect}`).offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`option ${additionalClass}`}
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
          <div className="sub">{sub} <span className="main-more-info" onClick={handleMoreInfoClick}>More Info</span></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
