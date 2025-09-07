import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <>
    <section className="about-hero">
      <div className="container">
        <h1>About GoalZone</h1>
        <p>We're passionate about making football accessible to everyone. Our mission is to connect players with the best fields in the city.</p>

        <div className="about-actions">
          <button className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#fff"/>
              <circle cx="12" cy="9" r="2.5" fill="#f59e0b" />
            </svg>
            <span>Explore Fields</span>
          </button>
          <button className="btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#fff"/>
            </svg>
            <span>Join Community</span>
          </button>
        </div>
      </div>
  </section>
    <section className="about-stats">
      <div className="stats-container">
        <div className="stat">
          <div className="stat-value">50+</div>
          <div className="stat-label">Premium Fields</div>
        </div>
        <div className="stat">
          <div className="stat-value">10,000+</div>
          <div className="stat-label">Happy Players</div>
        </div>
        <div className="stat">
          <div className="stat-value">25,000+</div>
          <div className="stat-label">Successful Bookings</div>
        </div>
        <div className="stat">
          <div className="stat-value">4.9★</div>
          <div className="stat-label">Average Rating</div>
        </div>
      </div>
  </section>
    <section className="about-story">
      <div className="story-container">
        <h2>Our Story</h2>
        <div className="story-text">
          <p>GoalZone was born from a simple frustration: finding and booking quality football fields was unnecessarily complicated. As passionate football players ourselves, we experienced the hassle of calling multiple venues, dealing with unclear availability, and struggling with outdated booking systems.</p>

          <p>In 2023, we decided to solve this problem once and for all. We built GoalZone to be the easiest, most reliable way to find and book football fields. Today, we're proud to serve thousands of players across the city, from casual weekend warriors to competitive teams.</p>

          <p>Our vision is simple: every footballer should have access to quality playing facilities, and booking should be as easy as ordering food online. We're not just a booking platform – we're building the future of recreational football.</p>
        </div>
      </div>
    </section>
    <section className="values-section">
      <div className="values-container">
        <h2>Our Values</h2>
        <p className="values-sub">These principles guide everything we do at GoalZone</p>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#fff" opacity="0"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-6c-1.1 0-2 .9-2 2v1.1A9.02 9.02 0 003 13c0 4.97 4.03 9 9 9s9-4.03 9-9a9.02 9.02 0 00-7-8.9V4c0-1.1-.9-2-2-2z" fill="#fff"/></svg>
            </div>
            <div className="value-title">Quality First</div>
            <div className="value-desc">We partner only with premium football fields that meet our high standards for playing surface, facilities, and maintenance.</div>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2L15 8l6 .5-4.5 3.5L18 20l-6-4-6 4 .5-8.0L2 8.5 8 8 12 2z" fill="#fff"/></svg>
            </div>
            <div className="value-title">Instant Booking</div>
            <div className="value-desc">Book your field in seconds with our streamlined booking system. No waiting, no hassle, just football.</div>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 21s-6-4.35-8-6.2C2 12.8 3 8 8 6l4 10 4-10c5 2 6 6.8 4 8.8-2 1.85-8 6.4-8 6.4z" fill="#fff"/></svg>
            </div>
            <div className="value-title">Community Focused</div>
            <div className="value-desc">We believe football brings people together. Our platform helps build stronger football communities.</div>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 1l3 3h-2v3h-2V4H9l3-3zM4 10v6c0 5 4 8 8 8s8-3 8-8v-6H4z" fill="#fff"/></svg>
            </div>
            <div className="value-title">Trusted &amp; Secure</div>
            <div className="value-desc">Your bookings and payments are protected with industry-leading security measures.</div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default About;