import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import Cartsbrowse from '../component/Cartsbrowse'
import '../css/Carts.css'

function Home() {
  

const [fields, setFields] = useState([]);

  const fetchFields = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/users/home');
      const data = await res.json();
      setFields(data);
      console.log(data);
    } catch (err) {
      console.error('Error fetching fields:', err);
    }
  };

 
    // load fields once when component mounts
    useEffect(() => {
      fetchFields();
    }, []);

  return (
    <>
      <div className="home-hero">
        <h1>
          Book Your Perfect <br />
          <span className="hero-highlight">Football Field</span>
        </h1>
        <p className="hero-desc">
          Discover premium football fields across the city. Easy booking, instant confirmation, and the best playing experience.
        </p>
        <div className="hero-actions">
          <Link to="/browse" className="hero-btn browse-btn">
            <span className="hero-icon">
              {/* Location Icon SVG */}
              <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="12" fill="#169C53"/><path d="M12 7a4 4 0 0 0-4 4c0 2.22 3.09 6.13 3.22 6.29a.5.5 0 0 0 .78 0C12.91 17.13 16 13.22 16 11a4 4 0 0 0-4-4zm0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#fff"/></svg>
            </span>
            Browse Fields
          </Link>
          <Link to="/book" className="hero-btn book-btn">
            <span className="hero-icon">
              {/* Calendar Icon SVG */}
              <svg width="24" height="24" fill="none"><rect x="2" y="4" width="16" height="14" rx="2" fill="#fff"/><rect x="2" y="4" width="16" height="14" rx="2" stroke="#F7931E" strokeWidth="2"/><path d="M6 2v4M14 2v4" stroke="#F7931E" strokeWidth="2" strokeLinecap="round"/><rect x="6" y="10" width="2" height="2" rx="1" fill="#F7931E"/><rect x="12" y="10" width="2" height="2" rx="1" fill="#F7931E"/></svg>
            </span>
            Book Now
          </Link>
        </div>
      </div>
<div className="home2">


<div className="heading-container">
    <h1>
      Why Choose GoalZone?
      <span className="the_sentence">We make football field booking simple, fast, and reliable for players and teams.</span>
    </h1>
</div>

  <div className="feature-cards">
    <div className="feature-card">
      <div className="feature-icon">
        {/* Calendar Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="14" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3v4M8 3v4M3 11h18"/></svg>
      </div>
      <div className="feature-title">Easy Booking</div>
      <div className="feature-desc">Book your favorite field in just a few clicks</div>
    </div>
    <div className="feature-card">
      <div className="feature-icon">
        {/* Location Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="10" r="3"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9z"/></svg>
      </div>
      <div className="feature-title">Premium Locations</div>
      <div className="feature-desc">Fields in the best locations across the city</div>
    </div>
    <div className="feature-card">
      <div className="feature-icon">
        {/* Group Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 20c0-2.21 3.58-4 8-4s8 1.79 8 4"/></svg>
      </div>
      <div className="feature-title">Group Friendly</div>
      <div className="feature-desc">Perfect for teams, friends, and tournaments</div>
    </div>
    <div className="feature-card">
      <div className="feature-icon">
        {/* Shield Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3l8 4v5c0 5.25-3.58 10-8 10s-8-4.75-8-10V7l8-4z"/></svg>
      </div>
      <div className="feature-title">Secure Payments</div>
      <div className="feature-desc">Safe and secure online payment system</div>
    </div>
  </div>


</div>

   <div className="featured-fields-header">
          <div>
            <h1>Featured Fields</h1>
            <p className="featured-fields-desc">Discover our most popular and highly-rated football fields</p>
          </div>
          <Link to="/browse" className="view-all-btn">View All &rarr;</Link>
        </div>
<div className="browse-fields-section">
      {/* <Carts /> */}
      <div className="featured-fields-cards">
        {fields.map((field, idx) => (
          <Cartsbrowse key={idx} field={field} />
        ))}
      </div>
    </div>
      

    </>


  )
}

export default Home
