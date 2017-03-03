import React, { Component, PropTypes } from 'react';

class ExpertListPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="expert-list-container">
        ExpertListPage
      </div>
    );
  }
}

export default ExpertListPage;
