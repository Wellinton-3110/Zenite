import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => (
  <ReactPlayer
    width="100vw"
    height="100%"
    url="/engenhariazenite/futureVideo.mp4"
    muted={true}
    controls={true}
    playing={true}
  />
);

export default VideoPlayer;
