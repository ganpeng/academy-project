import React, { Component, PropTypes } from 'react';

class ExpertList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="expert-list">
        ExpertList
      </div>
    );
  }
}

export default ExpertList;
