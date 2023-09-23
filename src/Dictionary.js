import { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    let apiKey = "037a67b0fd6f93o58ea5b48t0191c6c9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={searchWord}>
        <input type="text" onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
      <Results results={results} />
    </div>
  );
}
