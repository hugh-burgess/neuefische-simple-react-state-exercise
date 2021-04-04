import home from "./home.svg";
import fav from "./fav.svg";
import settings from "./settings.svg";
import profile from "./profile.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [titleName, setTitleName] = useState("");

  function handleOnClickNavBar(currywurst) {
    setTitleName(currywurst);
  }

  function headerChange(currywurst) {
    setTitleName(currywurst);
  }

  return (
    <div className="App">
      <Header title={titleName} />
      <NavBar onNavClick={handleOnClickNavBar} />
      <Input onInputClick={headerChange} />
    </div>
  );
}

export default App;

function Header({ title }) {
  return <header>{title.toUpperCase()}</header>;
}

function NavBar({ onNavClick }) {
  function handleHomeClick() {
    onNavClick("home");
  }
  function handleFavClick() {
    onNavClick("favourites");
  }
  function handleSettingsClick() {
    onNavClick("settings");
  }
  function handleProfileClick() {
    onNavClick("profile");
  }
  return (
    <div className="NavBar">
      <button onClick={handleHomeClick}>
        <img src={home} className="App-logo" alt="logo" />
      </button>
      <button onClick={handleFavClick}>
        <img src={fav} className="App-logo" alt="logo" />
      </button>
      <button onClick={handleSettingsClick}>
        <img src={settings} className="App-logo" alt="logo" />
      </button>
      <button onClick={handleProfileClick}>
        <img src={profile} className="App-logo" alt="logo" />
      </button>
    </div>
  );
}

function Input({ onInputClick }) {
  return <AnotherDiv onInputClick={onInputClick} />;
}

function AnotherDiv({ onInputClick }) {
  return <YouGottaBeKiddingMeDiv onInputClick={onInputClick} />;
}

function YouGottaBeKiddingMeDiv({ onInputClick }) {
  function handleButtonSubmit(event) {
    event.preventDefault();
    const input = event.target.name.value;
    onInputClick(input);
  }
  return (
    <form onSubmit={handleButtonSubmit}>
      <input
        id="name"
        name="name"
        placeholder="Type here any title you like"
      ></input>
      <button>Change header title from input</button>
    </form>
  );
}
