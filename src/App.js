import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("cats");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;

    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=9RKp8rV7bQU2cdI0gWmQneqgJPqU3Ydh&limit=24&rating=g`
      )
      .then((response) => {
        // handle success
        if (activeFetch) {
          setGifs(response.data.data);
          setLoading(false);
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error fetching and parsing data", error);
      });

    return () => {
      activeFetch = false;
    };
  }, [query]);

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
  };

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeQuery={handleQueryChange} />
        </div>
      </div>
      <div className="main-content">
        {loading ? <h1>Loading...</h1> : <GifList data={gifs} />}
      </div>
    </div>
  );
}

export default App;
