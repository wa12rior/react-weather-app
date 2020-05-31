import { data } from "../data";

const store_data = {
  all: data,
  activeIndex: 4949416257519616,
  activeWeather: data.consolidated_weather[0],
};

export const weatherReducer = (state = store_data, action) => {
  switch (action.type) {
    case "TOGGLE_WEATHER":
      const newState = state;
      const newWeather = state.all.consolidated_weather.filter(
        (item, index) => {
          newState.activeIndex =
            item.id === action.payload ? item.id : state.activeIndex;
          return item.id === action.payload;
        }
      );
      newState.activeWeather = newWeather[0];
      return newState;
    default:
      return state;
  }
};
