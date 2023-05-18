let initialSearch = "Oxford";
const api_key = "7e58c48abd6d40fe85b54302231805";

function getWeather(initialSearch) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${initialSearch}&aqi=no`
  )
    .then((response) => {
      if (response.status === 400) {
        throw new Error("Not Found");
      }
      return response.json();
    })
    .then((weatherData) => {
      renderWeather(weatherData);
    })
    .catch((error) => {
      console.log("Oops, not found");
      container.innerHTML = ""; // Remove all existing content inside the container
      const errorMessage = document.createElement("span");
      errorMessage.classList.add("error-msg");
      errorMessage.innerText = "Please type a valid city name";
      container.appendChild(errorMessage);
      container.style.backgroundImage = "none";
      container.style.backgroundColor = "black";
    });
}
let container = document.querySelector(".container");
if (!container) {
  container = document.createElement("div");
  container.classList.add("container");
}
const SearchContainer = document.createElement("div");
SearchContainer.classList.add("SearchContainer");
container.appendChild(SearchContainer);

const locationIcon = document.createElement("i");
locationIcon.classList.add("fa-solid", "fa-location-dot");
SearchContainer.appendChild(locationIcon);

const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "Enter a location");
searchInput.setAttribute("id", "search-bar");
SearchContainer.appendChild(searchInput);

const searchButton = document.createElement("button");
searchButton.setAttribute("id", "search-btn");
searchButton.classList.add("fa-solid", "fa-magnifying-glass");
SearchContainer.appendChild(searchButton);

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
currentDateSpan.innerText = "";
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
  midSpanTop.appendChild(tempCSpan);
}

const midSpanOther = document.createElement("div");
midSpanOther.classList.add("midSpanOther");
midSpanContainer.appendChild(midSpanOther);

const windIcon = document.createElement("i");
windIcon.classList.add("fa-solid", "fa-wind");
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

document.body.appendChild(container);

const searchBar = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-btn");

let cachedValue;

searchBar.addEventListener("keyup", (e) => {
  initialSearch = e.target.value.trim();
  console.log(initialSearch);
});

searchBtn.addEventListener("click", () => {
  if (cachedValue === initialSearch) return;
  getWeather(initialSearch);
  cachedValue = initialSearch;
  console.log(cachedValue);
  console.log(initialSearch);
});

function renderWeather(weather) {
  const countryName = weather.location.country;
  const cityName = weather.location.name;
  countryCitySpan.innerText = `${countryName}, ${cityName}`;
  //https://pin.it/5vLUpfh
  const localTime = weather.location.localtime;
  const formattedTime = localTime.slice(11, 16);
  const formattedTimeParsed = parseInt(localTime.slice(11, 16), 10);
  localTimeSpan.innerText = formattedTime;

  const nightImgPath = "./images/night.png";
  const sunriseImgPath = "./images/sunrise.png";
  const sunsetImgPath = "./images/sunset.jpeg";
  const postMidnightPath = "./images/postmidnight.jpeg";
  const daytimePath = "./images/daytime.jpeg";

  if (formattedTimeParsed >= 6 && formattedTimeParsed < 12) {
    container.style.backgroundImage = `url(${sunriseImgPath})`;
  } else if (formattedTimeParsed >= 12 && formattedTimeParsed < 18) {
    container.style.backgroundImage = `url(${daytimePath})`;
  } else if (formattedTimeParsed >= 18 && formattedTimeParsed < 21) {
    container.style.backgroundImage = `url(${sunsetImgPath})`;
  } else if (formattedTimeParsed >= 21 && formattedTimeParsed < 24) {
    container.style.backgroundImage = `url(${nightImgPath})`;
  } else {
    container.style.backgroundImage = `url(${postMidnightPath})`;
  }

  const incomingDate = weather.location.localtime.slice(0, 11).trim();
  const date = new Date(incomingDate);
  const options = { weekday: "long", day: "numeric", month: "long" };
  var formattedDate = date.toLocaleString("en-US", options);
  currentDateSpan.innerText = formattedDate;
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
  feelsLikeSpan.innerText = "Feels like:" + feelsLikeC + " °C";

  const uvIndex = weather.current.uv;
  uvIndexSpan.innerText = uvIndex;
  checkUVIndex(uvIndex);
}
getWeather(initialSearch);

function checkSameInput() {
  let searchCity = initialSearch;
}
function checkUVIndex(uvIndex) {
  if (uvIndex >= 0 && uvIndex <= 2) {
    uvIndexSpan.style.color = "green";
  } else if (uvIndex >= 3 && uvIndex <= 5) {
    uvIndexSpan.style.color = "yellow";
  } else if (uvIndex >= 6 && uvIndex <= 7) {
    uvIndexSpan.style.color = "orange";
  } else if (uvIndex >= 8 && uvIndex <= 10) {
    uvIndexSpan.style.color = "red";
  } else {
    uvIndexSpan.style.color = "purple";
  }
}
