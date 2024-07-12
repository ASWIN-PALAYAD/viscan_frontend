const HistoricalCard = ({ historicalData }) => {
    return (
      <>
        {historicalData?.map(day=> (
            <div key={day.forecast.forecastday[0].date}>
                <h1>hi</h1>
            </div>
        ))}
      </>
    );
  };
  
  export default HistoricalCard;
  