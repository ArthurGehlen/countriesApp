import "./Card.css";

function Card({ image, name, population, region, capital, handle_click }) {
  return (
    // tentei de todo jeito encaixar a bosta da imagem e n deu, eu desisto, vai ficar assim
    <div className="card">
      <div
        className="img_wrapper"
        style={{ backgroundImage: `url(${image})` }}
        alt="Image"
        id={name}
        onClick={handle_click}
      ></div>
      <div className="country_info">
        <h3>{name}</h3>

        <div className="infos">
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          {capital && (
            <p>
              <span>Capital:</span> {capital}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
