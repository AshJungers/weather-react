import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: "Wednesday 7:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header>
          <h6>Weather Forecast</h6>
        </header>
        <form className="searchform">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control search-text-input"
              placeholder="Type city here..."
            />
            <input className="btn" type="submit" value="Search" />
            <button className="current-location-button">
              Current Location
            </button>
          </div>
        </form>

        <div className="currentDate">{weatherData.date}</div>

        <br />
        <div className="container currentSearch">
          <div className="row">
            <div className="col-6 box-1">
              <h1 className="currentCity">{weatherData.city}</h1>
              <h5 className="description text-capitalize">
                {weatherData.description}
              </h5>
              <h6 className="wind">Wind: {weatherData.wind} mph</h6>
              <h6 className="humidity">Humidity: {weatherData.humidity}%</h6>
            </div>
            <div className="col-6 box-2">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="weatherPic"
              />
              <br />
              <h3 className="currentTemp">
                {Math.round(weatherData.temperature)}
              </h3>
              <span className="units">°F</span>
            </div>
          </div>
        </div>

        <br />

        <div className="future">
          <p>5-day Future Forecast</p>
        </div>
        <div className="row justify-content-evenly"></div>
        <Forecast />
        <div className="footer">
          <a
            href="https://github.com/AshJungers/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source
          </a>{" "}
          code by Ashley Jungers
        </div>
      </div>
    );
  } else {
    const apiKey = "9bb74b1dc4de007633995209b021f02e";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
