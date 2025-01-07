const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const fetchWeather = async (city, onSuccess, onError) => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    console.log(data);
    onSuccess(data);
  } catch (error) {
    onError(error);
  }
};

export default fetchWeather;
