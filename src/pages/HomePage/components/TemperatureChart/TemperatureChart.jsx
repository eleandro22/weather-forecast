import React, { useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import WeatherDataContext from "../../../../context/WeatherDataContext/WeatherDataContext";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const TemperatureChart = () => {
  const { weatherData, isLoading, setCityName } =
    useContext(WeatherDataContext);

  useEffect(() => {
    setCityName("Tirana");
  }, [setCityName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    return <div>No data available</div>;
  }

  const dailyData = weatherData.list.reduce((acc, entry) => {
    const date = new Date(entry.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(entry.main.temp);
    return acc;
  }, {});

  const days = Object.keys(dailyData).slice(0, 5);
  const temperatures = days.map((day) => {
    const temps = dailyData[day];
    return temps.length > 0 ? temps[0] : 0;
  });

  const data = {
    labels: days,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        borderColor: "orange",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "orange",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.8)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        title: {
          display: true,
          text: "Days",
          color: "rgba(255, 255, 255, 0.8)",
        },
      },
      y: {
        ticks: {
          color: "rgba(255, 255, 255, 0.8)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        title: {
          display: true,
          text: "Temperature (°C)",
          color: "rgba(255, 255, 255, 0.8)",
        },
      },
    },
  };

  return <Line data={data} options={options} height={50} />;
};

export default TemperatureChart;
