import config from "../config";
import "./style.css";

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

    daysView.classList.add("days-view");
    dayDiv.setAttribute("id", `day${i}`);
    dayDiv.classList.add("day-div");
    dayName.classList.add("day-name");
    conditionDiv.classList.add("condition-div");
    conditionIcon.classList.add("condition-icon");
    maxT.classList.add("max-temp");
    minT.classList.add("min-temp");
    chanceRain.classList.add("chance-rain");

    dayDiv.appendChild(dayName);
    conditionDiv.appendChild(conditionIcon);
    dayDiv.appendChild(conditionDiv);
    dayDiv.appendChild(maxT);
    dayDiv.appendChild(minT);
    dayDiv.appendChild(chanceRain);
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
  // const dayDiv = document.querySelector(".day-div");
  // const conditionDiv = document.querySelector(".condition-div");
  // const maxT = document.querySelector(".max-temp");
  // const minT = document.querySelector(".min-temp");
  // const day0 = document.querySelector("#day0");
  // const day1 = document.querySelector("#day1");
  // const day2 = document.querySelector("#day2");

  cityName.textContent = currentWeather.city;
  temp.textContent = currentWeather.tempC + " °C";
  time.textContent = currentWeather.time;

  // weather forecast for 3 days - fill with fetched data
  for (let i = 0; i < 3; i++) {
    const day = document.querySelector(`#day${i}`);
    const maxT = document.querySelector(`#day${i} .max-temp`);
    const minT = document.querySelector(`#day${i} .min-temp`);
    const conditionIcon = document.querySelector(`#day${i} .condition-icon`);
    const chanceRain = document.querySelector(`#day${i} .chance-rain`);

    conditionIcon.src = "https:" + futureWeather[i].condition_icon;
    maxT.textContent = futureWeather[i].maxtemp_c;
    minT.textContent = futureWeather[i].mintemp_c;
    chanceRain.textContent = futureWeather[i].daily_chance_of_rain + "%";
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
