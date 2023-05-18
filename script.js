const api_key = "7e58c48abd6d40fe85b54302231805";
fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=Baku&aqi=no`)
  .then((x) => x.json())
  .then((x) => renderWeather(x));

const container = document.querySelector(".container");
const countryCitySpan = document.querySelector(".countryCitySpan");
const localTimeSpan = document.querySelector(".localTimeSpan");
function renderWeather(weather) {
  //Country name / City
  const countryName = weather.location.country;
  const cityName = weather.location.name;
  countryCitySpan.innerText = `${countryName},${cityName}`;

  //Local time in "hh:mm"
  const localTime = weather.location.localTime;
  const formattedLocalTime = new Date(localTime).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  localTimeSpan.innerText = `${formattedLocalTime}`;
}
