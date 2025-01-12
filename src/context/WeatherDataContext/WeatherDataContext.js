import { createContext } from "react";

const WeatherDataContext = createContext({
  weatherData: null,
  error: null,
  isLoading: false,
  setCityName: () => {},
});

export default WeatherDataContext;
