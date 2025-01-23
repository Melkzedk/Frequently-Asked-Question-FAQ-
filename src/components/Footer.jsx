import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p className="footer-name"><strong>Melkzedek Wafula</strong></p>
          <p>Assistant Consultant - ICT</p>
          <p>Liaison Group (I.B) Limited</p>
          <p>Liaison House, State House Avenue</p>
        </div>
        <div className="footer-section">
          <p>
            Tel: <a href="tel:+254703071235">+254 703 071 235</a>
          </p>
          <p>
            Cell: <a href="tel:+254746365629">+254 746 365 629</a>
          </p>
          <p>
            Email: <a href="mailto:mwafula@liaisongroup.net">mwafula@liaisongroup.net</a>
          </p>
        </div>
        <div className="footer-section">
          <p>
            Website:{" "}
            <a
              href="https://www.liaisongroup.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.liaisongroup.net
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Liaison Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
