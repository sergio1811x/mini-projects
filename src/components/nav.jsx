import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const navBar = ['counter', 'modal', 'quiz', 'users', 'converter', 'photos'];

  return (
    <div>
      <div className={'nav'}>
        <span  className={'navText'}>
          <Link  to={'/'}> главная</Link>

        </span>

        {navBar.map((el) => (
          <span className={'navText'}>
            <Link to={el}>{el}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};
