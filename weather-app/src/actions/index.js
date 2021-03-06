import transformForecast from "../services/transformForecast";
import transformWeather from "../services/transformWeather";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

const setCity = (payload) => ({ type: SET_CITY, payload });
const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = (payload) => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = (payload) => ({ type: SET_WEATHER_CITY, payload });

const api_key = "36375f7aea7d233850b0d23ec93d39b4";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = (payload) => {
  return (dispatch) => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    //Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));

    return fetch(url_forecast)
      .then((data) => data.json())
      .then((weather_data) => {
        const forecastData = transformForecast(weather_data);

        //Modificar el estado con el resultado de la promies (fetch)
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};

export const setWeather = (payload) => {
  return (dispatch) => {
    payload.forEach((city) => {
      dispatch(getWeatherCity(city));

      const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}`;
      fetch(api_weather)
        .then((data) => {
          return data.json();
        })
        .then((weather_data) => {
          const weather = transformWeather(weather_data);
          dispatch(setWeatherCity({ city, weather }));
        });
    });
  };
};
