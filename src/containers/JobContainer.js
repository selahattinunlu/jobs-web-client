import React from 'react';
import axios from 'axios';
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
  }

  async getJobs(page = 1) {
    return new Promise((resolve, reject) => {
      const jobs = Object.assign([], this.state.jobs);
      let [startRange, endRange] = [0, 10];

      if (page > 1) {
        startRange = 10 * (page - 1);
        endRange = 10 * page;
      }

      setTimeout(() => {
        this.setState({
          jobs: positions.slice(startRange, endRange),
          totalJobs: positions.length,
          page,
        })
        resolve(true);
      }, 1000);
    });
  }

  async search() {
    const client = axios.create();


    client.get('https://api.airtable.com/v0/appGB6d93mmmaEpEe/Jobs?api_key=keyzczlUZR7b9TLiT')
    //api key d2058f7df7c15bf5c8b648b87aa971f3
    //
  }
}
