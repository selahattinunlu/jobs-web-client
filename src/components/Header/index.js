import React from 'react';
import style from './Header.module.scss';

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className="container">
        <h1 className={style.title}>{props.title}</h1>
      </div>
    </div>
  )
}

export default Header;
