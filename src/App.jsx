import { useEffect, useState } from "react";
import "./App.css";

// UI
import Header from "./layout/Header";
import SearchContainer from "./layout/SearchContainer";

// Components
import Card from "./components/Card";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterByRegion, setFilterByRegion] = useState("Filter by Region");
  const [data, setData] = useState(null); 

  const fetch_data = async () => {
    // tive q usar try/catch nessa bosta... mas deu certo
    try {
      const res = await fetch("/data.json");
      const json = await res.json();
      setData(json);
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <>
      <Header
        dark_mode={isDarkMode}
        handle_click={() => setIsDarkMode(!isDarkMode)}
      />
      <SearchContainer
        handle_filter={(e) => setFilterByRegion(e.target.value)}
        current_filter={filterByRegion}
      />
      <main>
        {data &&
          data.map((country) => {
            return (
              <Card
                key={country.name}
                name={country.name}
                population={new Intl.NumberFormat().format(country.population)}
                region={country.region}
                capital={country.capital}
                image={country.flags["svg"]}
              />
            );
          })}
      </main>
    </>
  );
}

export default App;
