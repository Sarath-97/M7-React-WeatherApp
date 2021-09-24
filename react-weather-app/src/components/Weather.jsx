import React from 'react';
import './style.css'
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({WeatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">City Name: {WeatherData.name}</Card.Header>
        <p>Temprature: {WeatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(WeatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(WeatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Description: {WeatherData.weather[0].main}</p>
        <p>Humidity: {WeatherData.main.humidity} %</p>
        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('LL')}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;