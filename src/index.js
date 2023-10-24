import config from "../config.js";
import backgrounds from "./background.js";
// pc import variables, comment them out on mobile
import "./style.css";
import drop from "./water_drop_FILL0_wght400_GRAD0_opsz24.svg";
import sun0 from "./wb_twilight_FILL0_wght400_GRAD0_opsz24.svg";
import sun1 from "./wb_twilight_FILL1_wght400_GRAD0_opsz24.svg";
import arrow0 from "./south_FILL0_wght400_GRAD0_opsz24.svg";
import arrow1 from "./north_FILL0_wght400_GRAD0_opsz24.svg";

// phone import variables, comment them out on pc
//  const drop = "src/water_drop_FILL0_wght400_GRAD0_opsz24.svg";
//  const sun0 = "/src/wb_twilight_FILL0_wght400_GRAD0_opsz24.svg";
//  const sun1 = "/src/wb_twilight_FILL1_wght400_GRAD0_opsz24.svg";
//  const arrow0 = "/src/south_FILL0_wght400_GRAD0_opsz24.svg";
//  const arrow1 = "/src/north_FILL0_wght400_GRAD0_opsz24.svg";
function setBackground() {
  const body = document.querySelector("body");
  // const backgroundImg = backgrounds.lightRain[5].src;
  // const backgroundImg = thunderstormsrc1;
  // body.style.backgroundImage = "url(" + backgroundImg + ")";
}
setBackground();
const apiKey = config.API_KEY;

let newCity = "";
let currentCity = "Warsaw";
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentWeather = {
  city: "",
  time: "",
  country: "",
  tempC: "",
  tempF: "",
  condition: "",
  condition_icon: "",
};

let futureWeather = [
  {
    date: "",
    sunrise: "",
    sunset: "",
    avgtemp_c: "",
    avgtemp_f: "",
    condition_text: "",
    condition_icon: "",
    daily_chance_of_rain: "",
    maxtemp_c: "",
    maxtemp_f: "",
    mintemp_c: "",
    mintemp_f: "",
  },
  {
    date: "",
    sunrise: "",
    sunset: "",
    avgtemp_c: "",
    avgtemp_f: "",
    condition_text: "",
    condition_icon: "",
    daily_chance_of_rain: "",
    maxtemp_c: "",
    maxtemp_f: "",
    mintemp_c: "",
    mintemp_f: "",
  },
  {
    date: "",
    sunrise: "",
    sunset: "",
    avgtemp_c: "",
    avgtemp_f: "",
    condition_text: "",
    condition_icon: "",
    daily_chance_of_rain: "",
    maxtemp_c: "",
    maxtemp_f: "",
    mintemp_c: "",
    mintemp_f: "",
  },
];

