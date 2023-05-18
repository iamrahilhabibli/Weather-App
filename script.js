let initialSearch = "London";

const api_key = "7e58c48abd6d40fe85b54302231805";

function getWeather(initialSearch) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${initialSearch}&aqi=no`
  )
    .then((x) => x.json())
    .then((x) => renderWeather(x));
}
getWeather();

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
const searchBtn = document.querySelector("#search-btn");

function renderWeather(weather) {
  // Create the main container element
  var container = document.createElement("div");
  container.classList.add("container");

  // Create the top span container
  var topSpanContainer = document.createElement("div");
  topSpanContainer.classList.add("topSpanContainer");
  container.appendChild(topSpanContainer);

  // Create the country city span
  var countryCitySpan = document.createElement("span");
  countryCitySpan.classList.add("countryCitySpan");
  topSpanContainer.appendChild(countryCitySpan);

  // Create the local time span
  var localTimeSpan = document.createElement("span");
  localTimeSpan.classList.add("localTimeSpan");
  topSpanContainer.appendChild(localTimeSpan);

  // Create the current date span
  var currentDateSpan = document.createElement("span");
  currentDateSpan.classList.add("currentDateSpan");
  currentDateSpan.textContent = "Thursday, 18th May";
  topSpanContainer.appendChild(currentDateSpan);

  // Create the image container
  var imgContainer = document.createElement("div");
  imgContainer.classList.add("imgContainer");
  container.appendChild(imgContainer);

  // Create the mid span container
  var midSpanContainer = document.createElement("div");
  midSpanContainer.classList.add("midSpanContainer");
  container.appendChild(midSpanContainer);

  // Create the mid span top
  var midSpanTop = document.createElement("div");
  midSpanTop.classList.add("midSpanTop");
  midSpanContainer.appendChild(midSpanTop);

  // Create the temperature span
  var tempCSpan = document.createElement("span");
  tempCSpan.classList.add("tempCSpan");
  midSpanContainer.appendChild(tempCSpan);

  // Create the mid span other
  var midSpanOther = document.createElement("div");
  midSpanOther.classList.add("midSpanOther");
  midSpanContainer.appendChild(midSpanOther);

  // Create the wind span
  var windSSpan = document.createElement("span");
  windSSpan.classList.add("windSSpan");
  midSpanOther.appendChild(windSSpan);

  // Create the humidity span
  var humiditySpan = document.createElement("span");
  humiditySpan.classList.add("humiditySpan");
  midSpanOther.appendChild(humiditySpan);

  // Create the feels-like span
  var feelsLikeSpan = document.createElement("span");
  feelsLikeSpan.classList.add("feelsLikeSpan");
  midSpanOther.appendChild(feelsLikeSpan);

  // Create the UV index span
  var uvIndexSpan = document.createElement("span");
  uvIndexSpan.classList.add("uvIndexSpan");
  midSpanOther.appendChild(uvIndexSpan);

  // Create the bottom search container
  var botSearchContainer = document.createElement("div");
  botSearchContainer.classList.add("botSearchContainer");
  container.appendChild(botSearchContainer);

  // Create the search input
  var searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Enter a location");
  searchInput.setAttribute("id", "search-bar");
  botSearchContainer.appendChild(searchInput);

  // Create the search button
  var searchButton = document.createElement("button");
  searchButton.setAttribute("id", "search-btn");
  searchButton.textContent = "Search";
  botSearchContainer.appendChild(searchButton);

  // Append the container to the document body or any desired parent element
  document.body.appendChild(container);

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
  initialSearch = e.target.value.trim();
  console.log(initialSearch);
});

searchBtn.addEventListener("click", () => {
  getWeather();
  console.log(initialSearch);
});
