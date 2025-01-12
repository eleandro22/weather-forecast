import TemperatureChart from "./components/TemperatureChart/TemperatureChart";
import Forecast from "./components/Forecast/Forecast";
import { useContext, useEffect } from "react";
import WeatherDataContext from "../../context/WeatherDataContext/WeatherDataContext";

const HomePage = () => {
  const { weatherData, setCityName } = useContext(WeatherDataContext);

  useEffect(() => {
    setCityName("Tirana");
  }, [setCityName]);

  return (
    <div className="home-page-container">
      <div className="main-content-logo">
        <p className="content-logo">
          NATIONAL<br></br> WEATHER
        </p>
      </div>
      <div className="main-content-heading">
        <h2>{weatherData?.description || "Loading description..."}</h2>{" "}
      </div>
      <div className="main-content-graph">
        <TemperatureChart />
      </div>
      <div className="main-content-forecast">
        <h2>5 Day Forecast</h2>
        <Forecast />
      </div>
    </div>
  );
};

export default HomePage;
