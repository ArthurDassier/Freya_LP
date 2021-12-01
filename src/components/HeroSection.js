import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/baby.mp4' autoPlay loop muted />
      <h1>FREYA</h1>
      <p>Your first steps as a parent</p>
    </div>
  );
}

export default HeroSection;
