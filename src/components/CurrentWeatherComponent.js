import React from 'react'

//redux
import { useSelector } from 'react-redux';

//helpers
import { convertTemperature, getTemperatureUnit } from '../utils'


const CurrentWeatherComponent = () => {
    const weather = useSelector((state) => state.weather);

    return (
        <>
            <h2>Current Weather</h2>
            <p>City: {weather.currentWeather?.city}</p>
            <p>Temperature: {convertTemperature(weather.isCelsius, weather.currentWeather?.currentWeather.temperature)} {getTemperatureUnit(weather.isCelsius)}</p>
            <p>Humidity: {weather.currentWeather?.currentWeather.humidity}</p>
            <p>Condition: {weather.currentWeather?.currentWeather.conditions}</p>

        </>
    )
}

export default CurrentWeatherComponent