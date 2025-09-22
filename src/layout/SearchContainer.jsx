import { useState } from "react";
import "./SearchContainer.css";

function SearchContainer({
  handle_filter,
  current_filter,
}) {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className="search_container">
      <div className="input_wrapper">
        <div className="img">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div className="filter_wrapper">
        <div className="filter" onClick={() => setFilterActive(!filterActive)}>
          <span unselectable="on">{current_filter}</span>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <div
          className="filter_menu"
          style={filterActive ? { display: "flex" } : { display: "none" }}
        >
          <button onClick={handle_filter} value="Africa">Africa</button>
          <button onClick={handle_filter} value="America">America</button>
          <button onClick={handle_filter} value="Asia">Asia</button>
          <button onClick={handle_filter} value="Europe">Europe</button>
          <button onClick={handle_filter} value="Oceania">Oceania</button>
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
