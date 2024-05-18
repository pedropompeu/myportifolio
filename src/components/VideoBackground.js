import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="background-video">
        <source src="https://cdn.pixabay.com/video/2023/07/04/169951-842348732_large.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
    </div>
  );
};

export default VideoBackground;
