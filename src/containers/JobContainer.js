import React from 'react';
import { Container } from 'unstated';
import positions from '../positions.json';

export default class JobContainer extends Container {
  state = {
    query: '',
    location: '',
    jobs: [],
    totalJobs: 0,
    job: {},
    page: 1,
    loading: true,
    loadingMore: false,
  }

  async getJobs(page = 1) {
    return new Promise((resolve, reject) => {
      let jobs = Object.assign([], this.state.jobs);
      let [startRange, endRange] = [0, 10];

      if (page > 1) {
        startRange = 10 * (page - 1);
        endRange = 10 * page;
      }

      jobs.push(...positions.slice(startRange, endRange));

      setTimeout(() => {
        this.setState({
          jobs,
          totalJobs: positions.length,
          page,
        })
        resolve(true);
      }, 1000);
    });
  }
}
