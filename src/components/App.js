import { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "firebase";
import AppMain from "../AppMain";
import Youtube from "../service/youtube";
import axios from "axios";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const httpClient = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
  });

  const youtube = new Youtube(httpClient);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} />
      ) : (
        <AppMain youtube={youtube} />
      )}
    </>
  );
}

export default App;
