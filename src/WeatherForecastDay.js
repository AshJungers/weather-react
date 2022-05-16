import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <h5 className="card-title">{day()}</h5>

      <hr />
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <span className="weather-forecast-temperature">
        <p className="card-text">
          <span className="weather-forecast-temperature-max">
            {maxTemperature()}
          </span>{" "}
          | {""}
          <span className="weather-forecast-temperature-min">
            {minTemperature()}
          </span>
        </p>
      </span>
    </div>
  );
}
