import React, { useState } from "react";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "9bb74b1dc4de007633995209b021f02e";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header>
          <h6>Weather Forecast</h6>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Type city here..."
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input className="btn" type="submit" value="Search" />
            <button className="current-location-button">
              Current Location
            </button>
          </div>
        </form>
        <WeatherInfo data={weatherData} />

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
    search();
    return "Loading...";
  }
}
