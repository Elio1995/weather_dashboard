import React, { useEffect } from 'react'
import { convertTemperature, getTemperatureUnit } from '../utils'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../store/weatherSlice';

const CitiesListComponent = () => {
    const weather = useSelector((state) => state.weather);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCities());
    }, [])

    return (
        <div className="cities-container">
            <h2>Cities</h2>
            <div className="cities-grid">
                {weather?.cities?.map((city) => (
                    <div className="city-card" key={city.city}>
                        <p>City: {city.city}</p>
                        <p>Temperature: {convertTemperature(weather.isCelsius, city.currentWeather.temperature)} {getTemperatureUnit(weather.isCelsius)}</p>
                        <p>Conditions: {city.currentWeather.conditions}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CitiesListComponent