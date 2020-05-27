export const getDayWeather = (dayId) => ({
  type: "GET_DAY_WEATHER",
  dayId,
});

export const getDaysData = () => ({
  type: "GET_DAYS_DATA",
});
