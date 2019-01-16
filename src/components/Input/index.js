import React from 'react';
import PropTypes from 'prop-types';

import style from './Input.module.scss';

const Input = (props) => {
  return (
    <div>
      <label className={style.label}>{props.labelText}</label>
      <input
        type="text"
        className={style.input}
        value={props.value}></input>
    </div>
  )
};

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
