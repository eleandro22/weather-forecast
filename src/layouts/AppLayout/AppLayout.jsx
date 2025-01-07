import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { fetchWeather } from "../../api/fetchWeather";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeatherForCity = async (city) => {
    try {
      setError(null);
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  useEffect(() => {
    getWeatherForCity("Tirana");
  }, []);

  return (
    <div className="app-layout-container">
      <Sidebar
        getWeatherForCity={getWeatherForCity}
        weatherData={weatherData}
      />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
