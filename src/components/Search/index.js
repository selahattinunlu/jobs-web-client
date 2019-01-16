import React, { Component } from 'react';

import style from './Search.module.scss';

import Input from '../Input';
import Button from '../Button';

export default class Search extends Component {
  render() {
    return (
      <div className={style.search}>
        <div className="container">
          <div className={style.searchGrid}>
            <div className={style.searchInput}>
              <Input
                labelText={'Job Description'}
                value={''} />
            </div>
            <div className={style.searchInput}>
              <Input
                labelText={'Location'}
                value={''} />
            </div>
            <div className={style.searchButton}>
              <Button text={'Search'} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
