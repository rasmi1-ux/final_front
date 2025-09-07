
import React, { useState, useEffect } from 'react'
import '../css/Browsefields.css'
import { Link } from 'react-router-dom'
import Cartsbrowse from '../component/Cartsbrowse'

function BrowseFields() {


  

  const [fields, setFields] = useState([]);
  const [weather, setWeather] = useState(null);
  const fetchFields = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/users');
      const data = await res.json();
      setFields(data);
    } catch (err) {
      console.error('Error fetching fields:', err);
    }
  };
  const getWeather = async () => {
  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=83490427318540caaa7192901250609&q=Paris`);
    const data = await res.json();
    setWeather(data);
    console.log(data);
  } catch (err) {
    console.error('Error fetching weather:', err);
  }
}
  useEffect(() => {
      fetchFields();
      getWeather();
    // Replace with your OpenWeatherMap API key
//Paris

 }, []);

  
  return (
    <>


 
    <div className="browse-fields1-section">
      <h1 className="browse-fields1-title">Browse Football Fields</h1>
      <p className="browse-fields1-subtitle">
        Find the perfect field for your game. Filter by location, price, and amenities.
      </p>
    </div>

    <div className="browse-fields-section">
        <div>
          {weather ? (
            <>
              <h2>Weather in {weather.location?.name}</h2>
              <p>Temperature: {weather.current?.temp_c}°C</p>
              <p>Condition: {weather.current?.condition?.text}</p>
            </>
          ) : (
            <p>Loading weather...</p>
          )}
        </div>
      
      <div className="featured-fields-cards">
      
    {fields.map((field, idx) => (
  <Cartsbrowse key={field._id || idx} field={field} />
  ))}
      </div>
    </div>






    </>
  )
}

export default BrowseFields