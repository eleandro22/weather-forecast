import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/index.jsx";
import WeatherDataContextProvider from "./context/WeatherDataContext/WeatherDataContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <WeatherDataContextProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </WeatherDataContextProvider>
);
