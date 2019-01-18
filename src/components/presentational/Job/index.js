import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './Job.module.scss';

const Job = (props) => {
  return (
    <div className={style.job}>
      <div className={style.workType}>
        {props.type}
      </div>
      <div className={style.title}>
        <Link to={`/job/${props.id}`}>{props.title}</Link> <span>| {props.company}</span>
      </div>
      <div className={style.location}>
        {props.location}
      </div>
      <div className={style.date}>
        {props.date}
      </div>
    </div>
  )
};

Job.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Job;
