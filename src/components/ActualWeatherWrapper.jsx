import React, {Component} from "react";
import WeatherNow from "./WeatherNow";
import WeatherProperty from "./WeatherProperty";

class ActualWeatherWrapper extends Component {
  render() {
    const attributes = []

    for (let i = 0; i < 4; i++) {
      attributes.push(<WeatherProperty/>)
    }

    return(
      <div className="currentWeather">
        <WeatherNow />
        <div className="currentWeather__attributes">
          {attributes}
        </div>
      </div>
    )
  }
}

export default ActualWeatherWrapper