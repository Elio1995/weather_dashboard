import React, { useEffect, useState } from 'react'

//redux
import { fetchForecast, fetchHistoricalWeather, fetchWeather, setIsCelsius } from '../store/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';

const TopBarComponent = () => {
    const [city, setCity] = useState('');

    const weather = useSelector((state) => state.weather);


    const dispatch = useDispatch();
    const toggleTemperatureUnit = () => {
        dispatch(setIsCelsius(!weather.isCelsius));
    };


    const handleSearch = () => {
        dispatch(fetchWeather(city));
        dispatch(fetchForecast(city));
        dispatch(fetchHistoricalWeather(city))
    };


    /* Searching when city state changes */
    
    // useEffect(() => {
    //     if (city) handleSearch()
    // }, [city])

    return (
        <div className="center-container">
            <div>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <button onClick={toggleTemperatureUnit}>
                    Switch to {weather.isCelsius ? 'Fahrenheit' : 'Celsius'}
                </button>
            </div>
        </div>
    )
}

export default TopBarComponent