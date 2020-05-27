import React, {Component, Fragment} from "react";
import ActualWeatherWrapper from "./ActualWeatherWrapper";
import WeatherTeaser from "./WeatherTeaser";

class WeatherWidget extends Component {
  render() {
    const teasers = []
    const data = [{
      dayName: 'Pon',
      dayIconUrl: 'url',
      dayTemperature: '20'
    },{
      dayName: 'Wt',
      dayIconUrl: 'url',
      dayTemperature: '23'
    },{
      dayName: 'Śr',
      dayIconUrl: 'url',
      dayTemperature: '24'
    },{
      dayName: 'Czw',
      dayIconUrl: 'url',
      dayTemperature: '15'
    },
    ];

    for (const day of data) {
      teasers.push(<WeatherTeaser key={day.dayName} dayName={day.dayName} dayIconUrl={day.dayIconUrl} dayTemperature={day.dayTemperature}/>)
    }
    return (
      <Fragment>
        <ActualWeatherWrapper/>
        <div className="teasers">
          {teasers}
        </div>
      </Fragment>
    )
  }
}

export default WeatherWidget