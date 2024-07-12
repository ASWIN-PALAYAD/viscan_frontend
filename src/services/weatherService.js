import axios from "axios";

const API_URL = import.meta.env.VITE_WEATHER_APP_API_URL; 

export const fetchWeather = async (city) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/weather/current`, {
        params: { city },
        headers: { Authorization: `Bearer ${token}` },
      });
      return (response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  export const forcastWeather = async (city) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/weather/forecast`, {
        params: { city },
        headers: { Authorization: `Bearer ${token}` },
      });
      return (response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  export const historicalWeather = async (city) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/weather/historical`, {
        params: { city },
        headers: { Authorization: `Bearer ${token}` },
      });
      return (response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };