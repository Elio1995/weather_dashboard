import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cities:[],
  currentWeather: null,
  forecast: [],
  status: 'idle',
  error: null,
};

export const fetchCities = createAsyncThunk(
    'weather/fetchCities',
    async () => {
      const response = await fetch(`http://localhost:3000/current_forecast.json`);
      return  response.json();
    }
  );
  

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const response = await fetch(`http://localhost:3000/current_forecast.json`);
    const weathers = await response.json();
    const searchedWeatherByCity = weathers.find((weather)=>weather.city.toLowerCase() === city.toLowerCase())
    return searchedWeatherByCity;
  }
);

export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async (city) => {
    const response = await fetch(`http://localhost:3000/five_days_forecast.json`);
   const forecasts= await response.json();
    const searchedForecastByCity = forecasts.filter((forecast)=>forecast.city.toLowerCase() === city.toLowerCase())
    return searchedForecastByCity;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentWeather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchForecast.pending, (state) => {
        state.status = 'loading';
      })
  },
});

export default weatherSlice.reducer;