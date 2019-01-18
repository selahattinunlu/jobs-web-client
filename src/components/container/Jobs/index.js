import React, { Component, Fragment } from 'react';
import style from './Jobs.module.scss';
import Job from '../../presentational/Job';
import { Subscribe } from 'unstated';
import { jobContainer } from '../../../containers';

export default class Jobs extends Component {
  renderJobs() {
    return jobContainer.state.jobs.map(job => {
      return (
        <Job
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
