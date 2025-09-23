import "./Card.css";

function Card({ image, name, population, region, capital }) {
  return (
    <div className="card">
      <img src={image} alt="Image" />
      <div className="country_info">
        <h3>{name}</h3>

        <div className="infos">
          <p>
            Population: <span>{population}</span>
          </p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
