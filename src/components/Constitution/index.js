import React, { Component, PropTypes } from 'react';

class Constitution extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="content-wrapper constitution">
        <h2 className="title">
          <span>章程</span>
        </h2>
        <div className="text">
            这是章程
        </div>
      </div>
    );
  }
}

export default Constitution ;
