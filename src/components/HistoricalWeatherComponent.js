import React from 'react'

//helpers
import { convertTemperature, formattedDate, getTemperatureUnit } from '../utils'

//redux
import { useSelector } from 'react-redux';


const HistoricalWeatherComponent = () => {
    const weather = useSelector((state) => state.weather);

    return (
        <>
            <h2>Last Week Weather</h2>
            <ul>
                {weather?.historicalWeather?.map((cityForecast) => (
                    cityForecast?.forecast?.map((day) =>
                        <li key={day.date}>
                            <p>Date: {formattedDate(day.date)}</p>
                            <p>Temperature (Min): {convertTemperature(weather.isCelsius, day.temperature.min)} {getTemperatureUnit(weather.isCelsius)}</p>
                            <p>Temperature (Max): {convertTemperature(weather.isCelsius, day.temperature.max)} {getTemperatureUnit(weather.isCelsius)}</p>
                            <p>Condition: {day.conditions}</p>
                        </li>
                    )
                ))}
            </ul>

        </>
    )
}

export default HistoricalWeatherComponent