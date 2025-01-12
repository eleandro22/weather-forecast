import getWeather from "../action/getWeather";
import { useState, useEffect, useCallback } from "react";

const useGetWeather = (city = "Tirana") => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState("Tirana");

  const updateWeatherData = useCallback((data) => {
    setWeatherData(data);
    setIsLoading(false);
  }, []);

  const updateError = useCallback((error) => {
    setError(error);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getWeather(city, updateWeatherData, updateError);
  }, [city, updateError, updateWeatherData]);

  return { weatherData, error, isLoading, setCityName };
};

export default useGetWeather;
