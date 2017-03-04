import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Leader from '../../components/Leader/';
import { getLeaders } from '../../actions/leader';

class LeaderPage extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };


  render() {
    const { leaders, pagination, getLeaders } = this.props;
    return (
      <div className="leader-container">
        <Leader leaders={leaders} leaderPagination={pagination.leaderPagination}  getLeaders={getLeaders} />
      </div>
    );
  }
}


function mapStatesToProps(state) {
  return {
    leaders: state.leaders,
    pagination: state.pagination
  }
}


export default connect(mapStatesToProps, { getLeaders })(LeaderPage);
