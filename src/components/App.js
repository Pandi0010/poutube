import { useState, useEffect } from "react";

function App() {

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://www.googleapis.com/youtube/v3/search"
      )
    ).json();
    
  return <div></div>;
  
}

export default App;
