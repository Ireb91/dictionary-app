import React from "react";
import Meaning from "./Meaning.js";
import "./Results.css";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <div className="Word-section">
          <h1 className="Word">{props.results.word}</h1>
          <h3 className="Phonetic">{props.results.phonetic}</h3>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
