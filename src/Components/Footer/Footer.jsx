import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-col">
          <h2 className="logo">Sprays</h2>

          <p>
            Precision sprayers ensure targeted application, minimizing
            environmental impact while maximizing crop yield and health.
            Furthermore, irrigation systems utilize sprays to distribute
            water efficiently.
          </p>
        </div>


        {/* Navigation */}
        <div className="footer-col">
          <h3>Navigation :</h3>

          <ul>
            <li>Home</li>
            <li>Catalog</li>
            <li>Contact</li>
          </ul>
        </div>


        {/* About */}
        <div className="footer-col">
          <h3>About us:</h3>

          <ul>
            <li>Contact</li>
            <li>About us</li>
            <li>Faqs</li>
            <li>privacy policy</li>
            <li>Shipping & Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>


        {/* Social */}
        <div className="footer-col">
          <h3>Share:</h3>

          <div className="social-icons">
            <span>▶</span>
            <span>💬</span>
            <span>◎</span>
            <span>✕</span>
          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>© 2026, Sprays WorkDo, Powered by WorkDo.io</p>

        <div className="payments">
          <img src="/img/visa.png" alt="" />
          <img src="/img/mastercard.png" alt="" />
          <img src="/img/amex.png" alt="" />
          <img src="/img/paypal.png" alt="" />
          <img src="/img/discover.png" alt="" />
        </div>

      </div>

    </footer>
  );
};

export default Footer;