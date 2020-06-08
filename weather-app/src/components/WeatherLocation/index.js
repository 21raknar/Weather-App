import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUN, WINDY } from "../../constants/weathers";

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s",
};

const data2 = {
  temperature: 15,
  weatherState: WINDY,
  humidity: 20,
  wind: "10 m/s",
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "León",
      data: data,
    };
  }

  handleUpadteClick = () => {
    console.log("Actualizado");
    this.setState({
      city: "Llion",
      data: data2,
    });
  };

  render() {
    const { data, city } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpadteClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
