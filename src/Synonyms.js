import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
            {props.synonyms.map(function(synonyms, index) {
                return <span key={index}>{synonyms}</span>
            })}
            </ul>
        );
    } else {
        return null;
    }
}