import React, { Component, Fragment } from 'react';
import { Subscribe } from 'unstated';
import Jobs from '../components/container/Jobs';

import { jobContainer } from '../containers';

export default class Home extends Component {
  async componentDidMount() {
    if (jobContainer.state.jobs.length !== 0) {
      return;
    }

    await jobContainer.setState({ loading: true });
    await jobContainer.getJobs();
    jobContainer.setState({ loading: false });
  }

  renderJobs() {
    if (jobContainer.state.loading) {
      return null;
    }

    return <Jobs />;
  }

  render() {
    return (
      <Subscribe to={[jobContainer]}>
        {job => {
          return (
            <Fragment>
              {this.renderJobs()}
            </Fragment>
          )
        }}
      </Subscribe>
    )
  }
}
