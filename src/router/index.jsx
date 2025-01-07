import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/AppLayout/AppLayout";
import HomePage from "../pages/HomePage/HomePage";
import CityDetails from "../pages/CityDetails/CityDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="city/:cityname" element={<CityDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
