import React from "react";
import SocialIcon from "./socialIcon";
import FooterLink from "./footerLink";
import FooterContact from "./footerContact";
const FooterSection = () => {
  const currentDate = new Date();

  return (
    <section id="footerSection">
      <ul className="socials">
        <SocialIcon iconClass="fa-brands fa-facebook" href="/" />
        <SocialIcon iconClass="fa-brands fa-x-twitter" href="/" />
        <SocialIcon iconClass="fa-brands fa-linkedin" href="/" />
        <SocialIcon iconClass="fa-brands fa-instagram" href="/" />
      </ul>

      <ul className="links">
        <FooterLink label="Home" href="#" className="home_scroll"/>
        <FooterLink label="About" href="#" />
        <FooterLink label="Blog" href="#" />
        <FooterLink label="Contact" href="#" className="footer_scroll" />
      </ul>

      <FooterContact />

      <p className="legal">Progrouplb © {currentDate.getFullYear()} All rights reserved</p>
    </section>
  );
};

export default FooterSection;
