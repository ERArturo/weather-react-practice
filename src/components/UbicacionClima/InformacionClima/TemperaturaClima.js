import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import './style.css';
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../../../constans/clima'
import PropTypes  from 'prop-types';

const iconos = {
    [CLOUD]  : "cloud",
    [SUN]    : "day-sunny",
    [RAIN]   : "rain",
    [SNOW]   : "snow",
    [THUNDER]  : "day-thunderstore",
    [DRIZZLE] : "drizzle"
}

const getIcono = estadoClima => {
    const icon  = iconos[estadoClima];

    
    const sizeIcon = "4x";

    if (!icon) return <WeatherIcons className="wicon" name='alien' size={sizeIcon} />;

    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
};

const TemperaturaClima = ({temperatura, estadoClima}) => (
    <div className="temperaturaClimaCont">
            {
                getIcono(estadoClima)
            }
            <span className="temperature">
                {`${temperatura}`}  
            </span>
            <span className="temperatureType">
                {`C°`}  
            </span>
    </div>
);

TemperaturaClima.propTypes = {
    temperatura : PropTypes.number,
    estadoClima : PropTypes.string.isRequired
};

export default TemperaturaClima;