import React from 'react';
import Ubicacion from './Ubicacion';
import InformacionClima from './InformacionClima';
import './style.css';
import { PropTypes } from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';


const UbicacionClima = ({weatherClic, city, data}) => (
    <div className="ubicacionClimaCont" onClick={weatherClic}>
        <Ubicacion ciudad={city}></Ubicacion> 
        {data ? <InformacionClima data={data}></InformacionClima> :  <LinearProgress/>}
    </div>
)

UbicacionClima.propTypes = {
    city : PropTypes.string.isRequired,
    weatherClic : PropTypes.func,
    data: PropTypes.shape({
        temperature  : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity     : PropTypes.number.isRequired,
        wind         : PropTypes.string.isRequired

    })
}

export default UbicacionClima;