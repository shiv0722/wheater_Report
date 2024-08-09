import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";

const Wheater = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("jabalpur");

  const API_KEY = "95eba6686d95f59d82c03194fc4dd14d";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        alert("Error getting weather data");
      });
  }, [city]);

  const handleCity = (currentCity) => {
    setCity(currentCity);
  };

  return (
    <div>
      {weatherData ? (
        <>
          <div className="box">
            <h2 className="heading">Weather in : {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity} %</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
          <br />
          <div>
            <h1>GET WEATHER REPORT</h1>
          </div>
          <button onClick={() => handleCity("Mumbai")} className="show">Mumbai</button>
          <button onClick={() => handleCity("Bhopal")} className="show">Bhopal</button>
          <button onClick={() => handleCity("Indore")} className="show">Indore</button>
          <button onClick={() => handleCity("Delhi")} className="show">Delhi</button>
          <button onClick={() => handleCity("Rajasthan")} className="show">Rajasthan</button>
          <button onClick={() => handleCity("Gurugram")} className="show">Gurugram</button>
          <button onClick={() => handleCity("Ayodhya")} className="show">Ayodhya</button>
        </>
      ) : (
        <>
          <h1>No Result...</h1>
        </>
      )}
    </div>
  );
};

export default Wheater;
