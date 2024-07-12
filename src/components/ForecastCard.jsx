const ForecastCard = ({ forecastData }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-green-600 text-center">{forecastData.location.name} Weather forecast</h2>
        {forecastData?.forecast.forecastday.map((day) => (
              <div  key={day.date} className="flex border border-green-500 items-center gap-2 p-2">
                <div className="text-center">
                  <p className="text-sm dark:text-gray-600">{day.date}</p>
                </div>
                <img src={day.day.condition.icon} alt="" />
                <div className="mb-2 text-3xl font-semibold">
                  {day.day.maxtemp_c}°<span className="mx-1 font-normal">/</span>
                  {day.day.mintemp_c}°
                </div>
                <p className="dark:text-gray-600">{day.day.condition.text}</p>
                <div className="flex mb-2 justify-between items-center">
                  <span className=" font-bold">Avg:humidity - </span>
                  <small className="px-2 inline-block text-base colo">
                    {day.day.avghumidity}&nbsp;&deg;
                  </small>
                </div>
                <div className="flex mb-2 justify-between items-center">
                  <span className=" font-bold">Wind - </span>
                  <small className="px-2 inline-block text-base colo">
                    {day.day.maxwind_kph} kph
                  </small>
                </div>
              </div>
        ))}
      </div>
    </>
  );
};

export default ForecastCard;
