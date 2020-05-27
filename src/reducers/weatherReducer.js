import { data } from "../data";

const store_data = {
  all: data,
  activeWeather: data.consolidated_weather[0],
};

export const weatherReducer = (state = store_data, action) => {
  switch (action.type) {
    case "TOGGLE_WEATHER":
      const newWeather = state.all.consolidated_weather.filter((item) => {
        return item.id === action.payload;
      });
      const newState = state;
      newState.activeWeather = newWeather[0];
      return newState;
    default:
      return state;
  }
};
