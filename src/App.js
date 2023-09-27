import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary defaultKeyWord="sunset" />
        <footer>
          <small>
            This project was coded by Irene Bellani and is available on{" "}
            <a href="https://github.com/Ireb91/dictionary-app">Github</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
