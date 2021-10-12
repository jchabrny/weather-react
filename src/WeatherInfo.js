import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-3">
          <WeatherIcon code={props.data.icon} size={200} />
        </div>
        <div className="col-2">
          <ul>
            <h2>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
            </h2>
            <h1>
              <li>{props.data.city}</li>
            </h1>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <h2>
              <li>
                <WeatherTemperature celsius={props.data.temperature} />
              </li>
              <li>
                <span className="text-capitalize">
                  {props.data.description}
                </span>
              </li>
            </h2>
          </ul>
        </div>
        <div className="col-5">
          <ul>
            <h3>
              <li>
                {Math.round(props.data.mintemperature)} °C {""} / {""}
                {Math.round(props.data.maxtemperature)} °C
              </li>
              <li>
                Humidity: <span>{props.data.humidity}</span> %
              </li>
              <li>
                Wind: <span>{props.data.wind}</span> km/h
              </li>
            </h3>
          </ul>
        </div>
      </div>
    </div>
  );
}
