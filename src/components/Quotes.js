import React from 'react';
import './Quotes.css';
import CardItemQuotes from './CardItemQuotes';

function CardsQuotes() {
  return (
    <div className='cards_quotes'>
      <div className='cards_quotes__container'>
        <div className='cards_quotes__wrapper'>
          <ul className='cards_quotes__items'>
            <CardItemQuotes
              src='images/star-review.png'
              text='I really enjoyed the services of Freya!'
              label='Unknown1'
              path='/team'
            />
            <CardItemQuotes
              src='images/star-review.png'
              text='Freya was better than any teacher I had'
              label='Unknown2'
              path='/team'
            />
            <CardItemQuotes
              src='images/star-review.png'
              text='I love how interactive the content was !'
              label='Unknown2'
              path='/team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsQuotes;
