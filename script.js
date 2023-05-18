let initialSearch = "London";
const api_key = "7e58c48abd6d40fe85b54302231805";

async function getWeather(initialSearch) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${initialSearch}&aqi=no`
    );

    if (response.status === 400) {
      throw new Error("Not Found");
    }

    const weatherData = await response.json();
    renderWeather(weatherData);
  } catch (error) {
    console.log("Oops, not found");
    // You can update your HTML to display the error message in the desired element
    // For example: errorContainer.innerText = 'Oops, not found';
  }
}

let container = document.querySelector(".container");

if (!container) {
  container = document.createElement("div");
  container.classList.add("container");
}

const topSpanContainer = document.createElement("div");
topSpanContainer.classList.add("topSpanContainer");
container.appendChild(topSpanContainer);

let countryCitySpan = document.querySelector(".countryCitySpan");
if (!countryCitySpan) {
  countryCitySpan = document.createElement("span");
  countryCitySpan.classList.add("countryCitySpan");
  topSpanContainer.appendChild(countryCitySpan);
}

let localTimeSpan = document.querySelector(".localTimeSpan");
if (!localTimeSpan) {
  localTimeSpan = document.createElement("span");
  localTimeSpan.classList.add("localTimeSpan");
  topSpanContainer.appendChild(localTimeSpan);
}

const currentDateSpan = document.createElement("span");
currentDateSpan.classList.add("currentDateSpan");
currentDateSpan.textContent = "Thursday, 18th May";
topSpanContainer.appendChild(currentDateSpan);

let imgContainer = document.querySelector(".imgContainer");
if (!imgContainer) {
  imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  container.appendChild(imgContainer);
}

const midSpanContainer = document.createElement("div");
midSpanContainer.classList.add("midSpanContainer");
container.appendChild(midSpanContainer);

const midSpanTop = document.createElement("div");
midSpanTop.classList.add("midSpanTop");
midSpanContainer.appendChild(midSpanTop);

let tempCSpan = document.querySelector(".tempCSpan");
if (!tempCSpan) {
  tempCSpan = document.createElement("span");
  tempCSpan.classList.add("tempCSpan");
  midSpanContainer.appendChild(tempCSpan);
}

const midSpanOther = document.createElement("div");
midSpanOther.classList.add("midSpanOther");
midSpanContainer.appendChild(midSpanOther);

let windSSpan = document.querySelector(".windSSpan");
if (!windSSpan) {
  windSSpan = document.createElement("span");
  windSSpan.classList.add("windSSpan");
  midSpanOther.appendChild(windSSpan);
}

let humiditySpan = document.querySelector(".humiditySpan");
if (!humiditySpan) {
  humiditySpan = document.createElement("span");
  humiditySpan.classList.add("humiditySpan");
  midSpanOther.appendChild(humiditySpan);
}

let feelsLikeSpan = document.querySelector(".feelsLikeSpan");
if (!feelsLikeSpan) {
  feelsLikeSpan = document.createElement("span");
  feelsLikeSpan.classList.add("feelsLikeSpan");
  midSpanOther.appendChild(feelsLikeSpan);
}

let uvIndexSpan = document.querySelector(".uvIndexSpan");
if (!uvIndexSpan) {
  uvIndexSpan = document.createElement("span");
  uvIndexSpan.classList.add("uvIndexSpan");
  midSpanOther.appendChild(uvIndexSpan);
}

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

const searchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-btn");

searchBar.addEventListener("keyup", (e) => {
  initialSearch = e.target.value.trim();
  console.log(initialSearch);
});

searchBtn.addEventListener("click", () => {
  getWeather(initialSearch);
  console.log(initialSearch);
});

function renderWeather(weather) {
  const countryName = weather.location.country;
  const cityName = weather.location.name;
  countryCitySpan.innerText = `${countryName}, ${cityName}`;

  const localTime = weather.location.localtime;
  const formattedTime = localTime.slice(11, 16);
  localTimeSpan.innerText = formattedTime;

  const iconForCondition = weather.current.condition.icon;
  const icon = document.createElement("img");
  icon.src = "https:" + iconForCondition;
  imgContainer.innerHTML = "";
  imgContainer.appendChild(icon);

  const currentTemp = weather.current.temp_c;
  tempCSpan.innerText = currentTemp + " °C";

  const windSpeed = weather.current.wind_kph;
  windSSpan.innerText = windSpeed + " km/h";

  const humidity = weather.current.humidity;
  humiditySpan.innerText = humidity + " %";

  const feelsLikeC = weather.current.temp_c;
  feelsLikeSpan.innerText = feelsLikeC + " °C";

  const uvIndex = weather.current.uv;
  uvIndexSpan.innerText = uvIndex;
}

getWeather(initialSearch);

function checkSameInput() {
  let searchCity = initialSearch;
}
