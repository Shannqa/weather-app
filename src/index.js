import config from "../config.js";
import backgrounds from "./background.js";
// pc import variables, comment them out on mobile
/*import "./style.css";
import drop from "./water_drop_FILL0_wght400_GRAD0_opsz24.svg";
import sun0 from "./wb_twilight_FILL0_wght400_GRAD0_opsz24.svg";
import sun1 from "./wb_twilight_FILL1_wght400_GRAD0_opsz24.svg";
import arrow0 from "./south_FILL0_wght400_GRAD0_opsz24.svg";
import arrow1 from "./north_FILL0_wght400_GRAD0_opsz24.svg";*/

// phone import variables, comment them out on pc
const drop = "src/water_drop_FILL0_wght400_GRAD0_opsz24.svg";
const sun0 = "/src/wb_twilight_FILL0_wght400_GRAD0_opsz24.svg";
const sun1 = "/src/wb_twilight_FILL1_wght400_GRAD0_opsz24.svg";
const arrow0 = "/src/south_FILL0_wght400_GRAD0_opsz24.svg";
const arrow1 = "/src/north_FILL0_wght400_GRAD0_opsz24.svg";

function setBackground() {
  const body = document.querySelector("body");
  let back = "";
  const code = currentWeather.condition_code;
  if (code === 1000) {
    // sunny
    back = backgrounds.sunny;
    console.log(backgroundImg);
  } else if (code === 1003) {
    // partly cloudy
    back = backgrounds.partlyCloudy;
  } else if (code === 1006 || code === 1009) {
    // cloudy overcast
    back = backgrounds.clouds;
  } else if (code === 1030 || code === 1135 || code === 1147) {
    // mist, fog, freezing fog
    back = backgrounds.mist;
  } else if (
    code === 1063 ||
    code === 1150 ||
    code === 1153 ||
    code === 1180 ||
    code === 1183 ||
    code === 1240
  ) {
    // patchy rain, patchy light drizzle, light drizzle, light rain
    back = backgrounds.lightRain;
  } else if (
    code === 1186 ||
    code === 1189 ||
    code === 1192 ||
    code === 1195 ||
    code === 1243 ||
    code === 1246
  ) {
    // moderate rain, rain, heavy rain
    back = backgrounds.rain;
  } else if (
    code === 1066 ||
    code === 1114 ||
    code === 1117 ||
    code === 1210 ||
    code === 1213 ||
    code === 1216 ||
    code === 1219 ||
    code === 1222 ||
    code === 1225 ||
    code === 1255 ||
    code === 1258
  ) {
    // patchy snow, blowing snow, blizzard
    back = backgrounds.snow;
  } else if (
    code === 1069 ||
    code === 1072 ||
    code === 1168 ||
    code === 1171 ||
    code === 1198 ||
    code === 1201 ||
    code === 1204 ||
    code === 1207 ||
    code === 1249 ||
    code === 1252
  ) {
    // patchy sleet or freezing drizzle, light freezing rain, sleet
    back = backgrounds.sleet;
  } else if (code === 1087 || code === 1273 || code === 1276) {
    // thundery outbreaks
    back = backgrounds.thunder;
  } else if (code === 1237 || code === 1261 || code === 1264) {
    // ice pellets
    back = backgrounds.ice;
  } else if (code === 1279 || code === 1282) {
    // snow with thunder
    back = backgrounds.thunderstorm;
  }

  let rand = Math.floor(Math.random() * back.length);
  let backimg = back[rand].src;
  let backauth = back[rand].author;
  let backref = back[rand].ref;
  console.log(backimg);
  body.style.backgroundImage = "url(" + backimg + ")";

  // add link and author to footer
  const footerA = document.querySelector(".footer-photo a");
  footerA.textContent = backauth + " on Unsplash";
  footerA.href = backref;
}

