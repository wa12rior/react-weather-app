import React, {Component} from 'react';

class WeatherNow extends Component {
  render() {
    return (
      <div className="weather__wrapper">
        <img src={this.props.iconUrl} alt="weather actual icon" className="weather__icon"/>
        <div className="weather__info">
          <div className="weather__temperature">{this.props.temperature}<sup>&#8451;</sup></div>
          <strong className="weather__stateName">{this.props.weatherStateName}</strong>
        </div>
      </div>
    );
  }
}

export default WeatherNow