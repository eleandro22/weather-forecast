const WeatherDetails = ({
  maxTemp,
  minTemp,
  humidity,
  windSpeed,
  rainPercentage,
}) => {
  return (
    <div className="details-container">
      <div className="details-box">
        <span role="img" aria-label="temperature">
          🌡️
        </span>{" "}
        Max: {maxTemp}°C
      </div>

      <div className="details-box">
        <span role="img" aria-label="temperature">
          🌡️
        </span>{" "}
        Min: {minTemp}°C
      </div>

      <div className="details-box">
        <span role="img" aria-label="humidity">
          💧
        </span>{" "}
        Humidity: {humidity}%
      </div>

      <div className="details-box">
        <span role="img" aria-label="wind">
          💨
        </span>{" "}
        Wind: {windSpeed} m/s
      </div>

      <div className="details-box">
        <span role="img" aria-label="rain">
          🌧️
        </span>{" "}
        Rain: {rainPercentage}
      </div>
    </div>
  );
};

export default WeatherDetails;
