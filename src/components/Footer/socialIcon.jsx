import React from "react";

const SocialIcon = ({ iconClass, href }) => {
  return (
    <li>
      <a href={href} className={`fa ${iconClass}`}></a>
    </li>
  );
};

export default SocialIcon;
