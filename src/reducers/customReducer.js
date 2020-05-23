const data = [
  {
    dayName: "Pon",
    dayIconUrl: "url",
    dayTemperature: "20",
  },
  {
    dayName: "Wt",
    dayIconUrl: "url",
    dayTemperature: "23",
  },
  {
    dayName: "Śr",
    dayIconUrl: "url",
    dayTemperature: "24",
  },
  {
    dayName: "Czw",
    dayIconUrl: "url",
    dayTemperature: "15",
  },
];

const apiUrl = "https://www.metaweather.com/api/location/523920/";

const fetchData = () => {
  return fetch(apiUrl);
};

export const custom = (state = data, action) => {
  if (action.type === "CUSTOM") {
    console.log("hello from reducer");
  } else {
    console.log("greetings");
  }
};
