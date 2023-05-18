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

  const localTime = weather.location.localtime;
  const formattedTime = localTime.slice(11, 16).trim();
  console.log(formattedTime);
}
// // Split the datetime string into date and time parts
// const [datePart, timePart] = localTime.split(" ");

// // Extract the hour and minute from the time part
// const [hour, minute] = timePart.split(":");

// // Create the formatted time string
// const formattedTime = `${hour}:${minute}`;

// console.log(formattedTime);
