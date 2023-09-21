import { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function searchWord() {
    alert(`searching ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={searchWord}>
      <input type="Search" onChange={handleKeywordChange}></input>
    </form>
  );
}
