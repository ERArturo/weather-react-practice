import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux'; 
import LocationList from './../components/LocationList';
import {connect} from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city } = this.props;
        setWeather(cities);  
        setSelectedCity(city);
    }
    
    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
    }
    render() {
        return (
            <LocationList 
              cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectionLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity : PropTypes.func.isRequired,
    setWeather : PropTypes.func.isRequired,
    cities : PropTypes.array.isRequired,
    citiesWeather : PropTypes.array.isRequired,
    city : PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

// const  mapDispatchToProps = (dispatch, ownProps) => ({
//     setSelectedCity : payload => dispatch(setSelectedCity(payload)),
//     setWeather : cities => dispatch(setWeather(cities))
// });

const mapStateToProps = (state, ownProps) => {
    return {
        citiesWeather : getWeatherCities(state),
        city : getCity(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(LocationListContainer);