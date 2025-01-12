import useGetWeather from "../../api/weather/hooks/useGetWeather";
import WeatherDataContext from "./WeatherDataContext";

const WeatherDataContextProvider = ({ children }) => {
  const { weatherData, error, isLoading, setCityName } = useGetWeather();

  return (
    <WeatherDataContext.Provider
      value={{ weatherData, error, isLoading, setCityName }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContextProvider;
