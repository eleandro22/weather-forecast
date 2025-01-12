import React from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import Temperature from "./components/Temperature/Temperature";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import CityDescription from "./components/CityDescription/CityDescription";

const Sidebar = ({ getWeatherForCity, weatherData }) => {
  const activeWeatherData = weatherData ? weatherData.list[0] : null;

  return (
    <div className="sidebar">
      <SearchForm onSearch={getWeatherForCity} />
      {activeWeatherData && activeWeatherData.main && (
        <>
          <Temperature
            temperature={activeWeatherData.main.temp}
            feelsLike={activeWeatherData.main.feels_like}
            description={activeWeatherData.weather[0].description}
          />
          <WeatherDetails
            maxTemp={activeWeatherData.main.temp_max}
            minTemp={activeWeatherData.main.temp_min}
            humidity={activeWeatherData.main.humidity}
            windSpeed={activeWeatherData.wind?.speed}
            rainPercentage={
              activeWeatherData.weather[0].main === "Rain"
                ? activeWeatherData.weather[0].description
                : "0%"
            }
          />
          <CityDescription
            cityName={weatherData.city?.name}
            country={weatherData.city?.country}
          />
        </>
      )}
    </div>
  );
};

export default Sidebar;
