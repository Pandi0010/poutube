import React from "react";
import VideoItem from "../video_item";
import styles from "./styles.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  //검색된  영상 리스트 나열
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
