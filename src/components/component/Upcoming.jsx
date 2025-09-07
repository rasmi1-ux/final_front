import React, { useState, useEffect } from 'react';
import '../css/Upcoming.css';
import { Link } from 'react-router-dom';

function Upcoming({ probs, activeTab, handleDelete, handleUpdate }) {
  const [newDuration, setNewDuration] = useState(probs.duration); // Store the selected duration
  const [newPrice, setNewPrice] = useState((Number(probs.price) || 0) * (Number(probs.duration) || 0)); // Calculate initial price based on the duration

  // Keep local duration and price in sync if parent updates the booking
  useEffect(() => {
    setNewDuration(probs.duration);
    setNewPrice((Number(probs.price) || 0) * (Number(probs.duration) || 0));
  }, [probs.duration, probs.price]);

  const handleDurationChange = (e) => {
    const selectedDuration = e.target.value;
    setNewDuration(selectedDuration);  // Update the state when user selects a new duration
    setNewPrice((Number(probs.price) || 0) * selectedDuration); // Recalculate price based on new duration
  };

  const handleModifyClick = () => {
    if (!handleUpdate) return;
    if (Number(newDuration) !== Number(probs.duration)) {
      // Send the updated duration and price to the parent component (and backend)
      handleUpdate(probs.book_id, Number(newDuration), newPrice);
    }
  };

  const handleCancelClick = () => {
    if (!handleDelete) return;
    handleDelete(probs.book_id);
  };

  return (
    <div className="booking-card">
      {activeTab === "upcoming" ? (
        <>
          <div className="booking-card-img">
            <img src={probs.img} alt={probs.field} />
          </div>
          
          <div className="booking-card-content">
            <h2 className="booking-card-title">{probs.field}</h2>
            <div className="booking-card-location">{probs.location}</div>
            <div className="booking-card-ref">Booking Reference: GZ001</div>
            <div className="booking-card-details">
              <span className="booking-card-date">📅 {probs.date}</span>
              <span className="booking-card-time">🕒 18:00 - 20:00</span>
              {/* Display the dropdown for changing duration */}
              <label htmlFor="duration-select">
                <select
                  id="duration-select"
                  value={newDuration}
                  onChange={handleDurationChange}
                  className="booking-card-duration"
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                </select>
              </label>
              <span className="booking-card-players">👥 12 Players</span>
              {/* price is unit price * duration */}
              <span className="booking-card-price">💳 ${newPrice.toFixed(2)} <span className="booking-card-paid">Paid</span></span>
            </div>
            <div className="booking-card-actions">
              <button className="booking-btn-outline" onClick={handleModifyClick}>Modify</button>
              <button className="booking-btn-outline" onClick={handleCancelClick}>Cancel</button>
              <button className="booking-btn-green">View Details</button>
            </div>
            <div className="booking-card-status-col">
              <span className="booking-status-confirmed">Confirmed</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="booking-card-img">
            <img src={probs.img_} alt={probs.field} />
          </div>
          <div>dasdasdaddasdsa</div>
          <div className="booking-card-content">
            <h2>{probs.field}</h2>
            <div className="booking-card-location">{probs.location}</div>
            <div className="booking-card-ref">Booking Reference: GZ001</div>
            <div className="booking-card-details">
              <span className="booking-card-date">📅 {probs.date}</span>
              <span className="booking-card-time">🕒 18:00 - 20:00</span>
              <span className="booking-card-duration">{probs.duration}</span>
              <span className="booking-card-players">👥 12 Players</span>
              <span className="booking-card-price">💳 ${probs.price}</span>
            </div>
            <div className="booking-card-actions">
              <Link to="/book" style={{ textDecoration: 'none' }}>
                <button className="booking-btn-green">Book Again</button>
              </Link>
              <button className="booking-btn-outline">Leave Review</button>
              <button className="booking-btn-orange">Download Receipt</button>
            </div>
            <div className="booking-card-status-col">
              <span className="booking-status-completed">Confirmed</span>
              <span className="booking-status-rating">★ 4.7</span>
              <p>dasda</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Upcoming;
