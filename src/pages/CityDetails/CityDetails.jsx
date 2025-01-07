import { useParams } from "react-router-dom";

const CityDetails = () => {
  const { cityName } = useParams();
  return <h2>Details for {cityName}</h2>;
};

export default CityDetails;
