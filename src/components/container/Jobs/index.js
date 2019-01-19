import React, { Component, Fragment } from 'react';
import Loader from 'react-loader-spinner';
import style from './Jobs.module.scss';
import Job from '../../presentational/Job';
import Button from '../../presentational/Button';
import { Subscribe } from 'unstated';
import { jobContainer } from '../../../containers';

export default class Jobs extends Component {
  renderJobs() {
    if (jobContainer.state.loading) {
      return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Loader type="Grid" color="#df6f81" height={50} width={50} />
        </div>
      );
    }

    return jobContainer.state.jobs.map(job => {
      return (
        <Job
          id={job.id}
          type={job.type}
          title={job.title}
          company={job.company}
          location={job.location}
          date={job.created_at}
        />
      )
    })
  }

  renderResultDescription() {
    if (jobContainer.state.loading) {
      return;
    }

    return (
      <Fragment>
        Showing <span>{jobContainer.state.jobs.length}</span> jobs
      </Fragment>
    )
  }

  async loadMore() {
    await jobContainer.setState({
      loadingMore: true
    });

    const page = jobContainer.state.page + 1;
    await jobContainer.getJobs(page);

    jobContainer.setState({
      loadingMore: false
    });
  }

  renderLoadMoreButton() {
    const { state } = jobContainer;

    if (state.loading) {
      return;
    }

    if (state.loadingMore) {
      return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
          <Loader type="Oval" color="#df6f81" height={50} width={50} />
        </div>
      )
    }

    if (state.jobs.length >= state.totalJobs) {
      return;
    }

    return (
      <Button
        text={'Load More'}
        style={{marginTop: 30}}
        onClick={this.loadMore.bind(this)}
      />
    );
  }

  render() {
    return (
      <Subscribe to={[jobContainer]}>
        {job => {
          return (
            <div className={style.jobs}>
              <div className="container">
                <div className={style.jobsGrid}>
                  <div className={style.description}>
                    {this.renderResultDescription()}
                  </div>
                  <div className={style.jobBoxes}>
                    {this.renderJobs()}
                    {this.renderLoadMoreButton()}
                  </div>
                  <div className={style.side}>
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
