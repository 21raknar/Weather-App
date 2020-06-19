import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";

const WeatherLocation = ({ onWeatherLocationClick, data, city }) => (
  <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Location city={city} />
    {data ? <WeatherData data={data} /> : <CircularProgress />}
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};
export default WeatherLocation;
