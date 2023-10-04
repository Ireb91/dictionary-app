import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Dictionary defaultKeyWord="sunset" />
        <footer>
          <small>
            This project was coded by Irene Bellani and is open-sourced on{" "}
            <a href="https://github.com/Ireb91/dictionary-app">Github</a> and
            hosted on{" "}
            <a href="https://app.netlify.com/teams/ireb91/overview">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
