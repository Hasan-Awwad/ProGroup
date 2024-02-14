import React from "react";

const FooterLink = ({ label, href }) => {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
};

export default FooterLink;
