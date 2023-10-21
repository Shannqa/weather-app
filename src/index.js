import config from "../config.js";
//import "./style.css";

const apiKey = config.API_KEY;

console.log("aaa");
let currentCity = "Warsaw";
let currentWeather = {
  city: "",
  time: "",
  country: "",
  tempC: "",
  tempF: "",
  condition: ""
}

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



function createDom() {
  const body = document.querySelector("body");
  const cityName = document.createElement("div");
  const temp = document.createElement("div");
  const time = document.createElement("div");
  
  cityName.classList.add("city-name");
  temp.classList.add("temperature");
  time.classList.add("time");
  
  body.appendChild(cityName);
  body.appendChild(temp);
  body.appendChild(time);
}

function fillDom() {
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temperature");
  const time = document.querySelector(".time");
  
  cityName.textContent = currentWeather.city;
}

async function setCity() {
  const fetchData = await getCurrent(currentCity);
  fillDom();
  console.log(currentWeather);
}

createDom();
setCity();