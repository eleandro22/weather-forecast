import React, { useContext, useEffect, useState } from "react";
import WeatherDataContext from "../../../../context/WeatherDataContext/WeatherDataContext";

const Forecast = () => {
  const { weatherData, isLoading, setCityName } =
    useContext(WeatherDataContext);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    setCityName("Tirana");
  }, [setCityName]);

  useEffect(() => {
    if (weatherData?.list) {
      const daysForecast = weatherData.list
        .filter((entry, index) => index % 8 === 0)
        .slice(0, 5);

      const forecast = daysForecast.map((entry) => ({
        day: new Date(entry.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        temp: entry.main.temp,
        description: entry.weather[0]?.description,
        icon: entry.weather[0]?.icon,
      }));

      setForecastData(forecast);
    }
  }, [weatherData]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!forecastData || forecastData.length === 0) {
    return <div>No forecast data available</div>;
  }

  return (
    <div className="forecast-content">
      {forecastData.map((day, index) => (
        <div key={index} className="forecast-content-day">
          <p style={{ fontWeight: "bold" }}>{day.day}</p>
          <img
            src={`http://openweathermap.org/img/w/${day.icon}.png`}
            alt={day.description}
            style={{ fontSize: "24px" }}
          />
          <p>AVG Temp: {day.temp}°C</p>
          <p style={{ fontStyle: "italic", color: "#aaa" }}>
            {day.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
