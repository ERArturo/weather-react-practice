
import {api_key, url_base} from './../constans/api_url.js';

const getURLWeatherByCity = (city, type) => {
    return `${url_base}/${type}?q=${city}&appid=${api_key}`;
};

export default getURLWeatherByCity;