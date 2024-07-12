import { useState } from "react";
import {
  fetchWeather,
  forcastWeather,
  historicalWeather,
} from "../../services/weatherService";
import WeatherCard from "../../components/WeatherCard";
import ForecastCard from "../../components/ForecastCard";
import HistoricalCard from "../../components/HistoricalCard";

const WeatherDashboard = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState("");
  const [historicalData, setHistoricalData] = useState("");

  const searchWeather = async (city) => {
    setForecastData('')
      setHistoricalData('')
    
    try {
      const res = await fetchWeather(city);

      setWeatherData(res);
    } catch (error) {
      console.error("fetch failed", error);
    }
  };

  const weatherForcast = async (city) => {
    setHistoricalData("");
    try {
      const res = await forcastWeather(city);
      setForecastData(res);
      // console.log(res);
    } catch (error) {
      console.error("fetch failed", error);
    }
  };
  const weatherHistory = async (city) => {
    setForecastData("");
    try {
      const res = await historicalWeather(city);
      setHistoricalData(res);
      console.log(res);
    } catch (error) {
      console.error("fetch failed", error);
    }
  };

  return (
    <>
  
      <div className="flex flex-col gap-3 mt-4 h-[100%] items-center justify-center">
        <input
          type="text"
          className="border rounded py-1 px-2 w-[60%] "
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={() => searchWeather(city)}
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-l rounded-lg w-[30%] mb-3"
        >
          Get Weather
        </button>

        {weatherData && (
          <>
            <WeatherCard weatherData={weatherData} />

            <div className="flex gap-5">
              <button
                onClick={() => weatherForcast(city)}
                className="bg-green-600 text-white p-2 font-bold hover:bg-blue-500 text-l rounded-lg  mb-3"
              >
                Forcast
              </button>
              <button
                onClick={() => weatherHistory(city)}
                className="bg-red-600 text-white p-2 font-bold hover:bg-blue-500 text-l rounded-lg  mb-3"
              >
                Historical
              </button>
            </div>
          </>
        )}

        {forecastData && <ForecastCard forecastData={forecastData} />}

        {historicalData && (
          <HistoricalCard historicalData={historicalData} city={city} />
        )}
      </div>
    </>
  );
};

export default WeatherDashboard;
