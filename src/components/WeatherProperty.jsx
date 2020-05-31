import React, {Component} from "react";

class WeatherProperty extends Component {
  render() {
    return (
        <div className="weather__attributes">
          <img src={this.props.iconUrl} alt="weather small icon" className="weather__smallIcon"/>
          <p className="weather__property">{this.props.value}</p>
        </div>
    );
  }
}

export default WeatherProperty