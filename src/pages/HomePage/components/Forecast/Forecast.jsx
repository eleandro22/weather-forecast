const Forecast = () => {
  const forecastData = [
    { day: "Monday", temp: 12, description: "Clear sky", icon: "☀️" },
    { day: "Tuesday", temp: 15, description: "Partly cloudy", icon: "⛅" },
    { day: "Wednesday", temp: 18, description: "Rainy", icon: "🌧️" },
    { day: "Thursday", temp: 14, description: "Windy", icon: "🌬️" },
    { day: "Friday", temp: 20, description: "Sunny", icon: "🌞" },
  ];

  return (
    <div className="forecast-content">
      {forecastData.map((day, index) => (
        <div key={index} className="forecast-content-day">
          <p style={{ fontWeight: "bold" }}>{day.day}</p>
          <p style={{ fontSize: "24px" }}>{day.icon}</p>
          <p>AVG Temp: {day.temp}°C</p>
          <p style={{ fontStyle: "italic", color: "#aaa" }}>
            {day.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
