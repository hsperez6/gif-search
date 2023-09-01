import React, { useEffect, useState } from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";

function App() {

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=9RKp8rV7bQU2cdI0gWmQneqgJPqU3Ydh&limit=24&rating=g")
      .then(response => response.json())
      .then(responseData => setGifs(responseData.data))
      .catch(error => console.log("Error fetching and parsing data", error));
  }, []);

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content">
        <GifList />
      </div>
    </div>
  );
}

export default App;
