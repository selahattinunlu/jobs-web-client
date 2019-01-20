import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import style from './Search.module.scss';

import { jobContainer } from '../../../containers';
import Input from '../../presentational/Input';
import Button from '../../presentational/Button';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      location: ''
    }
  }

  onChangeQuery(event) {
    jobContainer.setState({
      query: event.target.value
    });
  }

  onChangeLocation(event) {
    jobContainer.setState({
      location: event.target.value
    });
  }

  async search() {
    await jobContainer.setState({
      loading: true
    });

    await jobContainer.getJobs();

    await jobContainer.setState({
      loading: false
    });
  }

  render() {
    return (
      <Subscribe to={[jobContainer]}>
        {job => {
          return (
            <div className={style.search}>
              <div className="container">
                <div className={style.searchGrid}>
                  <div className={style.searchInput}>
                    <Input
                      labelText={'Job Description'}
                      value={job.state.query}
                      onChange={this.onChangeQuery.bind(this)}
                    />
                    <Input
                      labelText={'Location'}
                      value={job.state.location}
                      onChange={this.onChangeLocation.bind(this)}
                    />
                  </div>
                  <div className={style.searchButton}>
                    <Button onClick={this.search.bind(this)} text={'Search'} />
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </Subscribe>
    )
  }
}
