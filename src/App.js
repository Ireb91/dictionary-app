import "./App.css";
import React from "react";
import Dictionary from "./Dictionary.js";

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
