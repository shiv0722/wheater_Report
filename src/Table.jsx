import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const Table = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState();
  const [inputVal, setInputVal] = useState(null);

  let handleTable = (e) => {
    e.preventDefault();
    setCity(inputVal);
    setInputVal(" ");
  };

  const API_KEY = "95eba6686d95f59d82c03194fc4dd14d";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, [city]);

  return (
    <div className="mainDiv">
      <form onSubmit={handleTable}>
        <span className="heading">Enter City/Country : </span>
        <input
          type="text"
          className="inputsub"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <span>
          <input type="submit" value="Submit" className="show" />
        </span>
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Temp(*c)</th>
              <th>Description</th>
              <th>Humidity</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            {weatherData ? (
              <tr>
                <td>{weatherData.name}</td>
                <td>{weatherData.main.temp} °C</td>
                <td>{weatherData.weather[0].description}</td>
                <td>{weatherData.main.humidity} %</td>
                <td>{weatherData.wind.speed} m/s</td>
              </tr>
            ) : (
              <h4>NO DATA...</h4>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
