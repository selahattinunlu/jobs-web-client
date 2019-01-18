import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={style.button}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  onClick: () => {}
}

export default Button;
