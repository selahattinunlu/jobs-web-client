import React, { Component } from 'react';
import { Provider } from 'unstated';

import './style/app.scss';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Provider>
        <Home />
      </Provider>
    );
  }
}

export default App;
