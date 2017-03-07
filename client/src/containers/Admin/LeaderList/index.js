import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getLeaders, deleteLeaderRequest, deleteLeader } from '../../../actions/leader';
import LeaderTable from '../../../components/Admin/LeaderTable/';
import MyPagination from '../../../components/Admin/MyPagination/';

class LeaderList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  componentDidMount() {
    this.props.getLeaders(1);
  }


  render() {
    const { leaders, getLeaders, pagination, deleteLeaderRequest, deleteLeader } = this.props;
    const { currentPage, total } = pagination.leaderPagination;
    return (
      <div className="leader-list">
        <LeaderTable dataSource={leaders} deleteLeaderRequest={deleteLeaderRequest} deleteLeader={deleteLeader} />
        <MyPagination getLeaders={getLeaders} currentPage={currentPage} total={total} />
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




export default connect(mapStatesToProps, { getLeaders, deleteLeaderRequest, deleteLeader })(LeaderList);
