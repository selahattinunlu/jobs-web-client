import React, { Component, Fragment } from 'react';
import { Subscribe } from 'unstated';
import Header from '../components/presentational/Header';
import Search from '../components/container/Search';
import Jobs from '../components/container/Jobs';

import { jobContainer } from '../containers';

export default class Home extends Component {
  async componentDidMount() {
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
              <Header title={'Engineering Jobs'} />
              <Search />
              {this.renderJobs()}
            </Fragment>
          )
        }}
      </Subscribe>
    )
  }
}
