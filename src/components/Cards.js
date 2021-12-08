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
              src='images/academy.png'
              text='Have access to a mixed format content delivered by certified professionals.
              Short format of less than <15 min.
              Regular quizzes to test their knowledge.
              Certificate delivery at the end of a training'
              label='Academy'
              path='/team'
            />
            <CardItem
              src='images/community.png'
              text='Reunite parents so they can share their experience.
              Interacts with professionals'
              label='Community'
              path='/team'
            />
            <CardItem
              src='images/contacts.png'
              text='We have a location for you'
              label='Location'
              path='/team'
            />
            <CardItem
              src='images/profile.png'
              text='We have a location for you'
              label='Profile'
              path='/team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
