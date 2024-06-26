import React from 'react';

//redux
import { useSelector } from 'react-redux';

//components
import TopBarComponent from '../components/TopBarComponent';
import ForecastWeatherComponent from '../components/ForecastWeatherComponent';
import CurrentWeatherComponent from '../components/CurrentWeatherComponent';
import HistoricalWeatherComponent from '../components/HistoricalWeatherComponent';
import CitiesListComponent from '../components/CitiesListComponent';

//style
import '../css/dashboard.css'


const WeatherDashboard = () => {
    const weather = useSelector((state) => state.weather);

    return (
        <div>
            <TopBarComponent
            />
            {weather.status === 'loading' && <p>Loading...</p>}
            {weather.status === 'succeeded' && weather.currentWeather && (
                <div className="weather-info">
                    <CurrentWeatherComponent
                    />
                    <ForecastWeatherComponent
                    />
                    <HistoricalWeatherComponent
                    />
                </div>
            )}
            <CitiesListComponent />
            {weather.status === 'failed' && <p>Error: {weather.error}</p>}
        </div>
    );
};

export default WeatherDashboard;