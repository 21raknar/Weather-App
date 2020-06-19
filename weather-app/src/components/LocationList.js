import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationCLick = (city) => {
    console.log("handleWeatherLocation");
    onSelectedLocation(city);
  };
  const strToComponents = (cities) =>
    cities.map((city) => (
      <WeatherLocation
        key={city.key}
        city={city.name}
        onWeatherLocationClick={() => handleWeatherLocationCLick(city.name)}
        data={city.data}
      />
    ));

  return <div className="locationList">{strToComponents(cities)}</div>;
};
LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;
