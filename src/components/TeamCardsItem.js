import React from 'react';
import { Link } from 'react-router-dom';

function TeamCardItem(props) {
  return (
    <>
      <li className='team_cards__item'>
        <Link className='team_cards__item__link' to={props.path}>
          <figure className='team_cards__item__pic-wrap' data-category={props.label}>
            <img
              className='team_cards__item__img'
              alt='What?'
              src={props.src}
            />
          </figure>
          <div className='team_cards__item__info'>
            <h5 className='team_cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TeamCardItem;
