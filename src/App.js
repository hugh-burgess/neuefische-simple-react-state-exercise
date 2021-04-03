import home from "./home.svg";
import fav from "./fav.svg";
import settings from "./settings.svg";
import profile from "./profile.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Input />
    </div>
  );
}

export default App;

function Header() {
  return <header>Title</header>;
}

function NavBar() {
  return (
    <div className="NavBar">
      <button>
        <img src={home} className="App-logo" alt="logo" />
      </button>
      <button>
        <img src={fav} className="App-logo" alt="logo" />
      </button>
      <button>
        <img src={settings} className="App-logo" alt="logo" />
      </button>
      <button>
        <img src={profile} className="App-logo" alt="logo" />
      </button>
    </div>
  );
}

function Input() {
  return <AnotherDiv />;
}

function AnotherDiv() {
  return <YouGottaBeKiddingMeDiv />;
}

function YouGottaBeKiddingMeDiv() {
  return (
    <form>
      <input
        id="name"
        name="name"
        placeholder="Type here any title you like"
      ></input>
      <button>Change header title from input</button>
    </form>
  );
}
