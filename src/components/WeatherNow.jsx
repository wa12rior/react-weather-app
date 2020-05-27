import React, {Component} from 'react';

class WeatherNow extends Component {
  render() {
    return (
      <div className="weather__wrapper">
        <img src={this.props.iconUrl} alt="weather actual icon" className="weather__icon"/>
        <div className="weather__info">
          <p className="weather__temperature">{this.props.temperature}&#8451;</p>
          <strong className="weather__stateName">{this.props.weatherStateName}</strong>
        </div>
      </div>
    );
  }
}

export default WeatherNow