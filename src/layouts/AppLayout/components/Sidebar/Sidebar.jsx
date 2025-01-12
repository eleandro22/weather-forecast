import React from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import Temperature from "./components/Temperature/Temperature";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import CityDescription from "./components/CityDescription/CityDescription";
import useWeatherDataContext from "../../../../context/WeatherDataContext/useWeatherDataContext";

const Sidebar = () => {
  const { weatherData, setCityName, isLoading, error } =
    useWeatherDataContext();

  const activeWeatherData = weatherData ? weatherData.list[0] : null;
  const rainPercentage = activeWeatherData?.rain?.["3h"]
    ? `${activeWeatherData?.rain?.["3h"]}%`
    : "no rain for today";

  return (
    <div className="sidebar">
      <SearchForm onSearch={setCityName} />
      {activeWeatherData?.main &&
        activeWeatherData?.weather &&
        activeWeatherData?.wind && (
          <>
            <Temperature
              temperature={activeWeatherData.main.temp}
              feelsLike={activeWeatherData.main.feels_like}
              description={activeWeatherData.weather[0]?.description}
            />
            <WeatherDetails
              maxTemp={activeWeatherData.main.temp_max}
              minTemp={activeWeatherData.main.temp_min}
              humidity={activeWeatherData.main.humidity}
              windSpeed={activeWeatherData.wind.speed}
              rainPercentage={rainPercentage}
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
