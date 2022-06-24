import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response);
    }

   function search(event) {
    event.preventDefault();
    alert (`searching for ${keyword}`);
   
   
   let apiUrl = "  https://api.dictionaryapi.dev/api/v2/entries/en/watermelon";
   axios.get(apiUrl).then(handleResponse);

   }

   function handleKeywordChange(event) {
    setKeyword(event.target.value);
   }

    return (
    <div className="Dictionary" >
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange}/>
        </form>
    </div>
    );
}