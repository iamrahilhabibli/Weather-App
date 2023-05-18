const api_key = "7e58c48abd6d40fe85b54302231805";
fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=Baku&aqi=no`)
  .then((x) => x.json())
  .then((x) => renderWeather(x));

const container = document.querySelector(".container");

// function renderWeather(weather) {
//   const tempCel = weather.current.temp_c;
//   const windKph = weather.current.wind_kph;
//   const visKm = weather.current.vis_km;

//   const tempSpan = document.createElement("span");
//   tempSpan.innerText = `Temprature is: ${tempCel}`;

//   const windSpan = document.createElement("span");
//   windSpan.innerText = `Temprature is: ${windKph}`;

//   const visSpan = document.createElement("span");
//   visSpan.innerText = `Temprature is: ${visKm}`;

//   container.appendChild(tempSpan);
//   container.appendChild(windSpan);
//   container.appendChild(visSpan);
// }
