// Hooks
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./DetailPage.css";

// Components
import Header from "../layout/Header";

function DetailPage() {
  const { country_name } = useParams();
  const [country, setCountry] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const change_theme = () => {
    document.body.classList.toggle("dark_mode");
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetch_country = async () => {
      const res = await fetch("/data.json");
      const json = await res.json();
      const found = json.find((c) => c.name === country_name);
      setCountry(found);
    };
    fetch_country();
  }, [country_name]);

  // preguiça de fazer um componente de loading
  // vai ser isso aqui msm
  if (!country) return <div>Carregando...</div>;

  return (
    <>
      <Header dark_mode={isDarkMode} handle_click={change_theme} />
      <div className="detail_page">
        <Link to={"/"}>Voltar</Link>
        {/* eu escrevi a classe dessa div inspirado :)*/}
        <div className="country_detailed_infos_wrapper">
          <img src={country.flag} alt="Flag" />

          <div className="country_detailed_infos">
            <h2>{country.name}</h2>

            {/* 8mil informações do país pra mostrar... to ficando louco */}
            <div className="more_infos">
              <div className="basic_info">
                <p>
                  <span>Native Name</span>: {country.nativeName}
                </p>
                <p>
                  <span>Population</span>: {country.population}
                </p>
                <p>
                  <span>Region</span>: {country.region}
                </p>
                <p>
                  <span>Sub Region</span>: {country.subregion}
                </p>
                <p>
                  <span>Capital</span>: {country.capital}
                </p>
              </div>
              {/* quanta tag AAAAAAAAAAAAAAAA */}
              <div className="advanced_info">
                <p>
                  <span>Top Level Domain</span>:{" "}
                  {country.topLevelDomain.map((t) => t).join(", ")}
                </p>
                <p>
                  <span>Currencies</span>:{" "}
                  {country.currencies.map((c) => c.name).join(", ")}
                </p>
                <p>
                  <span>Languages</span>:{" "}
                  {country.languages.map((l) => l.name).join(", ")}
                </p>
              </div>
            </div>
            <p>
              <span>Border Countries</span>:{" "}
              {country.borders.map((b) => (
                <span>{b}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
