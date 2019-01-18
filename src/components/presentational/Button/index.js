import React from 'react';
import PropTypes from 'prop-types';

import style from './Button.module.scss';

const Button = (props) => {
  console.log('onClick', props);
  return (
    <button onClick={props.onClick} style={props.style} className={style.button}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
}

Button.defaultProps = {
  onClick: () => {},
  style: {}
}

export default Button;
