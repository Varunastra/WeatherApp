import React from "react";
import "./scss/WeatherCard.scss";

function WeatherCard(props) {
  const handleChange = event => {
    props.setService(event.target.value);
  };
  return (
    <div>
      <div className="weather-service">
        <div className="weather-service__text">Weather service</div>
        <select
          className="weather-service__select"
          onChange={handleChange}
          value={props.service}
        >
          <option value="OpenWeather">OpenWeather</option>
          <option value="ApixuWeather">ApixuWeather</option>
        </select>
      </div>
      <div className="weather-card">
        <div className="weather-info">
          <div className="weather-state">
            <div className="weather-state__temp">
              &#176;{props.weatherData.temp}
            </div>
            <div>
              <img
                src={props.weatherData.icon}
                className="weather-state__img"
                alt="Current Weather"
              />
            </div>
          </div>
          <div className="weather-info__text">
            {props.weatherData.stateText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
