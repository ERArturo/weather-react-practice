import React, {Component} from 'react';
import LocationListContainer from './containers/LocationListContainer'
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';

const cities = [
  "Morelia,mx",
  "Guadalajara,mx",
  "Puebla,mx",
  "Queretaro,mx",
  "Tokyo,jp",
];

class App extends Component{


  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant="h4" color="inherit">
                Manda fotos de patas
              </Typography> 
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6} className="weatherList">
            <LocationListContainer
              cities={cities}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={5}>
              <div className="details">
                <ForecastExtendedContainer></ForecastExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}


export default (App);
