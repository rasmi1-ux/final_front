import React from "react";
import "../css/Footer.css";

 function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="brand-title">GoalZone</h2>
          <p className="brand-desc">
            GoalZone makes booking football fields effortless. Search, reserve, and confirm your spot in just minutes. 
            Enjoy a smooth experience designed for teams and friends.
          </p>
        </div>

        <div className="footer-contact" aria-label="contact icons">
          <h4>Contact Us</h4>
          <div className="icons">
            <span className="icon" aria-hidden="true">📞</span>
            <span className="icon" aria-hidden="true">✉️</span>
            <span className="icon" aria-hidden="true">📍</span>
            <span className="icon" aria-hidden="true">💬</span>
          </div>
        </div>

        <div className="footer-newsletter" aria-label="newsletter (visual only)">
          <div className="subscribe-form" role="group" aria-label="subscribe visual">
            <input
              name="email"
              type="email"
              placeholder="Email....."
              className="subscribe-input"
              aria-label="email"
            />
            <button type="button" className="subscribe-btn" aria-hidden="false">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom" aria-hidden="false">
        <p>CopyRight © 2025</p>
      </div>
    </footer>
  )
}
export default Footer