const api_key = "7e58c48abd6d40fe85b54302231805";
fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=Baku&aqi=no`)
  .then((x) => x.json())
  .then((x) => renderWeather(x));

const container = document.querySelector(".container");
const countryCitySpan = document.querySelector(".countryCitySpan");
const localTimeSpan = document.querySelector(".localTimeSpan");
const imgContainer = document.querySelector(".imgContainer");

function renderWeather(weather) {
  //Country name / City
  const countryName = weather.location.country;
  const cityName = weather.location.name;
  countryCitySpan.innerText = `${countryName},${cityName}`;

  //Local Time
  const localTime = weather.location.localtime;
  const formattedTime = localTime.slice(11, 16);
  console.log(formattedTime);
  localTimeSpan.innerText = formattedTime;

  //icon
  const iconForCondition = weather.current.condition.icon;
  const icon = document.createElement("img");
  imgContainer.appendChild(icon);
  const lenghtOfPath = iconForCondition.length;
  const formattedIconPath = iconForCondition.slice(2, lenghtOfPath);
  console.log(formattedIconPath);
  icon.setAttribute("src", formattedIconPath);
}
