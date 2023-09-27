import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function searchWord() {
    let apiKey = "037a67b0fd6f93o58ea5b48t0191c6c9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleKeywordChange}
            placeholder="Search"
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
