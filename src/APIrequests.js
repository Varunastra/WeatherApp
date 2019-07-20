export async function getCity() {
  if (localStorage.getItem("city")) return localStorage.getItem("city");
  const cityResponse = await fetch(
    `https://api.ipdata.co/?api-key=${process.env.REACT_APP_LOCATION_API_KEY}`,
    {
      accept: "application/json"
    }
  );
  const city = await cityResponse.json().then(data => data.city);
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
  } else {
    weather = { error: weatherService + " couldn't resolve your location" };
  }
  return weather;
}

function getApixuWeather(city, callback) {
  return fetch(
    `https://api.apixu.com/v1/current.json?key=${
      process.env.REACT_APP_APIXU_API_KEY
    }&q=${city}`
  ).then(response => (response.ok ? callback(response) : null));
}

async function parseApixuData(response) {
  const weather = await response.json().then(data => data.current);
  let icon = weather.condition.icon;
  icon = "images/ApixuWeather" + icon.slice(icon.indexOf("/64x64") + 6);
  const weatherData = {
    temp: weather.temp_c,
    stateText: weather.condition.text,
    icon
  };
  return weatherData;
}

function getOpenWeather(city, callback) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      process.env.REACT_APP_OPENWEATHER_API_KEY
    }`,
    {
      accept: "application/json"
    }
  ).then(response => (response.ok ? callback(response) : null));
}

async function parseOpenWeatherData(response) {
  const weather = await response.json();
  const weatherData = {
    temp: parseInt(weather.main.temp - 273),
    stateText:
      weather.weather[0].description.charAt(0).toUpperCase() +
      weather.weather[0].description.slice(1),
    icon: "images/OpenWeather/" + weather.weather[0].icon + ".png"
  };
  return weatherData;
}
