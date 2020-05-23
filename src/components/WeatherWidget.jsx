import React, {Component, Fragment} from "react";
import ActualWeatherWrapper from "./ActualWeatherWrapper";
import WeatherTeaser from "./WeatherTeaser";

class WeatherWidget extends Component {
  render() {
    return (
      <Fragment>
        <ActualWeatherWrapper/>
      </Fragment>
    )
  }
}

export default WeatherWidget