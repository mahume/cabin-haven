import React, { Component, Fragment } from 'react';
import Home from './pages/Home';
import GlobalStyles from './components/globals/GlobalStyles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <Home />
      </Fragment>
    )
  }
}

export default App;
