import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch("https://www.googleapis.com/youtube/v3/search")
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Home;
