import config from "../config.js";
//import "./style.css";
//import drop from "./water_drop_FILL0_wght400_GRAD0_opsz24.svg";
// phone variables, comment them out on pc
const drop = "src/water_drop_FILL0_wght400_GRAD0_opsz24.svg";
const sun0 = "/src/wb_twilight_FILL0_wght400_GRAD0_opsz24.svg";
const sun1 = "/src/wb_twilight_FILL1_wght400_GRAD0_opsz24.svg";
const apiKey = config.API_KEY;

console.log("aaa");
let newCity = "";
let currentCity = "Warsaw";
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentWeather = {
  city: "",
  time: "",
  country: "",
  tempC: "",
  tempF: "",
  condition: "",
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
  try {
    const forecast = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=" +
        apiKey +
        "&q=" +
        city +
        "&days=14",
    );
    if (forecast.status === 200) {
      const data = await forecast.json();

      console.log(data);
      currentWeather = {
        city: data.location.name,
        time: data.location.localtime,
        country: data.location.country,
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        condition: data.current.condition.text,
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
      console.log(futureWeather[0]);

      fillDom();
    } else {
      throw new Error(response.status + " " + response.statusText);
    }
  } catch (err) {
    console.log(err.message);
  }
  // console.log(data);
}

function createDom() {
  const body = document.querySelector("body");
  const top = document.createElement("div");
  const inputBox = document.createElement("input");
  const inputBtn = document.createElement("button");
  const daysView = document.createElement("div");

  for (let i = 0; i < 3; i++) {
    const dayDiv = document.createElement("div");
    const dayName = document.createElement("div");
    const conditionDiv = document.createElement("div");
    const conditionIcon = new Image();
    const maxT = document.createElement("div");
    const minT = document.createElement("div");
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
    dayDiv.appendChild(maxT);
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
  body.appendChild(daysView);
}

function fillDom() {
  const cityName = document.querySelector(".city-name");
  const temp = document.querySelector(".temperature");
  const time = document.querySelector(".time");
  const daysView = document.querySelector(".days-view");


  cityName.textContent = currentWeather.city;
  temp.textContent = currentWeather.tempC + " °C";
  time.textContent = currentWeather.time;

  // weather forecast for 3 days - fill with fetched data
  for (let i = 0; i < 3; i++) {
    const day = document.querySelector(`#day${i}`);
    const dayName = document.querySelector(`#day${i} .day-name`);
    const maxT = document.querySelector(`#day${i} .max-temp`);
    const minT = document.querySelector(`#day${i} .min-temp`);
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

    conditionIcon.src = "https:" + futureWeather[i].condition_icon;
    maxT.textContent = futureWeather[i].maxtemp_c + " °C";
    minT.textContent = futureWeather[i].mintemp_c + " °C";
    chanceRainText.textContent = futureWeather[i].daily_chance_of_rain + "%";
    sunriseText.textContent = futureWeather[i].sunrise;
    sunsetText.textContent = futureWeather[i].sunset;

  }
}

createDom();
getWeather(currentCity);

function getDate() {
  let newDate = new Date("2023-10-22 0:41");

  const date =
    newDate.getDate() + "." + newDate.getMonth() + "." + newDate.getFullYear();
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
