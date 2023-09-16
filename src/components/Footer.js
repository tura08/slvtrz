import React from "react";
import Logo from "../img/logoQuad.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="" className="footer-img" />
      <span>
        <p>Online dal 2023</p>
      </span>
    </div>
  );
};

export default Footer;
