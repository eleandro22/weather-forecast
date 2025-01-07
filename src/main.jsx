import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
