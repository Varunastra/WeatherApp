export async function getCity() {
  if (localStorage.getItem("city"))
    return localStorage.getItem("city");
  const cityResponse = await fetch(
    "https://api.ipgeolocation.io/ipgeo?apiKey=d9d6e453fdf14e589797d4f615bf908b",
    {
      accept: "application/json",
    }
  );
  const city = await cityResponse.json().then(data => data.city);
  localStorage.setItem("city", city);
  return city;
}

export function getCache(time) {
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

export async function getWeather(weatherService, city) {
  localStorage.setItem("time", Date.now());

  let weather;
  if (weatherService === "OpenWeather") {
    weather = await getOpenWeather(city);
  } else {
    weather = await getApixuWeather(city);
  }
  localStorage.setItem("data", JSON.stringify(weather));
  localStorage.setItem("city", city);
  localStorage.setItem("service", weatherService);
  return weather;
}

export async function getApixuWeather(city) {
  const weatherResponse = await fetch(
    "http://api.apixu.com/v1/current.json?key=e87d9cd4f07e489c9d2130809191307&q=" +
      city
  );
  const weather = await weatherResponse.json().then(data => data.current);
  const weatherParsedData = {
    temp: weather.temp_c,
    stateText: weather.condition.text,
    icon: weather.condition.icon,
  };
  return weatherParsedData;
}

export async function getOpenWeather(city) {
  const weatherResponse = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},by&appid=c2497fd80f1d8f3c66e7df5111b141fe`,
    {
      accept: "application/json",
    }
  );
  const weather = await weatherResponse.json();
  const weatherParsedData = {
    temp: parseInt(weather.main.temp - 273),
    stateText:
      weather.weather[0].description.charAt(0).toUpperCase() +
      weather.weather[0].description.slice(1),
    icon:
      "https://openweathermap.org/img/wn/" +
      weather.weather[0].icon +
      "@2x.png",
  };
  return weatherParsedData;
}
