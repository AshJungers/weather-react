import React from "react";
import "./Weather.css";

export default function Forecast() {
  return (
    <div className="row justify-content-evenly">
      <div className="col-sm-2">
        <div className="card">
          <div className="card-body shadow">
            <h5 className="card-title">Monday</h5>

            <hr />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weatherPic"
            />
            <span className="weather-forecast-temperature">
              <p className="card-text">
                <span className="weather-forecast-temperature-max">55°</span> |{" "}
                {""}
                <span className="weather-forecast-temperature-min">44°</span>
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
                <span className="weather-forecast-temperature-max">55°</span> |{" "}
                {""}
                <span className="weather-forecast-temperature-min">44°</span>
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
                <span className="weather-forecast-temperature-max">55°</span> |{" "}
                {""}
                <span className="weather-forecast-temperature-min">44°</span>
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
                <span className="weather-forecast-temperature-max">55°</span> |{" "}
                {""}
                <span className="weather-forecast-temperature-min">44°</span>
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
                <span className="weather-forecast-temperature-max">55°</span> |{" "}
                {""}
                <span className="weather-forecast-temperature-min">44°</span>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
