import React from "react";

export default function Meaning(props) {
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <p>
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}
