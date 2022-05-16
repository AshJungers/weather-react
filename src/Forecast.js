import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Weather.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="ForecastInfo">
        <p>5-day Future Forecast</p>
        <div className="row justify-content-evenly">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-sm-2">
                  <div className="card">
                    <div className="card-body shadow" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "9bb74b1dc4de007633995209b021f02e";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
