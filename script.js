let initialSearch = "London";

const api_key = "7e58c48abd6d40fe85b54302231805";

fetch(
  `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${initialSearch}&aqi=no`
)
  .then((x) => x.json())
  .then((x) => renderWeather(x));

// getWeather();

// fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=Baku&aqi=no`)
//   .then((x) => x.json())
//   .then((x) => console.log(x));

const countryCitySpan = document.querySelector(".countryCitySpan");
const localTimeSpan = document.querySelector(".localTimeSpan");
const imgContainer = document.querySelector(".imgContainer");
const tempCSpan = document.querySelector(".tempCSpan");
const windSSpan = document.querySelector(".windSSpan");
const humiditySpan = document.querySelector(".humiditySpan");
const feelsLikeSpan = document.querySelector(".feelsLikeSpan");
const uvIndexSpan = document.querySelector(".uvIndexSpan");
const searchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-btn");

function renderWeather(weather) {
  const container = document.createElement("div");
  container.classList.add("container");

  const topSpanContainer = document.createElement("div");
  topSpanContainer.classList.add("topSpanContainer");
  container.appendChild(topSpanContainer);

  const countryCitySpan = document.createElement("span");
  countryCitySpan.classList.add("countryCitySpan");
  topSpanContainer.appendChild(countryCitySpan);

  const countryName = weather.location.country;
  const cityName = weather.location.name;
  countryCitySpan.innerText = `${countryName},${cityName}`;

  const localTimeSpan = document.createElement("span");
  localTimeSpan.classList.add("localTimeSpan");
  topSpanContainer.appendChild(localTimeSpan);
  const localTime = weather.location.localtime;
  const formattedTime = localTime.slice(11, 16);
  localTimeSpan.innerText = formattedTime;

  const currentDateSpan = document.createElement("span");
  currentDateSpan.classList.add("currentDateSpan");
  currentDateSpan.textContent = "Thursday, 18th May";
  topSpanContainer.appendChild(currentDateSpan);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  container.appendChild(imgContainer);
  const iconForCondition = weather.current.condition.icon;
  const icon = document.createElement("img");
  icon.src = "https:" + iconForCondition;
  imgContainer.appendChild(icon);

  const midSpanContainer = document.createElement("div");
  midSpanContainer.classList.add("midSpanContainer");
  container.appendChild(midSpanContainer);

  const midSpanTop = document.createElement("div");
  midSpanTop.classList.add("midSpanTop");
  midSpanContainer.appendChild(midSpanTop);

  const tempCSpan = document.createElement("span");
  tempCSpan.classList.add("tempCSpan");
  midSpanContainer.appendChild(tempCSpan);
  const currentTemp = weather.current.temp_c;
  tempCSpan.innerText = currentTemp + " °C";

  const midSpanOther = document.createElement("div");
  midSpanOther.classList.add("midSpanOther");
  midSpanContainer.appendChild(midSpanOther);

  const windSSpan = document.createElement("span");
  windSSpan.classList.add("windSSpan");
  midSpanOther.appendChild(windSSpan);
  const windSpeed = weather.current.wind_kph;
  windSSpan.innerText = windSpeed + " km/h";

  const humiditySpan = document.createElement("span");
  humiditySpan.classList.add("humiditySpan");
  midSpanOther.appendChild(humiditySpan);
  const humidity = weather.current.humidity;
  humiditySpan.innerText = humidity + " %";

  const feelsLikeSpan = document.createElement("span");
  feelsLikeSpan.classList.add("feelsLikeSpan");
  midSpanOther.appendChild(feelsLikeSpan);
  const feelsLikeC = weather.current.temp_c;
  feelsLikeSpan.innerText = feelsLikeC + " °C";

  const uvIndexSpan = document.createElement("span");
  uvIndexSpan.classList.add("uvIndexSpan");
  midSpanOther.appendChild(uvIndexSpan);
  const uvIndex = weather.current.uv;
  uvIndexSpan.innerText = uvIndex;

  const botSearchContainer = document.createElement("div");
  botSearchContainer.classList.add("botSearchContainer");
  container.appendChild(botSearchContainer);

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Enter a location");
  searchInput.setAttribute("id", "search-bar");
  botSearchContainer.appendChild(searchInput);

  const searchButton = document.createElement("button");
  searchButton.setAttribute("id", "search-btn");
  searchButton.textContent = "Search";
  botSearchContainer.appendChild(searchButton);

  document.body.appendChild(container);
}

// searchBar.addEventListener("keyup", (e) => {
//   initialSearch = e.target.value.trim();
//   console.log(initialSearch);
// });

// searchBtn.addEventListener("click", () => {
//   getWeather();
//   console.log(initialSearch);
// });
