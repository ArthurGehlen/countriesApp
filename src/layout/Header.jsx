import "./Header.css";

function Header({ dark_mode, handle_click }) {
  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={handle_click}>
        {dark_mode ? (
          <ion-icon name="moon"></ion-icon>
        ) : (
          <ion-icon name="moon-outline"></ion-icon>
        )}
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
