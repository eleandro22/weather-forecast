import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const getWeatherForcity = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <form onSubmit={getWeatherForcity} className="search-form-input">
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
