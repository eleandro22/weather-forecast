const Temperature = ({ temperature, feelsLike, description }) => {
  return (
    <div className="temperature-container">
      <h3>{temperature}°C</h3>

      <div className="rough-details">
        <p className="feels-like"> {feelsLike}°C</p>
        <p className="description">Is the real feel and it's {description}</p>
      </div>
    </div>
  );
};

export default Temperature;
