import React, { Component, PropTypes } from 'react';

import ExpertTable from '../ExpertTable/';

class ExpertList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    return (
      <div className="content-wrapper expert-list">
        <h2 className="title">
          <span>专家委员会名单</span>
        </h2>
        <ExpertTable experts={this.props.experts} />
      </div>
    );
  }
}

export default ExpertList;
