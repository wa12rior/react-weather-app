import React, {Component} from 'react';

class WeatherNow extends Component {
  render() {
    return (
      <div className="weather__wrapper">
        <img src="" alt="weather actual icon" className="weather__icon"/>
        <div className="weather__info">
          <p className="weather__temperature">21&#8451;</p>
          <strong className="weather__stateName">Mostly Cloudy</strong>
        </div>
      </div>
    );
  }
}

export default WeatherNow