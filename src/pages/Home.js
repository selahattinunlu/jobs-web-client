import React, { Component, Fragment } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header title={'Engineering Jobs'} />
        <Search />
      </Fragment>
    )
  }
}
