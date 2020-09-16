import React, {Component} from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import InformacionClima from './../UbicacionClima/InformacionClima/';


class ForecastItem extends Component{
    
    // constructor(props){
    //     super(props);
    // }

    render(){

        const {weekDay, hour, data} = this.props;
    return (
        <div>
            <div>
                {weekDay} Hora: {hour}hrs
            </div>
            <InformacionClima data={data}></InformacionClima>
        </div>
    )
    }

    

};

ForecastItem.propTypes = {
    weekDay : PropTypes.string.isRequired,
    hour    : PropTypes.number.isRequired,
    data    : PropTypes.shape({
        temperature  : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity     : PropTypes.number.isRequired,
        wind         : PropTypes.string.isRequired

    })
};

export default ForecastItem;