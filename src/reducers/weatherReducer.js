import { data } from "../data";

const apiUrl =
  "https://samples.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=773f2fa54840535e8683d421e7ac7528";

async function fetchData() {
  return await fetch(apiUrl, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response.json());
    })
    .catch((error) => {
      console.error(error);
    });
}

const store_data = {
  all: data,
  activeWeather: data.consolidated_weather[0],
};

export const weatherReducer = (state = store_data, action) => {
  switch (action.type) {
    case "GET_DAY_WEATHER":
      return getDayWeather(action.dayId);
    case "GET_DAYS_DATA":
      return state;
    default:
      return state;
  }
};

function getDayWeather(id) {
  return data.consolidated_weather[id];
}
