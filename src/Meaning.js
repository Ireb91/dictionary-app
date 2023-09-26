import React from "react";
import Example from "./Example.js";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <p>
        <Example example={props.meaning.example} />
      </p>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
