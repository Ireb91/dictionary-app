import "./App.css";
import Dictionary from "./Dictionary.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary />
        <footer>
          <small>Coded by Irene Bellani</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
