import React, {Fragment} from "react";
import ActualWeatherWrapper from "./ActualWeatherWrapper";
import WeatherTeaser from "./WeatherTeaser";
import {useSelector} from "react-redux";

function WeatherWidget() {
    const teasers = [];
    const data = useSelector(state => state);
    const activeWeather = data.activeWeather;
    const remainingDays = data.all.consolidated_weather.filter((item) => {return item !== activeWeather})
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (const day of remainingDays) {
      const url = "https://www.metaweather.com/static/img/weather/" + day.weather_state_abbr + ".svg";
      teasers.push(<WeatherTeaser key={day.id} dayId={day.id} dayName={days[(new Date(day.applicable_date).getDay())].substring(0, 3)} dayIconUrl={url} dayTemperature={(Number(day.the_temp)).toFixed(0)}/>)
    }

    return (
      <Fragment>
        <ActualWeatherWrapper/>
        <div className="weather__teasers">
          {teasers}
        </div>
      </Fragment>
    )
}

export default WeatherWidget