const apiKey = config.API_KEY;
let tempType = "C";
let newCity = "Warsaw";
let currentCity = "";
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
  code: "",
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
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=14`,
    );
    const data = await forecast.json();
    console.log(data);

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
      condition_code: data.current.condition.code,
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
    if (city === newCity) {
      currentCity = newCity;
      newCity = "";
    }

    fillDom();
    setBackground();

    console.log(currentWeather.condition_code);
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
  const tempTypeDiv = document.createElement("div");
  const tempSpanC = document.createElement("span");
  const tempSpanF = document.createElement("span");
  const tempSpanSlash = document.createElement("span");

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

  // footer
  const footer = document.createElement("div");
  const footerApi = document.createElement("div");
  const footerApiSpan = document.createElement("span");
  const footerApiA = document.createElement("a");
  const footerCreated = document.createElement("div");
  const footerCreatedSpan = document.createElement("span");
  const footerCreatedA = document.createElement("a");

  const footerPhoto = document.createElement("div");
  const footerPhotoSpan = document.createElement("span");
  const footerPhotoA = document.createElement("a");

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
  footerApiSpan.textContent = "Powered by ";
  footerApiA.href = "https://www.weatherapi.com/";
  footerApiA.textContent = "WeatherApi";
  footerCreatedSpan.textContent = "Created by ";
  footerCreatedA.href = "https://shannqa.github.io/homepage/index.html";
  footerCreatedA.textContent = "Shannqa";
  footerPhotoSpan.textContent = "Photo by ";

  currentView.classList.add("current-view");
  currentLeft.classList.add("current-left");
  currentRight.classList.add("current-right");
  currConIcon.classList.add("curr-con-icon");
  today.classList.add("today");
  localTime.classList.add("local-time");
  cityName.classList.add("city-name");
  temp.classList.add("temperature");
  footerPhoto.classList.add("footer-photo");
  tempTypeDiv.classList.add("temp-type");
  tempSpanC.textContent = "°C";
  tempSpanF.textContent = "°F";
  tempSpanSlash.textContent = "/";
  tempSpanC.classList.add("temp-active");
  tempSpanC.addEventListener("click", () => {
    tempType = "C";
    tempSpanC.classList.add("temp-active");
    tempSpanC.classList.remove("temp-active");
    console.log("curr " + currentCity);
    console.log("new " + newCity);

    getWeather(currentCity);
  });
  tempSpanF.addEventListener("click", () => {
    tempType = "F";
    tempSpanF.classList.add("temp-active");
    tempSpanC.classList.remove("temp-active");
    getWeather(currentCity);
  });

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
    footer.classList.add("footer");

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

  tempTypeDiv.appendChild(tempSpanC);
  tempTypeDiv.appendChild(tempSpanSlash);
  tempTypeDiv.appendChild(tempSpanF);

  topRight.appendChild(tempTypeDiv);
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

  footerApi.appendChild(footerApiSpan);
  footerApi.appendChild(footerApiA);
  footerCreated.appendChild(footerCreatedSpan);
  footerCreated.appendChild(footerCreatedA);
  footerPhoto.appendChild(footerPhotoSpan);
  footerPhoto.appendChild(footerPhotoA);

  footer.appendChild(footerApi);
  footer.appendChild(footerCreated);
  footer.appendChild(footerPhoto);

  body.appendChild(top);
  body.appendChild(currentView);
  body.appendChild(daysView);
  body.appendChild(footer);
}

function fillDom() {
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temperature");
  const currConIcon = document.querySelector(".curr-con-icon");
  const today = document.querySelector(".today");
  const localTime = document.querySelector(".local-time");

  const todayWeek = new Date(`${currentWeather.time}`);
  
  // month - from 0 to 11, so need to add +1. Day, month, hours, minutes - if the number is less than 10, add a 0 to the number, so it's 01 instead of 1
  let day  = todayWeek.getDate() < 10 ? "0" : "" + todayWeek.getDate();
  let month = todayWeek.getMonth() < 10 ? "0" : "" + todayWeek.getMonth();
  
  today.textContent = `Today is ${
    weekdays[todayWeek.getDay()]
  }, ${day}.${month + 1}.${todayWeek.getFullYear()}. `;
  
  let hours = todayWeek.getHours() < 10 ? "0" : "" + todayWeek.getHours();
  let minutes = todayWeek.getMinutes() < 10 ? "0" : "" + todayWeek.getMinutes();
  
  localTime.textContent = `Local time: ${hours}:${minutes}.`;
  currConIcon.src = `https:${currentWeather.condition_icon}`;

  cityName.textContent = currentWeather.city;
  if (tempType === "F") {
    temp.textContent = `${currentWeather.tempF} °F`;
  } else {
    temp.textContent = `${currentWeather.tempC} °C`;
  }
  console.log(tempType);

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

    if (tempType === "F") {
      maxT.textContent = `${futureWeather[i].maxtemp_f} °F`;
      minT.textContent = `${futureWeather[i].mintemp_f} °F`;
    } else {
      maxT.textContent = `${futureWeather[i].maxtemp_c} °C`;
      minT.textContent = `${futureWeather[i].mintemp_c} °C`;
    }
    chanceRainText.textContent = `${futureWeather[i].daily_chance_of_rain}%`;
    sunriseText.textContent = futureWeather[i].sunrise;
    sunsetText.textContent = futureWeather[i].sunset;
  }
}

createDom();
getWeather(newCity);

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
