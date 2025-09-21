import { useEffect, useState } from "react";
import "./App.css";

// UI
import Header from "./layout/Header";
import SearchContainer from "./layout/SearchContainer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filterByRegion, setFilterByRegion] = useState("");

  return (
    <>
      <Header
        dark_mode={isDarkMode}
        handle_click={() => setIsDarkMode(!isDarkMode)}
      />
      <SearchContainer />
    </>
  );
}

export default App;
