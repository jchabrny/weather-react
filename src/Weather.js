import React from "react";
import axios from "axios";
import Searchform from "./Searchform";
import "./Weather.css";

export default function Weather(props) {
  let weatherData = {
    date: "MONDAY, September 27th, 2021",
    city: "Frankfurt am Main",
    temp: 20,
    imgLink: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "sunny",
    tempspan: "18 °C / 22 °C",
    humidity: 70,
    wind: 20,
  };

  return (
    <div className="Weather">
      <Searchform />
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.imgLink}
            alt={weatherData.description}
            className="Main"
          />
        </div>
      </div>
      <div className="col-6">
        <h3>{weatherData.date}</h3>
        <div className="row">
          <div className="col-4">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="col-3">
            <ul>
              <h2>
                <li>
                  <span>{weatherData.temp}°C</span>
                </li>
                <li>
                  <span>{weatherData.description}</span>
                </li>
              </h2>
            </ul>
          </div>
          <div className="col-5">
            <ul>
              <li>{weatherData.tempspan}</li>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span>{weatherData.wind}</span>m/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "04a98ae7fdb3f2cafdd7baf39408fddb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <h2>Hello from Weather</h2>
      <Searchform />
    </div>
  );
}
