import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="Icon"
          />
        </div>
      </div>
      <div className="col-6">
        <h3>
          <FormattedDate date={props.data.date} />
        </h3>
        <div className="row">
          <div className="col-4">
            <h1>{props.data.city}</h1>
          </div>
          <div className="col-3">
            <ul>
              <h2>
                <li>
                  <span className="temperature">
                    {Math.round(props.data.temperature)}°C
                  </span>
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
              <li>19 °C / 22 °C</li>
              <li>
                Humidity: <span>{props.data.humidity}</span> %
              </li>
              <li>
                Wind: <span>{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
