import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Pages
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
  const [detailCountry, setDetailCountry] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setDetailCountry={setDetailCountry} />}
        />
        <Route path="/:country_name" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
