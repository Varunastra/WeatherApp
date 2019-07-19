export async function getCity() {
  if (localStorage.getItem("city"))
    return localStorage.getItem("city");
  const cityResponse = await fetch(
    "https://api.ipdata.co/?api-key=436e0acf8733d96ec11f2b9899906075dd760ffdebccbc8acb3cd38a",
    {
      accept: "application/json",
    }
  );
  const city = await cityResponse.json().then(data => data.city);
  console.log(city);
  localStorage.setItem("city", city);
  return city;
}

export async function getWeather(weatherService, city) {
  localStorage.setItem("time", Date.now());

  let weather;
  if (weatherService === "OpenWeather") {
    weather = await getOpenWeather(city, parseOpenWeatherData);
  } else {
    weather = await getApixuWeather(city, parseApixuData);
  }
  if (weather) {
    localStorage.setItem("data", JSON.stringify(weather));
    localStorage.setItem("city", city);
    localStorage.setItem("service", weatherService);
  }
  else {
    weather = { error: weatherService + " couldn't resolve your location" };
  }
  return weather;
}

function getApixuWeather(city, callback) {
  return fetch(
    "https://api.apixu.com/v1/current.json?key=e87d9cd4f07e489c9d2130809191307&q=" +
    city
  ).then(async response  => response.ok ? callback(response) : null);
}

async function parseApixuData(response) {
  const weather = await response.json().then(data => data.current);
  let icon = weather.condition.icon;
  icon = "images/ApixuWeather" + icon.slice(icon.indexOf("/64x64") + 6);
  const weatherData = {
    temp: weather.temp_c,
    stateText: weather.condition.text,
    icon,
  };
  return weatherData;
}

function getOpenWeather(city, callback) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2497fd80f1d8f3c66e7df5111b141fe`,
    {
      accept: "application/json",
    }
  ).then(response => response.ok ? callback(response) : null);
}

async function parseOpenWeatherData(response) {
  const weather = await response.json();
  const weatherData = {
      temp: parseInt(weather.main.temp - 273),
      stateText:
        weather.weather[0].description.charAt(0).toUpperCase() +
        weather.weather[0].description.slice(1),
      icon: "images/OpenWeather/" +
        weather.weather[0].icon + ".png",
    };
  return weatherData;
}