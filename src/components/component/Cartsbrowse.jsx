import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Carts.css'


function Cartsbrowse({field}) {

  return (
    <div className='home3'>
      <div className="featured-fields-cards">
        <div key={field.id} className='field-card'>
          <div className="field-card-img">
            <img src={field.img} alt={field.field} />
            <span className="field-rating">★ {field.rating}</span>
            <span className="field-price">${field.price}</span>
          </div>
          <div className="field-card-content">
            <h2>{field.field}</h2>
            <div className="field-location">{field.location}</div>
            <div className="field-tags">
              <span>Artificial Turf</span>
              <span>Floodlights</span>
              <span>Changing Rooms</span>
            </div>
            <Link to="/book" state={{field:field}} style={{ textDecoration: 'none' }}>
              <button className="book-btn"><span role="img" aria-label="calendar">📅</span> Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartsbrowse