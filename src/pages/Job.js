import React, { Component, Fragment } from 'react';
import Loader from 'react-loader-spinner';
import { Subscribe } from 'unstated';
import { jobContainer } from '../containers';
import JobComponent from '../components/presentational/Job';

export default class Job extends Component {
  async componentDidMount() {
    await jobContainer.setState({
      loading: true
    });

    const id = this.props.match.params.id;
    await jobContainer.findJob(id);

    jobContainer.setState({
      loading: false
    });
  }

  backToList() {
    this.props.history.goBack();
  }

  renderContent() {
    if (jobContainer.state.loading) {
      return (
        <div style={style.loadingWrapper}>
          <Loader type="Grid" color="#df6f81" height={50} width={50} />
        </div>
      )
    }

    const job = jobContainer.state.job;

    // if (job.hasOwnProperty('id') === false) {
    //   return;
    // }

    return (
      <div style={{ padding: '4rem 0' }}>
        <div style={style.backButton} onClick={this.backToList.bind(this)}>
          Back to list
        </div>

        <div style={{ backgroundColor: '#f8f8f8', padding: '1rem' }}>
          <JobComponent
            id={job.id}
            type={job.type}
            title={job.title}
            company={job.company}
            location={job.location}
            date={job.created_at}
          />
          <div style={style.contentWrapper}>
            <div style={style.content} dangerouslySetInnerHTML={{__html: job.description}}>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Subscribe to={[jobContainer]}>
        {job => {
          return (
            <Fragment>
              <div className="container">
                <div className="layout">
                  <div className="main">
                    {this.renderContent()}
                  </div>
                  <div className="side">
                  </div>
                </div>
              </div>
            </Fragment>
          )
        }}
      </Subscribe>
    )
  }
}

const style = {
  loadingWrapper: {
    marginTop: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  backButton: {
    color: '#df6f81',
    cursor: 'pointer',
    fontSize: '1.2rem',
    marginBottom: 20,
  },
  contentWrapper: {
    padding: '0 1rem',
  },
  content: {
    backgroundColor: '#fff',
    padding: '2rem 1rem',
  }
}
