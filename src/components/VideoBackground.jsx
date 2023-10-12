import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"
import BackgroundVideo from "../../public/videos/BackgroundVideo.mp4"

const VideoBackground = () => {
  return (
    <VideoContainer >
      <ReactPlayer
        url={BackgroundVideo}
        playing={true}
        controls={false}
        muted={true}
        loop={true}
        width="100%"
        height="100%"
      />
    </VideoContainer>
  )
}

export default VideoBackground

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;  
  width: 100vw;
  z-index:-9999;
`;
