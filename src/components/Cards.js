import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/baby1.jpg'
              text='We have an academy for you'
              label='Academy'
              path='/team'
            />
            <CardItem
              src='images/baby2.jpg'
              text='We have a community for you'
              label='Community'
              path='/team'
            />
            <CardItem
              src='images/baby3.jpg'
              text='We have a location for you'
              label='Location'
              path='/team'
            />
          </ul>
        </div>
      </div>
      <h1>Only $300 / children !</h1>
    </div>
  );
}

export default Cards;
