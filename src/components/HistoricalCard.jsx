const HistoricalCard = ({ historicalData,city }) => {
  return (
    <>
    <h2 className="text-xl font-semibold text-red-600">{city} Weather history</h2>
      {historicalData?.map((day) => (
        <div key={day.forecast.forecastday[0].date}>
          <div className="flex flex-col gap-2">
            
            <div>
              <div className="flex border border-red-500 items-center gap-2 p-2">
                <div className="text-center">
                  <p className="text-sm dark:text-gray-600">
                    {day.forecast.forecastday[0].date}
                  </p>
                </div>
                <img
                  src={day.forecast.forecastday[0].day.condition.icon}
                  alt=""
                />
                <div className="mb-2 text-3xl font-semibold">
                  {day.forecast.forecastday[0].day.maxtemp_c}°
                  <span className="mx-1 font-normal">/</span>
                  {day.forecast.forecastday[0].day.mintemp_c}°
                </div>
                <p className="dark:text-gray-600">{day.forecast.forecastday[0].day.condition.text}</p>
                <div className="flex mb-2 justify-between items-center">
                  <span className=" font-bold">Avg:humidity - </span>
                  <small className="px-2 inline-block text-base colo">
                    {day.forecast.forecastday[0].day.avghumidity}&nbsp;&deg;
                  </small>
                </div>
                <div className="flex mb-2 justify-between items-center">
                  <span className=" font-bold">Wind - </span>
                  <small className="px-2 inline-block text-base colo">
                    {day.forecast.forecastday[0].day.maxwind_kph} kph
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HistoricalCard;
