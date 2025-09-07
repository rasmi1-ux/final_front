import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route, Routes ,Link } from 'react-router-dom'
import Navbar from './components/component/Navbar'
import Home from './components/Routes/Home'



import Footer from './components/component/Footer'


function App() {

  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>

  

    </Routes>

<Footer />

  </Router>
   </>
  )
}

export default App
