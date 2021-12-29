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
    params: {
      part: "snippet",
      maxResults: 30,
      type: "video",
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    }, // key값 수정
  }); // 유튜브 api 키 값 받아옴

  const youtube = new Youtube(httpClient);

  return (
    <>
      <AppMain youtube={youtube} />
    </>
  );
}

export default App;
