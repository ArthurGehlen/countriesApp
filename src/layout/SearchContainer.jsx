import "./SearchContainer.css";

function SearchContainer({ handle_filter }) {
  return (
    <div className="search_container">
      <div className="input_wrapper">
        <div className="img">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <input type="text" placeholder="Search for a country..." />
      </div>
    </div>
  );
}

export default SearchContainer;
