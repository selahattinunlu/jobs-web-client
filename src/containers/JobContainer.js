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
      let jobs = [];

      if (this.state.loadingMore) {
        jobs.push(...this.state.jobs);
      }

      let [startRange, endRange] = [0, 10];

      if (page > 1) {
        startRange = 10 * (page - 1);
        endRange = 10 * page;
      }

      let data = Object.assign([], positions);

      if (this.state.location) {
        data = data.filter(job => {
          const re = new RegExp(`^${this.state.location}`, 'gmi');
          return re.exec(job.location);
        });
      }

      if (this.state.query) {
        data = data.filter(job => {
          const re = new RegExp(this.state.query, 'gmi');
          return re.exec(job.title);
        });
      }

      jobs.push(...data.slice(startRange, endRange));

      setTimeout(() => {
        this.setState({
          jobs,
          totalJobs: data.length,
          page,
        })
        resolve(true);
      }, 1000);
    });
  }
}
