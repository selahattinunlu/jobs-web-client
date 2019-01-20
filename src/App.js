import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";

import './style/app.scss';

import Header from './components/presentational/Header';

import Home from './pages/Home';
import Job from './pages/Job';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title={'Engineering Jobs'} />


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/job/:id" component={Job} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
