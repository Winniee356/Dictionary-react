import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleDictionaryResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }



    function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f917000010000019313d3c3d84d49debcce0b884cddeeb6";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios.get(pexelsApiUrl).then(handlePexelsResponse);
  }


   function handleSubmit(event) {
    event.preventDefault(); 
    search();
   }
  
   function handleKeywordChange(event) {
    setKeyword(event.target.value);
   }

   function load() {
    setLoaded(true);
    search();
   }

   if (loaded) {
    return (
    <div className="Dictionary" >
        <section>
            <h1>What word do you want to look up Today?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">
            Suggested words: Twilight, Thorn, Peanut, Bond
        </div>
        </section>
        <Results results={results}/>
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}