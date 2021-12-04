import React from 'react';
import './TeamCards.css';
import CardItem from './CardItem';

function TeamCards() {
  return (
    <div className='team_cards'>
      <h1>Our amazing team</h1>
      <div className='team_cards__container'>
        <div className='team_cards__wrapper'>
          <ul className='team_cards__items'>
            <CardItem
              src='images/team/Amelie.jpg'
              text='I am from France'
              label='ESCP'
              path='/team'
            />
            <CardItem
              src='images/team/Arthur.jpg'
              text='I programmed the Landing Page'
              label='Epitech'
              path='/team'
            />
            <CardItem
              src='images/team/Julia.jpg'
              text='I am from Bavaria'
              label='ESCP'
              path='/team'
            />
            <CardItem
              src='images/team/Louise.jpg'
              text='I am a designer'
              label='Strate'
              path='/team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
