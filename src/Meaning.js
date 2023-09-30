import React from "react";
import Example from "./Example.js";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Result">
      <h4 className="Part-of-speech">{props.meaning.partOfSpeech}</h4>
      <p className="Meaning">{props.meaning.definition}</p>
      <p className="Example">
        <Example example={props.meaning.example} />
      </p>
      <p className="Synonym">
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
