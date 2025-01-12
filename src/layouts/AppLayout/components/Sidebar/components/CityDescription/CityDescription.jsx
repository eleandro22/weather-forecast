import weatherDescriptions from "../../../../../../utils/weatherDescriptions";
import { Link, useLocation } from "react-router-dom";

const CityDescription = ({ cityName, cityDescription }) => {
  const location = useLocation();
  const isCityPage = location.pathname === "/city";

  const detailedDescription = weatherDescriptions[cityDescription];
  return (
    <div className="city-description">
      <h3 className="city-description-heading">{cityName}</h3>
      <p className="city-description-paragraph">{detailedDescription}</p>
      {isCityPage ? (
        <Link to="/">Go back to 5 day forecast</Link>
      ) : (
        <Link to="/city">Go to City Details</Link>
      )}
    </div>
  );
};

export default CityDescription;
