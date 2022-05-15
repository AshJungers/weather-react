import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="currentDate">
        <FormattedDate date={props.data.date} />
      </div>

      <br />
      <div className="container currentSearch">
        <div className="row">
          <div className="col-6 box-1">
            <h1 className="currentCity">{props.data.city}</h1>
            <h5 className="description text-capitalize">
              {props.data.description}
            </h5>
            <h6 className="wind">Wind: {Math.round(props.data.wind)} mph</h6>
            <h6 className="humidity">Humidity: {props.data.humidity}%</h6>
          </div>
          <div className="col-6 box-2">
            <div className="WeatherPic">
              <WeatherIcon code={props.data.icon} />
            </div>

            <br />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
