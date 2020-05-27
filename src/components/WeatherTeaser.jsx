import React, { Component } from "react";

class WeatherTeaser extends Component {
  render() {
    return (
      <div className="weather__teaser">
        <strong className="weather__dayName">{this.props.dayName}</strong>
        <object data={this.props.dayIconUrl} type="image/svg+xml" className="weather__teaserIcon"/>
        <strong className="weather__teaserTemperature">{this.props.dayTemperature}&#8451;</strong>
      </div>
    )
  }
}

export default WeatherTeaser