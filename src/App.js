import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import TownInfo from "./components/TownInfo";
import "./App.scss";
import { getCache } from "./APIrequests";
import { fetchData } from "./fetchData";
import WeatherCard from "./components/WeatherCard";

function App() {

  const [weatherData, setWeatherData] = useState(null);

  const [serviceOrCityChanged, setServiceOrCityChanged] = useState(false);

  useEffect(() => {
    const fetchCache = async () => {
      const newData = getCache(7200);
      if (!newData) {
        const weather = await fetchData();
        setWeatherData(weather);
      } else {
        setWeatherData(newData.weather);
        setServiceOrCityChanged(false);
      }
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
      const weather = await fetchData();
      setWeatherData(weather);
      setServiceOrCityChanged(false);
    };
    fetchNewData();
  }, [serviceOrCityChanged]);

  return (
    <div className="App">
      <Header />
      <WeatherCard
        weatherData={{...weatherData}}
        setServiceOrCityChanged={setServiceOrCityChanged}
      />
      <TownInfo setServiceOrCityChanged={setServiceOrCityChanged} />
    </div>
  );
}

export default App;