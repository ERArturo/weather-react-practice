import React from 'react';
import ClimaInfoExtra from './ClimaInfoExtra';
import TemperaturaClima from './TemperaturaClima';
import PropTypes from 'prop-types';
import './style.css';

const InformacionClima = ({data : {temperature, weatherState, humidity,wind}}) => (
     <div className="infoClimaCont" >
        <TemperaturaClima 
            temperatura={temperature} 
            estadoClima={weatherState}
        />  
        <ClimaInfoExtra 
            humedad={humidity} 
            viento={wind}
        />
    </div>
);

InformacionClima.propTypes = {
    data: PropTypes.shape({
        temperature  : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity     : PropTypes.number.isRequired,
        wind         : PropTypes.string.isRequired

    })
};

export default InformacionClima;