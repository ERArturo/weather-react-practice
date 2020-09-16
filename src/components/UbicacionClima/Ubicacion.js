import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Ubicacion = ({ciudad}) => (
    <div className="ubicacionCont">
        <h1> 
            {ciudad} 
        </h1>
    </div>
);

Ubicacion.propTypes = {
    ciudad : PropTypes.string.isRequired,
};
export default Ubicacion;
