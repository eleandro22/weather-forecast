import { useState, useContext } from "react";
import WeatherDataContext from "../../../../../../context/WeatherDataContext/WeatherDataContext";

const SearchForm = () => {
  const [city, setCity] = useState("");
  const { setCityName } = useContext(WeatherDataContext);

  const getWeatherForCity = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setCityName(city);
      setCity("");
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <form onSubmit={getWeatherForCity} className="search-form-input">
      <img
        src="../src/assets/icons/temperature-high.svg"
        alt="temperature-icon"
        width="20"
      />
      <input
        type="text"
        placeholder="Type city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="search-button">
        <img
          className="search-icon"
          src="../src/assets/icons/search.svg"
          alt="search-icon"
          width="20"
        />
      </button>
    </form>
  );
};

export default SearchForm;
