import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <h5>
             {definition.definition}
              <br />
            </h5>
              <em>{definition.example}</em>
              {definition.synonyms && (
                  <Synonyms synonyms={definition.synonyms} />
                )}
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}