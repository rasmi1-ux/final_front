
import React, { useEffect, useState } from 'react';
import '../css/manageBookings.css';

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/allBookings');
      const data = await response.json();
      console.log('Bookings data:', data);
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError(error.message);
    }
  };
  const deleteaccepted = async (id) => {
    
      const response= await fetch(`http://localhost:3000/api/admin/bookings/${id}`,{
        method: 'DELETE'
      });
      if (response.ok) {
        console.log('Booking deleted successfully');
        getBookings();
      }
    } 
  
  const handleAccept = async (booking) => {
    
      const bookingData = {
        date: booking.date,
        duration: booking.duration,
        field_id: booking.booking_field_id,
        email: booking.email,
        price: booking.booking_price ,
        img: booking.img,
        field: booking.field_name
      };

      const response = await fetch('http://localhost:3000/api/admin/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Booking accepted:', result);
         alert('Booking accepted successfully!');
        
        

        deleteaccepted(booking.book_id);

      } 
  };

  return (
    <div className="manage-bookings">
      <h2 className="title">All Bookings</h2>
      
      {bookings.length === 0 ? (
        <div className="no-bookings">No bookings found.</div>
      ) : (
        <div className="bookings-grid">
          {bookings.map(booking => (
            <div key={booking.book_id} className="booking-card">
              <div className="field-image">
                <img src={booking.img} alt={booking.field_name} />
              </div>
              
              <div className="booking-info">
                <h3 className="field-name">{booking.field_name || 'Field Name'}</h3>
                <p className="booking-id">Booking ID: {booking.book_id}</p>
                <p className="location">{booking.location || 'Location'}</p>
                <p className="description">{booking.description || 'Description'}</p>
                <div className="amenities">
                  <strong>Amenities:</strong> {booking.amenities ? booking.amenities.join(', ') : 'N/A'}
                </div>
                
                <div className="booking-details">
                  <div className="detail-row">
                    <span>Date:</span> {booking.date}
                  </div>
                  <div className="detail-row">
                    <span>Duration:</span> {booking.duration} hours
                  </div>
                  <div className="detail-row">
                    <span>Email:</span> {booking.email}
                  </div>
                  <div className="detail-row">
                    <span>Size:</span> {booking.size}
                  </div>
                </div>
                
                <div className="price-rating">
                  <div className="price">${booking.booking_price || booking.price}</div>
                  <div className="rating">
                    ⭐ {booking.rate || booking.rating || 'N/A'}
                  </div>
                </div>
                
                <div className="action-buttons">
                  <button className="accept-btn" onClick={() => handleAccept(booking)}>Accept</button>
                  <button className="delete-btn" onClick={() => deleteaccepted(booking.book_id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageBookings;