import React, { Component, PropTypes } from 'react';

import Welcome from '../../components/Welcome/';

class WelcomePage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <Welcome />
    );
  }
}

export default WelcomePage;
