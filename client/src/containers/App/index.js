import React, { Component, PropTypes } from 'react';

import FrontEnter from '../FrontEnter/';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="app">
        <FrontEnter />
      </div>
    );
  }
}

export default App;
