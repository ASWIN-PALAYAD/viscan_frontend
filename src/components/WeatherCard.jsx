const WeatherCard = ({ weatherData }) => {
  return (
    <>
      <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-50 dark:text-gray-800 border border-blue-400">
        <div className="text-center">
          <h2 className="text-xl font-semibold">{weatherData.location.name}</h2>
          <p className="text-sm dark:text-gray-600">
            {weatherData?.location.localtime}
          </p>
        </div>
        <img src={weatherData.current.condition.icon} alt="" />
        <div className="mb-2 text-3xl font-semibold">
          {weatherData.current.temp_c}°
          <span className="mx-1 font-normal">/</span>
          {weatherData.current.feelslike_c}°
        </div>
        <p className="dark:text-gray-600">
          {weatherData.current.condition.text}
        </p>
        <div className="flex mb-2 justify-between items-center">
          <span className=" font-bold">Humidity - </span>
          <small className="px-2 inline-block text-base colo">
            {weatherData.current.humidity}&nbsp;&deg;
          </small>
        </div>
        <div className="flex mb-2 justify-between items-center">
          <span className=" font-bold">Wind - </span>
          <small className="px-2 inline-block text-base colo">
            {weatherData.current.wind_kph} kph
          </small>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
