const CityDescription = ({ cityName, country }) => {
  return (
    <div className="city-description">
      <h3 className="city-description-heading">{cityName}</h3>
      <p className="city-description-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        sollicitudin, dolor ut efficitur fermentum, eros quam posuere lacus, a
        tristique lacus mi scelerisque sapien. Fusce sodales ut enim quis
        dignissim.
      </p>
    </div>
  );
};

export default CityDescription;
