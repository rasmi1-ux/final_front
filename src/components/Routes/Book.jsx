import React, { useState } from 'react';
import '../css/Book.css';
import { Link } from 'react-router-dom';
import  '../css/Book.css';
import { useLocation } from 'react-router-dom';
// Mock field data - you can replace this with props or API data


function Book({field}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState('2');
  const [players, setPlayers] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [playerEmail, setPlayerEmail] = useState('');
  const [playerPhone, setPlayerPhone] = useState('');

  // Available time slots
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];


const location = useLocation();
  const calculateTotal = () => {
    return location.state.field.price * parseInt(duration);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle booking submission
   
    const res = await fetch("http://localhost:3000/api/users/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: playerEmail, fieldId: location.state.field.id , date: selectedDate, duration, price: calculateTotal() }),
    });
      const data = await res.json();
    if (res.ok) {
            
alert('Booking successful!');
        // Handle successful signup
    } else {
      
     
    }
  };


  const handleBackToBrowse = () => {
    // Navigate back to browse fields page
 
    console.log('Navigate back to browse fields');
  };

  return (
    <div className="book-container">
      <div className="book-wrapper">
        
        {/* Header */}
        <div className="book-header">
          
          <h1 className="book-title">Book your field</h1>
          <p className="book-subtitle">
            Reserve your perfect football field in just a few simple steps
          </p>
        </div>

        <div className="book-grid">
          
          {/* Field Information */}
          <div className="field-info-card">
            <div className="field-image-container">
              <img 
                src={location.state.field.img}
                
                className="field-image"
              />
              <div className="field-rating-badge">
                ⭐ {location.state.field.rating}
              </div>
            </div>

            <h2 className="field-name">{location.state.field.field}</h2>
            
            <div className="field-location">
               {location.state.field.location}
            </div>

            <p className="field-description">
              {location.state.field.Description}
            </p>

            <div className="field-details-section">
              <h3 className="field-details-title">Field Details</h3>
              <div className="field-details-grid">
                <div className="field-detail-item">
                  <span>Capacity:</span>
                  <div className="field-detail-value">Up to 22 players</div>
                </div>
                <div className="field-detail-item">
                  <span>Size:</span>
                  <div className="field-detail-value">
                    Full-Size {location.state.field.Size}</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="field-details-title">Amenities</h3>
              <div className="amenities-container">
                {location.state.field.amenities.map((amenity, index) => (
                  <span key={index} className="amenity-tag">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-form-card">
            <h3 className="booking-form-title">Book This Field</h3>

            <div>
              {/* Date Selection */}
              <div className="form-group">
                <label className="form-label">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="form-input"
                />
              </div>

              {/* Time Selection */}
              <div className="form-group">
                <label className="form-label">Select Time</label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  className="form-select"
                  
                >
                  <option value="">Choose time slot</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              {/* Duration and Players */}
              <div className="form-grid">
                <div>
                  <label className="form-label">Duration (hours)</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="form-select"
                  >
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="3">3 hours</option>
                    <option value="4">4 hours</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Number of Players</label>
                  <input
                    type="number"
                    value={players}
                    onChange={(e) => setPlayers(e.target.value)}
                    min="1"
                    max="22"
                    required
                    placeholder="e.g. 12"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="form-group">
                <h4 className="contact-section-title">Contact Information</h4>
                
                <input
                  type="text"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Your Full Name"
                  required
                  className="contact-input"
                />
                
                <input
                  type="email"
                  value={playerEmail}
                  onChange={(e) => setPlayerEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="contact-input"
                />
                
                <input
                  type="tel"
                  value={playerPhone}
                  onChange={(e) => setPlayerPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  required
                  className="contact-input"
                />
              </div>

              {/* Price Summary */}
              <div className="price-summary">
                <div className="price-row">
                  <span className="price-label">Price per hour:</span>
                  <span className="price-value">${location.state.field.price}</span>
                </div>
                <div className="price-row">
                  <span className="price-label">Duration:</span>
                  <span className="price-value">{duration} hour{duration > 1 ? 's' : ''}</span>
                </div>
                <div className="price-total">
                  <span className="price-total-label">Total:</span>
                  <span className="price-total-value">${calculateTotal()}</span>
                </div>
              </div>

              {/* Submit Button */}
             
              <button
                onClick={handleSubmit}
                className="book-btn-primary"
             
              >
                
                📅 Complete Booking
              </button>
              
              <Link to="/browse">
              <button 
                onClick={handleBackToBrowse}
                className="back-btn"
              >
                ← Back to Browse Fields
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;