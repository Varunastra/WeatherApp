import { getCity, getWeather } from "./APIrequests";

export async function fetchData(defaultService = "OpenWeather") {
  let weather, newWeather, newCity, weatherService;
  if (!localStorage.getItem("city")) {
    newCity = await getCity();
    weatherService = defaultService;
  } else {
    newCity = localStorage.getItem("city");
    weatherService = localStorage.getItem("service");
  }
  weather = await getWeather(weatherService, newCity);
  newWeather = weather;
  return newWeather;
}
