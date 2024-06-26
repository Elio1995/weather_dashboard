import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities, fetchWeather, fetchForecast } from '../store/weatherSlice';
import '../css/dashboard.css'

const WeatherDashboard = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);

    useEffect(() => {
        dispatch(fetchCities());
    }, [])

    const handleSearch = () => {
        dispatch(fetchWeather(city));
        dispatch(fetchForecast(city));
    };

    console.log('weather', weather)

    return (
        <div>
            <div className="center-container">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button onClick={handleSearch}>Search</button>
            </div>
            {weather.status === 'loading' && <p>Loading...</p>}
            {weather.status === 'succeeded' && weather.currentWeather && (
               <div className="weather-info">
               <h2>Current Weather</h2>
               <p>City: {weather.currentWeather?.city}</p>
               <p>Temperature: {weather.currentWeather?.currentWeather.temperature}</p>
               <p>Humidity: {weather.currentWeather?.currentWeather.humidity}</p>
               <p>Condition: {weather.currentWeather?.currentWeather.conditions}</p>

               <h2>5-Day Forecast</h2>
               <ul>
                   {weather?.forecast?.map((cityForecast) => (
                       cityForecast?.forecast?.map((day) =>
                           <li key={day.date}>
                               <p>Date: {day.date}</p>
                               <p>Temperature (Min): {day.temperature.min}</p>
                               <p>Temperature (Max): {day.temperature.max}</p>
                               <p>Condition: {day.conditions}</p>
                           </li>
                       )
                   ))}
               </ul>
           </div>
            )}
            <div className="cities-container">
                <h2>Cities</h2>
                <div className="cities-grid">
                    {weather?.cities?.map((city) => (
                        <div className="city-card" key={city.city}>
                            <p>City: {city.city}</p>
                            <p>Temperature: {city.currentWeather.temperature}</p>
                            <p>Conditions: {city.currentWeather.conditions}</p>
                        </div>
                    ))}
                </div>
            </div>
            {weather.status === 'failed' && <p>Error: {weather.error}</p>}
        </div>
    );
};

export default WeatherDashboard;