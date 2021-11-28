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
              src=''
              text='Lorem Ipsum'
              label='Unknown'
              path='/services'
            />
            <CardItem
              src=''
              text='Lorem Ipsum'
              label='Unknown'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src=''
              text='Lorem Ipsum'
              label='Unknown'
              path='/services'
            />
            <CardItem
              src=''
              text='Lorem Ipsum'
              label='Unknown'
              path='/products'
            />
            <CardItem
              src=''
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
