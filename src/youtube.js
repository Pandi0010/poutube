import axios from "axios";
import key from "./fbase";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search?",
  params: {
    part: "snippet",
    maxResults: 30,
    type: "video",
    key: key.REACT_APP_YOUTUBE_API_KEY,
  },
});
