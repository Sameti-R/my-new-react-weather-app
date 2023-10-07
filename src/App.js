import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
      </div>
    </div>
  );
}

export default App;
