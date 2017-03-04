import React, { Component, PropTypes } from 'react';

class WelcomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="welcome-container">
        WelcomePage
      </div>
    );
  }
}

export default WelcomePage;
