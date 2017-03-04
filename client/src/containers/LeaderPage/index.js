import React, { Component, PropTypes } from 'react';

import Leader from '../../components/Leader/';

class LeaderPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="leader-container">
        <Leader />
      </div>
    );
  }
}

export default LeaderPage;
