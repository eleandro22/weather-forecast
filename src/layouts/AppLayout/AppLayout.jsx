import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import fetchWeather from "../../api/fetchWeather";
import { useState, useEffect, useCallback } from "react";

const AppLayout = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const updateWeatherData = useCallback((data) => {
    setWeatherData(data);
  }, []);

  const updateError = useCallback((error) => {
    setError(error);
  }, []);

  useEffect(() => {
    fetchWeather("Tirana", updateWeatherData, updateError);
  }, [updateWeatherData, updateError]);

  return (
    <div className="app-layout-container">
      <Sidebar getWeatherForCity={fetchWeather} weatherData={weatherData} />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
