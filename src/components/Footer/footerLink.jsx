import React from "react";

const FooterLink = ({ label, href }) => {
  return (
    <li>
      <a href={href} className="hover-target">{label}</a>
    </li>
  );
};

export default FooterLink;
