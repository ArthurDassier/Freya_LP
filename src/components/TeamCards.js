import React from 'react';
import './TeamCards.css';
import TeamCardItem from './TeamCardsItem';

function TeamCards() {
  return (
    <div className='team_cards'>
      <h1>Our amazing team</h1>
      <div className='team_cards__container'>
        <div className='team_cards__wrapper'>
          <ul className='team_cards__items'>
            <TeamCardItem
              src='images/team/Amelie.png'
              text='<< I am from France >>'
              label='Amélie'
              path='/team'
            />
            <TeamCardItem
              src='images/team/Arthur.png'
              text='<< I programmed the Landing Page >>'
              label='Arthur'
              path='/team'
            />
            <TeamCardItem
              src='images/team/Julia.png'
              text='<< I am from Bavaria >>'
              label='Julia'
              path='/team'
            />
            <TeamCardItem
              src='images/team/Louise.png'
              text='<< I am a designer >>'
              label='Louise'
              path='/team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamCards;
