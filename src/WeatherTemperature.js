import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (fahrenheit = (props.celcius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h3 className="currentTemp">{Math.round(props.celsius)} </h3>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h3 className="currentTemp">{Math.round(fahrenheit)} </h3>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
