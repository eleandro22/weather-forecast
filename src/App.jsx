import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CityDetails from "./pages/CityDetails/CityDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/" element={<CityDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
