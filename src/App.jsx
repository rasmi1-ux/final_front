import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route, Routes ,Link } from 'react-router-dom'
import Navbar from './components/component/Navbar'
import Home from './components/Routes/Home'
import BrowseFields from './components/Routes/Browsefields'
import Book from './components/Routes/Book'
import Booking from './components/Routes/Bookings'
import Login from './components/Routes/Logsign'
import Footer from './components/component/Footer'
import About from './components/Routes/About'


function App() {
 const [user, setUser] = useState(null);
 


  

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
    
  }, []);

  const handleLogin = (loggedInUser) => {
    
    setUser(loggedInUser);

    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  return (
   <>
   <Router>
    <Navbar user={user} onLogout={handleLogout} />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/browse' element={<BrowseFields />}/>
      <Route path='/booking' element={<Booking user={user} />}/>
      <Route path='/book' element={<Book />}/>
      <Route path='/login' element={<Login onLogin={handleLogin} />}/>  
      <Route path='/about' element={<About />} />

    </Routes>

<Footer />

  </Router>
   </>
  )
}

export default App
