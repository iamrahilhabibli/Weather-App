const api_key = "7e58c48abd6d40fe85b54302231805";
fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=Baku&aqi=no`)
  .then((x) => x.json())
  .then((x) => renderWeather(x));

// fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=Baku&aqi=no`)
//   .then((x) => x.json())
//   .then((x) => console.log(x));

const container = document.querySelector(".container");
const countryCitySpan = document.querySelector(".countryCitySpan");
const localTimeSpan = document.querySelector(".localTimeSpan");
const imgContainer = document.querySelector(".imgContainer");
const tempCSpan = document.querySelector(".tempCSpan");
const windSSpan = document.querySelector(".windSSpan");
const humiditySpan = document.querySelector(".humiditySpan");
const feelsLikeSpan = document.querySelector(".feelsLikeSpan");
const uvIndexSpan = document.querySelector(".uvIndexSpan");
const searchBar = document.querySelector("#search-bar");

function renderWeather(weather) {
  //Country name / City
  const countryName = weather.location.country;
  const cityName = weather.location.name;
  countryCitySpan.innerText = `${countryName},${cityName}`;

  //Local Time
  const localTime = weather.location.localtime;
  const formattedTime = localTime.slice(11, 16);

  localTimeSpan.innerText = formattedTime;

  //icon
  const iconForCondition = weather.current.condition.icon;
  const icon = document.createElement("img");
  icon.src = "https:" + iconForCondition;
  imgContainer.appendChild(icon);
  //Temp
  const currentTemp = weather.current.temp_c;
  tempCSpan.innerText = currentTemp + " °C";

  //Wind speed....
  const windSpeed = weather.current.wind_kph;
  windSSpan.innerText = windSpeed + " km/h";
  //Humidity
  const humidity = weather.current.humidity;
  humiditySpan.innerText = humidity + " %";

  const feelsLikeC = weather.current.temp_c;
  feelsLikeSpan.innerText = feelsLikeC + " °C";

  const uvIndex = weather.current.uv;
  uvIndexSpan.innerText = uvIndex;
}

searchBar.addEventListener("keyup", (e) => {
  let value = e.target.value;
  console.log(value);
});
