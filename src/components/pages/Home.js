import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Video from '../Video';
import HeroSection from '../HeroSection';
import CardsQuotes from '../Quotes'
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Video /> */}
      <CardsQuotes />
      <Footer />
    </>
  );
}

export default Home;
