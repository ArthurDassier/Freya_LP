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
              text='Have access to a mixed format content delivered by certified professionals.
              Short format of less than <15 min.
              Regular quizzes to test their knowledge.
              Certificate delivery at the end of a training'
              label='Academy'
              path='/team'
            />
            <CardItem
              src='images/baby2.jpg'
              text='Reunite parents so they can share their experience.
              Interacts with professionals'
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
