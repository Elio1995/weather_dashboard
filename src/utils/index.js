import moment from 'moment'


export const formattedDate = (date) => moment(date).format('DD MMMM');

export const convertTemperature = (isCelsius, tempInCelsius) => {
    return isCelsius ? tempInCelsius : (tempInCelsius * 9 / 5) + 32;
};

export const getTemperatureUnit = (isCelsius) => {
    return isCelsius ? '°C' : '°F';
};