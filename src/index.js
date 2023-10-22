import config from "../config.js";
//import "./style.css";

const apiKey = config.API_KEY;

console.log("aaa");
let newCity = "";
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
  try {
    //const current = fetch("http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city);
    const forecast = await fetch("http://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + city + "&days=14");
    //const response = await Promise.all([current, forecast]);
   // console.log(response[0].status + response[1].status);
    if (forecast.status === 200) {
      const data = await forecast.json();
     // const data = await Promise.all([response[0].json(), response[1].json()]);
   //   console.log(data[0]);
   //   console.log(data[1]);
   console.log(data);
      currentWeather = {
        city: data.location.name,
        time: data.location.localtime,
        country: data.location.country,
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        condition: data.current.condition.text
      }
      
      fillDom();
    } else {
      throw new Error(response.status + " " + response.statusText);
    }
  } catch (err) {
    console.log(err.message);
  }
  //console.log(data);
}

function createDom() {
  const body = document.querySelector("body");
  const top = document.createElement("div");
  const inputBox = document.createElement("input");
  const inputBtn = document.createElement("button");
 
  const cityName = document.createElement("div");
  const temp = document.createElement("div");
  const time = document.createElement("div");
  
  cityName.classList.add("city-name");
  temp.classList.add("temperature");
  time.classList.add("time");
  inputBox.classList.add("input-box");
  inputBtn.classList.add("input-btn");
  
  inputBox.setAttribute("id", "input");
  inputBtn.setAttribute("for", "input");
  
  inputBtn.textContent = "OK";
  
  inputBtn.addEventListener("click", () => {
    newCity = inputBox.value;
    console.log(newCity);
    getWeather(newCity);
    inputBox.value = "";
  });
  
  top.appendChild(inputBox);
  top.appendChild(inputBtn);
  top.appendChild(temp);
  top.appendChild(cityName);
  top.appendChild(time);
  body.appendChild(top);
}

function fillDom() {
 const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temperature");
  const time = document.querySelector(".time");
  
  cityName.textContent = currentWeather.city;
  temp.textContent = currentWeather.tempC + " °C";
  time.textContent = currentWeather.time;
}

/*async function setCity() {
  const fetchData = await getCurrent(currentCity);
  fillDom();
  console.log(currentWeather);
}*/

createDom();
getWeather(currentCity);

function getDate() {
  let newDate = new Date("2023-10-22 0:41");
  
  const date = newDate.getDate() + "." + newDate.getMonth() + "." + newDate.getFullYear();
  const time = newDate.getHours() + ":" + newDate.getMinutes();
  console.log(date);
  console.log(time);
}

getDate();

/*
Future weather - 3 days
3 columns, each of them having
day
temp
temp at night?
condition
img of condition
rain chance?
*/

/* 
input city name
input field and ok button
once user clicks ok/presses enter, change the following:
newCity = entered value
fetch from api - current weather and future weather
in case of error: show a message to try again. different error when the city doesnt exist, different in case of a network error
in case it works:
currentCity = newCity
fill the dom with fetched values

*/