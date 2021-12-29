import React from "react";
import "./styles.css";
import VideoItem from "../video_item/index";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      ></VideoItem>
    );
  });

  return <div className="video_list">{renderedList}</div>;
};

export default VideoList;
