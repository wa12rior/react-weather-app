import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { toggleWeather } from "../actions/weatherAction";

function WeatherTeaser({ dayId, dayName, dayIconUrl, dayTemperature }) {
  const dispatch = useDispatch();
  let data = useSelector(state => state.activeIndex);
  let classList = "weather__teaser";
  classList = dayId === data ? classList + " weather__teaser--active" : classList;

  return (
    <div className={classList} onClick={() => dispatch(toggleWeather(dayId))}>
      <strong className="weather__dayName">{dayName}</strong>
      <object data={dayIconUrl} type="image/svg+xml" className="weather__teaserIcon"/>
      <strong className="weather__teaserTemperature">{dayTemperature}&#8451;</strong>
    </div>
  )
}

export default WeatherTeaser