import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import TownInfo from "./components/TownInfo";
import "./App.scss";
import { fetchData, getCache } from "./fetchData";
import WeatherCard from "./components/WeatherCard";

function App() {

  const [weatherData, setWeatherData] = useState(null);

  const [city, setCity] = useState("");

  const [service, setService] = useState("OpenWeather");

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCache = async () => {
      const newData = getCache();
      if (!newData) {
        const weather = await fetchData();
        setWeatherData(weather);
      } else {
        setWeatherData(newData.weather);
      }
      setCity(localStorage.getItem("city"));
      setService(localStorage.getItem("service"));
    };
    fetchCache();
  }, []);

  const isFirstRun = useRef(true);

  useEffect(() => {
    const fetchNewData = async () => {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }
      const weather = await fetchData(city, service);
      if (weather.error) {
        setError(weather.error);
      }
      else {
        setWeatherData(weather);
        setError(null);
      }
    };
    fetchNewData();
  }, [city, service]);

  return (
    <div className="App">
      <Header />
      <WeatherCard
        weatherData={{ ...weatherData }}
        service={service}
        setService={setService}
      />
      <TownInfo city={city} setCity={setCity} error={error}
      />
    </div>
  );
}

export default App;
