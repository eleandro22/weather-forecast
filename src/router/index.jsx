import { Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/AppLayout/AppLayout";
import HomePage from "../pages/HomePage/HomePage";
import CityDetails from "../pages/CityDetails/CityDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="city" element={<CityDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
