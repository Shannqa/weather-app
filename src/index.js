import config from "../config.js";
//import "./style.css";

const apiKey = config.API_KEY;

console.log("aaa");
let currentCity = "Warsaw";
let currentWeather = {}
let futureWeather = {}

async function getWeather(city) {
  const response = await fetch("http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city);
  const data = await response.json();
  return data;
  //console.log(data);
}

function getCurrent(city) {
  getWeather(city).then((data) => {
    currentWeather = {
    city: data.location.name,
    time: data.location.localtime,
    country: data.location.country,
    tempC: data.current.temp_c,
    tempF: data.current.temp_f,
    condition: data.current.condition.text
    }
    console.log(currentWeather.city);
  });
}

getCurrent(currentCity);
