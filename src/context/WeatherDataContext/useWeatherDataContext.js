import { useContext } from "react";
import WeatherDataContext from "./WeatherDataContext";

const useWeatherDataContext = () => {
  return useContext(WeatherDataContext);
};

export default useWeatherDataContext;
