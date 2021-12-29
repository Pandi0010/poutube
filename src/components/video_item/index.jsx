import React from "react";
import "./styles.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item_container" onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      ></img>
      <h5 className="header">{video.snippet.title}</h5>
    </div>
  );
};

export default VideoItem;
