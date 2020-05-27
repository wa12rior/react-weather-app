import React from "react";
import WeatherNow from "./WeatherNow";
import WeatherProperty from "./WeatherProperty";
import {useSelector} from "react-redux";

function ActualWeatherWrapper() {
  const attributes = [];
  const weather = useSelector(state => state.consolidated_weather[0]);
  let url = "https://www.metaweather.com/static/img/weather/" + weather.weather_state_abbr + ".svg";

  const properties = [
    {
      "icon": "",
      "label": "Air pressure",
      "value": weather.air_pressure
    },
    {
      "icon": "",
      "label": "Humidity",
      "value": weather.humidity
    },
    {
      "icon": "",
      "label": "Wind Speed",
      "value": weather.wind_speed
    }
  ]

  for (let property of properties) {
    attributes.push(<WeatherProperty key={property.label} iconUrl={property.icon} value={property.label + " " + property.value}/>)
  }

  return(
    <div className="currentWeather">
      <WeatherNow temperature={weather.the_temp} weatherStateName={weather.weather_state_name} iconUrl={url}/>
      <div className="currentWeather__attributes">
        {attributes}
      </div>
    </div>
  )
}

export default ActualWeatherWrapper