import React from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import Temperature from "./components/Temperature/Temperature";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import CityDescription from "./components/CityDescription/CityDescription";
import useWeatherDataContext from "../../../../context/WeatherDataContext/useWeatherDataContext";
import loadingGif from "../../../../assets/gifs/loading-gif.gif";
import errorGif from "../../../../assets/gifs/error.gif";

const Sidebar = () => {
  const { weatherData, setCityName, isLoading, error } =
    useWeatherDataContext();

  const activeWeatherData = weatherData ? weatherData.list[0] : null;
  const rainPercentage = activeWeatherData?.rain?.["3h"]
    ? `${activeWeatherData?.rain?.["3h"]} mm`
    : "no rain for today";

  if (isLoading) {
    return (
      <div className="sidebar">
        <SearchForm onSearch={setCityName} />
        <div className="loading">
          <img src={loadingGif} alt="loading" width="100" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sidebar">
        <SearchForm onSearch={setCityName} />
        <div className="loading">
          <p> There has been an error with the weather API call</p>
          <img src={errorGif} alt="loading" width="250" />
        </div>
      </div>
    );
  }

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
              cityDescription={activeWeatherData.weather[0]?.description}
            />
          </>
        )}
    </div>
  );
};

export default Sidebar;
