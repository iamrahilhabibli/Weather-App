const api_key = "7e58c48abd6d40fe85b54302231805";
fetch(
  `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=London&aqi=no`
)
  .then((x) => x.json())
  .then((x) => console.log(x));
