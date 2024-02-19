import React from "react";

const FooterLink = ({ label, href, className }) => {
  return (
    <li>
      <a href={href} className={`hover-target ${className}`}>
        {label}
      </a>
    </li>
  );
};

export default FooterLink;
