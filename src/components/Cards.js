import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our product!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/baby1.jpg'
              text='Lorem Ipsum'
              label='Unknown'
              path='/services'
            />
            <CardItem
              src='images/baby2.jpg'
              text='Lorem Ipsum'
              label='Unknown'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/baby3.jpg'
              text='Lorem Ipsum'
              label='Unknown'
              path='/services'
            />
            <CardItem
              src='images/baby4.jpg'
              text='Lorem Ipsum'
              label='Unknown'
              path='/products'
            />
            <CardItem
              src='images/baby5.jpg'
              text='Lorem Ipsum'
              label='Unknown'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
