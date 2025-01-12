import weatherApiBaseUrl from "../constants/weatherApiBaseUrl.js";

const getWeather = async (city, onSuccess, onError) => {
  const apiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;

  try {
    const response = await fetch(
      `${weatherApiBaseUrl}/forecast?q=${city}&units=metric&appid=${apiKey}`
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

export default getWeather;
