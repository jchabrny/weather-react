import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Searchform from "./Searchform";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Searchform />
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="Icon"
            />
          </div>
        </div>
        <div className="col-6">
          <h3>
            <FormattedDate date={weatherData.date} />
          </h3>
          <div className="row">
            <div className="col-4">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="col-3">
              <ul>
                <h2>
                  <li>
                    <span className="temperature">
                      {Math.round(weatherData.temperature)}°C
                    </span>
                  </li>
                  <li>
                    <span className="text-capitalize">
                      {weatherData.description}
                    </span>
                  </li>
                </h2>
              </ul>
            </div>
            <div className="col-5">
              <ul>
                <li>19 °C / 22 °C</li>
                <li>
                  Humidity: <span>{weatherData.humidity}</span> %
                </li>
                <li>
                  Wind: <span>{weatherData.wind}</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "04a98ae7fdb3f2cafdd7baf39408fddb";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
