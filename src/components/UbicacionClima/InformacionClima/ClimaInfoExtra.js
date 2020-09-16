import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import './style.css';


const ClimaInfoExtra = ({humedad, viento}) => (
    <div className="climaInfoExtraCont"> 
        <span className="extraInfoText">
            {`Humedad ${humedad} % `} 
        </span>
        <span className="extraInfoText">
            {`Vientos ${viento}`}
        </span>
    </div>
);

ClimaInfoExtra.propTypes = {
    humedad : PropTypes.number.isRequired,
    viento  : PropTypes.string.isRequired
};

export default ClimaInfoExtra;