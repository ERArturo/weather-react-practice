import React from 'react';
import UbicacionClima from './UbicacionClima';
import PropTypes from 'prop-types';



const LocationList = ({cities, onSelectedLocation}) => {

    const handleLocation = city => {
        onSelectedLocation(city);
    }

    const ubicationConstruct = cities => (
        cities.map( city => (
            <UbicacionClima 
                    key={city.key} 
                    city={city.name}
                    weatherClic={() => handleLocation(city.name) }
                    data = {city.data}
                /> 
            )
        )
    ); 

    return(
        <div>
            {
                ubicationConstruct(cities)
            }
        </div>
    )
}


LocationList.propTypes = {
    cities             : PropTypes.array.isRequired,
    onSelectedLocation : PropTypes.func,
}

export default LocationList;