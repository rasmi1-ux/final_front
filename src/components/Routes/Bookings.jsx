
import { useState, useEffect } from "react";
import "../css/Bookings.css";
import Upcoming from "../component/Upcoming";

function Bookings({ user }) {
  const [bookings, setBookings] = useState([]);
  const [history, setHistory] = useState([]);
  const [averageRating, setAverageRating] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    if (!user?.email) return;
    console.log('deleting booking', id);
    setLoading(true);
    
    try {
      const res = await fetch(`http://localhost:3000/api/users/bookings/${id}/${user?.email}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        // Use the functional form of setBookings to make sure it's the latest state
        setBookings(prevBookings => prevBookings.filter(b => b.id !== id));
      }
    } catch (err) {
      console.error('failed to delete booking', err);
    } finally {
      setLoading(false);
    }
    getBookings();
  };

  const handleUpdate = async (id, updatedDuration, updatedPrice) => {
    if (!user?.email) return;
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/users/bookings/${id}/${user.email}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ duration: updatedDuration, price: updatedPrice })
      });

      if (res.ok) {
        setBookings(prevBookings => prevBookings.map(b => b.id === id ? { ...b, duration: updatedDuration, price: updatedPrice } : b));
      }
    } catch (err) {
      console.error('failed to update booking', err);
    } finally {
      setLoading(false);
    }
    getBookings();
  };

  const getBookings = async () => {
    if (!user?.email) return;
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/users/bookings/${user.email}`);
      const { bookings: fetched } = await res.json();

      const list = Array.isArray(fetched) ? fetched : [];
      setBookings(list);


      const ratings = list.map(b => Number(b?.rating)).filter(n => Number.isFinite(n));
      setAverageRating(ratings);
    } catch (err) {
      console.error('Failed to load bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  const getHistory = async () => {
    if (!user?.email) return;
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/users/history/${user.email}`);
      const data = await res.json();
      console.log('History data:', data);
      const historyList = Array.isArray(data) ? data : [];
      setHistory(historyList);
    } catch (err) {
      console.error('Failed to load booking history:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    if (tab === 'history') {
      getHistory(); // Fetch fresh history data when switching to history tab
    }
  };

  useEffect(() => {
    if (user?.email) {
      getBookings();
      getHistory();
    }
  }, [user?.email]);

  // Derived lists
  const upcomingBookings = bookings;
  const bookingHistory = history; 
  const totalSpent = bookings.reduce((acc, b) => acc + (Number(b?.price) || 0) * (Number(b?.duration) || 0), 0);
  const avgRatingDisplay = averageRating.length ? (averageRating.reduce((a, r) => a + r, 0) / averageRating.length).toFixed(2) : '0.00';

  return (
    <div className="bookings-page">
      <div className="bookings-container">
        <div className="bookings-title">My Bookings</div>
        <div className="bookings-subtitle">Manage your football field reservations and booking history</div>

        <div className="bookings-stats-row">
          <div className="bookings-stat-card">
            <div className="bookings-stat-value green">{upcomingBookings.length}</div>
            <div className="bookings-stat-label">Upcoming Bookings</div>
          </div>

          <div className="bookings-stat-card">
            <div className="bookings-stat-value green">{history.length}</div>
            <div className="bookings-stat-label">Completed Games</div>
          </div>

          <div className="bookings-stat-card">
            <div className="bookings-stat-value orange">${totalSpent}</div>
            <div className="bookings-stat-label">Total Spent</div>
          </div>

          <div className="bookings-stat-card">
            <div className="bookings-stat-value star">{avgRatingDisplay} <span className="bookings-star">★</span></div>
            <div className="bookings-stat-label">Average Rating</div>
          </div>
        </div>

        <div className="buttons">
          <button 
            className={activeTab === 'upcoming' ? 'active' : 'G'} 
            onClick={() => handleTabSwitch('upcoming')}
          >
            Upcoming Bookings ({upcomingBookings.length})
          </button>
          <button 
            className={activeTab === 'history' ? 'active' : 'G'} 
            onClick={() => handleTabSwitch('history')}
          >
            Booking History ({bookingHistory.length})
          </button>
        </div>

        {loading && <div style={{ textAlign: 'center', margin: 12 }}>Loading bookings...</div>}

        {activeTab === 'upcoming' && (
          <div className="bookings-list">
            {upcomingBookings.map((b, i) => {
              console.log('rendering upcoming', b.id)
              return <Upcoming probs={b} activeTab={activeTab} key={b.id || i} handleDelete={handleDelete} handleUpdate={handleUpdate} totalSpent={totalSpent} />
            })}
            {!upcomingBookings.length && !loading && <div style={{ textAlign: 'center', color: '#6b7280' }}>No upcoming bookings</div>}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bookings-list">
            {bookingHistory.map((b, i) => {
              console.log('rendering history', b.hist_id)
              return <Upcoming probs={b} activeTab={activeTab} key={b.hist_id || i} />
            })}
            {!bookingHistory.length && !loading && <div style={{ textAlign: 'center', color: '#6b7280' }}>No booking history</div>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings;