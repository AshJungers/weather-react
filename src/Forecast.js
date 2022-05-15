import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
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
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body shadow">
                <h5 className="card-title">Monday</h5>

                <hr />
                <WeatherIcon code="01d" size={50} />
                <span className="weather-forecast-temperature">
                  <p className="card-text">
                    <span className="weather-forecast-temperature-max">
                      55°
                    </span>{" "}
                    | {""}
                    <span className="weather-forecast-temperature-min">
                      44°
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body shadow">
                <h5 className="card-title">Tuesday</h5>

                <hr />
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weatherPic"
                />
                <span className="weather-forecast-temperature">
                  <p className="card-text">
                    <span className="weather-forecast-temperature-max">
                      55°
                    </span>{" "}
                    | {""}
                    <span className="weather-forecast-temperature-min">
                      44°
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body shadow">
                <h5 className="card-title">Wednesday</h5>

                <hr />
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weatherPic"
                />
                <span className="weather-forecast-temperature">
                  <p className="card-text">
                    <span className="weather-forecast-temperature-max">
                      55°
                    </span>{" "}
                    | {""}
                    <span className="weather-forecast-temperature-min">
                      44°
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body shadow">
                <h5 className="card-title">Thursday</h5>

                <hr />
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weatherPic"
                />
                <span className="weather-forecast-temperature">
                  <p className="card-text">
                    <span className="weather-forecast-temperature-max">
                      55°
                    </span>{" "}
                    | {""}
                    <span className="weather-forecast-temperature-min">
                      44°
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body shadow">
                <h5 className="card-title">Friday</h5>

                <hr />
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="weatherPic"
                />
                <span className="weather-forecast-temperature">
                  <p className="card-text">
                    <span className="weather-forecast-temperature-max">
                      55°
                    </span>{" "}
                    | {""}
                    <span className="weather-forecast-temperature-min">
                      44°
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
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
