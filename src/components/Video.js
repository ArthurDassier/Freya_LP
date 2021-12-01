import React from 'react';
import './Video.css';

function Video() {
  return (
    <>
      <h1>Our video</h1>
      <div className='video'>
          <video src='videos/baby.mp4' autoPlay loop muted />
      </div>
      <h1>Only $300 / children !</h1>
    </>
  );
}

export default Video;