async function getWeather(city) {
  const errorMsg = document.querySelector(".error");

  try {
    const forecast = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=14`,
    );
    const data = await forecast.json();

    if (!forecast.ok) {
      errorMsg.classList.add("err-active");
      if (data.error.code === 1006) {
        errorMsg.textContent = "City not found";
        throw new Error(
          `Error ${forecast.status} ${forecast.statusText}. ${data.error.message}`,
        );
      } else if (data.error.code === 1003) {
        errorMsg.textContent = "You must enter a city name";
        throw new Error(
          `Error ${forecast.status} ${forecast.statusText}. ${data.error.message}`,
        );
      } else if (data.error.code === 9999) {
        errorMsg.textContent = "Internal error, please try again";
        throw new Error(
          `Error ${forecast.status} ${forecast.statusText}. ${data.error.message}`,
        );
      } else {
        errorMsg.textContent = "Error, please try again later";
        throw new Error(`Error ${forecast.status} ${forecast.statusText}`);
      }
    }
    // console.log(data);
    currentWeather = {
      city: data.location.name,
      time: data.location.localtime,
      country: data.location.country,
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      condition: data.current.condition.text,
      condition_icon: data.current.condition.icon,
    };
    for (let i = 0; i < 3; i++) {
      futureWeather[i].date = data.forecast.forecastday[i].date;
      futureWeather[i].sunrise = data.forecast.forecastday[i].astro.sunrise;
      futureWeather[i].sunset = data.forecast.forecastday[i].astro.sunset;
      futureWeather[i].avgtemp_c = data.forecast.forecastday[i].day.avgtemp_c;
      futureWeather[i].avgtemp_f = data.forecast.forecastday[i].day.avgtemp_f;
      futureWeather[i].condition_text =
        data.forecast.forecastday[i].day.condition.text;
      futureWeather[i].condition_icon =
        data.forecast.forecastday[i].day.condition.icon;
      futureWeather[i].daily_chance_of_rain =
        data.forecast.forecastday[i].day.daily_chance_of_rain;
      futureWeather[i].maxtemp_c = data.forecast.forecastday[i].day.maxtemp_c;
      futureWeather[i].maxtemp_f = data.forecast.forecastday[i].day.maxtemp_f;
      futureWeather[i].mintemp_c = data.forecast.forecastday[i].day.mintemp_c;
      futureWeather[i].mintemp_f = data.forecast.forecastday[i].day.mintemp_f;
    }
    errorMsg.classList.remove("err-active");

    // console.log(futureWeather[0]);

    fillDom();
    // errorMsg.classList.add("err-active");
    // throw new Error(forecast.status + " " + forecast.statusText + data.error.code);
  } catch (err) {
    // errorMsg.classList.add("err-active");
    // errorMsg.textContent = err.message;
    console.log(err.message);
    // errorMsg.classList.add("err-active");
    // console.log(data.error.code + " " + data.error.status);
  }
  // console.log(data);
}

function createDom() {
  const body = document.querySelector("body");

  // top navigation
  const top = document.createElement("div");
  const topLeft = document.createElement("div");
  const siteName = document.createElement("div");
  const topRight = document.createElement("div");
  const inputLabel = document.createElement("label");
  const inputBox = document.createElement("input");
  const inputBtn = document.createElement("button");
  const error = document.createElement("div");

  // today's forecast elements
  const currentView = document.createElement("div");
  const currentLeft = document.createElement("div");
  const currentRight = document.createElement("div");
  const currCondition = document.createElement("div");
  const currConIcon = new Image();

  const dayTime = document.createElement("div");
  const today = document.createElement("div");
  const localTime = document.createElement("div");
  const cityName = document.createElement("div");
  const temp = document.createElement("div");

  top.classList.add("top");
  topLeft.classList.add("top-left");
  topRight.classList.add("top-right");
  inputBox.classList.add("input-box");
  inputBtn.classList.add("input-btn");
  siteName.textContent = "Weather App";
  inputBox.setAttribute("id", "input");
  inputBox.setAttribute("placeholder", "Enter city name");
  inputBtn.setAttribute("for", "input");
  inputLabel.setAttribute("for", "input");
  inputLabel.textContent = "Search:";
  inputBtn.textContent = "OK";
  inputBtn.addEventListener("click", () => {
    newCity = inputBox.value;
    console.log(newCity);
    getWeather(newCity);
    inputBox.value = "";
  });
  error.classList.add("error");
  error.textContent = "Error";

  currentView.classList.add("current-view");
  currentLeft.classList.add("current-left");
  currentRight.classList.add("current-right");
  currConIcon.classList.add("curr-con-icon");
  today.classList.add("today");
  localTime.classList.add("local-time");
  cityName.classList.add("city-name");
  temp.classList.add("temperature");

  // 3-day forecast elements
  const daysView = document.createElement("div");
  for (let i = 0; i < 3; i++) {
    const dayDiv = document.createElement("div");
    const dayName = document.createElement("div");
    const conditionDiv = document.createElement("div");
    const conditionIcon = new Image();
    const maxT = document.createElement("div");
    const maxTIcon = new Image();
    maxTIcon.src = arrow1;
    const maxTText = document.createElement("span");
    const minT = document.createElement("div");
    const minTIcon = new Image();
    minTIcon.src = arrow0;
    const minTText = document.createElement("span");
    const chanceRain = document.createElement("div");
    const chanceRainText = document.createElement("span");
    const chanceRainIcon = new Image();
    chanceRainIcon.src = drop;
    const sunrise = document.createElement("div");
    const sunriseIcon = new Image();
    sunriseIcon.src = sun0;
    const sunriseText = document.createElement("span");
    const sunset = document.createElement("div");
    const sunsetIcon = new Image();
    sunsetIcon.src = sun1;
    const sunsetText = document.createElement("span");

    daysView.classList.add("days-view");
    dayDiv.setAttribute("id", `day${i}`);
    dayDiv.classList.add("day-div");
    dayName.classList.add("day-name");
    conditionDiv.classList.add("condition-div");
    conditionIcon.classList.add("condition-icon");
    maxT.classList.add("max-temp");
    minT.classList.add("min-temp");
    chanceRain.classList.add("chance-rain");
    sunrise.classList.add("sunrise");
    sunset.classList.add("sunset");

    dayDiv.appendChild(dayName);
    conditionDiv.appendChild(conditionIcon);
    dayDiv.appendChild(conditionDiv);
    maxT.appendChild(maxTIcon);
    maxT.appendChild(maxTText);
    dayDiv.appendChild(maxT);
    minT.appendChild(minTIcon);
    minT.appendChild(minTText);
    dayDiv.appendChild(minT);
    chanceRain.appendChild(chanceRainIcon);
    chanceRain.appendChild(chanceRainText);
    dayDiv.appendChild(chanceRain);
    sunrise.appendChild(sunriseIcon);
    sunrise.appendChild(sunriseText);
    dayDiv.appendChild(sunrise);
    sunset.appendChild(sunsetIcon);
    sunset.appendChild(sunsetText);
    dayDiv.appendChild(sunset);
    daysView.appendChild(dayDiv);
  }

  topLeft.appendChild(siteName);
  topRight.appendChild(inputLabel);
  topRight.appendChild(inputBox);
  topRight.appendChild(inputBtn);
  topRight.appendChild(error);
  top.appendChild(topLeft);
  top.appendChild(topRight);

  currentLeft.appendChild(cityName);
  currentLeft.appendChild(today);
  currentLeft.appendChild(localTime);
  currCondition.appendChild(currConIcon);
  currentRight.appendChild(temp);
  currentRight.appendChild(currCondition);
  currentView.appendChild(currentLeft);
  currentView.appendChild(currentRight);

  body.appendChild(top);
  body.appendChild(currentView);
  body.appendChild(daysView);
}

function fillDom() {
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temperature");
  const currConIcon = document.querySelector(".curr-con-icon");
  const today = document.querySelector(".today");
  const localTime = document.querySelector(".local-time");

  const todayWeek = new Date(`${currentWeather.time}`);
  // month - from 0 to 11, so need to add +1
  today.textContent = `Today is ${
    weekdays[todayWeek.getDay()]
  }, ${todayWeek.getDate()}.${
    todayWeek.getMonth() + 1
  }.${todayWeek.getFullYear()}. `;
  localTime.textContent = `Local time: ${todayWeek.getHours()}:${todayWeek.getMinutes()}.`;
  currConIcon.src = `https:${currentWeather.condition_icon}`;

  cityName.textContent = currentWeather.city;
  temp.textContent = `${currentWeather.tempC} °C`;

  // weather forecast for 3 days - fill with fetched data
  for (let i = 0; i < 3; i++) {
    const dayName = document.querySelector(`#day${i} .day-name`);
    const maxT = document.querySelector(`#day${i} .max-temp span`);
    const minT = document.querySelector(`#day${i} .min-temp span`);
    const conditionIcon = document.querySelector(`#day${i} .condition-icon`);
    const chanceRainText = document.querySelector(`#day${i} .chance-rain span`);
    const sunriseText = document.querySelector(`#day${i} .sunrise span`);
    const sunsetText = document.querySelector(`#day${i} .sunset span`);

    if (i === 0) {
      dayName.textContent = "Today";
    } else {
      const dayNum = new Date(`${futureWeather[i].date}`).getDay();
      dayName.textContent = weekdays[dayNum];
    }

    conditionIcon.src = `https:${futureWeather[i].condition_icon}`;
    maxT.textContent = `${futureWeather[i].maxtemp_c} °C`;
    minT.textContent = `${futureWeather[i].mintemp_c} °C`;
    chanceRainText.textContent = `${futureWeather[i].daily_chance_of_rain}%`;
    sunriseText.textContent = futureWeather[i].sunrise;
    sunsetText.textContent = futureWeather[i].sunset;
  }
}

createDom();
getWeather(currentCity);

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

/*
l
Search:
add event listener for enter in input box
error: City not found.
Error, please try again.

problem with hours, minutes and months - it shows 1 number instead of 01
different errors for different codes
*/
