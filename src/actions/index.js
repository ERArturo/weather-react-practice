import transformForecast from './../services/transformForecast';
import getURLWeatherByCity from './../services/getURLWeatherByCity';
import transformWeather from './../services/transformWeather.js';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
const setCity = payload => ({ type : SET_CITY, payload });
const setForecastData = payload => ({ type : SET_FORECAST_DATA, payload});
const setWeatherCity = payload => ( { type : SET_WEATHER_CITY, payload } );
const getWeatherCity = payload => ( { type : GET_WEATHER_CITY, payload } );


export const setSelectedCity = payload => {
        return (dispatch, getState) => {
            
            const url_forecast = getURLWeatherByCity(payload, 'forecast');

            const state = getState();
            const date = state.cities[payload] && state.cities[payload].forecastDataDate;
            const now = new Date();
            if (date && (now - date ) < 1 * 60 * 1000 ) {
                return;
            }

            dispatch(setCity(payload));

            return fetch(url_forecast).then(
                data => (data.json())
            ).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data);
                    dispatch(setForecastData({city: payload, forecastData}));
                }
            );
    
        }
};

export const setWeather = (payload) => {
    return dispatch => {

        payload.map((city) =>{
            const url_forecast = getURLWeatherByCity(city, 'weather');
            console.log(url_forecast)

            dispatch(getWeatherCity(city));
    
            fetch(url_forecast).then( resolve => {
                return resolve.json();
            }).then(data => {
                const newWeather = transformWeather(data);
                dispatch( 
                    setWeatherCity( 
                        { 
                            city, weather : newWeather
                        } 
                    ) 
                )
                // this.setState({
                //     data: newWeather
                // }); )
            });
        })
    }

}