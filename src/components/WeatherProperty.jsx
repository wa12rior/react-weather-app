import React, {Component} from "react";

class WeatherProperty extends Component {
  render() {
    return (
        <div className="weather__attributes">
          <img src="" alt="weather small icon" className="weather__smallIcon"/>
          <p className="weather__property">Sat, 2 July 2018</p>
        </div>
    );
  }
}

export default WeatherProperty