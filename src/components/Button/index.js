import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={style.button}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;
