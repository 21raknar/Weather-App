import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import transformForecast from "../services/transformForecast";
import ForecastItem from "./ForecastItem/index";

/*const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const data = {
  temperature: 10,
  humidity: 10,
  weatherState: "Normal",
  wind: "Normal",
};
*/

export const api_key = "36375f7aea7d233850b0d23ec93d39b4";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null,
    };
  }
  componentDidMount() {
    this.upadteCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props.city) {
      this.setState({ forecastData: null });
      this.upadteCity(nextProps.city);
    }
  }

  upadteCity = (city) => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}`;
    fetch(url_forecast)
      .then((data) => data.json())
      .then((weather_data) => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        this.setState({
          forecastData,
        });
      });
  };

  renderForecastItemDays(forecastData) {
    return forecastData.map((forecast) => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }

  renderProgress() {
    return <h3>cargando pronostico extendido...</h3>;
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};
export default ForecastExtended;
