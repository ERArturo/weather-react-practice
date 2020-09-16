
import convert from 'convert-units';
import {
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../constans/clima';

const getTemp = grades => {
    return Number(convert(grades).from('K').to('C').toFixed(0));
}

const getWeatherState = weather => {
    const {id} = weather;

    switch (id) {
        case id < 300:
            return THUNDER;
        case id < 400:
            return DRIZZLE;
        case id < 600:
            return RAIN;
        case id < 700:
            return SNOW;
        case id === 800:
            return SNOW;
        default:
            return CLOUD;
    }
}

const transformWeather = weatherData => {
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);

    console.log(weatherState);
    const data = {
        humidity,
        temperature : getTemp(temp),
        weatherState,
        wind : `${speed} m/s`
    }
    return data;
}

export default transformWeather;