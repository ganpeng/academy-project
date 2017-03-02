import React, { Component, PropTypes } from 'react';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="app">
        App
      </div>
    );
  }
}

export default App;
