// Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

// UI
import Header from "../layout/Header";
import SearchContainer from "../layout/SearchContainer";

// Components
import Card from "../components/Card";

function Home({ setDetailCountry }) {
  const navigator = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterByRegion, setFilterByRegion] = useState("Filter by Region");
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const change_theme = () => {
    document.body.classList.toggle("dark_mode");
    setIsDarkMode(!isDarkMode);
  };

  /*
    LEMBRAR DE NÃO DEIXAR CONSOLE.LOG ESCRITO QUANDO FOR FAZER COMMIT :)
  */

  const goto_details = (e) => {
    setDetailCountry(e.target.name);
    navigator(`/${e.target.name}`);
  };

  const fetch_data = async () => {
    // tive q usar try/catch nessa bosta... mas deu certo
    try {
      const res = await fetch("/data.json");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <>
      <Header dark_mode={isDarkMode} handle_click={change_theme} />
      <SearchContainer
        handle_filter={(e) => setFilterByRegion(e.target.value)}
        current_filter={filterByRegion}
        handle_search={(e) => setSearch(e.target.value)}
      />

      <main>
        {data &&
          data
            .filter((country) => {
              const match_name = country.name
                .toLowerCase()
                .includes(search.toLowerCase());
              const match_region =
                filterByRegion === "Filter by Region" ||
                country.region === filterByRegion;
              return match_name && match_region;
            })
            .map((country) => (
              <Card
                key={country.name}
                name={country.name}
                population={new Intl.NumberFormat().format(country.population)}
                region={country.region}
                capital={country.capital}
                image={country.flags["png"]}
                handle_click={goto_details}
              />
            ))}
      </main>
    </>
  );
}

export default Home;
