import transformForecast from "../services/transformForecast";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

const setCity = (payload) => ({ type: SET_CITY, payload });

const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

const api_key = "36375f7aea7d233850b0d23ec93d39b4";
const url = "http://api.openweathermap.org/data/2.5/forecast";

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
