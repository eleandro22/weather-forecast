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

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const TemperatureChart = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const temperatures = [12, 15, 18, 14, 20];

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
