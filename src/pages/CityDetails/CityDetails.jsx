import React, { useContext } from "react";
import WeatherDataContext from "../../context/WeatherDataContext/WeatherDataContext";

const CityDetails = () => {
  const { weatherData, cityName } = useContext(WeatherDataContext);

  if (!weatherData) {
    return <h2>Loading data for {cityName}...</h2>;
  }

  return (
    <div className="city-details-container">
      <h1>3 hour details </h1>
      <div className="forecast-content">
        {weatherData.list.map((hourlyData, index) => (
          <div key={index} className="forecast-content-hour">
            <p style={{ fontWeight: "bold" }}>
              {new Date(hourlyData.dt * 1000).toLocaleTimeString()}
            </p>
            <img
              src={`http://openweathermap.org/img/w/${hourlyData.weather[0].icon}.png`}
              alt={hourlyData.weather[0].description}
              style={{ width: "50px", height: "50px" }}
            />
            <p>
              <strong>Temp:</strong> {hourlyData.main.temp}°C
            </p>
            <p>
              <strong>Feels Like:</strong> {hourlyData.main.feels_like}°C
            </p>
            <p style={{ fontStyle: "italic", color: "#aaa" }}>
              {hourlyData.weather[0].description}
            </p>
            <p>
              <strong>Humidity:</strong> {hourlyData.main.humidity}%
            </p>
            <p>
              <strong>Wind:</strong> {hourlyData.wind.speed} m/s
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityDetails;
