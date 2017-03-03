import React, { Component, PropTypes } from 'react';

class LeaderPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="leader-container">
        LeaderPage
      </div>
    );
  }
}

export default LeaderPage;
