import React from "react";
import logo from "../assets/test.jpg"; // Adjust the path based on your setup

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Liaison Group Logo" className="footer-logo" />
        <div className="footer-text">
          <p>Designed by Melk</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
