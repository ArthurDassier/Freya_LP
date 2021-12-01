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
              src='images/baby1.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium elit nec mi porttitor porta. In ut aliquam lectus. Curabitur rhoncus vitae ante nec posuere.'
              label='Unknown1'
              path='/team'
            />
            <CardItemQuotes
              src='images/baby2.jpg'
              text='Vivamus consequat eros leo. Proin tempor sodales accumsan. Quisque dapibus placerat justo eu fringilla. Integer posuere leo at aliquam vehicula. Donec magna dui, eleifend quis vehicula nec, semper non elit.'
              label='Unknown2'
              path='/team'
            />
            <CardItemQuotes
              src='images/baby3.jpg'
              text='Vivamus eu dui et arcu sollicitudin rutrum sed ac risus. Morbi scelerisque faucibus nulla, nec vulputate augue vehicula volutpat. Proin volutpat vitae elit ullamcorper accumsan'
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
