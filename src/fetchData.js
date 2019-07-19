import { getCity, getWeather } from "./APIrequests";

export async function fetchData(city = null, service = "OpenWeather") {
  let weather, newWeather, newCity;
  if (!city) {
    newCity = await getCity();
  } else {
    newCity = city;
  }
  weather = await getWeather(service, newCity);
  if (!weather.error) {
    localStorage.setItem("city", newCity);
    localStorage.setItem("service", service);
  }
  newWeather = weather;
  return newWeather;
}

export function getCache(time = 7200) {
  const storageTime = localStorage.getItem("time");
  if (storageTime) {
    const difference = (Date.now() - storageTime) / 1000;
    if (difference < time) {
      const weather = JSON.parse(localStorage.getItem("data"));
      const service = localStorage.getItem("service");
      return { weather, service };
    } else {
      localStorage.removeItem("time");
    }
  }
  return null;
}
