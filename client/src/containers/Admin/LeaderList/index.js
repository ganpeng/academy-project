import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getLeaders, deleteLeaderRequest } from '../../../actions/leader';
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
    const { leaders, getLeaders, pagination, deleteLeaderRequest } = this.props;
    const { currentPage, total } = pagination.leaderPagination;
    return (
      <div className="leader-list">
        <LeaderTable dataSource={leaders} deleteLeaderRequest={deleteLeaderRequest} />
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




export default connect(mapStatesToProps, { getLeaders, deleteLeaderRequest })(LeaderList);
