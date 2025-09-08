import React from 'react'
import { Link } from 'react-router-dom'
import Buttonbt from './Buttonbt'
import '../../components/css/Navbar.css'
import logo from '../../assets/logo.png'
function Navbar({ user, onLogout }) {
  return (
  <nav className='navbar navbar-sticky'>
    <div className='navbar_left'>
      <img src={logo} alt="Logo" className="logo_left"/>
      <span className="logo-text">GoalZone</span>
    </div>
    <ul className='navbar_middle'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/browse">Browse Fields</Link></li>
      <li><Link to="/Booking">Bookings</Link></li>
      <li><Link to="/About">About</Link></li>
    </ul>
    <div className='navbar_right'>
      {user ? (
        <>
          <span className="user-email">{user.email}</span>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </>
      ) : (
        <span className="login-btn">
          <Link to="/login">Login</Link>
        </span>
      )}

    <Buttonbt /> 


    </div>
  </nav>
  )
}

export default Navbar