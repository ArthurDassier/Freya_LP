import React from 'react';
import './Video.css';

function Video() {
  return (
    <div className='hero-container2'>
      <video className='video-container2' src='videos/baby2.mp4' autoPlay loop muted />
      <h1>FREYA</h1>
      <p>Babies don't come with a manual but this is pretty close!</p>
    </div>
  );
}

export default Video;
