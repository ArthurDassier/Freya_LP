import React from 'react';
import { Link } from 'react-router-dom';

function CardItemQuotes(props) {
  return (
    <>
      <li className='cards_quotes__item'>
        <Link className='cards_quotes__item__link' to={props.path}>
          <figure className='cards_quotes__item__pic-wrap' data-category={props.label}>
            <img
              className='cards_quotes__item__img'
              alt='What?'
              src={props.src}
            />
          </figure>
          <div className='cards_quotes__item__info'>
            <h5 className='cards_quotes__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemQuotes;