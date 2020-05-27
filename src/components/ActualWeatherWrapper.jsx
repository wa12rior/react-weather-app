import React from "react";
import WeatherNow from "./WeatherNow";
import WeatherProperty from "./WeatherProperty";
import {useSelector} from "react-redux";

function ActualWeatherWrapper() {
  const attributes = [];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weather = useSelector(state => state.activeWeather);
  const url = "https://www.metaweather.com/static/img/weather/" + weather.weather_state_abbr + ".svg";
  const date = new Date(weather.applicable_date);
  const day_id = date.getDay();

  const properties = [
    {
      "icon": "https://image.flaticon.com/icons/svg/2928/2928948.svg",
      "label": "",
      "value": days[day_id]
    },
    {
      "icon": "https://image.flaticon.com/icons/svg/2948/2948393.svg",
      "label": "Air pressure:",
      "value": weather.air_pressure
    },
    {
      "icon": "https://image.flaticon.com/icons/svg/2938/2938050.svg",
      "label": "Humidity:",
      "value": weather.humidity
    },
    {
      "icon": "https://image.flaticon.com/icons/svg/2938/2938002.svg",
      "label": "Wind Speed:",
      "value": weather.wind_speed
    }
  ];

  for (let property of properties) {
    attributes.push(<WeatherProperty key={property.label} iconUrl={property.icon} value={property.label + " " + property.value}/>)
  }

  return(
    <div className="currentWeather">
      <WeatherNow temperature={(Number(weather.the_temp)).toFixed(0)} weatherStateName={weather.weather_state_name} iconUrl={url}/>
      <div className="currentWeather__attributes">
        {attributes}
      </div>
    </div>
  )
}

export default ActualWeatherWrapper