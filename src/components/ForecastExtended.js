import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import './styles.css';

const renderForecastItemDays = data => {
    return data.map( (forecast, index) => <ForecastItem 
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}
        key = {`${forecast.weekDay}-${forecast.hour}`}
        />
    );
}

const renderProgress = () =>{
    return <LinearProgress></LinearProgress>;
}

const ForecastExtended = ({city, forecastData}) =>  (
    <div>
        <h2 className="forecastTitle">{city}</h2>
        { forecastData ? renderForecastItemDays(forecastData) : renderProgress() }
    </div>
);

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
    forecasData : PropTypes.array,
}
export default ForecastExtended;