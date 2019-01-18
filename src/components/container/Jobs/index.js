import React, { Component, Fragment } from 'react';
import style from './Jobs.module.scss';
import Job from '../../presentational/Job';
import Button from '../../presentational/Button';
import { Subscribe } from 'unstated';
import { jobContainer } from '../../../containers';

export default class Jobs extends Component {
  renderJobs() {
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
    return (
      <Fragment>
        Showing {10 * jobContainer.state.page} of <span>{jobContainer.state.totalJobs}</span> jobs
      </Fragment>
    )
  }

  async loadMore() {
    const page = jobContainer.state.page + 1;
    await jobContainer.getJobs(page);
  }

  renderLoadMoreButton() {
    const { state } = jobContainer;

    if (state.jobs.length >= state.jobs.totalJobs) {
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
