import React from "react";
import { useDispatch } from "react-redux";
import { toggleWeather } from "../actions/weatherAction";

function WeatherTeaser({ dayId, dayName, dayIconUrl, dayTemperature }) {
  const dispatch = useDispatch();

  return (
    <div className="weather__teaser" onClick={() => dispatch(toggleWeather(dayId))}>
      <strong className="weather__dayName">{dayName}</strong>
      <object data={dayIconUrl} type="image/svg+xml" className="weather__teaserIcon"/>
      <strong className="weather__teaserTemperature">{dayTemperature}&#8451;</strong>
    </div>
  )
}

export default WeatherTeaser