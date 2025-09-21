import { useEffect, useState } from "react";
import "./App.css";

// UI
import Header from "./layout/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Header
        dark_mode={isDarkMode}
        handle_click={() => setIsDarkMode(!isDarkMode)}
      />
    </>
  );
}

export default App;
