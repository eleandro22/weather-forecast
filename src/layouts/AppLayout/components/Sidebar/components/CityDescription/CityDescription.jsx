import weatherDescriptions from "../../../../../../utils/weatherDescriptions";

const CityDescription = ({ cityName, cityDescription }) => {
  const detailedDescription = weatherDescriptions[cityDescription];
  return (
    <div className="city-description">
      <h3 className="city-description-heading">{cityName}</h3>
      <p className="city-description-paragraph">{detailedDescription}</p>
    </div>
  );
};

export default CityDescription;
