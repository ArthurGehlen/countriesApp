import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailPage.css";

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

  if (!country) return <div>Carregando...</div>;

  return (
    <>
      <Header dark_mode={isDarkMode} handle_click={change_theme} />
      <div className="detail_page">
        <Link to={"/"}>Voltar</Link>
        <p>{country.name}</p>
        <img src={country.flags["png"]} alt="Flag" />
      </div>
    </>
  );
}

export default DetailPage;
