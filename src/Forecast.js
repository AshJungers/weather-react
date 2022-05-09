import React from "react";
import "./Weather.css";

export default function Forecast() {
  return (
    <div class="row justify-content-evenly">
      <div class="col-sm-2">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="card-title">Monday</h5>

            <hr />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weatherPic"
            />
            <span class="weather-forecast-temperature">
              <p class="card-text">
                <span class="weather-forecast-temperature-max">55°</span> |
                <span class="weather-forecast-temperature-min">44°</span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="card-title">Tuesday</h5>

            <hr />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weatherPic"
            />
            <span class="weather-forecast-temperature">
              <p class="card-text">
                <span class="weather-forecast-temperature-max">55°</span> |
                <span class="weather-forecast-temperature-min">44°</span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="card-title">Wednesday</h5>

            <hr />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weatherPic"
            />
            <span class="weather-forecast-temperature">
              <p class="card-text">
                <span class="weather-forecast-temperature-max">55°</span> |
                <span class="weather-forecast-temperature-min">44°</span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="card-title">Thursday</h5>

            <hr />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weatherPic"
            />
            <span class="weather-forecast-temperature">
              <p class="card-text">
                <span class="weather-forecast-temperature-max">55°</span> |
                <span class="weather-forecast-temperature-min">44°</span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="card-title">Friday</h5>

            <hr />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weatherPic"
            />
            <span class="weather-forecast-temperature">
              <p class="card-text">
                <span class="weather-forecast-temperature-max">55°</span> |
                <span class="weather-forecast-temperature-min">44°</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
