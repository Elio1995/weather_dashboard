import React from 'react'

//redux
import { useSelector } from 'react-redux';

//helpers
import { convertTemperature, formattedDate, getTemperatureUnit } from '../utils'

const ForecastWeatherComponent = () => {
    const weather = useSelector((state) => state.weather);


    return (
        <>
            <h2>5-Day Forecast</h2>
            <ul>
                {weather?.forecast?.map((cityForecast) => (
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

export default ForecastWeatherComponent